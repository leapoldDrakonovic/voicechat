
import {Button} from "@/components/ui/buttons"
import Session from "@/utils/session"
import {LogOutForm} from "@/components/forms"

const Header = async() => {
	const session = new Session("session") 
	const name = await session.getName()




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