function recommend() {
    const input = document.getElementById("searchInput").value.toLowerCase();
    const results = document.getElementById("results");

    const basePath = "https://thuyhatruong1708-rgb.github.io/travel-recommendation/images/";

    if (input === "beach") {
        results.innerHTML = `
            <h2>Beach Recommendations</h2>
            <img src="${basePath}beach1.avif">
            <img src="${basePath}beach2.jpg">
        `;
    }

    else if (input === "temple") {
        results.innerHTML = `
            <h2>Temple Recommendations</h2>
            <img src="${basePath}temple1.jfif">
            <img src="${basePath}temple2.jfif">
        `;
    }

    else if (input === "country") {
        results.innerHTML = `
            <h2>Country Recommendations</h2>
            <img src="${basePath}country1.jpg">
            <img src="${basePath}country2.jfif">
        `;
    }

    else {
        results.innerHTML = `<p>No results found. Try: beach, temple, country.</p>`;
    }
}
