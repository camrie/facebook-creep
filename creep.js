
function disableLikeButton() {
    let likeElements = document.querySelectorAll('.UFILikeLink, .addButton');
    for (i = 0; i < likeElements.length; i++) {
        likeElement = likeElements[i];
        likeElement.innerHTML = "Disabled";
        likeElement.style.pointerEvents = "none";
    }
}
function disableAddFriendButton() {
    let elements = document.querySelectorAll('.FriendRequestAdd');
    for (i = 0; i < elements.length; i++) {
        element = elements[i];
        element.disabled = true;
        element.innerHTML = "Disabled";
    }
}

function creep() {
    disableLikeButton();
    disableAddFriendButton();
}
setInterval(creep, 1000);
