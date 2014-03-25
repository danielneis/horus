function Afo(){

    this.calcular_evidencia = function(instancia) {
        //Instancia o nó AFO da rede bayesiana
        evidencia = "Não Informado";

        if(instancia != ""){
            if(instancia == "P"){
                evidencia = "Pai ou Mãe";
            }else if(instancia == "A"){
                evidencia = "Ambos";
            }else if(instancia == "N"){
                evidencia = "Nenhum";
            }
        }
        return evidencia;
    }
}
