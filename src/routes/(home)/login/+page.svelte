<script lang="ts">
    import type { PageProps } from './$types';

    let { form }: PageProps = $props();

    let emailError = $state(!!form?.email);
    let passwordError = $state(!!form?.email);
</script>

<main>
    <form method="POST" action="?/login">
        <img src="/apple-touch-icon.png" alt="Logo" width="60" height="60" />
        <h1>Login to your account</h1>
        <fieldset>
            <label for="email">Email</label>
            <input id="email" name="email" type="email" aria-invalid={emailError} oninput={() => (emailError = false)} />
            {#if emailError}
                <p>{form?.email}</p>
            {/if}
        </fieldset>
        <fieldset>
            <label for="password">Password</label>
            <input id="password" name="password" type="password" aria-invalid={passwordError} oninput={() => (passwordError = false)} />
            {#if passwordError}
                <p>{form?.password}</p>
            {/if}
        </fieldset>
        <button type="submit">Login</button>
    </form>
</main>

<style>
    img {
        align-self: center;
        border: 1px solid #3f3f46;
        border-radius: 10px;
        padding: 5px;
    }
    h1 {
        font-size: x-large;
        text-align: center;
    }
    main {
        display: grid;
        place-items: center;
        height: 100vh;
        width: 100vw;
    }
    form {
        display: flex;
        flex-direction: column;
        gap: 30px;
        border: 1px solid #3f3f46;
        padding: 40px;
        border-radius: 8px;
        width: 400px;
        margin: auto;
    }
    fieldset {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    input {
        padding-right: 15px;
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 10px;
        background-color: #27272a;
        border: 1px solid #3f3f46;
        border-radius: 8px;
    }
    button {
        padding: 10px;
        background-color: #0284c7;
        border: none;
        border-radius: 8px;
        font-size: 16px;
        transition: background-color 0.1s ease;
    }
    button:hover {
        background-color: #0369a1;
    }
    input:focus {
        border-color: #0284c7;
        outline: none;
    }
    p {
        color: #ef4444;
        font-size: 14px;
        margin: 0;
    }
    input[aria-invalid='true'] {
        border-color: #ef4444;
    }
</style>
