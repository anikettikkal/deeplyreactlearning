import React from "react"


function Card({username, para}) {
    console.log(username);
    
    return (
        <>
            <div className="max-w-xs p-6 m-4 rounded-xl shadow-md bg-black">
                <img
                    src="https://m.media-amazon.com/images/I/51jeuNZnSIL.jpg"
                    alt=""
                    className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
                />
                <div className="mt-6 mb-2">
                    <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                        Title
                    </span>
                    <h2 className="text-xl font-semibold tracking-wide">{username}</h2>
                </div>
                <p className="text-gray-300">
                    {para}
                </p>
            </div>
        </>
    )
}

export default Card