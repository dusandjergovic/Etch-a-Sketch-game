$(document).ready(function() {

    $("#change").click(function() {
        let changeGrid = prompt('Enter new grid size (max. 100):');
        totalBoxes = changeGrid * changeGrid;
        $("#drawing").empty();
        for(let i = 0; i < totalBoxes; i++) {
            let squares = $("<div>");
            squares.addClass('squares');
            $("#drawing").append(squares);
        }
        $("#drawing").css({
            'grid-template-columns': `repeat(${changeGrid}, 1fr)`,
            'grid-template-rows': `repeat(${changeGrid}, 1fr)`
        });

        
        bindTouchMoveEvent();
    });

    let selectedColor = 'black';

    
    function bindTouchMoveEvent() {
        $(".squares").on('touchmove', function(event) {
            event.preventDefault();
            let touch = event.touches[0];
            let element = document.elementFromPoint(touch.clientX, touch.clientY);
            if ($(element).hasClass('squares')) {
                if (selectedColor === 'black') {
                    $(element).css({
                        'background-color': 'black',
                        'border': '1px solid white'
                    });
                } else {
                    $(element).css({
                        'background-color': 'red',
                        'border': '1px solid black'
                    });
                }
            }
        });
    }

    $("#selectColor").change(function() {
        selectedColor = $(this).val();
    });

    $("#reset").click(function() {
        $(".squares").css({
            'background-color': 'white',
            'border': 'none'
        });
    });

    
    bindTouchMoveEvent();

});
