//method -> obj
const video = {
    title: 'a',
    tags: ['b', 'c', 'd'],
    showTags() {
        // arrow funcs inherit this value!
        this.tags.forEach((tag) => console.log(this.title, tag)/*, bind(this)*/ )
    }
};

video.showTags();

// -> function global window
function player() {
    console.log(this);
}
// player();

// function playVideo(a, b) {
//     console.log(this);
// };
// playVideo.call({name: 'Josh'}, 1, 2);
// playVideo.apply({name: 'Josh'}, [1, 2]);
// playVideo.bind({name: 'Josh'})
// // playVideo();