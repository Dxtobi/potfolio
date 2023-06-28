<script>


// @ts-nocheck

	import { fly, fade, slide } from 'svelte/transition';
	

    /**
	 * @type {boolean}
	 */
     export let intersecting = false
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

	
	

 
	
</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[90vh]" >
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div>Recently Used</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[50%] h-[4px] rounded-full bg-[#1198f8]" />
								<span class="w-[20%] h-[4px] rounded-full bg-[#f8c211]" />
								<span class="w-[30%] h-[4px] rounded-full bg-[#03910c]" />
							</div>
						</div>
						
						<div class="flex flex-wrap justify-between items-start gap-3 w-full" >
							{#each icns as icn, i}
							{#if intersecting}
								<div
									transition:fly={{ x: 100, duration: i * 1000 }}
									class=" shadow-2xl border border-blue-500 py-3 rounded-sm w-[25vw] md:w-[20%] flex flex-col items-center gap-2"
								>
									<div><img width="48" height="48" alt="" src={icn.icon} /></div>
									<div class="capitalize">{icn.name}</div>
								</div>
								{/if}
							{/each}
						</div>
						
					</div>
				</section>

