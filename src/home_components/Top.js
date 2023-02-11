import React, { useEffect } from 'react'
import { useUserContext } from "../StateProvider";
import '../styles/Top.css'

function Top() {
const [ {selected} ] = useUserContext();

  return (
    <div >
        {selected &&  
            <div className="main_top">
                <img className="playlist_img" src={selected.images[0].url} alt=""/>
                <div className="playlist_info">
                    <h2>{selected.name}</h2>
                    <p>{selected.description}</p>
                </div>
            </div>
        }
    </div>
  )
}

export default Top