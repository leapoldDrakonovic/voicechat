import {createServer} from "@/app/chat/actions/actions"
import {NextResponse} from "next/server"


export async function POST(req, res) {
	if (req.method === 'POST') {
		try {
			console.log('API create server called');

			const body = await req.json()
			const {serverName} = body

			if(!serverName) {
				res.json({message: "Server name doesnt exist"}).status(500)
			}

			await createServer({serverName});

			return NextResponse.json({ message: "Success" }, { status: 200 });
		} catch (error) {
			console.log(error)
		}
	} else {
		return NextResponse.json({ message: "Method not allowed" }, { status: 405 });

	}
}