<script>
  
	import { fly, fade, slide } from 'svelte/transition';

	
	
	const cont = [{name:'Linkedin', img:'/linkedin.gif', link:'https://www.linkedin.com/in/akanbi-joseph-10783219a/'},
	{name:'twitter', img:'/twitter.gif', link:'https://twitter.com/programmer_dex'},
	{name:'whatsapp', img:'/whatsapp.gif', link:'https://api.whatsapp.com/send?phone=2349064923080&text=Hello%20JAO'},
	{name:'Linkedin', img:'/github.gif', link:'https://github.com/Dxtobi/'}];
	export let correctElement
</script>

<section class="w-full md:w-[70%] m-auto grid place-items-center min-h-[90vh]">
					<div class="p-5 w-full">
						<div class="my-5 text-2xl w-fit">
							<div>Contact</div>
							<div class="w-full flex gap-3 my-2">
								<span class="w-[100%] h-[4px] rounded-full bg-[#f8c211]" />
							</div>
						</div>
						<div
							class="grid grid-cols-2 md:grid-cols-4 gap-3 justify-between"
							in:fly={{ x: -200, duration: 9800 }}
						>
						{#each cont as item}
							 <a href={item.link} class="p-4 border-2 flex justify-center items-center border-[#f8c211] rounded-lg">
								<img width="100" height="100" alt='' src={item.img} />
							 </a>
						{/each}
						
					</div>
					<a href="mailto:akanbijosephtobi@gmail.com?subject=From-Potfolio" class="flex justify-around my-3 items-center gap-3 border-2 border-[#f8c211] w-full " >
						<div class="text-2xl">GMAIL</div> <img width="100" height="100" alt='' src={'/gmail.gif'} />
					</a>
					</div>
				</section>

