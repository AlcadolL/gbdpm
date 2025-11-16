javascript:(function(){
    let damage='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[3]/div[2]';
    let time='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[6]/div[2]';
    let turn='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[5]/div[2]';

    let damageNode=document.evaluate(damage,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let timeNode=document.evaluate(time,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let turnNode=document.evaluate(turn,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;

    let damageText=damageNode?damageNode.innerText.trim():"";
    let timeText=timeNode?titeNode.innerText.trim():"";
    let turnText=turnNode?turnNode.innerText.trim():"";

    if(damageText != "" && timeText != "" && turnText != ""){
        let damageInt = parseInt(damageText.replace(/,/g, ""), 10);

        let timeParts = timeText.split(":");
        let timeSeconds = parseInt(timeParst[0], 10) * 60 + parseInt(timeParts[1], 10);

        let turnInt = parseInt(turnText, 10);
        
        let dps = damageInt / timeSeconds;
        let dpm = Math.floor(dps * 60);
        let dpt = damageInt / turnInt
        alert(
            "DPM：" + dpm.toLocaleString()
            + "\nDPT：" + dpt.toLocaleString()
        );
    }else{
        alert("");
    }
})();
