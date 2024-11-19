const blogPost = {
  title: "Conservatives won the election",
  body: "... ... ...",
  author: "John Malkobitch",
  views: 103258,
  comments: [
    { author: "a", body: "b" },
    { author: "c", body: "d" },
  ],
  isLive: true,
};

console.log(blogPost);

function Post(title, body, author) {
  this.title = title;
  this.body = body;
  this.author = author;
  this.views = 0;
  this.comments = [];
  this.isLive = false;
}

let post = new Post("a", "b", "c");
console.log(post);
