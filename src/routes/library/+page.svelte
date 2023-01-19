<script lang="ts">
	let name: any;
	let description: any;
	let price: any;
	let quantity: any;
	export let data;
	const { products } = data;

</script>

<div class="py-6 sm:py-8 lg:py-12 my-10">
	<div class="max-w-screen-xl px-4 md:px-8 mx-auto">
		<!-- text - start -->
		<div class="mb-10 md:mb-16">
			<h2 class="text-gray-800 text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">Library</h2>

			<p class="max-w-screen-md text-gray-500 md:text-lg text-center mx-auto">
				This is a section of some simple filler text, also known as placeholder text. It shares some
				characteristics of a real written text but is random or otherwise generated.
			</p>
		</div>
		<!-- text - end -->

		<div class="grid sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-8 sm:gap-12 xl:gap-16">
			{#each products as product}
				<div
					class="flex flex-col md:flex-row items-center gap-4 lg:gap-6 bg-white p-4 shadow-lg rounded-2xl"
				>
					<a
						href="#"
						class="group w-full md:w-24 lg:w-40 h-56 md:h-24 lg:h-40 block self-start shrink-0 bg-gray-100 overflow-hidden rounded-lg shadow-lg relative"
					>
						<img
							src="https://images.unsplash.com/photo-1587651936032-a76d83a485e8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=779&q=80"
							loading="lazy"
							alt="Photo by Minh Pham"
							class="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
						/>
					</a>
					<div class="flex flex-col gap-2">
						<span class="text-gray-400 text-sm">{product.created_at}</span>

						<h2 class="text-gray-800 text-xl font-bold">
							<a
								href="#"
								class="hover:text-indigo-500 active:text-indigo-600 transition duration-100"
								>{product.book_name}</a
							>
						</h2>

						<p class="text-gray-500">
							{product.description}
						</p>

						<div>
							<a
								href="#"
								class="focus:outline-none text-white bg-green-700 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 dark:focus:ring-green-800"
								>Buy Now at ${product.price}</a
							>
						</div>
					</div>
				</div>
			{/each}
		</div>
	</div>
</div>

<form action="?/register" method="post">
	<div class="mb-6">
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Book Name</label
		>
		<input
			type="text"
			name="name"
			id="email"
			bind:value={name}
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Subtle"
			required
		/>
	</div>
	<div class="mb-6">
		<label for="email" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Description</label
		>
		<input
			type="text"
			id="email"
			bind:value={description}
			name="description"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			placeholder="Subtle"
			required
		/>
	</div>
	<div class="mb-6">
		<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Price</label
		>
		<input
			type="number"
			id="password"
			bind:value={price}
			name="price"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			required
		/>
	</div>
	<div class="mb-6">
		<label for="password" class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
			>Quantity</label
		>
		<input
			type="number"
			id="password"
			bind:value={quantity}
			name="quantity"
			class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
			required
		/>
	</div>
	<button
		type="submit"
		class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
		>Add New Book</button
	>
</form>
