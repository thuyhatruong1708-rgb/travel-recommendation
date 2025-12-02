function recommend() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    let content = "";

    if (input === "beach") {
        content = `
            <h2 class="title">🌴 Beach Recommendations</h2>
            <div class="gallery">
                <img src="images/beach1.avif" alt="Beach 1">
                <img src="images/beach2.jpg" alt="Beach 2">
            </div>
            <p class="desc">Relax on the world's most beautiful beaches.</p>
        `;
    }

    else if (input === "temple") {
        content = `
            <h2 class="title">⛩ Temple Recommendations</h2>
            <div class="gallery">
                <img src="images/temple1.jfif" alt="Temple 1">
                <img src="images/temple2.jfif" alt="Temple 2">
            </div>
            <p class="desc">Explore stunning cultural and religious temple sites.</p>
        `;
    }

    else if (input === "country") {
        content = `
            <h2 class="title">🌍 Country Recommendations</h2>
            <div class="gallery">
                <img src="images/country1.jpg" alt="Country 1">
                <img src="images/country2.jfif" alt="Country 2">
            </div>
            <p class="desc">Discover top destinations around the world.</p>
        `;
    }

    else {
        content = `<p class="error">❌ No results found. Try: <strong>beach</strong>, <strong>temple</strong>, or <strong>country</strong>.</p>`;
    }

    results.innerHTML = content;
}

