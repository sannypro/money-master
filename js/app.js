document.getElementById('expanse-calculate').addEventListener('click', function () {
    const foodExpanse = document.getElementById('food-expanse');
    const rentExpanse = document.getElementById('rent-expanse');
    const clothesExpanse = document.getElementById('clothes-expanse');
    if (foodExpanse.value == '') {
        alert('if you do not want to fill any box simply type 0')
    }
    else if (parseInt(foodExpanse.value) < 0) {
        alert("please insert positive amount")
    }
    else {
        const foodExpanseInt = parseInt(foodExpanse.value);
        if (rentExpanse.value == '') {
            alert('if you do not want to fill any box simply type 0')

        }
        else if (parseInt(rentExpanse.value) < 0) {
            alert("please insert positive amount")
        }
        else {
            debugger;
            if (clothesExpanse.value == '') {
                alert('if you do not want to fill any box simply type 0')
            }
            else if (parseInt(clothesExpanse.value) < 0) {
                alert("please insert positive amount")
            }
            else {
                const rentExpanseInt = parseInt(rentExpanse.value);

                const clothesExpanseInt = parseInt(clothesExpanse.value);
                const totalExpanse = foodExpanseInt + rentExpanseInt + clothesExpanseInt;
                const showTotaExpanse = document.getElementById('total-expanse')
                showTotaExpanse.innerText = totalExpanse;
                const income = document.getElementById('income');
                if (income.value < 0) {
                    alert("please insert positive amount");
                    showTotaExpanse.innerText = '0'
                }
                else if (income.value == '') {
                    alert("you did not input income")
                    showTotaExpanse.innerText = '0'
                }
                else {
                    const BalanceCalculation = income.value - totalExpanse;
                    const totalBalance = document.getElementById('balance');
                    if (BalanceCalculation >= 0) {
                        totalBalance.innerText = BalanceCalculation;
                    }
                    else {
                        alert("you don't have enough money to expanse")
                        showTotaExpanse.innerText = '0'
                    }
                }
            }
        }
    }
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
    if (savingInput.value < 0) {
        alert("please insert positive amount");
        savedAmount.innerText = '0';
    }
    else if (savingInput.value > 100) {
        alert("you do not have enough money to save");
        savedAmount.innerText = '0';
    }
    else {
        remainingBalance.innerText = savingCalculation;
    }

})