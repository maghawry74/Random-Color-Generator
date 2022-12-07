let button = document.querySelector(".get-color")
let container = document.querySelector("body")
let colorSpan = document.querySelector(".color")
button.addEventListener("click", () => {
  let index = Math.ceil(Math.random() * 29900) //* To get a random index of 29900 array of colors.
  fetch("https://api.color.pizza/v1/")
    .then((res) => res.json())
    .then((data) => {
      let color = data.colors[index].hex
      colorSpan.textContent = color.toUpperCase()
      container.style.backgroundColor = String(color)
      button.style.backgroundColor = color
     document.execCommand('copy');
    })
})
