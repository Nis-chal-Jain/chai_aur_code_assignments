setInterval(()=>{
    const date = new Date().toLocaleTimeString()
    document.getElementById('clock').innerHTML = `<span>${date}</span>`
  },1000)


  setInterval(()=>{
    
    let selectedValue = document.getElementById("my-dropdown").value;
    const date = new Date().toLocaleTimeString('en-US', { timeZone: `${selectedValue}`})
    document.getElementById('worldClock').innerHTML = `<span>${date}</span>`
  },1000)