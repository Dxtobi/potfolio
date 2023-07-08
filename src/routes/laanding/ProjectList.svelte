<script>


// @ts-nocheck

	import Icon from 'svelte-icons-pack/Icon.svelte';
	import AiOutlineLink from 'svelte-icons-pack/ai/AiOutlineLink';
	import AiFillGithub from 'svelte-icons-pack/ai/AiFillGithub';
	import { fly, fade, slide } from 'svelte/transition';
	
	
	const arrOb = [{app:"https://codehunters.vercel.app/", name:"CodeHunters", disc:'A developers website were one can put bounty on bugs', img:'https://pbs.twimg.com/media/F0ipvOfX0AAevdx?format=jpg&name=small'},
	 {app:"https://sumerizer.vercel.app/", name:"ShortMan", disc:'An AI article summarizer for turning long text into shorter texts', img:'https://pbs.twimg.com/media/Fzs4ZnWWAAAC_pq?format=jpg&name=medium'},
	{app:"https://emartsales.vercel.app/", name:"emartsales", disc:'(DEMO) An E-commerce website were buyers can contact sellers before purchasing the product',img:'https://pbs.twimg.com/media/Frh-6heX0AEpm6k?format=png&name=small'},
	 {app:"https://cardsio.vercel.app/", name:"cardsio", disc:'A uni profile website', img:'https://pbs.twimg.com/media/FpQ1Tv5WcAAWZIO?format=jpg&name=900x900'},
	 {app:"https://bigsalesmix.web.app/", name:"bigsalesmix", disc:'(DEMO) A shop front for a heir collection mobil view only', img:'https://pbs.twimg.com/media/F0dBU27WYBwDWXY?format=jpg&name=medium'},
	 {app:"https://twiwi.vercel.app", name:"twiwi", disc:'An AI for turning twits into pictures and more', img:'https://pbs.twimg.com/media/FmuftnRWIAEkuwn?format=jpg&name=small'},
	];
	// export let correctElement
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
									href={ob.app}
									class="h-[30vh] w-full shadow-2xl border rounded-lg border-[#f8c211]"
									in:fly={{ x: i*-200, duration: i * 1000 }} >
									<div class="h-full w-full relative rounded-lg">
										<img class="w-full h-full object-cover rounded-lg" src={ob.img} alt="" />
										<div
											class=" absolute bottom-0 left-0 h-full w-full bg-[#000000d5] p-2 rounded-lg text-white flex flex-col gap-3 justify-end"
										>
											<h1 class="text-lg font-bold capitalize">{ob.name}</h1>
											<p class=" line-clamp-2">
											{ob.disc}
											</p>
											<div class="flex gap-2 items-end justify-between text-sm">
												<a href="https://github.com/dxtobi" target="_blank" class="flex items-center gap-1"
													><Icon src={AiFillGithub} size={'30'} color="white" />Get Code</a
												>
												<a href={ob.app} target="_blank" class="flex items-center gap-1"
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

