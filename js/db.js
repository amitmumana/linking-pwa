
const firebaseConfig = {
  apiKey: "AIzaSyD9nUcGzYmBOAz3iFGvLX5uCZ18XAJ77go",
  authDomain: "linkage-pwa.firebaseapp.com",
  projectId: "linkage-pwa",
  storageBucket: "linkage-pwa.appspot.com",
  messagingSenderId: "794135458633",
  appId: "1:794135458633:web:85e07d8e655cd7cc732098",
  measurementId: "G-E59NSHHY98"
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


// Get Bookmarks // 
var bookmark = db.collection('linkage').doc(itemId).collection("bookmarks");

if (itemId !== null) {
  bookmark.onSnapshot((item) => {
    item.docChanges().forEach((element) => {
      if (element.type === 'added') {
        renderBookmarks(element.doc.data(), element.doc.id) 
        console.log(element.doc.data(), "okokokokokokoko")
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