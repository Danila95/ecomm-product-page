import * as $ from 'jquery';
import './style.scss';
import './blocks/common.blocks/product-details/quantity-products'
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
    console.log($(span).replaceWith("<span id=\"color-light-blue\">Light Blue</span>"));
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