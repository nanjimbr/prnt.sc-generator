function makecode(){
    var res = '';
    var chars = 'abcdefghijklmnopqrstuvwxyz';
    var charsLen = chars.length;
    for ( var i = 0; i <= 1; i++ ) {
        res += chars.charAt(Math.floor(Math.random() * 
   charsLen));
     }

    var val = Math.floor(1000 + Math.random() * 9000);
     res+= val;
    return res;
}

chrome.action.onClicked.addListener(function(activeTab){
    let url = "https://prnt.sc/"+makecode();
    chrome.tabs.create({ url });

  });


  