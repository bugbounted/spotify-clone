import React, {useEffect} from 'react'
import '../styles/Body.css'
import { useUserContext } from "../StateProvider";
import Top from './Top';


function Body() {
  const [ {selected} ] = useUserContext();

  useEffect(() => {
    console.log("body")
    console.log(selected)
    console.log("body")
  }, [selected])

  return (
    <div className='main_body'>
      <Top/>
    </div>
  )
}

export default Body