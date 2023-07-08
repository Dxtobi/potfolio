<script>
	import { fetchFunction } from '$lib/apiCalss';

	//PROJECTS
	let projectName = '';
	let projectDetails = '';
	let projectUrl = '';

	async function newProjects() {
		const data = {
			projectName,
			projectDetails,
			projectUrl
		};
		const res = await fetchFunction('api/projects/posts', data, 'POST');
	}
</script>

<div class="logo-font my-3 text-2xl capitalize">Project</div>
<form on:submit|preventDefault={newProjects}>
	<div class="border-2 border-purple-400 my-2 p-2">
		<label>
			Project Name:
			<input type="text" bind:value={projectName} />
		</label>
	</div>
	<div class="border-2 border-purple-400 my-2 p-2">
		<label>
			ImgUrl:
			<input type="text" bind:value={projectUrl} />
		</label>
	</div>

	<div class="border-2 border-purple-400 my-2 p-2">
		<label>
			More details:
			<input type="text" bind:value={projectDetails} />
		</label>
	</div>

	<button type="submit" class="bg-purple-500">Add Project</button>
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
