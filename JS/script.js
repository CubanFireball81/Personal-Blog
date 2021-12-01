//Use Async and Await with fetch to get API object
async function getNews () {
    //gets response from the api and put it inside a constant
    let response = await fetch('https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=45ebd7207b64413c9558bada6b769d24');
    //the response has to eb converted to json file type, so it can be used
    let data = await response.json();
    let posts = data.articles;
    document.getElementById('firstPost').innerHTML = posts[0].title
    document.getElementById('secondPost').innerHTML = posts[1].title
    document.getElementById('thirdPost').innerHTML = posts[2].title
    return posts;
}





function newsToPage (posts) {
    posts.forEach(post => {

        var card = document.createElement('div');
        card.classList = 'card';

        var title = document.createElement('h1');
        title.innerHTML = post.title;
        card.appendChild(title);

        var author = document.createElement('h2');
        author.innerHTML = "By: " + post.author;
        card.appendChild(author);

        var datePublished = document.createElement('h3');
        datePublished.innerHTML = "On: " + post.publishedAt;
        card.appendChild(datePublished);

        var image = document.createElement('img');
        image.src = post.urlToImage;
        card.appendChild(image);

        var description = document.createElement('p');
        description.innerHTML = post.description;
        card.appendChild(description);

        var postURL = document.createElement('a');
        postURL.href = post.url;
        postURL.innerText = 'Read full article here'
        card.appendChild(postURL);

        document.getElementById('content').appendChild(card);
    });
}


getNews().then(posts => newsToPage(posts));

/*Subscribe Modal*/

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on the button, open the modal
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
    modal.style.display = "none";
    }
}