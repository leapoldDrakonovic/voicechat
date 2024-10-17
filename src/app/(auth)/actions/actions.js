"use server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { cookies } from 'next/headers';
import { redirect } from "next/navigation";
import Session from "@/utils/session"

export const signOut = async() => {
	const session = new Session("session")
	session.clearSession()

	return redirect('/sing-in')
}


export const signIn = async ({username, password}) => {

	console.log(username, password)

	const user = await prisma.User.findFirst({
		where: { name: username }
	})


	if (!user) {
		throw new Error('User not found');
	}

	console.log(user.password)

	const isPasswordCorrect = await bcrypt.compare(password, user.password);
	if (!isPasswordCorrect) {
		throw new Error('Incorrect Password');
	}


	// todo
	// finish work with session 

	const session = new Session("session")
	session.createSession(user.name)
	return redirect("/")
}


export const signUp = async (username, password, confirmPassword) => {


	if (password !== confirmPassword) {
		throw new Error('Passwords do not match');
	}


	const existingUser = await prisma.User.findFirst({
		where: { name: username }
	})

	if (existingUser) {
		throw new Error("User already exist")
	}

	const hashedPassword = await bcrypt.hash(password, 10); 


	const newUser = await prisma.User.create({
		data: {
			name: username,
			password: hashedPassword,
		},
	});


	return redirect("/sing-in")
	
}