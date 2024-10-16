"use client"

import Session from "@/utils/session"
import {LogOutForm} from "@/components/forms"
import { useState, useEffect } from "react"

const Header = () => {

	const [name, setName] = useState("")

	useEffect(() => {

		try {
			const session = new Session("session")
			const name1 = session.getName()
			setName(name1)
		} catch (error) {
			
		} 
	
	}, []);

	

	return (
		<header className="w-full h-[80px] flex items-center pl-2 pr-2 justify-end">
			<div>
				<div className="flex flex-row items-center justify-center gap-4">
					<span>{name ? name : "..."}</span>
					
					<LogOutForm/>
				</div>
			</div>
		</header>
	)
}


export default Header