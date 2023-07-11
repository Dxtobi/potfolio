<script>
	
	import RiLogoTwitterFill from "svelte-icons-pack/ri/RiLogoTwitterFill";
	import Icon from 'svelte-icons-pack/Icon.svelte';
	import { fly, fade, slide } from 'svelte/transition';
	import ThemeSwitch from "./ThemeSwitch.svelte";
</script>

<header class='flex justify-between p-3 items-center fixed top-0 left-0 w-full  backdrop-blur z-40' >
	<div transition:fly={{ y: -200, duration: 1000 }} class="font-bold logo-font text-2xl">JAO</div>
	<ThemeSwitch/>
</header>


<!-- echo "# potfolio" >> README.md
git init
git add README.md
git commit -m "first commit"
git branch -M main
git remote add origin https://github.com/Dxtobi/potfolio.git
git push -u origin main -->