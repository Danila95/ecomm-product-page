import * as $ from 'jquery';
import './style.scss';
// import './blocks/common.blocks/product-details/quantity-products'
import './blocks/common.blocks/slider/slider'

let Price = {
    lightBlue: {
        XS: 190.00,
        S: 200.00,
        M: 200.00,
        L: 230.00,
        XL: 250.00,
    },
    Pink: {
        XS: 200.00,
        S: 210.00,
        M: 210.00,
        L: 240.00,
        XL: 260.00,
    }
};

const getColorId = function() {
    const id = $('.product-details__color').children().next('span').attr('id');
    return id;
};

const getSizeId = function() {
    const id = $('.product-details__size').children().next('span').attr('id');
    return id;
};

const getNewPrice = function() {
    const colorId = getColorId();
    const sizeId = getSizeId();
    const h1 = $('#price');
    // условия при нажатии на color-light-blue
    if ( colorId === 'color-light-blue' && sizeId === 'size-XS')
        $(h1).html('$' + Price.lightBlue.XS.toFixed(2));
    else if (colorId === 'color-light-blue' && sizeId === 'size-S')
        $(h1).html('$' + Price.lightBlue.S.toFixed(2));
    else if (colorId === 'color-light-blue' && sizeId === 'size-M')
        $(h1).html('$' + Price.lightBlue.M.toFixed(2));
    else if (colorId === 'color-light-blue' && sizeId === 'size-L')
        $(h1).html('$' + Price.lightBlue.L.toFixed(2));
    else if (colorId === 'color-light-blue' && sizeId === 'size-XL')
        $(h1).html('$' + Price.lightBlue.XL.toFixed(2));
    // условия при нажатии на color-pink
    if ( colorId === 'color-pink' && sizeId === 'size-XS')
        $(h1).html('$' + Price.Pink.XS.toFixed(2));
    else if (colorId === 'color-pink' && sizeId === 'size-S')
        $(h1).html('$' + Price.Pink.S.toFixed(2));
    else if (colorId === 'color-pink' && sizeId === 'size-M')
        $(h1).html('$' + Price.Pink.M.toFixed(2));
    else if (colorId === 'color-pink' && sizeId === 'size-L')
        $(h1).html('$' + Price.Pink.L.toFixed(2));
    else if (colorId === 'color-pink' && sizeId === 'size-XL')
        $(h1).html('$' + Price.Pink.XL.toFixed(2));
};

// переключение цвета товара
$('.buttons__checkbox').click(function(e){
    $('input[type=checkbox]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
        getNewPrice();
    });
});
// меняем надписи цветов
$('.buttons__light-blue').click(function () {
    const span = $('.product-details__color').children().next('span');
    $(span).replaceWith("<span id=\"color-light-blue\">Light Blue</span>");
});

$('.buttons__pink').click(function () {
    const span = $('.product-details__color').children().next('span');
    $(span).replaceWith("<span id=\"color-pink\">Pink</span>");
});


// переключатель размера товара
$('.product-details__size-selectors').click( function(e){
    $('input[type=radio]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
        getNewPrice();
    });
});

// меняем надписи размеров
$('.XS').click(function () {
    const span = $('.product-details__size').children().next('span');
    $(span).replaceWith("<span id=\"size-XS\">XS</span>");
});

$('.S').click(function () {
    const span = $('.product-details__size').children().next('span');
    $(span).replaceWith("<span id=\"size-S\">S</span>");
});

$('.M').click(function () {
    const span = $('.product-details__size').children().next('span');
    $(span).replaceWith("<span id=\"size-M\">M</span>");
});

$('.L').click(function () {
    const span = $('.product-details__size').children().next('span');
    $(span).replaceWith("<span id=\"size-L\">L</span>");
});

$('.XL').click(function () {
    const span = $('.product-details__size').children().next('span');
    $(span).replaceWith("<span id=\"size-XL\">XL</span>");
});

// смена картинок в слайдере
$('.buttons__pink').click(function(){
    $('#slide-img1').attr('src', 'img/shirt_pink_big.png');
    $('#slide-img2').attr('src', 'img/shirt_pink_front_increase.png');
    $('#slide-img3').attr('src', 'img/shirt_pink_front.png');
    $('#slide-img4').attr('src', 'img/shirt_pink_back_increase.png');

    $('.slider__other-img').replaceWith("<div class='slider__other-img'>" +
        "<img src='img/shirt_pink_big.png' id='other-img1' alt>" +
        "<img src='img/shirt_pink_front_increase.png' id='other-img2' alt>" +
        "<img src='img/shirt_pink_front.png' id='other-img3' alt>" +
        "<img src='img/shirt_pink_back_increase.png' id='other-img4' alt>" +
        "</div>");
});
$('.buttons__light-blue').click(function(){
    $('#slide-img1').attr('src', 'img/shirt_light-blue_big.png');
    $('#slide-img2').attr('src', 'img/shirt_light-blue_increase.png');
    $('#slide-img3').attr('src', 'img/shirt_light-blue_front.png');
    $('#slide-img4').attr('src', 'img/shirt_light-blue_back.png');

    $('.slider__other-img').replaceWith("<div class='slider__other-img'>" +
        "<img src='img/shirt_light-blue_big.png' id='other-img1' alt>" +
        "<img src='img/shirt_light-blue_increase.png' id='other-img2' alt>" +
        "<img src='img/shirt_light-blue_front.png' id='other-img3' alt>" +
        "<img src='img/shirt_light-blue_back.png' id='other-img4' alt>" +
        "</div>");
});

const addProduct = function() {
    let nameProduct = $('.product-details__name-product').text();
    // let html = $.parseHTML(nameProduct);
    // $.each(html, function (i, el) {
    //     if (el.nodeName === 'h1')
    //         $('.content__product').append(el);
    // });
    return nameProduct;

};
addProduct();
//quantity-products
let $quantityNum = $(".count-buttons_input-num");
// отключение отправки формы
$('.product-details__cart-buttons').submit(function (e) {
    e.preventDefault(); // e = event
    let notif = $('#notification'),
        fastCart = $('#fast-cart'),
        allSum = + $quantityNum.val();
    console.log('allSum:' + allSum);

    fastCart.replaceWith('' +
        '<div id="fast-cart" class="menu__fast-cart">' +
            '<div class="fast-cart__content">' +
                '<div class="content__product">'+addProduct()+'</div>' +
                '<hr class="content__separator">' +
                '<div class="content__total">' +
                    '<div class="total">' +
                        '<div class="total__title">total:</div>' +
                        '<div class="total__price">$</div>' +
                    '</div>' +
                '</div>' +
                '<div class="content__buttons">' +
                    '<input type="submit" class="buttons__proceed-to-checkout" value="proceed to checkout">' +
                    '<a href="#" class="buttons__view-cart">view cart</a>' +
                '</div>' +
            '</div>' +
        '</div>');
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


// функция открытия быстрой корзины
$('#bag-icon').click(function() {
    $('#fast-cart').toggleClass('menu__fast-cart_visible');
    $('.bag-icon-black').toggleClass('bag-icon-black-unvisible');
});