import React, {useEffect} from 'react'
import '../styles/Body.css'
import { useUserContext } from "../StateProvider";
import Top from './Top';
import Bottom from './Bottom';


function Body() {
  const [ {selected} ] = useUserContext();

  useEffect(() => {
    console.log("body")
    console.log(selected)
    console.log("body")
  }, [selected])

  return (
    <div className='main_body'>
      <Top className="top"/>
      <Bottom className="bottom"/>
    </div>
  )
}

export default Body