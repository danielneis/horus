$(function() {

    function Inferencia() {

        this.calculaProbInicialRiscoNut = calculaProbInicialRiscoNut;
        function calculaProbInicialRiscoNut(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {

            //CÁLCULA PROBABILIDADE INICIAL DO NÓ RISCO NUTRICIONAL
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

        function calculaProbInicialIMC(valor1, valor2, valor3, valor4, valor5, valor6)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ IMC
            RNB_IMC = valor1;
            RNM_IMC = valor2;
            RNE_IMC = valor3;

            RNB     = valor4;
            RNM     = valor5;
            RNE     = valor6;

            return ((RNB*RNB_IMC)+(RNM*RNM_IMC)+(RNE*RNE_IMC));
        }

        function calculaProbInicialCA(valor1, valor2, valor3, valor4, valor5, valor6)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ CIRCUNFERENCIA ABDOMINAL
            RNB_CA = valor1;
            RNM_CA = valor2;
            RNE_CA = valor3;

            RNB    = valor4;
            RNM    = valor5;
            RNE    = valor6;

            return ((RNB*RNB_CA)+(RNM*RNM_CA)+(RNE*RNE_CA));
        }

        function calculaProbInicialRiscoDoencaCronica(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ RISCO DE DOENÇA CRÔNICA
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

        function calculaProbInicialAtivFisicaSemanal(valor1, valor2, valor3, valor4)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ ATIVIDADE FÍSICA SEMANAL
            RDCA_AFS = valor1;
            RDCP_AFS = valor2;
            RDCA     = valor3;
            RDCP     = valor4;

            //echo "((RDCA*RDCA_AFS)+(RDCP*RDCP_AFS))<br>";
            return ((RDCA*RDCA_AFS)+(RDCP*RDCP_AFS));
        }

        function calculaProbInicialAscendFamObesid(valor1, valor2, valor3, valor4)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ ASCENDENCIA FAMILIAR DE OBESIDADE
            RDCA_AFO = valor1;
            RDCP_AFO = valor2;
            RDCA     = valor3;
            RDCP     = valor4;

            return ((RDCA*RDCA_AFO)+(RDCP*RDCP_AFO));
        }

        function calculaProbInicialPA(valor1, valor2, valor3, valor4)
        {
            //CÁLCULA PROBABILIDADE INICIAL DO NÓ PRESSÃO ARTERIAL
            RDCA_PA = valor1;
            RDCP_PA = valor2;
            RDCA    = valor3;
            RDCP    = valor4;

            return ((RDCA*RDCA_PA)+(RDCP*RDCP_PA));
        }

        function define_idade(&idade_c, idade_r)
        {
            //Retorna um inteiro informando em qual faixa de idade o indivíduo se encontra
            /*
               0 - Nenhuma das demais
               1 - escolar 1
               2 - escolar 2
               3 - adolescente
             */

            idade_c = 0;

            if((idade_r >= 6) && (idade_r <= 8)){
                idade_c = 1;
            }elseif((idade_r > 8) && (idade_r <= 13)){
                idade_c = 2;
            }elseif(idade_r > 13){
                idade_c = 3;
            }

        }	


        function define_atfs(&atfs, evidencia_afs)
        {
            //Retorna um inteiro informando qual categoria de atividade que  o indivíduo se encontra

            atfs = 0;

            if((evidencia_afs == "Inadequada") || (evidencia_afs == "Não Informado")){
                atfs = 1;
            }elseif((evidencia_afs == "Parcialmente Adequada")){
                atfs = 2;
            }elseif((evidencia_afs == "Adequada")){
                atfs = 3;
            }

        }

        function define_sexo(&sexo_c, sexo_r)
        {
            sexo_c = 0;

            if(sexo_r == "Masculino"){
                sexo_c = 1;
            }elseif(sexo_r == "Feminino"){
                sexo_c = 2;
            }

        }

        function define_maior_probabilidade(&retorno, prob_final_baixoPeso, prob_final_pesoNormal, prob_final_sobrepeso, prob_final_obesidade, atfs, idade_c, sexo_c)
        {
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

            if((prob_final_baixoPeso > prob_final_pesoNormal) && (prob_final_baixoPeso > prob_final_sobrepeso) && (prob_final_baixoPeso > prob_final_obesidade))
            {
                if(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 1;
                    }else{
                        retorno = 2;
                    }
                }elseif(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 3;
                    }else{
                        retorno = 4;
                    }
                }elseif(idade_c == 3){
                    if(sexo_c == 1){
                        retorno = 5;
                    }else{
                        retorno = 6;
                    }
                }


            }elseif((prob_final_pesoNormal > prob_final_baixoPeso) && (prob_final_pesoNormal > prob_final_sobrepeso) && (prob_final_pesoNormal > prob_final_obesidade))
            {
                if(atfs == 3){
                    if(idade_c == 1){
                        if(sexo_c == 1){
                            retorno = 1;
                        }else{
                            retorno = 2;
                        }
                    }elseif(idade_c == 2){
                        if(sexo_c == 1){
                            retorno = 3;
                        }else{
                            retorno = 4;
                        }
                    }elseif(idade_c == 3){
                        if(sexo_c == 1){
                            retorno = 5;
                        }else{
                            retorno = 6;
                        }
                    }
                }elseif((atfs == 1) || (atfs == 2)){
                    if(idade_c == 1){
                        if(sexo_c == 1){
                            retorno = 7;
                        }else{
                            retorno = 8;
                        }
                    }elseif(idade_c == 2){
                        if(sexo_c == 1){
                            retorno = 9;
                        }else{
                            retorno = 10;
                        }
                    }elseif(idade_c == 3){
                        if(sexo_c == 1){
                            retorno = 11;
                        }else{
                            retorno = 12;
                        }
                    }
                }

            }elseif((prob_final_sobrepeso > prob_final_baixoPeso) && (prob_final_sobrepeso > prob_final_pesoNormal) && (prob_final_sobrepeso > prob_final_obesidade))
            {
                if(atfs == 1){
                    if(idade_c == 1){
                        if(sexo_c == 1){
                            retorno = 13;
                        }else{
                            retorno = 14;
                        }
                    }elseif(idade_c == 2){
                        if(sexo_c == 1){
                            retorno = 15;
                        }else{
                            retorno = 16;
                        }
                    }elseif(idade_c == 3){
                        if(sexo_c == 1){
                            retorno = 17;
                        }else{
                            retorno = 18;
                        }
                    }
                }elseif(atfs == 2){
                    if(idade_c == 1){
                        if(sexo_c == 1){
                            retorno = 7;
                        }else{
                            retorno = 8;
                        }
                    }elseif(idade_c == 2){
                        if(sexo_c == 1){
                            retorno = 9;
                        }else{
                            retorno = 10;
                        }
                    }elseif(idade_c == 3){
                        if(sexo_c == 1){
                            retorno = 11;
                        }else{
                            retorno = 12;
                        }
                    }
                }elseif(atfs == 3){
                    if(idade_c == 1){
                        if(sexo_c == 1){
                            retorno = 19;
                        }else{
                            retorno = 20;
                        }
                    }elseif(idade_c == 2){
                        if(sexo_c == 1){
                            retorno = 21;
                        }else{
                            retorno = 22;
                        }
                    }elseif(idade_c == 3){
                        if(sexo_c == 1){
                            retorno = 23;
                        }else{
                            retorno = 24;
                        }
                    }
                }

            }elseif((prob_final_obesidade > prob_final_baixoPeso) && (prob_final_obesidade > prob_final_pesoNormal) && (prob_final_obesidade > prob_final_sobrepeso))
            {
                if(idade_c == 3){
                    if(atfs == 1){
                        if(sexo_c == 1){
                            retorno = 25;
                        }else{
                            retorno = 26;
                        }
                    }elseif(atfs == 2){
                        if(sexo_c == 1){
                            retorno = 17;
                        }else{
                            retorno = 18;
                        }
                    }elseif(atfs == 3){
                        if(sexo_c == 1){
                            retorno = 11;
                        }else{
                            retorno = 12;
                        }
                    }
                }elseif(idade_c == 1){
                    if(sexo_c == 1){
                        retorno = 19;
                    }else{
                        retorno = 20;
                    }
                }elseif(idade_c == 2){
                    if(sexo_c == 1){
                        retorno = 21;
                    }else{
                        retorno = 22;
                    }
                }
            }

        }

        function calculaTotalCalorico(&total, categoria)
        {

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

            }elseif(categoria == 2){
                total = 1488;

            }elseif(categoria == 3){
                total = 2170;

            }elseif(categoria == 4){
                total = 1995;

            }elseif(categoria == 5){
                total = 3135;

            }elseif(categoria == 6){
                total = 2465;

            }elseif(categoria == 7){
                total = 1392;

            }elseif(categoria == 8){
                total = 1265;

            }elseif(categoria == 9){
                total = 1845;

            }elseif(categoria == 10){
                total = 1696;

            }elseif(categoria == 11){
                total = 2665;

            }elseif(categoria == 12){
                total = 2095;

            }elseif(categoria == 13){
                total = 1310;

            }elseif(categoria == 14){
                total = 1190;

            }elseif(categoria == 15){
                total = 1736;

            }elseif(categoria == 16){
                total = 1596;

            }elseif(categoria == 17){
                total = 2508;

            }elseif(categoria == 18){
                total = 1972;

            }elseif(categoria == 19){
                total = 1474;

            }elseif(categoria == 20){
                total = 1339;

            }elseif(categoria == 21){
                total = 1953;

            }elseif(categoria == 22){
                total = 1796;

            }elseif(categoria == 23){
                total = 2822;

            }elseif(categoria == 24){
                total = 2219;

            }elseif(categoria == 25){
                total = 2351;

            }elseif(categoria == 26){
                total = 1849;
            }

        }
    }
});
