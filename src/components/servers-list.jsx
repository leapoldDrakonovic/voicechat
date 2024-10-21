"use client"

import {useState, useEffect} from "react"


export const ServersList = () => {

  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState(null)
  const [servers, setServers] = useState([])


  const handleConnect = (id) => {
    console.log("ServerConnect" + id);
  }

  useEffect(()=>{
    const fetchServers = async() => {
      try {
        setIsLoading(true)
        const res = await fetch("/api/server/getServers", {method: "GET"})
        const data = await res.json()
        if(res.ok) {
            setServers(data);
        } else {
          setError("Error")
        }
      } catch(e) {
        // statements
        console.log(e);
      } finally {
        setIsLoading(false)
      }
    }

    fetchServers()

  }, [])

  console.log(servers)

   if(isLoading) {
     return <>Loading servers...</>
   }

    return (
      <>
      <ul className="flex flex-row gap-5 h-full w-full flex-wrap justify-around">
        {Array.isArray(servers) && servers.map((el) => {
            return (
                <li onClick={() => handleConnect(el.id)} key={el.id} className="cursor-pointer flex flex-col justify-center items-center">
                    <div className="w-[50px] h-[50px] rounded-full border-2 bg-slate-500"></div>
                    <span className="">{el.name}</span>
                </li>
            );
        })}
      </ul>
      </>
    );
  };




  export const MyServersList = () => {

    const [isLoading, setIsLoading] = useState(false)
    const [error, setError] = useState(null)
    const [servers, setServers] = useState([])
  
  
    const handleConnect = (id) => {
      console.log("ServerConnect" + id);
    }
  
    useEffect(()=>{
      const fetchServers = async() => {
        try {
          setIsLoading(true)
          const res = await fetch("/api/server/get-my-servers", {method: "GET"})
          const data = await res.json()
          if(res.ok) {
              setServers(data);
          } else {
            setError("Error")
          }
        } catch(e) {
          // statements
          console.log(e);
        } finally {
          setIsLoading(false)
        }
      }
  
      fetchServers()
  
    }, [])
  
    console.log(servers)
  
     if(isLoading) {
       return <>Loading servers...</>
     }
  
      return (
        <>
        <ul className="flex flex-row gap-5 h-full w-full flex-wrap justify-around">
          {Array.isArray(servers) && servers.map((el) => {
              return (
                  <li onClick={() => handleConnect(el.id)} key={el.id} className="cursor-pointer flex flex-col justify-center items-center">
                      <div className="w-[50px] h-[50px] rounded-full border-2 bg-slate-500"></div>
                      <span className="">{el.name}</span>
                  </li>
              );
          })}
        </ul>
        </>
      );
    };
  


