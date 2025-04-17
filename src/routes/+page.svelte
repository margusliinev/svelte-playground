<script lang="ts">
    let count = $state(0);

    function increment() {
        count += 1;
    }
</script>

<main>
    <div>
        <h1>Svelte Playground</h1>
        <button type="button" onclick={increment}>Count is {count}</button>
    </div>
</main>

<style>
    main {
        display: grid;
        height: 100vh;
        width: 100vw;
        place-items: center;
    }

    div {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 2rem;
    }

    h1 {
        font-size: 2.5rem;
        font-weight: 600;
    }

    button {
        cursor: pointer;
        border-radius: 0.5rem;
        background-color: #3b82f6;
        padding: 0.5rem 1rem;
        font-size: 1.125rem;
        transition: background-color 0.3s ease;
    }
</style>
