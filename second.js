
    //call the function
    function toCalculateSpeed(speedlevel){
    let speedlevelLimit =70;
    let kmDemeritpoint = 5;
    if(speedlevelLimit >=70){
        console.log("ok");
    }else {
       
        const kmdemeritPoints = Math.floor((speedlevel - speedlevelLimit) / kmDemeritpoint);{
               console.log(kmdemeritPoints);
        }
        if(kmDemeritpoint>=12) {
            console.log("license suspended");
        }
    }
    }
    toCalculateSpeed();
 