import * as $ from 'jquery';
import './style.scss';


$('.buttons__checkbox').on("change", function(e){
    $('input[name^=field]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});

$('.size-selectors__checkbox').on("change", function(e){
    $('input[type=checkbox]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});