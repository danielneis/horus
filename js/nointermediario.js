function NoIntermediario() {

    this.calcula_Delta_Risco_Nut = function(valor1, valor2, valor3, valor4, valor5, valor6) {

        delta                = 0;
        prob_cond1           = valor1;
        prob_cond2           = valor2;
        prob_cond3           = valor3;
        prob_intermediaria1 = valor4;
        prob_intermediaria2 = valor5;
        prob_intermediaria3 = valor6;

        return ((prob_cond1*prob_intermediaria1)+(prob_cond2*prob_intermediaria2)+(prob_cond3*prob_intermediaria3));
    }

    this.calcula_Alfa = function(delta) {
        return (1/delta);
    }

    this.calcula_ProbCond = function(valor1, valor2, valor3) {
        prob_cond1 = valor1;
        prob_cond2 = valor2;
        alfa       = valor3;

        return ((prob_cond1*prob_cond2)*alfa);
    }

    this.calcula_ProbCond_RN_EN = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
        prob_cond1     = valor1;
        prob_cond2     = valor2;
        prob_cond3     = valor3;
        prob_cond4     = valor4;

        prob_entropia1 = valor5;
        prob_entropia2 = valor6;
        prob_entropia3 = valor7;
        prob_entropia4 = valor8;

        return ((prob_cond1*prob_entropia1)+(prob_cond2*prob_entropia2)+(prob_cond3*prob_entropia3)+(prob_cond4*prob_entropia4));
    }

    this.calcula_ProbCond_EN = function(valor1, valor2, valor3) {
        prob_cond1    = valor1;
        prob_entropia = valor2;
        prob_cond_en  = valor3;

        return ((prob_cond1*prob_entropia)/prob_cond_en);
    }

    this.calcula_ProbFinal_EN_RN = function(valor1, valor2, valor3, valor4, valor5, valor6) {
        prob_cond_en1    = valor1;
        prob_cond_en2    = valor2;
        prob_cond_en3    = valor3;
        prob_cond_geral1 = valor4;
        prob_cond_geral2 = valor5;
        prob_cond_geral3 = valor6;

        return ((prob_cond_en1*prob_cond_geral1)+(prob_cond_en2*prob_cond_geral2)+(prob_cond_en3*prob_cond_geral3));
    }

    this.calcula_Delta_Risco_Doencas_Cronicas = function(valor1, valor2, valor3, valor4) {
        prob_cond1          = valor1;
        prob_cond2          = valor2;
        prob_intermediaria1 = valor3;
        prob_intermediaria2 = valor4;

        return ((prob_cond1*prob_intermediaria1)+(prob_cond2*prob_intermediaria2));
    }

    this.calcula_ProbCond_EN_RN_RDC = function(valor1, valor2, valor3, valor4, valor5, valor6, valor7, valor8) {
        prob_cond1    = valor1;
        prob_cond2    = valor2;
        prob_cond3    = valor3;
        prob_cond4    = valor4;

        prob_cond_en1 = valor5;
        prob_cond_en2 = valor6;
        prob_cond_en3 = valor7;
        prob_cond_en4 = valor8;

        return ((prob_cond1*prob_cond_en1)+(prob_cond2*prob_cond_en2)+(prob_cond3*prob_cond_en3)+(prob_cond4*prob_cond_en4));
    }

    this.calcula_ProbFinal_EN_RN_RDC = function(valor1, valor2, valor3, valor4) {
        prob_cond_rn1    = valor1;
        prob_cond_rn2    = valor2;
        prob_cond_geral1 = valor3;
        prob_cond_geral2 = valor4;

        return ((prob_cond_rn1*prob_cond_geral1)+(prob_cond_rn2*prob_cond_geral2));
    }
}
