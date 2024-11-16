document.getElementById('financial-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent form submission to server

    // Get user input values
    const income = parseFloat(document.getElementById('income').value);
    const expenses = parseFloat(document.getElementById('expenses').value);
    const additionalIncome = parseFloat(document.getElementById('additional-income').value) || 0;
    const savingsRate = parseFloat(document.getElementById('savings').value) || 0;

    // Calculate cash flow (income - expenses)
    const totalIncome = income + additionalIncome;
    const totalExpenses = expenses;
    const cashFlow = totalIncome - totalExpenses;

    // Calculate savings based on savings rate
    const savingsAmount = (totalIncome * savingsRate) / 100;

    // Display results
    document.getElementById('cashflow').textContent = `Cash Flow: $${cashFlow.toFixed(2)}`;
    document.getElementById('savings-amount').textContent = `Savings: $${savingsAmount.toFixed(2)}`;
    document.getElementById('total-income').textContent = `Total Income: $${totalIncome.toFixed(2)}`;
    document.getElementById('total-expenses').textContent = `Total Expenses: $${totalExpenses.toFixed(2)}`;

    // Show the result section
    document.getElementById('result').style.display = 'block';
});
