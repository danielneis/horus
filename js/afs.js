function Afs() {

    // tmafd = tempo médio de atividade física diária
    this.calcular_tmafd = function(freq_esp_livre, freq_esp_coletivo, freq_esp_academia, dur_esp_livre, dur_esp_coletivo, dur_esp_academia) {

        tmafd = ((freq_esp_livre *  dur_esp_livre) + ( freq_esp_coletivo *  dur_esp_coletivo ) + (  freq_esp_academia * dur_esp_academia )) / 7;
        return Number(tmafd).toFixed(2);
    }

    this.calcular_evidencia = function(tmafd) {

        evidencia = "Não Informado";

        if (tmafd >= 60) {
            evidencia = "Adequada";
        }else if( tmafd >= 30 && tmafd < 60){
            evidencia = "Parcialmente Adequada";
        }else if( tmafd < 30 && tmafd > 0){
            evidencia = "Inadequada";
        }
        return evidencia;

    }
}
