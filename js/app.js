document.getElementById('expanse-calculate').addEventListener('click', function () {
    const foodExpanse = document.getElementById('food-expanse');
    const rentExpanse = document.getElementById('rent-expanse');
    const clothesExpanse = document.getElementById('clothes-expanse');
    const foodExpanseInt = parseInt(foodExpanse.value);
    const rentExpanseInt = parseInt(rentExpanse.value);
    const clothesExpanseInt = parseInt(clothesExpanse.value);
    const totalExpanse = foodExpanseInt + rentExpanseInt + clothesExpanseInt;
    const showTotaExpanse = document.getElementById('total-expanse')
    showTotaExpanse.innerText = totalExpanse;
    const income = document.getElementById('income');
    const BalanceCalculation = income.value - totalExpanse
    const totalBalance = document.getElementById('balance');
    totalBalance.innerText = BalanceCalculation;

})

document.getElementById('savings').addEventListener('click', function () {
    const savingInput = document.getElementById('saving-input')
    const savingPercentage = savingInput.value / 100;
    const totalBalance = document.getElementById('balance');
    const saving = parseFloat(totalBalance.innerText) * savingPercentage;
    const savedAmount = document.getElementById("saved-amount");
    savedAmount.innerText = saving;
    const savingCalculation = parseFloat(totalBalance.innerText) - saving;
    const remainingBalance = document.getElementById('remaining-balance');
    remainingBalance.innerText = savingCalculation;

})