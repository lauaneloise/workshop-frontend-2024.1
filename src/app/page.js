/* eslint-disable @next/next/no-img-element */
/* eslint-disable jsx-a11y/alt-text */
'use client'
import { useEffect, useState } from "react";
import Link from "next/link";


export default function Home() {

  const [data, setData] = useState([])
  const [search, setSearch] = useState("")
  useEffect(() => {
    fetch(
      'https://api.tvmaze.com/shows'
    )
    .then((response) => response.json())
    .then((data) => setData(data))
    .catch((error) => console.log('error', error))
  }, [])

  console.log(data)

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-black">
      <link rel="stylesheet" type="text/css" href="css/style.css"></link>
      
     <div class="netflix"></div>
       <input type="text" onChange={(e) => setSearch(e.target.value)}></input>
      <div className="flex flex-row flex-wrap justify-around gap-10 py-8 w-1/4">
      {data.filter((item) => item.name.toLowerCase().includes(search.toLowerCase()))
      .map((item) => (
        <div key = {item.id} className="flex flex-col gap-y-5">
           
          <h2 className="py-5 bg-red-950 text-white font-bold text-xl rounded-xl text-center">{item.name}</h2>
          <img src = {item.image.original} className="rounded-lg"/>
          <p className= "text-white text-center font-bold text-base">Avaliação: {item.rating.average}</p>
          <p className="text-white text-center font-bold text-base">Data de lançamento: {item.premiered}</p>
        </div>
    
        
      ))}
      </div>
    </main>
  );
}