/* Adapted from https://www.w3schools.com/howto/howto_js_active_element.asp */

var hairstylists = [{
        name: "john",
        daysAvailable: [1, 2, 3]
    },
    {
        name: "jane",
        daysAvailable: [3, 4, 5]
    }
]

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

$(function() {
    $('[data-toggle="tooltip"]').tooltip()
})



$(document).ready(function() {

    var radios = document.forms[0].elements["stylist"];

    for (var i = 0, max = radios.length; i < max; i++) {
        radios[i].onclick = function() {
            updateDates(this.value);
            document.getElementById("bookingDetails").style.display = 'block';
        }
    }


    function updateDates(stylist) {
        var stylistNum = 0;
        if (stylist == "jane") {
            stylistNum = 1;
        }

        $("#datepicker").datepicker("destroy");

        $("#datepicker").datepicker({
            minDate: 0,
            beforeShowDay: function(d) {
                day = d.getDay();
                if ($.inArray(day, hairstylists[stylistNum].daysAvailable) < 0) {
                    return [false];
                } else {
                    return [true];
                }
            }
        });
    }
});