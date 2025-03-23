<script lang="ts">
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<main class="grid h-screen w-screen place-items-center">
    <div class="flex flex-col items-center space-y-8">
        <h1 class="text-4xl">Svelte Playground</h1>
        <button onclick={increment} type="button" class="h-12 w-32 cursor-pointer rounded-lg bg-orange-600 text-lg text-zinc-50 transition-colors hover:bg-orange-700">Count is {count}</button>
    </div>
</main>
