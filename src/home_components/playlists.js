
import React, { useEffect } from 'react'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
  } from 'react-query'
import axios from 'axios'
import {useUserContext } from "../StateProvider";
import '../styles/Sidebar.css'



function Playlists() {
    const queryClient = useQueryClient()

    const [{ user , token }, dispatch] = useUserContext();

    const fetchplaylist = async () => {
        const response = await axios.get('https://api.spotify.com/v1/me/playlists', {
            headers: {
                Authorization: `Bearer ${token}`
            }
        })
        const data = response.data;
        console.log("playlist: ", data)
        return data;
    }
    
    const { isError, isSuccess, isLoading, data, error } = useQuery(['playlists'], fetchplaylist, {staleTime: 60000})


    useEffect(() => {
        console.log(data)
    }, [data])

    if(isLoading){
        return <div>Loading...</div>
    }
    if(isError){
        return <div>Error</div>
    }

  return (
    <div className="list">
        {data && data.items.map((playlist) => {
                    return(
                        <div className="item" key={playlist.id}>
                            <p className='theme'>{playlist.name}</p>
                        </div>
                    )
                })
        }
    </div>
  )
}

export default Playlists