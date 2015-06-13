$(document).ready(function () {
    function init() {
        if (localStorage["name"]) {
            $('#name').val(localStorage["name"]);
        }
        if (localStorage["email"]) {
            $('#email').val(localStorage["email"]);
        }
        if (localStorage["phone"]) {
            $('#phone').val(localStorage["phone"]);
        }
        if (localStorage["street"]) {
            $('#ship-street').val(localStorage["street"]);
        }
        if (localStorage["apt"]) {
            $('#ship-apt').val(localStorage["apt"]);
        }
        if (localStorage["city"]) {
            $('#ship-city').val(localStorage["city"]);
        }
        if (localStorage["state"]) {
            $('#ship-state').val(localStorage["state"]);
        }
        if (localStorage["zip"]) {
            $('#ship-zip').val(localStorage["zip"]);
        }
        if (localStorage["visa"]) {
            $('#visa').val(localStorage["visa"]);
        }
        if (localStorage["mastercard"]) {
            $('#mastercard').val(localStorage["mastercard"]);
        }
        if (localStorage["amex"]) {
            $('#amex').val(localStorage["amex"]);
        }
        if (localStorage["cardholder"]) {
            $('#cardholder').val(localStorage["cardholder"]);
        }
        if (localStorage["securitycode"]) {
            $('#securitycode').val(localStorage["securitycode"]);
        }
        if (localStorage["expiration"]) {
            $('#expiration').val(localStorage["expiration"]);
        }
        if (localStorage["b_sameaddress"]) {
            $('#same-address').val(localStorage["b_sameaddress"]);
        }
        if (localStorage["b_street"]) {
            $('#billing-street').val(localStorage["b_street"]);
        }
        if (localStorage["b_apt"]) {
            $('#billing-apt').val(localStorage["b_apt"]);
        }
        if (localStorage["b_city"]) {
            $('#billing-city').val(localStorage["b_city"]);
        }
        if (localStorage["b_state"]) {
            $('#billing-state').val(localStorage["b_state"]);
        }
        if (localStorage["b_zip"]) {
            $('#billing-zip').val(localStorage["b_zip"]);
        }
      }
    init();
});

$('.stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('.b_stored').change(function () {
    localStorage[$(this).attr('name')] = $(this).val();
});

$('#localStorageTest').submit(function() {
    localStorage.clear();
});
