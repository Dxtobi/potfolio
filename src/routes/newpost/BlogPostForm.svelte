<script>
	import { fetchFunction } from '$lib/apiCalss';

	//Blog Post
	let topicUrl = '';
	let subtopic = '';
	let mainTopic = '';
	let imageUrl = '';

	async function postToBlog() {
		
		const dto = {
			topic:topicUrl,
			subtopic:subtopic,
			mainTopic:mainTopic,
			img:imageUrl
		};
		const res = await fetchFunction('/api/blog/', dto, 'POST');
		if(res.acknowledged) {
			 topicUrl = '';
			 subtopic = '';
			 mainTopic = '';
			 imageUrl = '';
		}
        console.log(res)
	}
</script>

<div class="logo-font my-3 text-2xl capitalize">new post</div>
<form on:submit|preventDefault={postToBlog}>
	<div class="border-2 border-green-400 my-2 p-2">
		<label class=" ">
			Topic URL:
			<input type="text" bind:value={topicUrl} class="" required/>
		</label>
	</div>

	<div class="border-2 border-green-400 my-2 p-2">
		<label>
			Topic:
			<input type="text" bind:value={mainTopic} required/>
		</label>
	</div>

	<div class="border-2 border-green-400 my-2 p-2">
		<label>
			Subtopic:
			<input type="text" bind:value={subtopic} required/>
		</label>
	</div>

	<div class="border-2 border-green-400 my-2 p-2">
		<label>
			Image:
			<input type="text" bind:value={imageUrl} required/>
		</label>
	</div>
	<button type="submit" class="bg-green-500">Post</button>
</form>

<style>
	label {
		display: block;
		margin-bottom: 10px;
	}

	input {
		width: 100%;
		padding: 5px;
	}

	button {
		margin-top: 10px;
		padding: 8px 24px;
		width: 50%;
		color: white;
		border: none;
		cursor: pointer;
	}
</style>
