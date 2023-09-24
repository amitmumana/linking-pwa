
const categoryCard = document.querySelector('.items')

// render category //

const renderCategory = (data, id) => {
    const html = `
     <div class="card-panel card white row" data-id="${id}">
       <img src="/img/link.png" alt="category thumb">
          <div class="card-title">${data.title}</div>
       <div class="card-goto">
        <i class="material-icons">chevron_right</i>
       </div>
     </div>
     `

  categoryCard.innerHTML += html

}

{/* <div class=".card-description">${data.ingredients}</div> */}

// getting event //

categoryCard.addEventListener('click', (event) => {
  const itemId = event.target.getAttribute("data-id")
  console.log(itemId, event) 
})

