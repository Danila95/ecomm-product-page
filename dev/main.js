import * as $ from 'jquery';
import './style.scss';
import './blocks/common.blocks/product-details/quantity-products'

// переключение цвета товара
$('.buttons__checkbox').on("change", function(e){
    $('input[type=checkbox]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});

// переключатель размера товара
$('.product-details__size-selectors').on("change", function(e){
    $('input[type=checkbox]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});

