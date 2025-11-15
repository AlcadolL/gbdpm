javascript:(function(){
    let dmg='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[3]/div[2]';
    let time='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[6]/div[2]';
    let dmgNode=document.evaluate(dmg,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let timeNode=document.evaluate(time,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let dmgText=dmgNode?dmgNode.innerText.trim():"";
    let timeText=timeNode?timeNode.innerText.trim():"";
    if(dmgText != "" && timeText != ""){
        let dmgInt = parseInt(dmgText.replace(/,/g, ""), 10);
        let parts = timeText.split(":");
        let timeSeconds = parseInt(parts[0], 10) * 60 + parseInt(parts[1], 10);
        let dps = dmgInt / timeSeconds;
        let dpm = Math.floor(dps / 60);
        alert(
            "DPM：" + dpm.toLocaleString()
        );
    }else{
        alert("");
    }
})();
