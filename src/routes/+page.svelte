<script lang="ts">
</script>

<main>
    <div>
        <h1>Svelte Playground</h1>
        <nav>
            <a href="/login">Login</a>
            <a href="/register">Register</a>
        </nav>
    </div>
</main>

<style>
    main {
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100vw;
    }
    div {
        display: flex;
        flex-direction: column;
        gap: 2rem;
    }
    h1 {
        font-size: 2.25rem;
        font-weight: 500;
        text-align: center;
        color: #38bdf8;
    }
    nav {
        display: flex;
        gap: 2rem;
        justify-content: center;
    }
    a {
        text-decoration: underline;
        font-size: 1.125rem;
    }
    a:hover {
        color: #7dd3fc;
        transition: color 0.2s ease;
    }
</style>
