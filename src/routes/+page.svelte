<script lang="ts">
    import type { PageProps } from './$types';

    let { form }: PageProps = $props();

    let isNameError = $state(!!form?.name);
    let isEmailError = $state(!!form?.email);
</script>

<main>
    <form method="POST" action="?/register">
        <h1>Create an account</h1>
        <fieldset>
            <label for="name">Name</label>
            <input id="name" type="text" name="name" placeholder="John Doe" aria-invalid={isNameError} oninput={() => (isNameError = false)} />
            {#if isNameError}
                <p>{form?.name}</p>
            {/if}
        </fieldset>
        <fieldset>
            <label for="email">Email</label>
            <input id="email" type="email" name="email" placeholder="johndoe@gmail.com" aria-invalid={isEmailError} oninput={() => (isEmailError = false)} />
            {#if isEmailError}
                <p>{form?.email}</p>
            {/if}
        </fieldset>
        <button type="submit">Submit</button>
    </form>
</main>

<style>
    h1 {
        font-size: large;
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
