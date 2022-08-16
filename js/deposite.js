//deposite
//1.get the current deposite amount from the deposite field
//2.get the previous deposite amount from deposite area;
//3.parse them from string to float
//4.add the previousDepositeAmount with currentDepositeAmount
//5.add with total balance
//6.show on deposite area and balance area
document.getElementById('deposite-btn').addEventListener('click', function () {
    //previous amount
    const depositeArea = document.getElementById('deposite-area');
    const previousDeposite = depositeArea.innerText;
    const previousDepositeAmount = parseFloat(previousDeposite);
    //current amount
    const depositeField = document.getElementById('deposite-field');
    const currentDeposite = depositeField.value;
    const currentDepositeAmount = parseFloat(currentDeposite);

    //condition
    if (isNaN(currentDepositeAmount)) {

        alert("fuck you");
        depositeField.value = '';

    }
    else {

        //adding
        const depositeTotal = previousDepositeAmount + currentDepositeAmount;

        //balance total
        const balanceArea = document.getElementById('balance-total');
        const balanceTotal = balanceArea.innerText;
        const balanceAmount = parseFloat(balanceTotal);

        //add wih total
        const total = balanceAmount + currentDepositeAmount;
        //showing on the balance area
        balanceArea.innerText = total;
        //showing on the deposite area
        depositeArea.innerText = depositeTotal;
        depositeField.value = '';
    }

})
//withdraw
//1.get the current withdraw amount from the withdraw field
//2.get the previous withdraw amount from withdraw area;
//3.parse them from string to float
//4.add the previousWithdrawAmount with currentWithdrawAmount
//5.subtract from balance
//6.show on the 
document.getElementById('withdraw-btn').addEventListener('click', function () {
    //previous amount
    const withDrawArea = document.getElementById('withdraw-area');
    const previousWithDraw = withDrawArea.innerText;
    const previousWithdrawAmount = parseFloat(previousWithDraw);

    //current amount
    const withdrawField = document.getElementById('withdraw-field');
    const currentWithdraw = withdrawField.value;
    const currentWithdrawAmount = parseFloat(currentWithdraw);

    //condition
    if (isNaN(currentWithdrawAmount)) {
        alert('fuck you;')
        withdrawField.value = '';
    }
    else {
        //adding 
        const withdrawTotal = previousWithdrawAmount + currentWithdrawAmount;
        //balance total
        const balanceArea = document.getElementById('balance-total');
        const balanceTotal = balanceArea.innerText;
        const balanceAmount = parseFloat(balanceTotal);

        //condition
        if (balanceAmount >= currentWithdrawAmount) {
            //subtract from total
            const total = balanceAmount - currentWithdrawAmount;
            //showing on the balance area
            balanceArea.innerText = total;

            //showing on the withdraw area
            withDrawArea.innerText = withdrawTotal;
        }
        else {
            alert('Sorry! You do not have sufficient balance')
        }
        withdrawField.value = '';

    }
})




