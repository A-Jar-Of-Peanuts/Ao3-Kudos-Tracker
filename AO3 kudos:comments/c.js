var port = chrome.runtime.connect({name: "knockknock"});
// port.postMessage({joke: "Knock knock"});
// port.onMessage.addListener(function(msg) {
//   if (msg.question === "Who's there?")
//     port.postMessage({answer: "Madame"});
//   else if (msg.question === "Madame who?")
//     port.postMessage({answer: "Madame... Bovary"});
//   console.log(msg.question);
// });

const form = document.getElementById('new_kudo'); 
form.onclick = function() {
  // chrome.runtime.sendMessage({greeting: "Kudos"}, function(response) {
  //   console.log(response);
  // });
  port.postMessage({msg: "kudos"});
  port.onMessage.addListener(function(msg) {
    console.log(msg.response);
  });
}

// chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
//   console.log(response.farewell);
// });

