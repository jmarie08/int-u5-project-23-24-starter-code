// Declare your arrays here
let adventure = ["obx.png","the100(1).jpg"];
let action = ["Arrow.jpg","hacksaw-ridge.jpg"];
let scifi = ["interstellar.jpg","lostinspace(1).png"];
let rando = ["thegiver.jpg","ltwb.jpg"];
// Make sure to declare your HTML elements as variables! 
let inputMovie = document.querySelector("input").value;
console.log(inputMovie);
let divMovie = document.querySelector("div");
let movies;
// Submit Button 
let submitButton = document.querySelector("button");



submitButton.addEventListener("click", function() {
   
    let inputMovie = document.querySelector("input").value;
// console.log(inputMovie);
if (inputMovie==="adventure"){
    movies=adventure;
} else if (inputMovie==="action"){
    movies=action;
} else if (inputMovie==="scifi"){
    movies=scifi;
}else if (inputMovie==="rando"){
    movies=rando;
}
console.log(movies);

movies.forEach(function (url){
    let image=document.createElement("img");
    image.src=url;
    divMovie.appendChild(image);
});
});











