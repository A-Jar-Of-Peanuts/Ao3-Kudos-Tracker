
document.addEventListener('DOMContentLoaded', function() {
  // var checkPageButton = document.getElementById("click");
  // checkPageButton.addEventListener("click", function() {
    clear();
    let am = 0;
    chrome.storage.sync.get('amount', function(result) {
      am = result['amount'];
      console.log("current amount " + am);
      for(let i = 1; i<=am; i++) {
        chrome.storage.sync.get([i+""], function(r) {
          add("<br>" + r[i]);
        });
      } 
    });
 // }, false);

},false);



function add(text) {
  document.getElementById("textlol").innerHTML += text;
}

function clear() {
  document.getElementById("textlol").innerHTML = "";
}


