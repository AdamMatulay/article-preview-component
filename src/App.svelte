<script>
    
</script>

<main>
  <article class="article-preview-card">
    
    <div class="article-image">
        <img src="./images/drawers.jpg" alt="green drawers with vase on top" />
    </div>

    <div class="article-preview-section">

        <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
        <p>Ever been in a room and felt like something was missing? Perhaps it felt slighly bare and uninviting. I've got some simple tips to help you make any room feel complete.</p>

        <footer class="article-footer">
            <div class="article-author">
                <img src="./images/avatar-michelle.jpg" alt="Michelle Appleton" />
                <div>
                    <h2>Michelle Appleton</h2>
                    <time datetime="2020-06-28">28 Jun 2020</time>
                </div>
            </div>
            <button id="share-button" type="button" aria-label="share"><img src="./images/icon-share.svg" alt="" /></button>
        </footer>

    </div>

  </article>
</main>

<style>

    *, :global(body) {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        font-size: 13px;
        --very-dark-greyish-blue: hsl(217, 19%, 35%);
        --desaturated-dark-blue: hsl(214, 17%, 51%);
        --grayish-blue: hsl(212, 23%, 69%);
        --light-grayish-blue: hsl(210, 46%, 95%);
    }

    :global(body){
        font-family: 'Manrope', sans-serif;
        font-style: normal;
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        height: 100dvh;
        background-color: var(--light-grayish-blue);
    }

    .article-preview-card {
        display: flex;
        flex-direction: column;
        max-width: 25em;
        background-color: white;
        border-radius: 10px;
    }

    .article-image {
        height: 15em;
    }

    .article-image img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        object-position: center 35%;
        border-radius: 10px 10px 0px 0px;
    }

    .article-preview-section {
        padding: 2.8em 2.8em 1.5em 2.8em;
    }
    
    .article-preview-section h1{
        font-size: 1.225rem;
        color: var(--very-dark-greyish-blue);
        line-height: 1.5;
        margin-bottom: 0.8em;
    }

    .article-preview-section p{
        font-size: 1rem;
        color: var(--desaturated-dark-blue);
        line-height: 1.5;
        margin-bottom: 2em;
    }
    
    .article-footer {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
    }

    .article-footer img {
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    .article-author {
        display: flex;
        gap: 1.2em;
    }
    
    .article-author h2 {
        font-size: 1rem;
        color: var(--very-dark-greyish-blue);
        line-height: 1.5;
    }

    .article-author time {
        font-size: 1rem;
        color: var(--desaturated-dark-blue);
        line-height: 1.5;
    }

    #share-button {
        display: flex;
        justify-content: center;
        align-items: center;
        border: none;
        border-radius: 50%;
        width: 32px;
        height: 32px;
        background-color: var(--light-grayish-blue);
    }
    
    #share-button img {
        width: 15px;
        object-fit: contain;
    }

    /* DESKTOP */

    @media only screen and (min-width: 768px) {
        
        .article-preview-card {
            display: flex;
            flex-direction: row;
            max-width: 54.5em;
        }

        .article-image {
            height: auto;
        }

        .article-image img {
            width: 22.5em;
            object-position: left;
            border-radius: 10px 0px 0px 10px;
        }

        .article-preview-section {
            padding: 2.8em 2.8em 2.5em 2.8em;
        }

        .article-preview-section h1{
            font-size: 1.5rem;
            line-height: 1.4;
        }

    }
  
</style>
