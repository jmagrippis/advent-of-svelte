<script lang="ts">
	const links = [
		{name: '👼 Naughty or Nice Tracker 😈', href: '/the-list'},
		{name: '🍪 Merry Munch-o-Meter 🥛', href: '/munch-o-meter'},
		{name: '🛷 Sleigh Load Balancer 🎁', href: '/balancer'},
		{name: '💓 Santa’s Heart Rate Monitor 🎅', href: '/heart-rate-monitor'},
		{name: '🧝 Elf Productivity Dashboard 📈', href: '/dashboard'},
		{name: '⏲️ Mistletoe Metronome 🎊', href: '/metronome'},
		{name: '✉️ Morse Code Translator 📡', href: '/morse'},
		{name: '🃏 Deck of Doubles Memory Game 🂡', href: '/memory-game'},
		{name: '🎄 Countdown 🎊', href: '/countdown'},
		{name: '🎅 Pop-up! 🚀', href: '/popup'},
	]
</script>

<main class="content-grid gap-y-4 text-xl lg:gap-y-8 lg:text-2xl">
	<h1 class="mb-4 text-5xl font-bold">Happy holidays!</h1>
	{#each links as { name, href }}
		<a
			class="decoration-foreground-accent underline transition duration-300 hover:brightness-125"
			{href}
		>
			{name}
		</a>
	{/each}
</main>
