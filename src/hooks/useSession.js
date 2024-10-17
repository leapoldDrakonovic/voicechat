
"use client"

/*
Возвращать активна сессия или нет
Возвращать имя в сессии

*/


import {useState, useEffect} from "react"

const useSession = () => {

const [name, setName] = useState("")
const [isLoading, setIsLoading] = useState(false)
const [error, setError] = useState(null)
const [isSession, setIsSession] = useState(null)



  useEffect(() => {
    const fetchSessionData = async () => {
      try {
      	setIsLoading(true)
        const res = await fetch("/api/auth/session");
        const data = res.json()
        if (res.ok) {
          setIsSession(true);
          setName(data.name)
        } else {
          setIsSession(false);
        }
      } catch (error) {
        setError(error)
      } finally {
      	setIsLoading(false)
      }
    };

    fetchSessionData();
  }, []);


  return {name, isSession, isLoading, error}

}

export default useSession