import * as $ from 'jquery';

$(document).ready(function() {

    $('[data-slider-nav]').click(function(){
        let $this=$(this),
            $slider=$this.closest('[data-slider]'),
            $sliderWrap=$slider.find('[data-slider-wrap]'),
            direction=$this.attr('data-slider-nav'),
            $sliderPrev=$("[data-slider-nav=prev]"),
            $sliderNext=$("[data-slider-nav=next]"),
            current=$slider.attr("data-slider"), //определяем текущий слайдер
            oldCurrent = 0;

        if (!current)
            current=0;
        current=parseInt(current);
        if (direction=="next") {
            oldCurrent = current;
            current+=1;
        } else {
            oldCurrent = current;
            current-=1;
        }
        // выделяем картинку в .slider__other-img
            // при пролистывании слева направо
        if (oldCurrent === 0 && current === 1) {
            $('#other-img1').attr('class','');
            $('#other-img2').attr('class','slider_selected');
        } else if (oldCurrent === 1 && current === 2) {
            $('#other-img2').attr('class','');
            $('#other-img3').attr('class','slider_selected');
        } else if (oldCurrent === 2 && current === 3) {
            $('#other-img3').attr('class','');
            $('#other-img4').attr('class','slider_selected');
        }
        // при пролистывании справо налево
        if (oldCurrent === 3 && current === 2) {
            $('#other-img4').attr('class','');
            $('#other-img3').attr('class','slider_selected');
        } else if (oldCurrent === 2 && current === 1) {
            $('#other-img3').attr('class','');
            $('#other-img2').attr('class','slider_selected');
        } else if (oldCurrent === 1 && current === 0) {
            $('#other-img2').attr('class','');
            $('#other-img1').attr('class','slider_selected');
        }
        // console.log('oldCurrent: ' + oldCurrent);
        // console.log('current: ' + current);

        $slider.attr("data-slider", current);
        $sliderWrap.css("left",current*-100+"%");

        $sliderPrev.removeAttr("disabled");
        $sliderNext.removeAttr("disabled");

        // конец левого слайда
        if (current==0) $sliderPrev.attr("disabled","disabled");

        // конец правого слайда
        if (current==($sliderWrap.find(".slide").length-1)) $sliderNext.attr("disabled","disabled");
    });

});