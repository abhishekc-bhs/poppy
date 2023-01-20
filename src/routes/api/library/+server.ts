import { PrismaClient } from '@prisma/client';



export const GET = async() =>{
	const prisma = new PrismaClient();
	let data = await prisma.bookStore.findMany();
	return new Response(JSON.stringify(data))
}

export async function POST({ request }) {
	const body_data = await request.json();
	const prisma = new PrismaClient();
	let response = await prisma.bookStore.create({
		data: {
			book_name: body_data['book_name'],
			description: body_data['description'],
			price: body_data['price'],
			copies_available:body_data['copies_available'],
			copied_sold:0
		}
		});
		console.log(response)
	return new Response(JSON.stringify({ 'message': 'Done!' }));
}