
const categoryCard = document.querySelector('.categorie_items')

// render category //

const renderCategory = (data, id) => {
    const html = `
    <div class="card-panel categories_card white row" data-id="${id}"}>
    <img src="/img/link.png" alt="recipe thumb">

      <div class="categories-title">${data.title}</div>

    <div class="goto_categorie">
      <i class="material-icons">chevron_right</i>
    </div>
   </div>
 `

  categoryCard.innerHTML += html

}

{/* <div class=".card-description">${data.ingredients}</div> */}

// getting event //

categoryCard.addEventListener('click', (event) => {
  if(event.target.tagName === 'DIV' || event.target.tagName === "IMG" || event.target.tagName === "I" ) {
    const itemId = event.target.getAttribute("data-id")
    window.location.href = `bookmarks.html?itemId=${itemId}`;
 }
  const itemId = event.target.getAttribute("data-id")
  console.log(itemId, event) 
})

