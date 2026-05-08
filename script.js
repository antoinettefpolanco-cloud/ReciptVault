// Function to handle navigation
function navigateToPage(page) {
    switch(page) {
        case 'dashboard':
            window.location.href = 'dashbored.html';
            break;
        case 'index':
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
    //Check budget when page loads
    checkAllBudgets();

    // Set up Add category button
    let addButton = document.querySelector('.btn-primary');
    if (addButton) {
        addButton.addEventListener('click', addNewCategory);
    }
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
function checkCategoryBudget ( spentAmount, budgetAmount, categoryName) {
    if (spentAmount > budgetAmount) {
        let overAmount = spentAmount - budgetAmount;
        alert("Warning! You are $" + overAmount.toFixed(2) + " over the budget for " + categoryName + "!");
        return true; // Over Budget
    }
    return false // Within budget
}

// Function to check all categories for budget warnings
function checkAllBudgets() {
    let categoryCards = document.querySelectorAll('.category-card');

    categoryCards.forEach(function(card) {
        // Get category card
        let categoryName = card.querySelector('h3').innerText;

        // Get spent amount (extract $ and convert to number)
        let spentText = card.querySelector('.category-total').innerText;
        let spentAmount = parseFloat(spentText.replace('$', ''));

        // Get budget amount (extract from "Budget: $500.00" text)
        let budgetText = card.querySelector('.budget-lable').innerText;
        let budgetAmount = parseFloat(budgetText.replace('Budget: $', ''));
        
        // Check of over budget
        checkCategoryBudget (spentAmount, budgetAmount, categoryName);
    });
}


// Function to check all categories for budget warnings
function checkAllBudgets() {
    let categoryCards = document.querySelectorAll('.category-card');
    
    // Only run if there are category cards on this page
    if (categoryCards.length === 0) {
        return; // Exit the function if no cards found
    }
    
    categoryCards.forEach(function(card) {
        // Get category name
        let categoryName = card.querySelector('h3').innerText;
        
        // Get spent amount
        let spentText = card.querySelector('.category-total').innerText;
        let spentAmount = parseFloat(spentText.replace('$', ''));
        
        // Get budget amount
        let budgetText = card.querySelector('.budget-label').innerText;
        let budgetAmount = parseFloat(budgetText.replace('Budget: $', ''));
        
        // Check if over budget
        checkCategoryBudget(spentAmount, budgetAmount, categoryName);
    });
}

// Function to add a new category
function addNewCategory () {
    console.log("Add category button clicked!");

    // Ask user for the category name
    let categoryName = prompt("Enter category name:");
    console.log("Category name entered:", categoryName);

    // Check if the usre cancelled or entered nothing
    if (categoryName == null || categoryName=== "") {
        console.log("No category name, exiting");
        return; // Exit if cancelled
    }

    // Ask the user for budget amount
    let budgetAmount = prompt("Enter monthly budget amount (numbers only);");
    console.log("Budget amount entered:", budgetAmount);

    // Check if the user cancelled or entered nothiing
    if (budgetAmount === null || budgetAmount === ""); {
        console.log("No budget amount, exiting");
        return;// Exit if cancelled
    }

    //Convert budget to a number
    let budget = parseFloat(budgetAmount);
    console.log("Budget as number:", budget);

    console.log("About to call creatCategoryCard")
    //Create the new category card
    creatCategorycard(categoryName, budget);
}

// Function to create a category card
function createCategoryCard(name, budget) {
    console.log("Creating card for:", name, "with budget:", budget);
    
    // Get the categories grid
    let grid = document.getElementById('categories-grid');
    console.log("Found grid:", grid);
    
    // Create new card element
    let newCard = document.createElement('div');
    newCard.className = 'category-card';
    
    // Set the HTML content for the new card
    newCard.innerHTML = 
        '<div class="category-header">' +
            '<h3>' + name + '</h3>' +
            '<span class="category-total">$0.00</span>' +
        '</div>' +
        '<div class="budget-info">' +
            '<span class="budget-label">Budget: $' + budget.toFixed(2) + '</span>' +
            '<div class="progress-bar">' +
                '<div class="progress-fill" style="width: 0%"></div>' +
            '</div>' +
            '<span class="budget-remaining">$' + budget.toFixed(2) + ' remaining</span>' +
        '</div>' +
        '<div class="category-actions">' +
            '<button class="btn-secondary">Edit</button>' +
            '<button class="btn-secondary">View Receipts</button>' +
        '</div>';
    
    // Add the new card to the grid
    grid.appendChild(newCard);
    console.log("Card added!");
}
