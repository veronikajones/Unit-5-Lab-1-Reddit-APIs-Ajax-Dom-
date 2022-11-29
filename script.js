function apiCall() {
  let url = "https://www.reddit.com/r/aww/.json";
  fetch(url)
    .then((response) => response.json())
    .then((redditData) => {
      console.log(redditData);
      for (let i = 0; i < redditData.data.children.length; i++) {
        const post = redditData.data.children[i].data;

        const container = document.createElement("div");

        const title = document.createElement("h1");
        // title.innerText = data.results[i].name;
        title.innerText = post.title;

        const img = document.createElement("img");
        img.src = post.thumbnail;

        const url = document.createElement("a");
        url.innerHTML = `<br></br> ${post.url}`;
        url.href = post.url;

        document.body.appendChild(title);
        document.body.appendChild(img);
        document.body.appendChild(url);
        document.body.appendChild(container);
      }
    });
}

apiCall();
