//alert("hello from your chrome extension!");

// var firstHref = document.querySelector("a[href^='http']");

// // document.addEventListener('click', function(e){
// //     console.log(e.target);
// // });

// console.log(firstHref);

// content.js
chrome.runtime.onMessage.addListener(
    function(request, sender, sendResponse) {
      if( request.message === "clicked_browser_action" ) {
        var firstHref = document.querySelector("a[href^='http']");
  
        console.log(firstHref);
      }
    }
  );