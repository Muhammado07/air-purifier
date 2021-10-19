const playVideo = document.querySelector(".video");
const closeVideo = document.querySelector(".close-video");
const watch = document.querySelector(".watch");
const videoPlay = document.querySelector(".video-play");

playVideo.addEventListener("click", function () {
    watch.classList.add("view");
    videoPlay.setAttribute(
        "src",
        "https://www.youtube.com/embed/lzTgQvOKNBs"
    );
});
closeVideo.addEventListener("click", function () {
    watch.classList.remove("view");
    videoPlay.setAttribute("src", "");
});