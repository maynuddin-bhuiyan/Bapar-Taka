document.getElementById('deposit_button').addEventListener('click', function(){

    const depositFild = document.getElementById('deposit_input');

    const depositText = depositFild.value;
    const newdepositTotal = parseFloat(depositText);



    const depositTaka = document.getElementById('deposit_taka');
    


    const pabdepositTotal = depositTaka.innerText;

    const newdeposittTotal = parseFloat(pabdepositTotal) + newdepositTotal;

    depositTaka.innerText = newdeposittTotal;



    const balanceTotal = document.getElementById('balance_total');

    const amountTotal = balanceTotal.innerText;

   const preaAmountTotal = parseFloat(amountTotal);

    const newbalanceTotal = preaAmountTotal + newdepositTotal;

    balanceTotal.innerText = newbalanceTotal;


    depositFild.value = '';

})



//Withdrow 


document.getElementById('withdraw_button').addEventListener('click', function(){

    const withdrawFild = document.getElementById('withdraw_input');
    const withdrawtext = withdrawFild.value;

    const withdrawBlance = document.getElementById('withdraw_blance');

    const withdrawBlanceText = withdrawBlance.innerText;

    const newWithdrawBlance = parseFloat(withdrawBlanceText) + parseFloat(withdrawtext);

    withdrawBlance.innerText = newWithdrawBlance;




    const prevwithwraw = document.getElementById('balance_total');

    const prevwithwrawText = prevwithwraw.innerText;

    const newPrevWithwraw = parseFloat(prevwithwrawText) - parseFloat(withdrawtext);

    prevwithwraw.innerText = newPrevWithwraw;


    withdrawFild.value = '';





})