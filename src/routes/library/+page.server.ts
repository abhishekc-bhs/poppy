import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

export const load = async () => {

    const fetchProducts = async () => {
        const response = await prisma.bookStore.findMany();
		console.log(response)
        return response
    }

    return {
       products: fetchProducts(),
    }
}
export const actions = {
    register: async({ request }) => {
        const data = await request.formData();
		let book_name = data.get('name');
		let description = data.get('description');
		let price = data.get('price');
		let quantity = data.get('quantity');
        console.log(book_name)
		let body = await prisma.bookStore.create({
			data: {
				book_name: book_name,
				description: description,
				price:parseInt(price),
				copies_available:parseInt(quantity),
                copied_sold:0

			}
		});
        console.log(body)
        return { success: true };
    },
};