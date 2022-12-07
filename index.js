let button = document.querySelector(".get-color")
let container = document.querySelector("body")
let colorSpan = document.querySelector(".color")
let toast = document.querySelector(".toast")
button.addEventListener("click", () => {
  let index = Math.ceil(Math.random() * 29900) //* To get a random index of 29900 array of colors.
  let time
  clearInterval(time)
  fetch("https://api.color.pizza/v1/")
    .then((res) => res.json())
    .then((data) => {
      let color = data.colors[index].hex
      colorSpan.textContent = color.toUpperCase()
      container.style.backgroundColor = String(color)
      button.style.backgroundColor = color
      navigator.clipboard.writeText(color)
      toast.style.opacity = "1"
      toast.style.backgroundColor = color
      time = setTimeout(() => {
        toast.style.opacity = "0"
      }, 3000)
    })
})
