// Write your code in this file!
function getUKTime() {
let ukTime =new Date().getHours()+ 6
 return ukTime
}

function discountTicket (originalPrice) {
  let newPrice = originalPrice*0.8
  return newPrice
}

function tweetReply (fan) {
  return "Hey "+ fan +", thanks so much for the support! I really appreciate it!"
}