
const firebaseConfig = {
 
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  let db = firebaseApp.firestore()

  // Get query params 
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const itemId = urlParams.get('itemId');  

 // persistence //
 
 db.enablePersistence().catch((err) => {
  if (err.code == "failed-precondition") {
    // may be multipale tabs open once
    console.log("persistence failed")
  } else if (err.code == "unimplemented") {
    // lack of browser
    console.log("persistence not avilable")
  }
})

  //  Get Category //

var category = db.collection('linkage')

category.onSnapshot((item) => {
  item.docChanges().forEach((element) => {
    if (element.type === 'added' && itemId === null ) {
        renderCategory(element.doc.data(), element.doc.id)
    }
  })
})

 // Add bokkmarks //

 const form = document.querySelector('form')

 form.addEventListener('submit', (event) =>{
    event.preventDefault()

    const items = {
       title : form.title?.value,
       bookmark : form.url_title?.value
    } 
   
    db.collection('linkage').add(items).catch((err) => {
      console.log(err,  "error while add doc")
    })

 })


 // deleting item //

// const container = document.querySelector(".items")

// container.addEventListener("click", (event) => {
//   if (event.target.tagName === "I") {
//     const id = event.target.getAttribute("data-id")

//     db.collection("menu").doc(id).delete()
//   }
// })