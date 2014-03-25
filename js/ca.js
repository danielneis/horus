function Ca() {

    this.Definir_raca = function(raca){
        str_raca = "";
        if(raca == "B"){
            str_raca = "Branco";
        }else if (raca == "N"){
            str_raca = "Negro";
        }else{
            str_raca = "Indefinido";
        }      
        return str_raca;
    }

    this.Definir_sexo = function(sexo){
        str_sexo = "";
        if(sexo == "M"){
            str_sexo = "Masculino";
        }else if (sexo == "F"){
            str_sexo = "Feminino";
        }else{
            str_sexo = "Indefinido";
        }      
        return str_sexo;
    }

    this.Calcular_percentil90_masc_branco = function(idade){
        valor_percentil = 0;
        valor_percentil = -25.197770 + (18.436840 * idade) - (0.840013 * Math.pow(idade,2)) + (0.009992 * Math.pow(idade,3));
        return Number(valor_percentil).toFixed(2);
    }

    this.Calcular_percentil90_fem_branco = function(idade){
        valor_percentil = 0;
        valor_percentil = 15.037991 + (8.382880 * idade) - (0.143351 * Math.pow(idade,2)) - (0.005258 * Math.pow(idade,3));
        return Number(valor_percentil).toFixed(2);
    }

    this.Calcular_percentil90_masc_negro = function(idade){
        valor_percentil = 0;
        valor_percentil = 4.723515 + (12.436098 * idade) - (0.675573 * Math.pow(idade,2)) + (0.015062 * Math.pow(idade,3));
        return Number(valor_percentil).toFixed(2);
    }

    this.Calcular_percentil90_fem_negro = function(idade){
        valor_percentil = 0;
        valor_percentil = 1.597062 + (13.842057 * idade) - (0.812199 * Math.pow(idade,2)) + (0.019377 * Math.pow(idade,3));
        return Number(valor_percentil).toFixed(2);
    }

    this.calcular_evidencia_ca = function(ca_valor, percentil90){
        evidencia = "Não Informado";

        if (ca_valor > 0 && percentil90 > 0){
            if(ca_valor >= percentil90){
                evidencia = "Alterada";
            }else if(ca_valor < percentil90){
                evidencia = "Adequada";
            }
        }
        return evidencia;
    }
}
