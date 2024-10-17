import { prisma } from "@/lib/prisma"
import { cookies } from 'next/headers';
import Session from "@/utils/session"

export const createServer = async ({ serverName }) => {

	const session = new Session("session")
	const userName = session.getName()

	console.log(userName)
	const existServer = await prisma.Server.findFirst({
		where: { name: serverName }
	})

	if (existServer) {
		throw new Error(`Server with ${serverName} already exist`)
	}



	const user = await prisma.User.findFirst({
		where: { name: userName }
	})

	if (!user) {
		throw new Error("User not found")
	}

	const newServer = await prisma.Server.create({
		data: {
			name: serverName,
			owner: {
				connect: { id: user.id }
			}
		}
	})


	return { newServer }

}


export async function getUserServers () {
	const session = new Session("session")
	const userName = session.getName()
	console.log(userName)



	const user = await prisma.User.findFirst({
		where: {name: userName}
	})

	console.log(user)

	const servers = await prisma.Server.findMany({
		where: {
			ownerId: user.id
		}
	})

	console.log(servers)
	if(!servers) {
		return 
	}

	return servers
}