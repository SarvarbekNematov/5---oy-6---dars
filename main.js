const form = document.querySelector(".form");
const input = document.querySelector(".input");
const box = document.querySelector(".box");
const modal = document.querySelector(".modal");
const content = document.querySelector(".content");
const close__btn = document.querySelector(".close__btn")

let data = [];

const render = () => {
    const item = data.map((item) => {
      return `
        <div class = "card">
          <h1>${item.name}</h1>
          <button onclick="deleteItem(${item.id})">delete</button>
          <button onclick="editItem(${item.id})">edit</button>
          <button data-id = "${item.id}" class = "open_modal">submit</button>
        </div>
      `;
    });
    box.innerHTML = item.join("");
    const card = document.querySelector(".card")
  };
  

  form.addEventListener("submit", (e) => {
    e.preventDefault();
  
    data.push({ name: input.value, id: Date.now() });
    input.value = "";
    render();
  });
  
  const deleteItem = (id) => {
    console.log(id);
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data.splice(i, 1);
      }
    }
    render();
  };
  
  const editItem = (id) => {
    const item = data.find((values) => values.id == id);
    let newTitle = prompt("", item.name);
  
    for (let i = 0; i < data.length; i++) {
      if (data[i].id == id) {
        data[i].name = newTitle;
      }
    }
  
    render();
  };
  

  const renderSingle = (data) => {
    content.innerHTML = `
    <div class = "card_two">
        <h2>${data.name}</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis adipisci, distinctio amet repudiandae earum doloremque explicabo?
        </p>
    </div>
    `

}


  card.addEventListener("click", (e) => {
    if(e.target.dataset.id){
        modal.classList.add("active");
        renderSingle(data)
    }
  })

  close__btn.addEventListener("click", () => {
    modal.classList.remove("active")
})