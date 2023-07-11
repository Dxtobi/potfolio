<script>
	
	import  Icon  from 'svelte-icons-pack/Icon.svelte';
  
	import { fly, fade, slide } from 'svelte/transition';
	import BiLogoTwitter from "svelte-icons-pack/bi/BiLogoTwitter";
	import AiOutlineMail from "svelte-icons-pack/ai/AiOutlineMail";
	import AiOutlineWhatsApp from "svelte-icons-pack/ai/AiOutlineWhatsApp";
	import AiFillGithub from "svelte-icons-pack/ai/AiFillGithub";
	import AiFillLinkedin from "svelte-icons-pack/ai/AiFillLinkedin";
	
	
	const cont = [{name:AiFillLinkedin, img:AiFillLinkedin, link:'https://www.linkedin.com/in/akanbi-joseph-10783219a/'},
	{name:'twitter', img:BiLogoTwitter, link:'https://twitter.com/programmer_dex'},
	{name:'whatsapp', img:AiOutlineWhatsApp, link:'https://api.whatsapp.com/send?phone=2349064923080&text=Hello%20JAO'},
	{name:'Github', img:AiFillGithub, link:'https://github.com/Dxtobi/'},
	{name:'gmail', img:AiOutlineMail, link:"mailto:akanbijosephtobi@gmail.com?subject=From-Potfolio"}
];
	// export let correctElement
</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[90vh]">
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div class="custom-text">Contact</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[100%] h-[4px] rounded-full bg-[#f8c211]" />
							</div>
						</div>
						<div
							class="grid grid-cols-2 md:grid-cols-4 gap-3 justify-between"
							in:fly={{ x: -200, duration: 9800 }}
						>
						{#each cont as item}
							 <a href={item.link} class="p-4 border-2 flex justify-center items-center  rounded-lg">
								<Icon size={30} alt='' src={item.img} color='gray' />
							 </a>
						{/each}
						
					</div>
					
					</div>
				</section>

