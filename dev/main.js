import * as $ from 'jquery';
import './style.scss';


$('.buttons').on("change", function(e){
    $('input[name^=field]').each(function(){
        if(e.target != this){
            this.checked = false;
        }
    });
});