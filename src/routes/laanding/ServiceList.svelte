<script>
 
	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	
	const services = [
		{ name: 'web development', disc: 'frontend / backend', img: '/webdev.svg', p:'61+' },
	 { name: 'Business data analysis', disc: '(Excel and PowerBi)', img: '/an.svg', p:'3+' },
	{ name: 'graphic design', disc: 'professional graphic design', img: '/gd.svg', p:'100+' },
	{ name: 'mobil development', disc: 'react native, svelte native', img: '/md.svg', p:'2+' }
];
	
	let animate = false;
	onMount(() => {
		animate = true;
	});

	/**
	 * @type {boolean}
	 */
	 export let intersecting
	 console.log(intersecting)

</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[100vh]">
					<div class="p-2 w-full">
						<div class="my-5 text-2xl w-fit">
							<div class="custom-text">Services</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[20%] h-[4px] rounded-full bg-[#1198f8]" />
								<span class="w-[10%] h-[4px] rounded-full bg-[#f8c211]" />
								<span class="w-[60%] h-[4px] rounded-full bg-[#03910c]" />
							</div>
						</div>
						<div class="grid grid-cols-2 md:grid-cols-3 gap-3 justify-between">
							{#each services as ser, i}
								{#if intersecting}
								<a
								href="/"
								class=" w-full shadow-2xl border border-gray-400 rounded-lg p-3 min-h-[220px] capitalize flex flex-col justify-between"
								transition:fly={{ x: -100, duration:i* 700 }}
								>
									
										<img class="w-12 h-12 object-cover rounded-full p-2 bg-white" src={ser.img} alt="" />
										
											<div>
												<h1 class="text-lg font-bold uppercase">{ser.name}</h1>
												<p class="">
													{ser.disc}
												</p>
											</div>
											<p class="custom-text-2 text-4xl">{ser.p}</p>
										
									
								</a>
								{/if}
							{/each}
						</div>
					</div>
				</section>

