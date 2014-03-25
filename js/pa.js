function Pa() {

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

    this.Calcular_percentil5_masc_altura = function(idade){
        valor_altura = 111.807290 - (5.455520*idade) + (1.002352 * Math.pow(idade,2)) - (0.029810 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil10_masc_altura = function(idade){
        valor_altura = 114.950381 - (6.027413*idade) + (1.075998* Math.pow(idade,2))-(0.032156 * Math.pow (idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil25_masc_altura = function(idade){
        valor_altura = 104.866017 - (2.784005*idade) + (0.843496 * Math.pow(idade,2)) - (0.026793 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil50_masc_altura = function(idade){
        valor_altura = 110.612544 - (3.638551*idade) + (0.944992 * Math.pow(idade,2)) - (0.029831 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil75_masc_altura = function(idade){
        valor_altura =  109.597167 - (3.033272*idade) + (0.927090 * Math.pow(idade,2)) - (0.029726 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil90_masc_altura = function(idade){
        valor_altura = 113.841780 - (3.782581*idade) + (1.019015 * Math.pow(idade,2)) - (0.032491 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil5_fem_altura = function(idade){
        valor_altura = 82.401666 + (2.099209*idade) + (0.441024 * Math.pow(idade,2)) - (0.018686 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil10_fem_altura = function(idade){
        valor_altura = 77.089934 + (3.75106*idade) + (0.331861* Math.pow(idade,2))-(0.016424 * Math.pow (idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil25_fem_altura = function(idade){
        valor_altura = 69.597852 + (6.371672*idade) + (0.139472 * Math.pow(idade,2)) - (0.011899 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil50_fem_altura = function(idade){
        valor_altura = 75.004428 + (5.781109*idade) + (0.209599 * Math.pow(idade,2)) - (0.014140 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil75_fem_altura = function(idade){
        valor_altura =  66.013873 + (9.127337*idade) - (0.055071 * Math.pow(idade,2)) - (0.007248 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.Calcular_percentil90_fem_altura = function(idade) {
        valor_altura = 67.027045 + (9.168208*idade) - (0.018055 * Math.pow(idade,2)) - (0.008966 * Math.pow(idade,3));
        return Number(valor_altura).toFixed(2);
    }

    this.estabelecer_altura = function(alt, percentil5_alt, percentil10_alt, percentil25_alt, percentil50_alt, percentil75_alt, percentil90_alt){
        evidencia_altura = 0;

        if(alt <= percentil5_alt){
            evidencia_altura = 5;
        }else if(alt >  percentil5_alt && alt <= percentil10_alt){
            evidencia_altura = 10;
        }else if(alt >  percentil10_alt && alt <= percentil25_alt){
            evidencia_altura = 25;
        }else if(alt >  percentil25_alt && alt <= percentil50_alt){
            evidencia_altura = 50;
        }else if(alt >  percentil50_alt && alt <= percentil75_alt){
            evidencia_altura = 75;
        }else if(alt >  percentil75_alt && alt <= percentil90_alt){
            evidencia_altura = 90;
        }else if(alt >  percentil90_alt){
            evidencia_altura= 95;
        }else{
            evidencia_altura = 0;
        }

        return evidencia_altura;

    }

    this.Calcular_percentil5_masc_sistolica = function(idade){
        valor_pressao = 107.390498 - (1.911958*idade) + (0.288600 * Math.pow(idade,2)) - (0.006346 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil10_masc_sistolica = function(idade){
        valor_pressao = 108.617272 - (1.923447*idade) + (0.289100 * Math.pow(idade,2)) - (0.006346 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil25_masc_sistolica = function(idade){
        valor_pressao = 112.475968 - (2.449902*idade) + (0.328616 * Math.pow(idade,2)) - (0.007252 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil50_masc_sistolica = function(idade){
        valor_pressao = 118.284328 - (3.529915*idade) + (0.420746 * Math.pow(idade,2)) - (0.009713 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil75_masc_sistolica = function(idade){
        valor_pressao = 112.388722 - (1.372257*idade) + (0.225885 * Math.pow(idade,2)) - (0.004144 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil90_masc_sistolica = function(idade){
        valor_pressao = 117.179154 - (2.178211*idade) + (0.283550 * Math.pow(idade,2)) - (0.005439 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil95_masc_sistolica = function(idade){
        valor_pressao = 110.998224 - (0.334425*idade) + (0.129593 * Math.pow(idade,2)) - (0.001295 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil5_masc_diastolica = function(idade){
        valor_pressao = 36.170385 + (9.052633*idade) - (0.761683 * Math.pow(idade,2)) + (0.022404 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil10_masc_diastolica = function(idade){
        valor_pressao = 35.836941 + (8.891701*idade) - (0.709513 * Math.pow(idade,2)) + (0.019943 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil25_masc_diastolica = function(idade){
        valor_pressao = 41.850594 + (7.498649*idade) - (0.598457 * Math.pow(idade,2)) + (0.017224 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil50_masc_diastolica = function(idade){
        valor_pressao = 42.850594 + (7.498649*idade) - (0.598457 * Math.pow(idade,2)) + (0.017224 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil75_masc_diastolica = function(idade){
        valor_pressao = 43.850594 + (7.498649*idade) - (0.598457 * Math.pow(idade,2)) + (0.017224 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil90_masc_diastolica = function(idade){
        valor_pressao = 42.402375 + (8.305787*idade) - (0.684038 * Math.pow(idade,2)) + (0.019943 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil95_masc_diastolica = function(idade){
        valor_pressao = 38.113997 + (9.433770*idade) - (0.761627 * Math.pow(idade,2)) + (0.021497 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil5_fem_sistolica = function(idade){
        valor_pressao = 93.395826 + (1.317423*idade) + (0.102620 * Math.pow(idade,2)) - (0.004792 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil10_fem_sistolica = function(idade){
        valor_pressao = 108.661672 - (2.787768*idade) + (0.461871 * Math.pow(idade,2)) - (0.01476 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil25_fem_sistolica = function(idade){
        valor_pressao = 99.408591 + (0.126041*idade) + (0.213789 * Math.pow(idade,2)) - (0.008159 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil50_fem_sistolica = function(idade){
        valor_pressao = 106.261516 - (1.388519*idade) + (0.341436 * Math.pow(idade,2)) - (0.011526 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil75_fem_sistolica = function(idade){
        valor_pressao = 112.661672 - (2.787768*idade) + (0.461871 * Math.pow(idade,2)) - (0.014763 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil90_fem_sistolica = function(idade){
        valor_pressao = 105.494061 - (0.411903*idade) + (0.253802 * Math.pow(idade,2)) - (0.009065 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil95_fem_sistolica = function(idade){
        valor_pressao = 114.234210 - (2.678174*idade) + (0.447996 * Math.pow(idade,2)) - (0.014245 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil5_fem_diastolica = function(idade){
        valor_pressao = 62.019314 + (0.591853*idade) + (0.093740 * Math.pow(idade,2)) - (0.004274 * Math.pow(idade,3));
        return  Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil10_fem_diastolica = function(idade){
        valor_pressao = 58.558775 + (1.889888*idade) - (0.047120 * Math.pow(idade,2)) + (0.000389 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil25_fem_diastolica = function(idade){
        valor_pressao = 67.161172 - (0.327228*idade) + (0.133700 * Math.pow(idade,2)) - (0.004274 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil50_fem_diastolica = function(idade){
        valor_pressao = 68.161172 - (0.327228*idade) + (0.133700 * Math.pow(idade,2)) - (0.004274 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil75_fem_diastolica = function(idade){
        valor_pressao = 61.527473 + (1.631868*idade) - (0.027473 * Math.pow(idade,2));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil90_fem_diastolica = function(idade){
        valor_pressao = 65.019314 + (0.591853*idade) + (0.093740 * Math.pow(idade,2)) - (0.004274 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.Calcular_percentil95_fem_diastolica = function(idade){
        valor_pressao = 70.161172 - (0.327228*idade) + (0.133700 * Math.pow(idade,2)) - (0.004274 * Math.pow(idade,3));
        return Number(valor_pressao).toFixed(2);
    }

    this.calcular_evidencia = function(pa_sist ,pa_diast ,pa_sist_usuario, pa_diast_usuario){
        evidencia = "Não Informado";
        console.log(pa_sist ,pa_diast ,pa_sist_usuario, pa_diast_usuario);

        if(pa_sist > 0 && pa_diast > 0 && pa_sist_usuario > 0 && pa_diast_usuario > 0){

            if(pa_sist_usuario >=  pa_sist || pa_diast_usuario >= pa_diast ){
                evidencia = "Alterada";
            }else if(pa_sist_usuario < pa_sist || pa_diast_usuario < pa_diast ){
                evidencia = "Normal";
            }
        }
        return evidencia;
    }
};
