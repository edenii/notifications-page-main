
const btn = document.getElementById('mark-all-read')
const unredNum = document.getElementById('unread-num')

btn.addEventListener('click',function(){
  const redDots = document.querySelectorAll('#dot')
  const unReadMessages = document.querySelectorAll(".unread")
  unReadMessages.forEach((message) => {
    
    message.classList.remove("unread")
    
  })
  
    redDots.forEach(dot => dot.style.display='none')
    unredNum.innerText = 0
    
})
function displayNone(item){
  const unReadMessages = document.querySelectorAll(".unread")
  item.style.display='none'
  item.parentElement.parentElement.parentElement.parentElement.classList.remove('unread')
  unredNum.innerText =unReadMessages.length -1
  console.log(unReadMessages.length)
}
