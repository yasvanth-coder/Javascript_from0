// Select the <h1> element from HTML and yse from js 
var a = document.querySelector("h1");
a.innerHTML = "yo"
// Apply styles
a.style.color = "red";//Style is used to connect js and css
a.style.backgroundColor = "black";

// Add click event listener
a.addEventListener("click", function () {
    a.innerHTML = "Badal gya hu mai";
});
a.addEventListener("click", function () {
    console.log("hey")
})