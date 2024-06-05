<script>
	import * as Card from '$lib/components/ui/card';
	import { Label } from '$lib/components/ui/label';
	import { Input } from '$lib/components/ui/input';
	import { Button } from '$lib/components/ui/button';
	export let form;
</script>

<Card.Root class="w-[350px] mx-auto my-40">
	<Card.Header>
		<Card.Title class="text-4xl">Registration</Card.Title>
	</Card.Header>
	{#if form}
		{#if form.error}
			<p class="text-red-500 text-center mb-6">{form.error}</p>
		{/if}
	{/if}
	<Card.Content>
		<form method="POST" action="?/register">
			<div class="grid w-full items-center gap-4">
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Username</Label>
					<Input id="username" name="username" placeholder="Enter your username" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Password</Label>
					<Input id="password" name="password" placeholder="Enter your password" />
				</div>
				<div class="flex flex-col space-y-1.5">
					<Label for="name">Email</Label>
					<Input id="email" name="email" placeholder="Enter your email" />
				</div>
				<div class="flex flex-col space-y-1.5"></div>
			</div>
			<div class="flex flex-col">
				<a href="/login" class="text-sm underline text-sky-500 mb-5"
					>Already have an account? Log in</a
				>
				<Button type="submit">Register</Button>
			</div>
		</form>
	</Card.Content>
</Card.Root>
