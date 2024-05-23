<script>
	import ToolsList from './ToolsList.svelte';

	import Contact from './Contact.svelte';

	import BlogPosts from './BlogPosts.svelte';

	import ServiceList from './ServiceList.svelte';

	import ProjectList from './ProjectList.svelte';

	import TopComponent from './TopComponent.svelte';

	// @ts-nocheck
	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { dragMe } from './dragable';

	
	let animate = false;
	onMount(() => {
		animate = true;
	});

	/**
	 * @type {HTMLElement}
	 */
	let node;
	/**
	 * @type {HTMLElement}
	 */
	let node2;

	/**
	 * @type {HTMLElement}
	 */
	 let node1;

	let correctElement = '#top';
	const compTags = ['#top', '#projects', '#tools', '#service', '#blog', '#contact'];

	const scrollToElement = (/** @type {any} */ selector) => {
		const element = document.querySelector(selector);
		if (!element) return;

		let position = element.getBoundingClientRect().top;
		let offset = position + window.scrollY;

		window.scrollTo({
			top: offset,
			behavior: 'smooth'
		});
	};

	function getNextView() {
		const index = compTags.indexOf(correctElement);
		if (index !== -1 && index + 1 < compTags.length) {
			correctElement = compTags[index + 1];
			scrollToElement(compTags[index + 1]);
		}
		correctElement = correctElement; // If no next item found or correctElement is not in compTags
	}

	function getPrevView() {
		const index = compTags.indexOf(correctElement);
		console.log(compTags[index - 1], index)
		if (index !== -1 && index - 1 >= 0) {
			correctElement = compTags[index - 1];
			scrollToElement(compTags[index - 1]);
		}
		correctElement = correctElement; 
		scrollToElement(correctElement);
		// If no next item found or correctElement is not in compTags
	}
</script>



<section class="overflow-clip">
	{#if animate}
		<IntersectionObserver element={node} let:intersecting>
			<!-- top section -->
			<div>
				<section id="top" class="">
					<TopComponent />
				</section>
				

				<!-- my projects -->
				<IntersectionObserver element={node2} let:intersecting>
					<section id="projects" bind:this={node2} class="pb-6 ">
						<ProjectList {intersecting} />
					</section>
				</IntersectionObserver>
				
				<!-- service list -->
				<IntersectionObserver element={node1} let:intersecting>
					<section id="service" bind:this={node1} class="my-3">
						<ServiceList {intersecting}/>
					</section>
				</IntersectionObserver>

				
				<!-- tools i use -->
				<section id="tools" bind:this={node} class=" overflow-x-clip my-2" >
					<ToolsList {intersecting}  />
				</section>

				
				

				<!-- blog posts -->
				<section id="blog" class="my-3">
					<BlogPosts  />
				</section>

				<!-- Contact -->
				<div id="contact" class="my-3">
					<Contact  />
				</div>

				<div
					use:dragMe
					class="hidden shadow-2xl font-exxtralight robo-font backdrop-blur-sm bg-[#e7e7e787] border-2 text-[#707070] border-[#7c7c7c] rounded-full py-2 px-5 justify-between md:flex w-1/2 md:w-[20%]"
				>
					
					{#if correctElement !== "#top" }
					 	 <button on:click={getPrevView}>Prev</button>
					{/if}
					<div class="h-4 w-1 scale-150">/</div>
					{#if correctElement !=="#contact"}
						
						 <button on:click={getNextView}>Next</button>
					{/if}
				</div>
			</div>
		</IntersectionObserver>
	{/if}
</section>
