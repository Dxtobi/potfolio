<script>
	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	const icns = [
		{ name: 'nest js', icon: 'https://img.icons8.com/color/48/nestjs.png' },
		{
			name: 'next js',
			icon: 'https://seeklogo.com/images/N/next-js-logo-7929BCD36F-seeklogo.com.png'
		},
		{ name: 'express js', icon: 'https://img.icons8.com/office/16/express-js.png' },
		{ name: 'react', icon: 'https://img.icons8.com/clouds/100/react.png' },
		{
			name: 'sveltekit',
			icon: 'https://upload.wikimedia.org/wikipedia/commons/1/1b/Svelte_Logo.svg'
		},
		{ name: 'firebase', icon: 'https://img.icons8.com/color/48/google-firebase-console.png' },
		{ name: 'mongodb', icon: 'https://img.icons8.com/color/48/mongodb.png' },
		{ name: 'postgresql', icon: 'https://img.icons8.com/plasticine/100/postgreesql.png' },
		{ name: 'photoshop', icon: 'https://img.icons8.com/bubbles/50/adobe-photoshop.png' },
		{ name: 'AI', icon: 'https://img.icons8.com/arcade/64/ai.png' },
		{ name: 'excel', icon: 'https://img.icons8.com/color/48/microsoft-excel-2019--v1.png' },
		{ name: 'powerBi', icon: 'https://img.icons8.com/color/48/power-bi.png' }
	];

	let animate = false;
	onMount(() => {
		animate = true;
	});

    
    export let correctElement
</script>

<section
	class="w-full md:w-[70%] m-auto grid md:place-items-center py-20 h-[120vh] md:min-h-[95vh]"
>
	<div>
		<div class="p-5 capitalize font-bold md:text-center">
			<h1 transition:fly={{ y: -200, duration: 1000 }} class="text-lg">Joseph Akanbi oluwatobi</h1>
			<h2 class="font-bold" transition:fly={{ x: -200, duration: 850 }}>portfolio</h2>
		</div>
		<div class="grid grid-cols-1 md:grid-cols-2 gap-2 p-5">
			<div class="grid gap-4 mb-20 md:mb-0">
				<h3 class="font-bold text-2xl" transition:fade={{ duration: 760 }}>
					Software Dev and Data analyst
				</h3>
				<p class="text-start" transition:fly={{ x: -200, duration: 800 }}>
					Experienced software developer and data analyst with background in web development,
					software proficiency, and business analytics using Excel.
				</p>
				<button
					class="rounded-full shadow-2xl py-1 px-10 text-white bg-gradient-to-r from-blue-500 to-blue-300 w-fit"
					transition:slide={{ duration: 880 }}>Get My CV</button
				>
			</div>
			<div
				class="w-full h-full my-4 md:my-auto rounded-2xl relative flex justify-center items-center"
				transition:slide={{ axis: 'y', duration: 300 }}
			>
				<img
					src="/boy.png"
					alt=""
					class="m-auto absolute imge-rotate imrot"
					transition:fly={{ y: 200, duration: 900 }}
				/>
				<div
					class="javascript-class logo-font rounded-full py-1 px-10 left-1 md:-bottom-[3rem] -bottom-[4rem] hover:shadow-none"
					transition:fly={{ x: -200, duration: 1000 }}
				>
					JavaScript
				</div>
				<div
					class="node-class logo-font rounded-full py-1 px-10 right-1 md:-bottom-[6rem] -bottom-[10rem] hover:shadow-none"
					transition:fly={{ x: 200, y: 30, duration: 3000 }}
				>
					NodeJS
				</div>
				<div
					class="css-class logo-font rounded-full py-1 px-10 right-3 -top-[2rem] hover:shadow-none"
					transition:fly={{ x: -200, duration: 4000 }}
				>
					CSS
				</div>
			</div>
		</div>
	</div>
</section>
