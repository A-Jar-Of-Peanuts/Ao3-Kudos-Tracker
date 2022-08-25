var port = chrome.runtime.connect({name: "knockknock"});

const form = document.getElementById('new_kudo'); 
form.onclick = function() {
  port.postMessage({msg: document.title});
  port.onMessage.addListener(function(msg) {
    console.log(msg.response);
  });
}


