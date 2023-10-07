// const grandparent = document.getElementById("grandparent-id");

// const parents = document.getElementsByClassName("parent");

// const grandparent = document.querySelector(".grandparent");



// const parents = document.querySelector(".parent");

// const parents = document.querySelectorAll(".parent");

const grandparent = document.querySelector(".grandparent")
const children = grandparent.querySelectorAll(".child")
// const parents = grandparent.children
// const parentOne = parents[0].children


for (let i = 0; i < children.length; i++) {
    const element = children[i];
    changeColor(element);
}

// changeColor(parents);

function changeColor(element) {
    element.style.backgroundColor = "#333"
}




