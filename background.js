chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.clear();
  chrome.storage.sync.get('amount', function(response) {
    //if (response == undefined) {
      chrome.storage.sync.set({'amount':0}, () => {});
      chrome.storage.sync.set({'links':[]});
      chrome.storage.sync.set({'titles':[]});
    //}
  });
  
  // chrome.storage.sync.get('amount', function(response) {
  //   console.log(response['amount']);
  // })
  //chrome.storage.sync.get(null, function(data) {console.info(data)});
});

chrome.runtime.onConnect.addListener(function(port) {
  console.assert(port.name === "knockknock");
  port.onMessage.addListener(function(msg) {
    
  getTab().then(url => {
      console.log(url);
      port.postMessage({response: url}); 

        // chrome.storage.sync.set({[cur]: [url]}, function(){
        //   console.log("executed!");
        // });
        chrome.storage.sync.get('links', function(response) {
          if (response['links'].includes(url) == false) {
            response['links'].push(url);
            chrome.storage.sync.set({'links':response['links']}, () => {});
            chrome.storage.sync.get(['amount'], function(response) {
              var cur = response['amount']+1;
      
              chrome.storage.sync.set({['amount']:cur}, function(){
                console.log("i have changed the current amount");
              });
            });
            
            console.log(msg.msg);
            chrome.storage.sync.get('titles', function(r) {
              r['titles'].push(msg.msg);
              chrome.storage.sync.set({'titles':r['titles']}, ()=>{});
            })
          }
          
        });

      chrome.storage.sync.get(null, function(data) {console.info(data)});

      // chrome.storage.sync.get(cur + "", function(response) {
      //   console.log(response[cur]);
      // });
  });
    
  });
});


async function getTab() {
  let queryOptions = { active: true, currentWindow: true };
  let tabs = await chrome.tabs.query(queryOptions);
  return tabs[0].url;
}

