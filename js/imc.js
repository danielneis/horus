function Imc() {

    this.Definir_sexo = function(sexo){

        if (sexo == "M") {

            str_sexo = "Masculino";

        } else if (sexo == "F") {

            str_sexo = "Feminino";

        }else{

            str_sexo = "Indefinido";

        }      
        return str_sexo;

    }

    this.Calcular_imc = function(peso, altura) {

        valor_imc = peso / Math.pow(altura,2);

        return Number(valor_imc).toFixed(2);

    }

    this.Calcular_percentil5_fem = function(idade) {

        valor_percentil = 11.009555 + (0.229939 * idade) + (0.014901 * Math.pow(idade,2)) - (0.000542 * Math.pow(idade,3));

        return Number(valor_percentil).toFixed(2);
    }

    this.Calcular_percentil85_fem = function(idade) {

        valor_percentil = 9.336828 + (1.084724 * idade) + (0.014508 * Math.pow(idade,2)) - (0.001354 * Math.pow(idade,3));

        return Number(valor_percentil).toFixed(2);

    }

    this.Calcular_percentil95_fem = function(idade) {

        valor_percentil = 5.340034 + (2.269024 * idade) - (0.044547 * Math.pow(idade,2)) - (0.000236 * Math.pow(idade,3)); 

        return Number(valor_percentil).toFixed(2);

    }

    this.Calcular_percentil5_masc = function(idade) {

        valor_percentil = (1 / (0.086407 - 0.001677 * idade));

        return Number(valor_percentil).toFixed(2);

    }

    this.Calcular_percentil85_masc = function(idade) {

        valor_percentil = 14.936461 - (0.067946 * idade) + (0.072673 * Math.pow(idade,2)) - (0.001965 * Math.pow(idade,3));

        return Number(valor_percentil).toFixed(2);

    }

    this.Calcular_percentil95_masc = function(idade){

        valor_percentil = 10.998531 + (1.092658 * idade) + (0.018761 * Math.pow(idade,2)) - (0.00145 * Math.pow(idade,3));

        return Number(valor_percentil).toFixed(2);

    }

    this.calcular_evidencia_imc = function (imc, percentil5, percentil85, percentil95){

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
        return evidencia;
    }
}
