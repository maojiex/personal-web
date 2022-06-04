$(document).ready(function(){
    $("table tbody tr").mouseover(function(){
        $(this).css('background-color','gray');
    });

    $("table tbody tr").mouseout(function(){
        $(this).css('background-color','transparent');
    });
})