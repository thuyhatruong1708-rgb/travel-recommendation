function recommend() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    if (input === "beach") {
        results.innerHTML = `
            <h2>Beach Recommendations</h2>
            <div class="img-row">
                <img src="images/beach1.avif" alt="Cambodia beach">
                <img src="images/beach2.jpg" alt="Qinghai">
            </div>
            <p>Relax on the world's most beautiful beaches.</p>
        `;
    }

    else if (input === "temple") {
        results.innerHTML = `
            <h2>Temple Recommendations</h2>
            <div class="img-row">
                <img src="images/temple1.jfif" alt="Angkor Wat">
                <img src="images/temple2.jfif" alt="Chinese Temple">
            </div>
            <p>Explore stunning cultural and religious temple sites.</p>
        `;
    }

    else if (input === "country") {
        results.innerHTML = `
            <h2>Country Recommendations</h2>
            <div class="img-row">
                <img src="images/country1.jpg" alt="Cambodia">
                <img src="images/country2.jfif" alt="China">
            </div>
            <p>Discover top sightseeing destinations from countries around the world.</p>
        `;
    }

    else {
        results.innerHTML = `<p>No results found. Try: <strong>beach</strong>, <strong>temple</strong>, or <strong>country</strong>.</p>`;
    }
}

