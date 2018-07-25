function getUKTime() {
let answer = new Date() .getHours() + 5
return answer 
}

function discountTicket(total) {
  let discountedTicket = .2 * total
  return total - discountedTicket
}

function tweetReply(name) {
  return "Hey " + name + ", thanks so much for the support! I really appreciate it!"
}


