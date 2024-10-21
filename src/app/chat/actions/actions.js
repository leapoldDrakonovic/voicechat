import { prisma } from "@/lib/prisma"
import { cookies } from 'next/headers';
import Session from "@/utils/session"

export const createServer = async ({ serverName }) => {

	const session = new Session("session")

    const userId = parseInt(cookies().get("session").value);
	
	
	console.log(userId)
	const existServer = await prisma.Server.findFirst({
		where: { name: serverName }
	})

	if (existServer) {
		throw new Error(`Server with ${serverName} already exist`)
	}



	const newServer = await prisma.Server.create({
		data: {
			name: serverName,
			owner: {
				connect: { id: userId }
			}
		}
	})


	return { newServer }

}


export async function getUserServers () {
	const session = new Session("session")
    const userId = parseInt(cookies().get("session").value);

	if (isNaN(userId)) {
		throw new Error("Invalid userId");
	  }



  console.log(`User ID: ${userId}`);

	const servers = await prisma.Server.findMany({
		where: {
			ownerId: userId
		}
	})


	console.log(servers)

	if (!servers || servers.length === 0) {
		return [];
	  }



	return servers
}