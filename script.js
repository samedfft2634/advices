//! https://api.adviceslip.com/advice

const btn = document.querySelector(".dice")
const title = document.querySelector(".title span")
const advice = document.querySelector(".content")

async function  request () {
    const api = await fetch("https://api.adviceslip.com/advice")
    const data = await api.json()
    title.innerHTML = `#${data.slip.id}`
    advice.innerHTML = `${data.slip.advice}`
}
request()

btn.addEventListener("click", request)