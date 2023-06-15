// const date = new Date()
// const options = { hour12: false }
// const time = date.toLocaleTimeString("en-US", options)
// const dates = date.toLocaleDateString("en-US", {
//   day: "numeric",
//   month: "long",
//   year: "numeric",
// })

// export default {
//   date,
//   time,
//   dates,
// }

const getCurrentTime = () => {
  const date = new Date()
  const options = { hour12: false }
  const time = date.toLocaleTimeString("en-US", options)
  return time
}

const getCurrentDate = () => {
  const date = new Date()
  const dates = date.toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })
  return dates
}

export { getCurrentTime, getCurrentDate }
