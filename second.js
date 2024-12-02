
    //call the function
    function toCalculateSpeed(speedlevel){
    let speedlevelLimit =70;
    let kmDemeritpoint = 5;
    //if statement to print if the speedlevel is ok
    if(speedlevelLimit >=70){
        console.log("ok")
    }else {
       
        const kmdemeritPoints = Math.floor( (speedlevel - speedlevelLimit  ) /kmDemeritpoint)
        console.log(kmdemeritPoints);
         //print license suspended if driver gets more than 12 mins
        if(kmDemeritpoint>=12) {
            console.log("license suspended");
        }
    }
    }
    toCalculateSpeed(224);