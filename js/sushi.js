$(function(){

    $('#esportesLivresFreqLabel').text($('#esportesLivresFreq').val());
    $("#esportesLivresFreq").on('change', function(evnt) {
        $("#esportesLivresFreqLabel").text($('#esportesLivresFreq').val());
    });

    $('#esportesColFreqLabel').text($('#esportesColFreq').val());
    $("#esportesColFreq").on('change', function(evnt) {
        $("#esportesColFreqLabel").text($('#esportesColFreq').val());
    });
   
    $('#esportesAcadFreqLabel').text($('#esportesAcadFreq').val());
    $("#esportesAcadFreq").on('change', function(evnt) {
        $("#esportesAcadFreqLabel").text($('#esportesAcadFreq').val());
    });
});

