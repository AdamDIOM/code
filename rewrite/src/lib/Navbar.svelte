<header>
    <nav id="navbar">
        <h1>CC LTC</h1>
        <div>
            <!-- Aim to add more tabs as project grows in complexity -->
            <label for="languages">Select Language</label>

            <select name="languages" id="language-selector">
                <option value="C#">C#</option>
                <option value="Python">Python</option>
            </select>
        </div>
    </nav>
</header>

<style>
    #navbar {
        display: flex;
        justify-content: space-around;
        align-items: center;
        background-color: #1a1a1a;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
    }

    #language-selector {
        background-color: #888;
        padding: 0.5em;
        border-radius: 25px;
        color: #292929;
    }

    /* #label a {
        color: inherit;
        text-decoration: none;
    } */
</style>
