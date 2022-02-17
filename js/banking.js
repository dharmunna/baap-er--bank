document.getElementById('deposite-button').addEventListener('click', function(){
  //get  the amount of deposite
  const depositeInput = document.getElementById('deposite-input');

  const depositeAmountText = depositeInput.value;

  const NewdepositeAmount = parseFloat(depositeAmountText);

  const depositeTotal = document.getElementById('depo-total');

  const previousDepositeText = depositeTotal.innerText;

  const previousDepositeAmount = parseFloat(previousDepositeText);

  const newDepositeTotal = previousDepositeAmount + NewdepositeAmount;

  depositeTotal.innerText= newDepositeTotal;

  depositeInput.value= '';


  // update account balance
  
  const balanceTotal = document.getElementById('balance-total');
  const balanceTotalText = balanceTotal.innerText;
  const previousbalanceTotal= parseFloat(balanceTotalText);
  const newBalanceTotal = previousbalanceTotal + NewdepositeAmount;
  balanceTotal.innerText= newBalanceTotal;
});

  //handle withdraw
  document.getElementById('withdraw-button').addEventListener('click', function(){
const withdrawInput = document.getElementById('withdraw-input');
const withdrawAmountText = withdrawInput.value;
const newWithdrawAmount = parseFloat(withdrawAmountText);
//set withdraw total
const withdrawTotal = document.getElementById('withdraw-total');
const previousWithdrawText = withdrawTotal.innerText;
const previousWithdrawTotal = parseFloat(previousWithdrawText);

const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
withdrawTotal.innerText = newWithdrawTotal;

//update balance
const balanceTotal = document.getElementById('balance-total');
const previousBalanceText= balanceTotal.innerText;
const previousbalanceTotal = parseFloat(previousBalanceText);
const newBalanceTotal = previousbalanceTotal- newWithdrawAmount;
balanceTotal.innerText = newBalanceTotal;

withdrawInput.value='';

  
});