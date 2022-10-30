<script>
    async function getLanguage() {
        let response = await fetch('/CSharp.json');
        let languageInfo = await response.json();
        console.log(languageInfo.input);
        return languageInfo;
    }
    const promise = getLanguage();
</script>

<section id="languageContainer">
    <div id="language">
        {#await promise}
            <h1>Loading...</h1>
        {:then language}
            {#each language.data as languageData}
                <h1>{languageData.name}</h1>
                <code>{languageData.code}</code>
                <h3>Examples:</h3>
                {#each languageData.examples as example}
                    <p>{example.description}</p>
                    <code>{example.code}</code>
                {/each}
            {/each}
        {:catch error}
            <p style="color: red">{error.message}</p>
        {/await}
    </div>
</section>

<style>
    #languageContainer {
        position: absolute;
        top: 4em;
        width: 100%;
        height: 100%;
    }

    #language {
        display: flex;
        justify-content: center;
        flex-direction: column;
        width: 75%;
    }
</style>
