function Inferencia() {

    this.calculaProbInicialRiscoNut = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {

        var ENBP_RN = valor1;
        var ENPN_RN = valor2;
        var ENSP_RN = valor3;
        var ENO_RN  = valor4;

        var ENBP    = valor5;
        var ENPN    = valor6;
        var ENSP    = valor7;
        var ENO     = valor8;

        return ((ENBP*ENBP_RN)+(ENPN*ENPN_RN)+(ENSP*ENSP_RN)+(ENO*ENO_RN));
    }

    this.calculaProbInicialIMC = function(valor1, valor2, valor3, valor4, valor5, valor6) {

        RNB_IMC = valor1;
        RNM_IMC = valor2;
        RNE_IMC = valor3;

        RNB     = valor4;
        RNM     = valor5;
        RNE     = valor6;

        return ((RNB*RNB_IMC)+(RNM*RNM_IMC)+(RNE*RNE_IMC));
    }

    this.calculaProbInicialCA = function(valor1, valor2, valor3, valor4, valor5, valor6) {
        RNB_CA = valor1;
        RNM_CA = valor2;
        RNE_CA = valor3;

        RNB    = valor4;
        RNM    = valor5;
        RNE    = valor6;

        return ((RNB*RNB_CA)+(RNM*RNM_CA)+(RNE*RNE_CA));
    }

    this.calculaProbInicialRiscoDoencaCronica = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
        ENBP_RC = valor1;
        ENPN_RC = valor2;
        ENSP_RC = valor3;
        ENO_RC  = valor4;

        ENBP    = valor5;
        ENPN    = valor6;
        ENSP    = valor7;
        ENO     = valor8;

        return ((ENBP*ENBP_RC)+(ENPN*ENPN_RC)+(ENSP*ENSP_RC)+(ENO*ENO_RC));
    }

    this.calculaProbInicialAtivFisicaSemanal = function(valor1, valor2, valor3, valor4) {
        //CÁLCULA PROBABILIDADE INICIAL DO NÓ ATIVIDADE FÍSICA SEMANAL
        RDCA_AFS = valor1;
        RDCP_AFS = valor2;
        RDCA     = valor3;
        RDCP     = valor4;

        //echo "((RDCA*RDCA_AFS)+(RDCP*RDCP_AFS))<br>";
        return ((RDCA*RDCA_AFS)+(RDCP*RDCP_AFS));
    }

    this.calculaProbInicialAscendFamObesid = function(valor1, valor2, valor3, valor4) {
        //CÁLCULA PROBABILIDADE INICIAL DO NÓ ASCENDENCIA FAMILIAR DE OBESIDADE
        RDCA_AFO = valor1;
        RDCP_AFO = valor2;
        RDCA     = valor3;
        RDCP     = valor4;

        return ((RDCA*RDCA_AFO)+(RDCP*RDCP_AFO));
    }

    this.calculaProbInicialPA = function(valor1, valor2, valor3, valor4) {
        RDCA_PA = valor1;
        RDCP_PA = valor2;
        RDCA    = valor3;
        RDCP    = valor4;

        return ((RDCA*RDCA_PA)+(RDCP*RDCP_PA));
    }

    this.define_idade = function(idade_r) {
        /*
           0 - Nenhuma das demais
           1 - escolar 1
           2 - escolar 2
           3 - adolescente
         */

        idade_c = 0;

        if((idade_r >= 6) && (idade_r <= 8)){
            idade_c = 1;
        }else if((idade_r > 8) && (idade_r <= 13)){
            idade_c = 2;
        }else if(idade_r > 13){
            idade_c = 3;
        }

        return idade_c;

    }	

    //Retorna um inteiro informando qual categoria de atividade que  o indivíduo se encontra
    this.define_atfs = function(evidencia_afs) {

        atfs = 0;

        if((evidencia_afs == "Inadequada") || (evidencia_afs == "Não Informado")){
            atfs = 1;
        }else if((evidencia_afs == "Parcialmente Adequada")){
            atfs = 2;
        }else if((evidencia_afs == "Adequada")){
            atfs = 3;
        }

        return atfs;

    }

    this.define_sexo = function(sexo) {
        sexo_c = 0;

        if (sexo == "M") {
            sexo_c = 1;
        } else if (sexo == "F") {
            sexo_c = 2;
        }
        return sexo_c;

    }

    this.define_maior_probabilidade = function(prob_final_baixoPeso, prob_final_pesoNormal, prob_final_sobrepeso, prob_final_obesidade, atfs, idade_c, sexo_c) {
        //Retorna um inteiro informando qual categoria foi a que teve a maior probabilidade
        /*
           0 - Nenhuma das demais
           1 - Peso Normal e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 1
           2 - Peso Normal e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 2
           3 - Peso Normal e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e masculino
           4 - Peso Normal e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e feminino
           5 - Peso Normal e Atividade Física Semanal = Adequado e escolar 1
           6 - Peso Normal e Atividade Física Semanal = Adequado e escolar 2
           7 - Peso Normal e Atividade Física Semanal = Adequado e adolescente e masculino
           8 - Peso Normal e Atividade Física Semanal = Adequado e adolescente e feminino
           5 - Baixo Peso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 1
           6 - Baixo Peso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 2
           7 - Baixo Peso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e masculino
           8 - Baixo Peso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e feminino
           9 - Sobrepeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 1
           10 - Sobrepeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 2
           11 - Sobrepeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e masculino
           12 - Sobrepeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e feminino
           13 - Obeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 1
           14 - Obeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e escolar 2
           15 - Obeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e masculino
           16 - Obeso e Atividade Física Semanal = Parc. Adequado ou Inadequado(Sedentário) e adolescente e feminino
         */
        retorno = 0;

        if ((prob_final_baixoPeso > prob_final_pesoNormal) &&
            (prob_final_baixoPeso > prob_final_sobrepeso) &&
            (prob_final_baixoPeso > prob_final_obesidade)) {

            if(idade_c == 1){
                if(sexo_c == 1){
                    retorno = 1;
                }else{
                    retorno = 2;
                }
            }else if(idade_c == 2){
                if(sexo_c == 1){
                    retorno = 3;
                }else{
                    retorno = 4;
                }
            }else if(idade_c == 3){
                if(sexo_c == 1){
                    retorno = 5;
                }else{
                    retorno = 6;
                }
            }

        } else if ((prob_final_pesoNormal > prob_final_baixoPeso) &&
                   (prob_final_pesoNormal > prob_final_sobrepeso) &&
                   (prob_final_pesoNormal > prob_final_obesidade)) {

            if(atfs == 3){
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 1;
                    }else{
                        retorno = 2;
                    }
                }else if(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 3;
                    }else{
                        retorno = 4;
                    }
                }else if(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 5;
                    }else{
                        retorno = 6;
                    }
                }
            } else if ((atfs == 1) || (atfs == 2)){
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 7;
                    }else{
                        retorno = 8;
                    }
                }else if(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 9;
                    }else{
                        retorno = 10;
                    }
                }else if(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 11;
                    }else{
                        retorno = 12;
                    }
                }
            }

        } else if((prob_final_sobrepeso > prob_final_baixoPeso) &&
                  (prob_final_sobrepeso > prob_final_pesoNormal) &&
                  (prob_final_sobrepeso > prob_final_obesidade)) {

            if(atfs == 1){
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 13;
                    }else{
                        retorno = 14;
                    }
                }else if(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 15;
                    }else{
                        retorno = 16;
                    }
                }else if(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 17;
                    }else{
                        retorno = 18;
                    }
                }
            }else if(atfs == 2){
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 7;
                    }else{
                        retorno = 8;
                    }
                }else if(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 9;
                    }else{
                        retorno = 10;
                    }
                }else if(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 11;
                    }else{
                        retorno = 12;
                    }
                }
            } else if (atfs == 3){
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 19;
                    }else{
                        retorno = 20;
                    }
                }else if(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 21;
                    }else{
                        retorno = 22;
                    }
                }else if(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 23;
                    }else{
                        retorno = 24;
                    }
                }
            }

        }else if ((prob_final_obesidade > prob_final_baixoPeso) &&
                  (prob_final_obesidade > prob_final_pesoNormal) &&
                  (prob_final_obesidade > prob_final_sobrepeso)) {

            if(idade_c == 3){
                if(atfs == 1){
                    if(sexo_c == 1){
                        retorno = 25;
                    }else{
                        retorno = 26;
                    }
                }else if(atfs == 2){
                    if(sexo_c == 1){
                        retorno = 17;
                    }else{
                        retorno = 18;
                    }
                }else if(atfs == 3){
                    if(sexo_c == 1){
                        retorno = 11;
                    }else{
                        retorno = 12;
                    }
                }
            }else if(idade_c == 1){
                if(sexo_c == 1){
                    retorno = 19;
                }else{
                    retorno = 20;
                }
            }else if(idade_c == 2){
                if(sexo_c == 1){
                    retorno = 21;
                }else{
                    retorno = 22;
                }
            }
        }
        return retorno;

    }

    this.calculaTotalCalorico = function(categoria) {
        /*
           1 - 1800
           2 - 2000
           3 - 2500
           4 - 2200
           5 - 1980
           6 - 2200
           7 - 2750
           8 - 2420
           9 - 1440
           10 - 1600
           11 - 2000
           12 - 1760
           13 - 1350
           14 - 1500
           15 - 1875
           16 - 1650
         */
        total = 0;

        if(categoria == 1){
            total = 1638;

        }else if(categoria == 2){
            total = 1488;

        }else if(categoria == 3){
            total = 2170;

        }else if(categoria == 4){
            total = 1995;

        }else if(categoria == 5){
            total = 3135;

        }else if(categoria == 6){
            total = 2465;

        }else if(categoria == 7){
            total = 1392;

        }else if(categoria == 8){
            total = 1265;

        }else if(categoria == 9){
            total = 1845;

        }else if(categoria == 10){
            total = 1696;

        }else if(categoria == 11){
            total = 2665;

        }else if(categoria == 12){
            total = 2095;

        }else if(categoria == 13){
            total = 1310;

        }else if(categoria == 14){
            total = 1190;

        }else if(categoria == 15){
            total = 1736;

        }else if(categoria == 16){
            total = 1596;

        }else if(categoria == 17){
            total = 2508;

        }else if(categoria == 18){
            total = 1972;

        }else if(categoria == 19){
            total = 1474;

        }else if(categoria == 20){
            total = 1339;

        }else if(categoria == 21){
            total = 1953;

        }else if(categoria == 22){
            total = 1796;

        }else if(categoria == 23){
            total = 2822;

        }else if(categoria == 24){
            total = 2219;

        }else if(categoria == 25){
            total = 2351;

        }else if(categoria == 26){
            total = 1849;
        }
        return total;

    }
}
