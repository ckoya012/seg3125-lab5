/* Adapted from https://www.w3schools.com/howto/howto_js_active_element.asp */

// Get the container element
var navbarItemsList = document.getElementById("navbarItemsList");

// Get all nav items inside the container
var navItems = navbarItemsList.getElementsByClassName("nav-link");

// Loop through the links and add the active class to the current/clicked button
for (var i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", function() {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}