// document.getElementById('withdraw').addEventListener('click', function(){
//     const withdrawBox = document.getElementById('withdraw-display');
//     const withdrawBoxValue = withdrawBox.value;
//     const newWithdrawAmount = parseFloat(withdrawBoxValue);
//     console.log(newWithdrawAmount);

//     // const withdrawHere = document.getElementById('withdraw-display');
//     // const previousWithdraw = withdrawHere.innerText;
//     // console.log(previousWithdraw.innerText);
//     // const previousWithdrawAmount = parseFloat(previousWithdraw);
//     // const finalWithdraw = previousWithdrawAmount + newWithdrawAmount;

// })


document.getElementById('withdraw').addEventListener('click', function(){
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawString);

    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWIthdrawTotalString = withdrawTotalElement.innerText;
    const previousWithdrawTotal = parseFloat(previousWIthdrawTotalString);

    const finalBalance = document.getElementById('bank-amount');
    const finalBalanceString = finalBalance.innerText;
    const lastBalance = parseFloat(finalBalanceString);

    if(newWithdrawAmount > lastBalance){
        alert('do not have enough money')
        return;
    }

    const finalWithdraw = previousWithdrawTotal + newWithdrawAmount;
    withdrawTotalElement.innerText = finalWithdraw;

    const totallast = lastBalance - newWithdrawAmount;
    finalBalance.innerText = totallast;

    withdrawField.value = '';



})