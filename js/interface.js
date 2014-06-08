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

    $('#idadeLabel').text($('#idade').val() + ' anos completos');
    $("#idade").on('change', function(evnt) {
        $("#idadeLabel").text($('#idade').val() + '  anos completos');
    });

    $('#pesoLabel').text($('#peso').val() + ' kilogramas');
    $("#peso").on('change', function(evnt) {
        $("#pesoLabel").text($('#peso').val() + ' kilogramas');
    });

    $('#alturaLabel').text($('#altura').val() + ' centímetros');
    $("#altura").on('change', function(evnt) {
        $("#alturaLabel").text($('#altura').val() + ' centímeros');
    });

    $('#circunferencia_abdominalLabel').text($('#circunferencia_abdominal').val() + ' centímetros');
    $("#circunferencia_abdominal").on('change', function(evnt) {
        $("#circunferencia_abdominalLabel").text($('#circunferencia_abdominal').val() + ' centímeros');
    });

    $('#pressao_sistolicaLabel').text($('#pressao_sistolica').val() + ' mmHg');
    $("#pressao_sistolica").on('change', function(evnt) {
        $("#pressao_sistolicaLabel").text($('#pressao_sistolica').val() + ' mmHg');
    });

    $('#pressao_diastolicaLabel').text($('#pressao_diastolica').val() + ' mmHg');
    $("#pressao_diastolica").on('change', function(evnt) {
        $("#pressao_diastolicaLabel").text($('#pressao_diastolica').val() + ' mmHg');
    });

    $('#navbar').affix({offset: {top: 55}});
});
