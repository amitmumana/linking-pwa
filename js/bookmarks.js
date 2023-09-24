
const bookamrks = document.querySelector('.list_item')


const renderBookmarks = (data, id) => {
    const html = `<div class="card-panel card white row" data-id="${id}">
    <img src="/img/link.png" alt="category thumb">
     <div class="card-details">
      <div class="card-title">${data.title}</div>
     </div>
     <div class="card-goto">
       <i class="material-icons" data-id="${id}">chevron_right</i>
    </div>
  </div>`

  bookamrks.innerHTML += html

}