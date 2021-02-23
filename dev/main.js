import * as $ from 'jquery';
import './style.scss';
import './blocks/common.blocks/product-details/quantity-products'

// переключение цвета товара
$('.buttons__checkbox').on("change", function(e){
    $('input[name^=field]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});

// переключатель размера товара
$('.size-selectors__checkbox').on("change", function(e){
    $('input[type=checkbox]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});

