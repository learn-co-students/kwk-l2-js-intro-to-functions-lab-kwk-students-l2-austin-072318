// Write your code in this file!
function getUKTime() {
 return new Date().getHours() + 5
}

function discountTicket(x) {
  let discount= x *.20
  let ticket= x - discount
  return ticket
}

function tweetReply(name) {
 let reply = "Hey " + name + ", thanks so much for the support! I really appreciate it!"
 return reply
}
 


