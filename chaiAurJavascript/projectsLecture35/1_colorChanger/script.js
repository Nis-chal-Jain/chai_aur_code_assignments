const button = document.querySelectorAll(".button")
button.forEach((value)=>{
  addEventListener("click",(e)=>{
      document.body.style.backgroundColor=`${e.target.id}`
  })
})
