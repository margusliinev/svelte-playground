<script lang="ts">
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<main class="grid h-screen w-screen place-items-center">
    <div class="flex flex-col items-center space-y-8">
        <h1 class="text-4xl font-semibold">Svelte Playground</h1>
        <button type="button" onclick={increment} class="cursor-pointer rounded-lg bg-sky-600 px-4 py-2 text-lg transition-colors hover:bg-sky-500">Count is {count}</button>
    </div>
</main>
