let dataTable = [
    { type: 1, name: "income", amount: 1200 },
    { type: 0, name: "rent", amount: 1000 },
    { type: 0, name: "food", amount: 100 }
]

function updateSummry() {
    let totalIncome = dataTable.reduce(function (t, e) {
        if (e.type === 1) t += e.amount;
        return t;
    }, 0);

    let totalExpense = dataTable.reduce((ex, e) => {
        if (e.type === 0) ex += e.amount;
        return ex;
    }, 0);
    updatedInc.innerText = totalIncome;
    updatedInc.innerText = totalExpense;
    updatedInc.innerText = totalIncome - totalExpense;
}


function addItem() {
    let type = itemType.value;
    let name = document.querySelector("#name");
    let amount = document.querySelector("#amount");

    if (name.value === "" || Number(amount.value) === 0)
        return alert("Incorror Input");
    if (Number(amount.value) <= 0)
        return alert("Incorrect amount! can't add nagative");

    dataTable.push({
        type: Number(type),
        name: name.value,
        amount: Number(amount.value)
    })

    }