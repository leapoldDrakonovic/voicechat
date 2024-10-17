import {getUserServers} from "@/app/chat/actions/actions"
import {NextResponse} from "next/server"


export async function GET(req, res) {
	if (req.method === 'GET') {
		try {
			console.log('API get user servers called');

			const servers = await getUserServers();

	

			return NextResponse.json( servers , { status: 200 });
		} catch (error) {
			console.log(error)
		}
	} else {
		return NextResponse.json({ message: "Method not allowed" }, { status: 405 });

	}
}