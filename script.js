function recommend() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    const basePath = "images/";

    if (input === "beach") {
        results.innerHTML = `
            <h2>Beach Recommendations</h2>
            <img src="${basePath}beach1.avif">
            <img src="${basePath}beach2.jpg">
            <p>Relax on the world's most beautiful beaches.</p>
        `;
    }

    else if (input === "temple") {
        results.innerHTML = `
            <h2>Temple Recommendations</h2>
            <img src="${basePath}temple1.jfif">
            <img src="${basePath}temple2.jfif">
            <p>Explore cultural and religious temple sites.</p>
        `;
    }

    else if (input === "country") {
        results.innerHTML = `
            <h2>Country Recommendations</h2>
            <img src="${basePath}country1.jpg">
            <img src="${basePath}country2.jfif">
            <p>Discover beautiful destinations around the world.</p>
        `;
    }

    else {
        results.innerHTML = `<p>No results found. Try typing: beach, temple, or country.</p>`;
    }
}
