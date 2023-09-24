
const categoryCard = document.querySelector('.items')

// render category //

const renderCategory = (data, id) => {
    const html = `<div class="card-panel recipe white row" data-id="${id}">
    <img src="/img/pizza.png" alt="recipe thumb">
     <div class="recipe-details">
      <div class="recipe-title">${data.title}</div>
       <div class="recipe-ingredients">${data.ingredients}</div>
     </div>
     <div class="card-copy">
       <i class="material-icons" data-id="${id}">chevron_right</i>
    </div>
  </div>`

  categoryCard.innerHTML += html

}

// getting event //

categoryCard.addEventListener('click', (event) => {
    console.log(event, event.target.tagName,  "balle balle shava shava")
    if(event.target.tagName === 'DIV' || event.target.tagName === "IMG" ) {
       const itemId = event.target.getAttribute("data-id")
       window.location.href = `listItem.html?itemId=${itemId}`;
    }
  })
