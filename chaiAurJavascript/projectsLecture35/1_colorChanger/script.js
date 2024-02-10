const button = document.querySelectorAll(".button")
button.forEach((value)=>{
  addEventListener("click",(e)=>{
      document.body.style.backgroundColor=`${e.target.id}`
  })
})

function createNewButton(id){
  const newbutton = document.createElement('span')
  newbutton.className = "button"
  newbutton.id = `${id}`
  newbutton.style.backgroundColor=`${id}`
  document.querySelector(".subCanvas").appendChild(newbutton)
}

const sub = document.querySelector("#createbu")
sub.addEventListener('click',()=>{
  const newid = document.querySelector('#create').value
  createNewButton(newid)
})