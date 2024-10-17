"use server"
import { prisma } from "@/lib/prisma"
import bcrypt from "bcrypt"
import { cookies } from 'next/headers';
import Session from "@/utils/session"
import { NextResponse } from 'next/server';

export const signOut = async() => {
	const session = new Session("session")
	session.clearSession()

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
	
}


export const signUp = async ({username, password, confirmPassword}) => {


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



	return NextResponse.redirect('http://localhost:3000/sing-in')
	
}