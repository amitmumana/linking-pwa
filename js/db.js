
const firebaseConfig = {
   
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  let db = firebaseApp.firestore()

  // Get query params 
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const itemId = urlParams.get('itemId');  

  console.log(itemId, "you got item id ")

  //  Get Category //

var category = db.collection('linkage')

category.onSnapshot((item) => {
  item.docChanges().forEach((element) => {
    // console.log(element, element.doc.data(),"hola hola you got snap shot")

    if (element.type === 'added' && itemId === null ) {
        renderCategory(element.doc.data(), element.doc.id)
    }
  })
})


// Get Bookmarks //
var bookmark = db.collection('linkage').doc(itemId).collection("bookmarks");

if (itemId === null) {
  bookmark.onSnapshot((item) => {
    item.docChanges().forEach((element) => {
      if (element.type === 'added' && itemId === null ) {
        renderBookmarks(element.doc.data(), element.doc.id) 
        // console.log(element.doc.data(), "okokokokokokoko")
      }
    })
  })
}



// bookmark.onSnapshot((item) => {
//     item.docChanges().forEach((element) => {
//       if (element.type === 'added' && itemId === null ) {
//         // renderBookmarks(element.doc.data(), element.doc.id) 
//         console.log(element.doc.data(), "okokokokokokoko")
//       }
//     })
//   })