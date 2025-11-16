javascript:(function(){
    let d='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[3]/div[2]';
    let t='//*[@id="wrapper"]/div[3]/div[2]/div[2]/div[2]/div[3]/div[6]/div[2]';
    let dN=document.evaluate(d,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let tN=document.evaluate(t,document,null,XPathResult.FIRST_ORDERED_NODE_TYPE,null).singleNodeValue;
    let dT=dN?dN.innerText.trim():"";
    let tT=tN?tN.innerText.trim():"";
    if(dT != "" && tT != ""){
        let dI = parseInt(dT.replace(/,/g, ""), 10);
        let tP = tT.split(":");
        let tS = parseInt(tP[0], 10) * 60 + parseInt(tP[1], 10);
        let dps = dI / tS;
        let dpm = Math.floor(dps * 60);
        alert(
            "DPM：" + dpm.toLocaleString()
        );
    }else{
        alert("");
    }
})();

