<script>
	import ToolsList from './ToolsList.svelte';

	import Contact from './Contact.svelte';

	import BlogPosts from './BlogPosts.svelte';

	import ServiceList from './ServiceList.svelte';

	import ProjectList from './ProjectList.svelte';

	import TopComponent from './TopComponent.svelte';

	// @ts-nocheck

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineLink from 'svelte-icons-pack/ai/AiOutlineLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import { fly, fade, slide } from 'svelte/transition';
	import { onMount, afterUpdate } from 'svelte';
	import IntersectionObserver from 'svelte-intersection-observer';
	import { dragMe } from './dragable';

	const arrOb = [1, 1, 1, 1, 1, 1];
	const services = [
		{ name: 'build websites', disc: 'Web development backend / frontend', img: '/webdevv.png' },
		{
			name: 'Bussiness data analysis',
			disc: 'lets  boost your business with the power of data analyses (Excel and PowerBi)',
			img: '/dataanaly.jfif'
		},
		{ name: 'graphic design', disc: 'professional graphic design', img: '/graphics.jfif' }
	];
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

	const cont = [
		{
			name: 'Linkedin',
			img: '/linkedin.gif',
			link: 'https://www.linkedin.com/in/akanbi-joseph-10783219a/'
		},
		{ name: 'twitter', img: '/twitter.gif', link: 'https://twitter.com/programmer_dex' },
		{
			name: 'whatsapp',
			img: '/whatsapp.gif',
			link: 'https://api.whatsapp.com/send?phone=2349064923080&text=Hello%20JAO'
		},
		{ name: 'Linkedin', img: '/github.gif', link: 'https://github.com/Dxtobi/' }
	];
	let animate = false;
	onMount(() => {
		animate = true;
	});

	/**
	 * @type {HTMLElement}
	 */
	let node;

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

<svelte:head>
	<title>WELCOME PAGE FOR TOBI-JAO</title>
	<meta name="description" content="Discover a captivating portfolio website showcasing a collection of exceptional work. Explore the creative vision and artistic talent of TOBi-JAO" />
</svelte:head>

<section class="overflow-clip">
	{#if animate}
		<IntersectionObserver element={node} let:intersecting>
			<!-- top section -->
			<div>
				<section id="top">
					<TopComponent {correctElement}/>
				</section>

				<!-- my projects -->
				<section id="projects" class="mb-6">
					<ProjectList  {correctElement}/>
				</section>

				<!-- tools i use -->
				<section id="tools" bind:this={node} class="bg-blue-400 min-h-screen overflow-x-clip">
					<ToolsList {intersecting}  />
				</section>

				<!-- service list -->
				<section id="service">
					<ServiceList  {correctElement}/>
				</section>

				<!-- blog posts -->
				<section id="blog">
					<BlogPosts  {correctElement}/>
				</section>

				<!-- Contact -->
				<div id="contact">
					<Contact  {correctElement}/>
				</div>

				<div
					use:dragMe
					class=" shadow-2xl font-exxtralight robo-font backdrop-blur-sm bg-[#e7e7e787] border-2 text-[#707070] border-[#7c7c7c] rounded-full py-2 px-5 justify-between flex w-1/2 md:w-[20%]"
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
