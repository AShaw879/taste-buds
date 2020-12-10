const body = document.getElementById("body");
const header = document.querySelector(".header");
const sliderBlog = document.getElementById("slider-blog");
const inspirationWall = document.getElementById("search")
const dropdown = document.getElementById('dropdown');
const hashtag = document.getElementById('hashtag')
const recipe = document.getElementById('recipe-name')
const link = document.getElementById('link')
const photo = document.getElementById('photo')

sliderBlog.addEventListener("change", () => {
    body.classList.toggle("body-darkMode")
    header.classList.toggle("light-text")
    inspirationWall.classList.toggle("inspiration-wall-darkmode")
    dropdown.classList.toggle('complete-switch')
    hashtag.classList.toggle('complete-switch')
    recipe.classList.toggle('complete-switch')
    link.classList.toggle('complete-switch')
    photo.classList.toggle('complete-switch')
})