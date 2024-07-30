// Select the input fields and buttons from the HTML document
const firstText = document.querySelector('#firstText');
const lastText = document.querySelector('#lastText');
const submitBtn = document.querySelector('#submitBtn');
const cookiesBtn = document.querySelector('#cookiesBtn');

// Add a click event listener to the submit button
submitBtn.addEventListener('click', () => {
    // When the button is clicked, set cookies for the first and last names with a lifespan of 365 days
    setCookie("firstName", firstText.value, 365);
    setCookie("lastName", lastText.value, 365);
});

// Add a click event listener to the cookies button
cookiesBtn.addEventListener('click', () => {
    // When the button is clicked, populate the input fields with the values stored in the cookies
    firstText.value = getCookie("firstName");
    lastText.value = getCookie("lastName");
});

// Function to set a cookie with a given name, value, and expiration date
function setCookie(name, value, daysToLive) {
    const date = new Date();
    date.setTime(date.getTime() + daysToLive * 24 * 60 * 60 * 1000);
    let expires = "expires=" + date.toGMTString();
    document.cookie = `${name}=${value}; ${expires}; path=/`;
}

// Function to delete a cookie by setting its value to null and expiration date to past
function deleteCookie(name) {
    setCookie(name, null, null);
}

// Function to get the value of a cookie by its name
function getCookie(name) {
    const cDecoded = decodeURIComponent(document.cookie);
    const cArray = cDecoded.split("; ");
    let result = null;
    // Loop through the cookie array and find the cookie with the given name
    cArray.forEach(element => {
        if (element.indexOf(name) == 0) {
            // Extract the value of the cookie and return it
            result = element.substring(name.length + 1)
        }
    })
    return result;
}
