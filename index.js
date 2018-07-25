// Write your code in this file!
function getUKTime(){
 var uktime= new Date().getHours() + 5
 return uktime
}

function discountTicket(originalPrice){
  let discountPrice = 0.8*(originalPrice)
  return discountPrice
}

function tweetReply(fanName){
  return "Hey " + fanName + ", thanks so much for the support! I really appreciate it!"
}

