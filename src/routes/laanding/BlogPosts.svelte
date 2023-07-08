<script>

	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';


	const arrOb = [1, 1, 1, 1];
	
	let animate = false;
	onMount(() => {
		animate = true;
	});

	// export let correctElement

	/**
	 * @type {HTMLElement}
	 */
	let node;
</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[90vh]">
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div>Archived Blog Post</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[100%] h-[4px] rounded-full bg-[#707070]" />
							</div>
						</div>
						<div class="grid grid-cols-1 md:grid-cols-3 gap-3 justify-between">
							{#each arrOb as ob, i}
							No blog post yet
								<!-- <a
									href="/"
									class=" shadow-lg border border-[#707070] rounded-lg w-full my-5"
									in:fly={{ x: -200, duration: 9800 }}
								>
									<div class="  rounded-lg flex items-center">
										<img class="w-[40px] h-[40px] object-contain" src="/favicon.png" alt="" />
										<div class="  p-2 rounded-lg flex flex-col gap-1 items-start">
											<h1 class=" font-bold uppercase">Blog Post Title</h1>
											<p class=" line-clamp-1 text-center">
												Project all abou this and that and maby other things and a lot with some
												other things inclusive
											</p>
										</div>
									</div>
								</a> -->
							{/each}
						</div>
					</div>
				</section>

