$(function() {

    function Ca() {

        function Definir_raca(&str_raca, raca){
            //Retorna a string do raca
            str_raca = "";
            if(raca == "B"){
                str_raca = "Branco";
            }else if (raca == "N"){
                str_raca = "Negro";
            }else{
                str_raca = "Indefinido";
            }      
        }

        function Definir_sexo(&str_sexo, sexo){
            //Retorna a string do sexo
            str_sexo = "";
            if(sexo == "M"){
                str_sexo = "Masculino";
            }else if (sexo == "F"){
                str_sexo = "Feminino";
            }else{
                str_sexo = "Indefinido";
            }      
        }

        function Calcular_percentil90_masc_branco(idade){
            //Calcula o percentil 90 masculino e branco
            valor_percentil = 0;
            valor_percentil = -25.197770 + (18.436840 * idade) - (0.840013 * pow(idade,2)) + (0.009992 * pow(idade,3));
            return number_format(valor_percentil, "2",".","");
        }

        function Calcular_percentil90_fem_branco(idade){
            //Calcula o percentil 90 feminino e branco
            valor_percentil = 0;
            valor_percentil = 15.037991 + (8.382880 * idade) - (0.143351 * pow(idade,2)) - (0.005258 * pow(idade,3));
            return number_format(valor_percentil, "2",".","");
        }

        function Calcular_percentil90_masc_negro(idade){
            //Calcula o percentil 90 masculino e negro
            valor_percentil = 0;
            valor_percentil = 4.723515 + (12.436098 * idade) - (0.675573 * pow(idade,2)) + (0.015062 * pow(idade,3));
            return number_format(valor_percentil, "2",".","");
        }

        function Calcular_percentil90_fem_negro(idade){
            //Calcula o percentil 90 feminino e negro
            valor_percentil = 0;
            valor_percentil = 1.597062 + (13.842057 * idade) - (0.812199 * pow(idade,2)) + (0.019377 * pow(idade,3));
            return number_format(valor_percentil, "2",".","");
        }

        function calcular_evidencia_ca(ca_valor, percentil90){
            //Instancia o nó CA da rede bayesiana
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
});
