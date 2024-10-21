"use client"

import Session from "@/utils/session"
import {LogOutForm} from "@/components/forms"
import { useState, useEffect } from "react"

const Header = () => {

	const [name, setName] = useState("")

	useEffect(() => {
		// Получаем имя из API или другого источника
		const fetchSessionData = async () => {
		  try {
			const res = await fetch("/api/user/getUser"); 
			const data = await res.json();
			console.log(data.name);
			setName(data.name || "...");
		  } catch (error) {
			console.log(error);
		  }
		};
	
		fetchSessionData();
	  }, []);

	

	return (
		<header className="w-full h-[80px] flex items-center pl-2 pr-2 justify-end absolute">
			<div>
				<div className="flex flex-row items-center justify-center gap-4">
					<span>{name}</span>
					<LogOutForm/>
				</div>
			</div>
		</header>
	)
}


export default Header