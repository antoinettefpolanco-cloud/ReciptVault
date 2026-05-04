// Function to handle navigation
function navigateToPage(page) {
    switch(page) {
        case 'dashboard':
            window.location.href = 'dashbored.html';
            break;
        case 'categories':
            window.location.href = 'categories.html'; // or whatever this current file is named
            break;
        case 'receipts':
            window.location.href = 'receipts.html';
            break;
        case 'analytics':
            window.location.href = 'analytics.html';
            break;
    }
}

// Add click listeners to navigation links
document.addEventListener('DOMContentLoaded', function() {
    let navLinks = document.querySelectorAll('.nav-menu a');
    
    navLinks.forEach(function(link) {
        link.addEventListener('click', function(e) {
            e.preventDefault(); // Stop the default link behavior
            
            let href = link.getAttribute('href');
            let page = href.replace('#', ''); // Remove the # symbol
            
            navigateToPage(page);
        });
    });
});

// Function to check budget warnings
function checkBudgetWarnings() {
    // Get all category cards
    let categoryCards = document.querySelectorAll('.category-card'); // Finds all elements that match

    // Check each category
    categoryCards.forEach(function(card) {
        // You'll need to get the spent amount and budget from each card
        // Then compare them and add warning styles
    });
}

//function to check if a category is over budget
function checkCategoryBudget ( spentAmount. budgetAmounf, categoryName) {
    if (spentAmount > budgetAmount) {
        let overAmount = spentAmount - budgetAmount;
        alert("Warning! You are $" + overAmount.toFixed(2) + " over the budget for " + categoryName + "1");
        return true; // Over Budget
    }
    return false // Within budget
}

// Function to check all categories for budget warnings
function checkAllBudgets() {
    let categoryCards = document.querySelectorAll('category-card');
}