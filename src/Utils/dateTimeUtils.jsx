const date = new Date()
const options = { hour12: false }
const time = date.toLocaleTimeString("en-US", options)
const dates = date.toLocaleDateString("en-US", {
  day: "numeric",
  month: "long",
  year: "numeric",
})

export default {
  date,
  time,
  dates,
}
