function ATM(accnumber, pin, withdrowAmount) {
    let currBlance = 5000;
    function withdrow(params) {
        console.log(`account No :${accnumber}  \n blance :${currBlance} \n withDrow: ${withdrowAmount}   \ncurrentBlance: ${currBlance - withdrowAmount}`);
    }
    let drow = currBlance - withdrowAmount
    if (pin == 3456) {
        if (drow >= 500) {
            withdrow()
        }
        else {
            console.log("valid amount");
        }
    } else {
        console.log("plase enter valid pin");
    }

}

let a = ATM(1, 346, 500,);