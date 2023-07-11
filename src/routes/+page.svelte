<script>
	import Landing from "./laanding/Landing.svelte";


	export let data;
	//console.log(data)
</script>

<svelte:head>
	<title>JAO</title>
	<meta name="title" content="Joseph Akanbi Oluwatobi">
	<meta name="description" content="Discover a captivating portfolio website showcasing a collection of exceptional work. Explore the creative vision and artistic talent of a TOBi-JAO ">

	<!-- Open Graph / Facebook -->
	<meta property="og:type" content="website">
	
	<meta property="og:title" content="Joseph Akanbi Oluwatobi">
	<meta property="og:description" content="Discover a captivating portfolio website showcasing a collection of exceptional work. Explore the creative vision and artistic talent of a TOBi-JAO">
	<meta property="og:image" content="https://i.pinimg.com/564x/75/46/30/7546306dbc194f5b555c3ff6cf44a91b.jpg">

	<!-- Twitter -->
	<meta name="twitter:card" content="summary_large_image">
	<meta name="twitter:title" content="">
	<meta name="twitter:description" content="Discover a captivating portfolio website showcasing a collection of exceptional work. Explore the creative vision and artistic talent of TOBi-JAO">
	<meta name="twitter:image" content="https://i.pinimg.com/564x/75/46/30/7546306dbc194f5b555c3ff6cf44a91b.jpg">
</svelte:head>

<section class="">
	<Landing/>
</section>

