// Step 1: Load receipts from local storage
function loadReceipts() {
    let receiptsData = localStorage.getItem("receipts");
    if (receiptsData) {
        return JSON.parse(receiptsData);
    } else {
        return [];
    }
}

// Step 2: Calculate totals by category
function calculateCategoryTotals(receipts) {
    let totals = {
        "Groceries": 0,
        "Transportation": 0,
        "Entertainment": 0,
        "Utilities": 0
    };
    
    // Your code here: loop through receipts and add amounts to categories
    for(let i=0; 1<receipts.length;i++){
        totals[receipts[i].category] = totals[receipts[i].category] + receipts[i].amount;

    }
    
    return totals;
}
