const body = document.body;
const grandparent = document.querySelector(".grandparent");
const parent = document.querySelector(".parent");
const child = document.querySelector(".child");

body.addEventListener("click", () => {
    console.log("Body Clicked");
});

grandparent.addEventListener("click", () => {
    console.log("Grandparent Clicked");
});

parent.addEventListener("click", () => {
    console.log("Parent Clicked");
});

child.addEventListener("click", () => {
    console.log("Child Clicked");
});