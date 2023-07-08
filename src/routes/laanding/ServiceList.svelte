<script>
 
	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	
	const services = [{ name: 'build websites', disc: 'Web development backend / frontend', img: '/webdevv.png' }, { name: 'Bussiness data analysis', disc: 'lets  boost your business with the power of data analyses (Excel and PowerBi)', img: '/dataanaly.jfif' },{ name: 'graphic design', disc: 'professional graphic design', img: '/graphics.jfif' }];
	
	let animate = false;
	onMount(() => {
		animate = true;
	});

    // export let correctElement

</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[90vh]">
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div>Services</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[20%] h-[4px] rounded-full bg-[#1198f8]" />
								<span class="w-[10%] h-[4px] rounded-full bg-[#f8c211]" />
								<span class="w-[60%] h-[4px] rounded-full bg-[#03910c]" />
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between">
							{#each services as ser, i}
								<a
									href="/"
									class=" w-full shadow-2xl border rounded-t-lg h-fit"
									transition:fly={{ x: -200, duration: 800 }}
								>
									<div class=" w-full  rounded-b-lg">
										<img class="w-full h-full object-cover rounded-t-lg " src={ser.img} alt="" />
										<div
											class=" capitalize bottom-0 left-0 h-1/2 w-full bg-[#000000df] backdrop-blur-[4px] p-2 rounded-b-lg text-white flex flex-col gap-3"
										>
											<h1 class="text-lg font-bold uppercase">{ser.name}</h1>
											<p class="">
												{ser.disc}
											</p>
										</div>
									</div>
								</a>
							{/each}
						</div>
					</div>
				</section>

