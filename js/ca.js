function Ca() {

    //Retorna a string do raca
    function Definir_raca(raca){
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

    //Retorna a string do sexo
    function Definir_sexo(sexo){
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

    //Calcula o percentil 90 masculino e branco
    function Calcular_percentil90_masc_branco(idade){
        valor_percentil = 0;
        valor_percentil = -25.197770 + (18.436840 * idade) - (0.840013 * pow(idade,2)) + (0.009992 * pow(idade,3));
        return number_format(valor_percentil, "2",".","");
    }

    //Calcula o percentil 90 feminino e branco
    function Calcular_percentil90_fem_branco(idade){
        valor_percentil = 0;
        valor_percentil = 15.037991 + (8.382880 * idade) - (0.143351 * pow(idade,2)) - (0.005258 * pow(idade,3));
        return number_format(valor_percentil, "2",".","");
    }

    //Calcula o percentil 90 masculino e negro
    function Calcular_percentil90_masc_negro(idade){
        valor_percentil = 0;
        valor_percentil = 4.723515 + (12.436098 * idade) - (0.675573 * pow(idade,2)) + (0.015062 * pow(idade,3));
        return number_format(valor_percentil, "2",".","");
    }

    //Calcula o percentil 90 feminino e negro
    function Calcular_percentil90_fem_negro(idade){
        valor_percentil = 0;
        valor_percentil = 1.597062 + (13.842057 * idade) - (0.812199 * pow(idade,2)) + (0.019377 * pow(idade,3));
        return number_format(valor_percentil, "2",".","");
    }

    function calcular_evidencia_ca(ca_valor, percentil90){
        evidencia = "Não Informado";

        if (ca_valor > 0 && percentil90 > 0){
            if(ca >= percentil90){
                evidencia = "Alterada";
            }else if(ca < percentil90){
                evidencia = "Adequada";
            }
        }
        return evidencia;
    }
}
