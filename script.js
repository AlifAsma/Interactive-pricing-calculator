

const form = document.getElementById("pricingForm");

const plan = document.getElementById("plan");
const quantity = document.getElementById("quantity");
const tax = document.getElementById("tax");

const priceResult = document.getElementById("price");
const quantityResult = document.getElementById("quantityResult");
const subtotalResult = document.getElementById("subtotal");
const discountResult = document.getElementById("discount");
const taxResult = document.getElementById("taxAmount");
const totalResult = document.getElementById("total");


// Form submit event

form.addEventListener("submit", function(event) {

    // Stop the page from refreshing
    event.preventDefault();


    // Get values from inputs

    const price = Number(plan.value);
    const qty = Number(quantity.value);
    const taxRate = Number(tax.value);


    // Calculate subtotal

    const subtotal = price * qty;


    // Calculate discount

    let discountRate = 0;

    if (qty >= 10) {

        discountRate = 20;

    } else if (qty >= 5) {

        discountRate = 10;

    } else {

        discountRate = 0;

    }


    // Calculate discount amount

    const discount = subtotal * discountRate / 100;


    // Price after discount

    const discountedPrice = subtotal - discount;


    // Calculate tax

    const taxAmount = discountedPrice * taxRate / 100;


    // Calculate final total

    const total = discountedPrice + taxAmount;


    // Update DOM

    priceResult.textContent =
        "PKR " + price.toLocaleString();

    quantityResult.textContent = qty;

    subtotalResult.textContent =
        "PKR " + subtotal.toLocaleString();

    discountResult.textContent =
        "PKR " + discount.toLocaleString() +
        " (" + discountRate + "%)";

    taxResult.textContent =
        "PKR " + taxAmount.toLocaleString();

    totalResult.textContent =
        "PKR " + total.toLocaleString();

});
