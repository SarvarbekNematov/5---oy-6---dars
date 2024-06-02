const form = document.querySelector(".form");
const input = document.querySelector(".input");
const send = document.querySelector(".send");
const box = document.querySelector(".box");


  const render = () => {
      box.innerHTML = data.map((item) =>
        
        `
          <div>
              <h2>${item.name}</h2>
          </div>
      `).join("")
  }
  
  let data = JSON.parse(localStorage.getItem("name")) || []

form.addEventListener("submit", (e) => {
    e.preventDefault();
    const oldData = JSON.parse(localStorage.getItem("name") ) || [];

    const newValue = JSON.stringify([{name : input.value , id : Date.now} , ...oldData])
    localStorage.setItem("name" , newValue)
    // data.push({name : input.value , id : Date.now});

    // data.push(JSON.parse(newValue)) 
    render()
    input.value = ""
})

