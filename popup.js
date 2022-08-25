
document.addEventListener('DOMContentLoaded', function() {
  // var checkPageButton = document.getElementById("click");
  // checkPageButton.addEventListener("click", function() {
    clear();
    let am = 0;
    chrome.storage.sync.get('amount', function(result) {
      am = result['amount'];
      console.log("current amount " + am);
      for(let i = 0; i<am; i++) {
        // chrome.storage.sync.get([i+""], function(r) {
        //   add("<br>" + r[i]);
        // });
        chrome.storage.sync.get('links', function(r) {
          chrome.storage.sync.get('titles', function(r2) {
            add(r['links'][i], r2['titles'][i]);
          }) 
          
        });
      } 
    });
 // }, false);

},false);



function add(link, title) {
  var t = document.createElement("a");
  var words = document.createTextNode(title);
  t.appendChild(words);
  t.href = link;
  
  document.getElementById("urls").appendChild(t);

  var t2 = document.createElement("p");
  var br = document.createTextNode("");
  t2.appendChild(br);

  document.getElementById("urls").appendChild(t2);
}

function clear() {
  document.getElementById("textlol").innerHTML = "";
}


