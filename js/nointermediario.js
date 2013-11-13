$(function() {

        function NoIntermediario() {

            this.nome = "";
            this.categorias = [];

            this.calcula_Delta_Risco_Nut = calcula_Delta_Risco_Nut;
            function calcula_Delta_Risco_Nut(valor1, valor2, valor3, valor4, valor5, valor6) {

                delta                = 0;
                prob_cond1           = valor1;
                prob_cond2           = valor2;
                prob_cond3           = valor3;
                prob_intermediaria1 = valor4;
                prob_intermediaria2 = valor5;
                prob_intermediaria3 = valor6;

                return ((prob_cond1*prob_intermediaria1)+(prob_cond2*prob_intermediaria2)+(prob_cond3*prob_intermediaria3));
            }

            function calcula_Alfa(delta) {
                return (1/delta);
            }

            function calcula_ProbCond(valor1, valor2, valor3) {
                prob_cond1 = valor1;
                prob_cond2 = valor2;
                alfa       = valor3;

                return ((prob_cond1*prob_cond2)*alfa);
            }

            function calcula_ProbCond_RN_EN(&prob_condicional, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
                prob_cond1     = valor1;
                prob_cond2     = valor2;
                prob_cond3     = valor3;
                prob_cond4     = valor4;

                prob_entropia1 = valor5;
                prob_entropia2 = valor6;
                prob_entropia3 = valor7;
                prob_entropia4 = valor8;

                prob_condicional = ((prob_cond1*prob_entropia1)+(prob_cond2*prob_entropia2)+(prob_cond3*prob_entropia3)+(prob_cond4*prob_entropia4));
            }

            function calcula_ProbCond_EN(&prob_condicional, valor1, valor2, valor3) {
                prob_cond1    = valor1;
                prob_entropia = valor2;
                prob_cond_en  = valor3;

                prob_condicional = ((prob_cond1*prob_entropia)/prob_cond_en);
            }

            function calcula_ProbFinal_EN_RN(&prob_final, valor1, valor2, valor3, valor4, valor5, valor6) {
                prob_cond_en1    = valor1;
                prob_cond_en2    = valor2;
                prob_cond_en3    = valor3;
                prob_cond_geral1 = valor4;
                prob_cond_geral2 = valor5;
                prob_cond_geral3 = valor6;

                prob_final = ((prob_cond_en1*prob_cond_geral1)+(prob_cond_en2*prob_cond_geral2)+(prob_cond_en3*prob_cond_geral3));
                prob_final = bcdiv(prob_final,1,4);
            }

            function calcula_Delta_Risco_Doencas_Cronicas(&delta, valor1, valor2, valor3, valor4) {
                prob_cond1          = valor1;
                prob_cond2          = valor2;
                prob_intermediaria1 = valor3;
                prob_intermediaria2 = valor4;

                delta = ((prob_cond1*prob_intermediaria1)+(prob_cond2*prob_intermediaria2));
            }

            function calcula_ProbCond_EN_RN_RDC(&prob_condicional, valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
                prob_cond1    = valor1;
                prob_cond2    = valor2;
                prob_cond3    = valor3;
                prob_cond4    = valor4;

                prob_cond_en1 = valor5;
                prob_cond_en2 = valor6;
                prob_cond_en3 = valor7;
                prob_cond_en4 = valor8;

                prob_condicional = ((prob_cond1*prob_cond_en1)+(prob_cond2*prob_cond_en2)+(prob_cond3*prob_cond_en3)+(prob_cond4*prob_cond_en4));
            }

            function calcula_ProbFinal_EN_RN_RDC(&prob_final, valor1, valor2, valor3, valor4) {
                prob_cond_rn1    = valor1;
                prob_cond_rn2    = valor2;
                prob_cond_geral1 = valor3;
                prob_cond_geral2 = valor4;

                prob_final = ((prob_cond_rn1*prob_cond_geral1)+(prob_cond_rn2*prob_cond_geral2));
                prob_final = bcdiv(prob_final,1,4);
            }
        }

});
