<script>


// @ts-nocheck

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineLink from 'svelte-icons-pack/ai/AiOutlineLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import { fly, fade, slide } from 'svelte/transition';
	
	
	const arrOb = [1, 1, 1, 1];
	export let correctElement
</script>

<section class="w-full md:w-[70%] m-auto grid  md:place-items-center min-h-[100vh]" >
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div>Projects</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[20%] h-[4px] rounded-full bg-[#1198f8]" />
								<span class="w-[50%] h-[4px] rounded-full bg-[#f8c211]" />
								<span class="w-[30%] h-[4px] rounded-full bg-[#03910c]" />
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-3 w-full justify-between" >
							{#each arrOb as ob, i}
								
								<a
									href="/"
									class="h-[30vh] w-full shadow-2xl border rounded-lg border-[#f8c211]"
									in:fly={{ x: i*-200, duration: i * 1000 }} >
									<div class="h-full w-full relative rounded-lg">
										<img class="w-full h-full object-contain" src="/favicon.png" alt="" />
										<div
											class=" absolute top-0 left-0 h-full w-full bg-[#000000df] p-2 rounded-lg text-white flex flex-col gap-3 justify-end"
										>
											<h1 class="text-lg font-bold">Demo name</h1>
											<p class=" line-clamp-2">
												Working On This
											</p>
											<div class="flex gap-2 items-end justify-between text-sm">
												<a href="/" target="_blank" class="flex items-center gap-1"
													><Icon src={AiFillGithub} size={'30'} color="white" />Get Code</a
												>
												<a href="/" target="_blank" class="flex items-center gap-1"
													><Icon src={AiOutlineLink} size={'30'} color="white" />View app</a
												>
											</div>
										</div>
									</div>
								</a>
								
							{/each}
						</div>
					</div>
				</section>

