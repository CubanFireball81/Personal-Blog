//Use Async and Await with fetch to get API object
async function getNews () {
    //gets response from the api and put it inside a constant
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=45ebd7207b64413c9558bada6b769d24');
    //the response has to eb converted to json file type, so it can be used
    let data = await response.json();
    return data;
}

function newsToPage (data) {
    document.getElementById("title").innerHTML = data.articles[0].title;
    document.getElementById("author").innerHTML = data.articles[0].author;
    document.getElementById("publishedAt").innerHTML = data.articles[0].publishedAt;
    document.getElementById("content").innerHTML = data.articles[0].content;
    document.getElementById("urlToImage").src = data.articles[0].urlToImage;
    document.getElementById("url").href = data.articles[0].url;
    document.getElementById("description").innerHTML = data.articles[0].description;
}

getNews().then(data => newsToPage(data));
