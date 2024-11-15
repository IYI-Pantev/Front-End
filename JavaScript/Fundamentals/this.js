//method this references -> obj
//function this references -> global (window, global)
const video = {
  title: "a",
  tags: ["b", "c", "d"],
  showTags() {
    // arrow funcs inherit this value from the containing function/method!
    this.tags.forEach((tag) => console.log(this.title, tag) /*, bind(this)*/);
  },
  // old way
  showsTag() {
    this.tags.forEach(function (tag) {
      console.log(this.title, tag);
    }, this);
  },
};

// video.showTags();
video.showsTag();

// -> function global window
// function player() {
//   console.log(this);
// }
// player();

// function playVideo(a, b) {
//     console.log(this);
// };
// playVideo.call({name: 'Josh'}, 1, 2);
// playVideo.apply({name: 'Josh'}, [1, 2]);
// playVideo.bind({name: 'Josh'})
// // playVideo();
