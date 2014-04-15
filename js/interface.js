$(function(){

    // labels dos sliders
    $('#esportesLivresFreqLabel').text($('#esportesLivresFreq').val() + ' dias por semana');
    $("#esportesLivresFreq").on('change', function(evnt) {
        $("#esportesLivresFreqLabel").text($('#esportesLivresFreq').val() + ' dias por semana');
    });

    $('#esportesColFreqLabel').text($('#esportesColFreq').val() + ' dias por semana');
    $("#esportesColFreq").on('change', function(evnt) {
        $("#esportesColFreqLabel").text($('#esportesColFreq').val() + ' dias por semana');
    });

    $('#esportesAcadFreqLabel').text($('#esportesAcadFreq').val() + ' dias por semana');
    $("#esportesAcadFreq").on('change', function(evnt) {
        $("#esportesAcadFreqLabel").text($('#esportesAcadFreq').val() + ' dias por semana');
    });


    $('#navbar').affix({offset: {top: 55}});
});
