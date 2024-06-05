<script>
	export let data;
	const { user } = data;
	import { Button } from '$lib/components/ui/button';
</script>

<div class="flex gap-5 items-center justify-center">
	<h1 class="text-4xl">Hey welcome , {user.username}</h1>
	<form method="POST" action="?/signout">
		<Button type="submit" class="bg-blue-500 p-5">Sign out</Button>
	</form>
</div>
