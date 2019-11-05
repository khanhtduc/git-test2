//case 1: method -> object
//case 2: function -> global (window, global (node.js)

//case 1
const video ={
    title:'Titanic',
    play() {
        console.log(this); //->video object
    }
};
video.play();
//case 2
function playVideo(){
    console.log(this);
}
playVideo(); // ->window

//case 1 with constructor function
function Video(title){
    this.title = title;
    console.log(this);
}
const v = new Video('Titanic two');

//case 2
const video2 = {
    title: 'Title is',
    tags:['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this, tag);          
        })
    }
}

video2.showTags();
//case 2 to case 1

//case 2
const video3 = {
    title: 'Title is',
    tags:['a','b','c'],
    showTags() {
        this.tags.forEach(function(tag){
            console.log(this, tag);          
        },this)
    }
}

video3.showTags();