import { useEffect, useState } from "react";
import React from "react";
function Github(){
    const [data, setData] = useState([])
    useEffect(() => {
     fetch('https://api.github.com/users/anikettikkal')
     .then(response => response.json())
     .then(data => {
        console.log(data);
        setData(data)
     })
    }, [])

    return(
        <>
        <h1 className="text-center m-4 bg-gray-600 text-white
        p-4 text-3xl">{data.login} :- Github Followers:{data.followers}
        <img src={data.avatar_url} alt="" width={200}/></h1>
        </>
    )
}
export default Github