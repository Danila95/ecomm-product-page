import * as $ from "jquery";

// отключение отправки формы
$('.product-details__cart-buttons').submit(function(e){
    e.preventDefault(); // e = event
});

$(function() {
    (function quantityProducts() {
        let $ArrowMinus = $(".count-buttons__arrow-minus");
        let $ArrowPlus = $(".count-buttons__arrow-plus");
        let $quantityNum = $(".count-buttons_input-num");

        $ArrowMinus.click(quantityMinus);
        $ArrowPlus.click(quantityPlus);

        function quantityMinus() {
            if ($quantityNum.val() > 1) {
                $quantityNum.val(+$quantityNum.val() - 1);
            }
        }
        function quantityPlus() {
            $quantityNum.val(+$quantityNum.val() + 1);
        }
    })();
});