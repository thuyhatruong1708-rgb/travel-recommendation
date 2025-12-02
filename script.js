function recommend() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    if (input === "beach") {
        results.innerHTML = `
        <h2>Beach Recommendations</h2>
        <img src="images/beach1.jpg">
        <img src="images/beach2.jpg">
        <p>Relax on the world's most beautiful beaches.</p>
        `;
    }

    else if (input === "temple") {
        results.innerHTML = `
        <h2>Temple Recommendations</h2>
        <img src="images/temple1.jpg">
        <img src="images/temple2.jpg">
        <p>Explore stunning cultural and religious temple sites.</p>
        `;
    }

    else if (input === "country") {
        results.innerHTML = `
        <h2>Country Recommendations</h2>
        <img src="images/country1.jpg">
        <img src="images/country2.jpg">
        <p>Discover top sightseeing destinations from countries around the world.</p>
        `;
    }

    else {
        results.innerHTML = `<p>No results found. Try beach, temple, or country.</p>`;
    }
}
