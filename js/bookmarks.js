
const bookamrks = document.querySelector('.list_item')


const renderBookmarks = (data, id) => {
    const html = `<div class="card-panel categories_card white row" data-id="${id}"}>
    <img src="/img/link.png" alt="recipe thumb">

      <div class="categories-title">${data.title}</div>

    <div class="goto_categorie">
      <i class="material-icons">chevron_right</i>
    </div>
   </div>`

  bookamrks.innerHTML += html

}