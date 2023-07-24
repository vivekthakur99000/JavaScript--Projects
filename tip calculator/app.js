
let billAmt = document.getElementById("bill-amt");
let tipPer = document.getElementById("tip-per");
let tipAmt = document.getElementById("tip-amt");
let total = document.getElementById("total");
let calculate = document.getElementById("btn");

btn.addEventListener('click',function(){

    billAmt = Number(billAmt.value);
    tipPer = Number(tipPer.value);


    if(isNaN(billAmt) || billAmt <= 0 || billAmt === null){
        alert("Please enter the valid amount")
    }
    if(isNaN(tipPer) || tipPer <= 0 || tipPer === null){
        alert("Please enter the valid Percentage")
    }

    else{
        let calculatedTip = (tipPer/100)*billAmt;
        tipAmt.value =  calculatedTip;
        let calculatedTotal = billAmt  + calculatedTip;
        total.value =  calculatedTotal;
    }


})