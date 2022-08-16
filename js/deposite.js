// step one 1 : add addEventListener to the button 
document.getElementById('deposite-button').addEventListener('click', function(){
    // step 2 : deposite input থেকে ডীপোসিট এমাউন্ট নিয়ে আসতে হবে 
    const IsDeposite = document.getElementById('deposite-field');
    const thisIsDepositeString = IsDeposite.value;
    const newDepositeAmount = parseFloat(thisIsDepositeString);


    // step 3: get the deposite total amount 
    // for non input (element none other than input and textarea) to get there value use element.innerText 
    const depositeTotalElement = document.getElementById('deposite-total')
    const depositeMain = depositeTotalElement.innerText;
    // step 4 : convert string to Number;
    const previousMainAmount = parseFloat(depositeMain);
    const finalDeposite = newDepositeAmount + previousMainAmount;
    depositeTotalElement.innerText = finalDeposite;


    // step 5 : set the total balance 
    const finalBalance = document.getElementById('bank-amount');
    const finalBalanceString = finalBalance.innerText;
    const lastBalance = parseFloat(finalBalanceString);

    const totallast = lastBalance + newDepositeAmount;
    finalBalance.innerText = totallast;




    // step 7 
    IsDeposite.value = '';


})