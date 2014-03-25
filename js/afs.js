function Afs() {

    function Instanciar_afs(tmafd, freq_esp_livre, freq_esp_coletivo, freq_esp_academia, dur_esp_livre, dur_esp_coletivo, dur_esp_academia) {

        evidencia = "Não Informado";
        // tmafd = tempo médio de atividade física diária
        tmafd = 0;
        tmafd = ((freq_esp_livre *  dur_esp_livre) + ( freq_esp_coletivo *  dur_esp_coletivo ) + (  freq_esp_academia * dur_esp_academia )) / 7;

        if(tmafd >= 60){
            evidencia = "Adequada";
        }else if( tmafd >= 30 && tmafd < 60){
            evidencia = "Parcialmente Adequada";
        }else if( tmafd < 30 && tmafd > 0){
            evidencia = "Inadequada";
        }
        return Number(tmafd, 2);

    }
}
