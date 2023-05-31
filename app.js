let puppyImageElement = document.getElementById("puppyImage");
let likeButtonElement = document.getElementById("likeButton");
let likeIconElement = document.getElementById("likeIcon");
let isImageLiked = true;

function onClickLikeButton() {
    if (isImageLiked === true) {
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-liked-img.png";
        likeButtonElement.style.backgroundColor = "#0967d2";
        likeButtonElement.style.color = "#fff";
        likeIconElement.style.color = "#0967d2";
        isImageLiked = false;
    } else {
        isImageLiked = true;
        puppyImageElement.src = "https://d1tgh8fmlzexmh.cloudfront.net/ccbp-dynamic-webapps/white-puppy-img.png";
        likeButtonElement.style.backgroundColor = "#9aa5b1";
        likeButtonElement.style.color = "#cbd2d9";
        likeIconElement.style.color = "#9aa5b1";
    }
}
