
import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { useUserContext } from "../StateProvider";
import '../styles/Sidebar.css'



function Playlists() {
    const [{ token}, dispatch] = useUserContext();

    const fetchplaylist = async () => {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        console.log("playlist: ", data)
        dispatch({
            type: "SET_PLAYLISTS",
            playlists: data.items,
        });
        return data;
    }
    
    const { isError, isLoading, data } = useQuery(['playlists'], fetchplaylist, {staleTime: 60000})

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error</div>
    }

    const focusplaylist = (playlist) => {
        return () => {
            dispatch({
                type: "SET_SELECTED",
                selected: playlist,
            });
        }
    }
    

    return (
            <div className="list">
                {data && data.items.map((playlist) => {
                            return(
                                <div className="itemplaylist item" key={playlist.id} onClick={focusplaylist(playlist)}>
                                    <p className='theme'>{playlist.name}</p>
                                </div>
                            )
                        })
                }
            </div>
          )
}

export default Playlists