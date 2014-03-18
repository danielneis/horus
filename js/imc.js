class Imc {

    //Retorna a string do sexo
    function Definir_sexo(sexo){

        if (sexo == "M") {

            str_sexo = "Masculino";

        } else if (sexo == "F") {

            str_sexo = "Feminino";

        }else{

            str_sexo = "Indefinido";

        }      
        return str_sexo;

    }

    //Calcula o IMC Índice de Massa Corporal
    function Calcular_imc(peso, altura){

        valor_imc = (peso/ (pow(altura,2)/10000));

        return number_format(valor_imc, "2",".","");

    }

    //Calcula o percentil 5
    function Calcular_percentil5_fem(idade) {

        valor_percentil = 11.009555 + (0.229939 * idade) + (0.014901 * pow(idade,2)) - (0.000542 * pow(idade,3));

        return number_format(valor_percentil, "2",".","");
    }

    //Calcula o percentil 85
    function Calcular_percentil85_fem(idade) {

        valor_percentil = 9.336828 + (1.084724 * idade) + (0.014508 * pow(idade,2)) - (0.001354 * pow(idade,3));

        return number_format(valor_percentil, "2",".","");

    }

    //Calcula o percentil 95
    function Calcular_percentil95_fem(idade) {

        valor_percentil = 5.340034 + (2.269024 * idade) - (0.044547 * pow(idade,2)) - (0.000236 * pow(idade,3)); 

        return number_format(valor_percentil, "2",".","");

    }

    //Calcula o percentil 5
    function Calcular_percentil5_masc(idade) {

        valor_percentil = (1 / (0.086407 - 0.001677 * idade));

        return number_format(valor_percentil, "2",".","");

    }

    //Calcula o percentil 85
    function Calcular_percentil85_masc(idade) {

        valor_percentil = 14.936461 - (0.067946 * idade) + (0.072673 * pow(idade,2)) - (0.001965 * pow(idade,3));

        return number_format(valor_percentil, "2",".","");

    }

    //Calcula o percentil 95
    function Calcular_percentil95_masc(idade){

        valor_percentil = 10.998531 + (1.092658 * idade) + (0.018761 * pow(idade,2)) - (0.00145 * pow(idade,3));

        return number_format(valor_percentil, "2",".","");

    }

    function calcular_evidencia_imc(imc, percentil5, percentil85, percentil95){

        evidencia = "Não Informado";

        if (imc > 0 && percentil5 > 0 && percentil85 > 0 && percentil95 > 0){                  

            if(imc <= percentil5 ){

                evidencia = "Abaixo do Peso";

            }else if(imc > percentil5 && imc < percentil85){

                evidencia = "Peso Normal";

            }else if(imc >= percentil85 && imc < percentil95){

                evidencia = "Sobrepeso";

            }else if(imc >= percentil95){

                evidencia = "Obesidade";

            }
        }  
    }
}
