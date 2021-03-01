import * as $ from "jquery";

let $quantityNum = $(".count-buttons_input-num");

// отключение отправки формы
$('.product-details__cart-buttons').submit(function (e) {
    e.preventDefault(); // e = event
    let notif = $('#notification'),
        fastCart = $('#fast-cart'),
        allSum = + $quantityNum.val();
    console.log('allSum:' + allSum);

    fastCart.replaceWith('<div id="fast-cart">Test</div>');
    notif.replaceWith('<span class="buttons_notification"  style="display: block" id="notification">' +
        allSum +
        '</span>');
});

$(".count-buttons__arrow-plus").click(function (e) {
    e.preventDefault(); // e = event
    $quantityNum.val(+$quantityNum.val() + 1);
});

$(".count-buttons__arrow-minus").click(function (e) {
    e.preventDefault(); // e = event
        if ($quantityNum.val() > 1) {
        $quantityNum.val(+$quantityNum.val() - 1);
    }
});