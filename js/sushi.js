$(function(){

    $('#esportesLivresFreqLabel').text($('#esportesLivresFreq').val());
    $("#esportesLivresFreq").on('change', function(evnt) {
        $("#esportesLivresFreqLabel").text($('#esportesLivresFreq').val());
    });

    $('#esportesColFreqLabel').text($('#esportesColFreq').val());
    $("#esportesColFreq").on('change', function(evnt) {
        $("#esportesColFreqLabel").text($('#esportesColFreq').val());
    });
   
    $('#esportesAcadFreqLabel').text($('#esportesAcadFreq').val());
    $("#esportesAcadFreq").on('change', function(evnt) {
        $("#esportesAcadFreqLabel").text($('#esportesAcadFreq').val());
    });

    $('#run').click(function(evnt) {

        var sexo = $("").val();
        var idade = $("").val();
        var peso = $("").val();
        var altura = $("").val();
        var ca = $("").val();
        var ca = $("").val();
        var raca = $("").val();
        var pa  = $("").val();
        var pa_sist = $("").val();
        var pa_diast = $("").val();
        var afo_r = $("").val();
        var afs_r = $("").val();

        // equivalente as chamadas aos metodos "Consultar"
        var resultado = [];
        resultado.rn = [ ENBP_RNB =  0.45, ENBP_RNM =  0.5, ENBP_RNE =  0.05, ENPN_RNB =  0.99, ENPN_RNM =  0.007, 
                         ENPN_RNE =  0.003, ENSP_RNB =  0.3, ENSP_RNM =  0.67, ENSP_RNE =  0.03, ENO_RNB  =  0.005,
                         ENO_RNM  =  0.045, ENO_RNE  =  0.95 ]

        resultado.en = [ENBP = 0.05, ENPN = 0.7, ENSP = 0.19, ENO =  0.06  ]

        imc = new Imc();
        resultado.imc =  [ RNB_IMCBP = 0.3, RNB_IMCPN = 0.64, RNB_IMCSP = 0.05, RNB_IMCO  = 0.01,
                           RNM_IMCBP = 0.35, RNM_IMCPN = 0.03, RNM_IMCSP = 0.5, RNM_IMCO  = 0.12,
                           RNE_IMCBP = 0.01, RNE_IMCPN = 0.04, RNE_IMCSP = 0.15, RNE_IMCO  = 0.8];


        resultado.ca =  ''; // classe com metodos

        resultado.rdc =  [ ENBP_RDCA =  0.45, ENBP_RDCP = 0.55, ENPN_RDCA = 0.95,
                           ENPN_RDCP = 0.05, ENSP_RDCA = 0.25,
                           ENSP_RDCP = 0.75, ENO_RDCA = 0.1, ENO_RDCP = 0.9];

        resultado.afs = ''; // classe com metodos

        resultado.afo = ''; // classe com metodos

        resultado.pa =  ''; // classe com metodos

        var inferencia = new Inferencia();
        var no_intermediario = new NoIntermediario();

        //Define probabilidades iniciais do Nó Estado Nutricional
        prob_ini_en_bp = resultado.en.ENBP;
        prob_ini_en_pn = resultado.en.ENPN;
        prob_ini_en_sp = resultado.en.ENSP;
        prob_ini_en_o  = resultado.en.ENO;

        prob_rn_baixo = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNB"], resultado.rn["ENPN_RNB"], resultado.rn["ENSP_RNB"], resultado.rn["ENO_RNB"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        prob_rn_moderado = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNM"], resultado.rn["ENPN_RNM"], resultado.rn["ENSP_RNM"], resultado.rn["ENO_RNM"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        prob_rn_elevado = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNE"], resultado.rn["ENPN_RNE"], resultado.rn["ENSP_RNE"], resultado.rn["ENO_RNE"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);

        prob_ini_imc_bp = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCBP"], resultado.imc["RNM_IMCBP"], resultado.imc["RNE_IMCBP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        prob_ini_imc_pn = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCPN"], resultado.imc["RNM_IMCPN"], resultado.imc["RNE_IMCPN"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        prob_ini_imc_sp = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCSP"], resultado.imc["RNM_IMCSP"], resultado.imc["RNE_IMCSP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);  
        prob_ini_imc_ob = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCO"], resultado.imc["RNM_IMCO"], resultado.imc["RNE_IMCO"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);

        prob_ini_ca_adeq = inferencia.calculaProbInicialCA(resultado.ca["RNB_CAAd"], resultado.ca["RNM_CAAd"], resultado.ca["RNE_CAAd"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        prob_ini_ca_alt  = inferencia.calculaProbInicialCA(resultado.ca["RNB_CAAl"], resultado.ca["RNM_CAAl"], resultado.ca["RNE_CAAl"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);

        prob_rdc_a = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCA"], resultado.rdc["ENPN_RDCA"], resultado.rdc["ENSP_RDCA"], resultado.rdc["ENO_RDCA"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        prob_rdc_p = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCP"], resultado.rdc["ENPN_RDCP"], resultado.rdc["ENSP_RDCP"], resultado.rdc["ENO_RDCP"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);

        prob_ini_afs_s = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSS"], resultado.afs["RDCP_AFSS"], prob_rdc_a, prob_dc_p);
        prob_ini_afs_i = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSI"], resultado.afs["RDCP_AFSI"], prob_rdc_a, prob_rdc_p);
        prob_ini_afs_a = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSA"], resultado.afs["RDCP_AFSA"], prob_rdc_a, prob_rdc_p);

        prob_ini_afo_pm = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFOPM"], resultado.afo["RDCP_AFOPM"], prob_rdc_a, prob_rdc_p);
        prob_ini_afo_a  = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFOA"], resultado.afo["RDCP_AFOA"], prob_rdc_a, prob_rdc_p);
        prob_ini_afo_n  = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFON"], resultado.afo["RDCP_AFON"], prob_rdc_a, prob_rdc_p);

        prob_ini_pa_n = inferencia.calculaProbInicialPA(resultado.pa["RDCA_PAN"], resultado.pa["RDCP_PAN"], prob_rdc_a, prob_rdc_p);
        prob_ini_pa_a = inferencia.calculaProbInicialPA(resultado.pa["RDCA_PAA"], resultado.pa["RDCP_PAA"], prob_rdc_a, prob_rdc_p);

        var valor_imc = imc.Calcular_imc(peso_r, altura_r); 

        if (sexo_r == "F") {
            valor_percentil5 = imc.Calcular_percentil5_fem(idade_r);
            valor_percentil85 = imc.Calcular_percentil85_fem(idade_r);
            valor_percentil95 = imc.Calcular_percentil95_fem(idade_r);

        } else if( sexo_r == "M") {
            valor_percentil5 = imc.Calcular_percentil5_masc(idade_r);
            valor_percentil85 = imc.Calcular_percentil85_masc(idade_r);
            valor_percentil95 = imc.Calcular_percentil95_masc(idade_r);
        }

        evidencia_imc = imc.Instanciar_imc(valor_imc, valor_percentil5, valor_percentil85, valor_percentil95);

        if($evidencia_imc == "Abaixo do Peso"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado_imc["RNB_IMCBP"], resultado_imc["RNM_IMCBP"], resultado_imc["RNE_IMCBP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            no_intermediario.calcula_ProbCond(prob_rn_baixo, resultado_imc["RNB_IMCBP"], prob_rn_baixo, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_moderado, resultado_imc["RNM_IMCBP"], prob_rn_moderado, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_elevado, resultado_imc["RNE_IMCBP"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Peso Normal"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado_imc["RNB_IMCPN"], resultado_imc["RNM_IMCPN"], resultado_imc["RNE_IMCPN"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            no_intermediario.calcula_ProbCond(prob_rn_baixo, resultado_imc["RNB_IMCPN"], prob_rn_baixo, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_moderado, resultado_imc["RNM_IMCPN"], prob_rn_moderado, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_elevado, resultado_imc["RNE_IMCPN"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Sobrepeso"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado_imc["RNB_IMCSP"], resultado_imc["RNM_IMCSP"], resultado_imc["RNE_IMCSP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            no_intermediario.calcula_ProbCond(prob_rn_baixo, resultado_imc["RNB_IMCSP"], prob_rn_baixo, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_moderado, resultado_imc["RNM_IMCSP"], prob_rn_moderado, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_elevado, resultado_imc["RNE_IMCSP"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Obesidade"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado_imc["RNB_IMCO"], resultado_imc["RNM_IMCO"], resultado_imc["RNE_IMCO"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            no_intermediario.calcula_ProbCond(prob_rn_baixo, resultado_imc["RNB_IMCO"], prob_rn_baixo, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_moderado, resultado_imc["RNM_IMCO"], prob_rn_moderado, alfa_imc);
            no_intermediario.calcula_ProbCond(prob_rn_elevado, resultado_imc["RNE_IMCO"], prob_rn_elevado, alfa_imc);
        }

    });
});
