async function shortenURL() {
    const url = document.getElementById("url").value;
    const response = await fetch(`https://tinyurl.com/api-create.php?url=${encodeURIComponent(url)}`);
    
    if (response.ok) {
        const data = await response.text();
        document.getElementById('result').innerHTML =
            `Shortened URL: <a href="${data}" id="shortenedLink" onclick="navigateToShortenedURL(event)">${data}</a>`;
    } else {
        document.getElementById('result').innerHTML = "Error Shortening URL";
    }
}

function navigateToShortenedURL(event) {
    event.preventDefault();
    const shortenedLink = event.target.getAttribute('href');
    window.location.href = shortenedLink;
}
