$(function(){


    // labels dos sliders
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

        var input = {
            sexo      : $("input[name=sexo]:checked").val(),
            idade     : $("#idade").val(),
            peso      : $("#peso").val(),
            altura    : $("#altura").val(),
            raca      : $("input[name=raca]:checked").val(),
            pa_sist   : $("#pressao_sistolica").val(),
            pa_diast  : $("#pressao_diastolica").val(),
            obesidade : $("input[name=obesidade]:checked").val(),
            afs_r     : $("").val(),
            circunferencia_abdominal: $("#circunferencia_abdominal").val()
        };


        // equivalente as chamadas aos metodos "Consultar"
        var resultado = [];
        resultado.rn = [ ENBP_RNB =  0.45, ENBP_RNM =  0.5, ENBP_RNE =  0.05, ENPN_RNB =  0.99, ENPN_RNM =  0.007,
                         ENPN_RNE =  0.003, ENSP_RNB =  0.3, ENSP_RNM =  0.67, ENSP_RNE =  0.03, ENO_RNB  =  0.005,
                         ENO_RNM  =  0.045, ENO_RNE  =  0.95 ]

        resultado.en = [ENBP = 0.05, ENPN = 0.7, ENSP = 0.19, ENO =  0.06  ]

        resultado.imc =  [ RNB_IMCBP = 0.3, RNB_IMCPN = 0.64, RNB_IMCSP = 0.05, RNB_IMCO  = 0.01,
                           RNM_IMCBP = 0.35, RNM_IMCPN = 0.03, RNM_IMCSP = 0.5, RNM_IMCO  = 0.12,
                           RNE_IMCBP = 0.01, RNE_IMCPN = 0.04, RNE_IMCSP = 0.15, RNE_IMCO  = 0.8];


        resultado.ca = [ RNB_CAAd = 0.98, RNB_CAAl = 0.02, RNM_CAAd = 0.1,
                         RNM_CAAl = 0.9, RNE_CAAd = 0.05, RNE_CAAl = 0.95];

        resultado.rdc =  [ ENBP_RDCA =  0.45, ENBP_RDCP = 0.55, ENPN_RDCA = 0.95,
                           ENPN_RDCP = 0.05, ENSP_RDCA = 0.25,
                           ENSP_RDCP = 0.75, ENO_RDCA = 0.1, ENO_RDCP = 0.9];

        resultado.afs = [ RDCA_AFSI = 0.02, RDCA_AFSPA = 0.18, RDCA_AFSA = 0.8,
                          RDCP_AFSI = 0.6, RDCP_AFSPA = 0.36,  RDCP_AFSA = 0.04 ];

        resultado.afo = [RDCA_AFOPM = 0.23, RDCA_AFOA = 0.02, RDCA_AFON =0.75,
                         RDCP_AFOPM = 0.21, RDCP_AFOA = 0.75, RDCP_AFON =0.04];

        resultado.pa =  [RDCA_PAN = 0.99, RDCA_PAA = 0.01, RDCP_PAN = 0.85, RDCP_PAA = 0.15];

        var imc = new Imc();
        var ca = new Ca();
        var inferencia = new Inferencia();
        var no_intermediario = new NoIntermediario();
        var pa = new Pa();
        var afo = new Afo();

        //Define probabilidades iniciais do Nó Estado Nutricional
        var prob_ini_en_bp = resultado.en.ENBP;
        var prob_ini_en_pn = resultado.en.ENPN;
        var prob_ini_en_sp = resultado.en.ENSP;
        var prob_ini_en_o  = resultado.en.ENO;

        var prob_rn_baixo = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNB"], resultado.rn["ENPN_RNB"], resultado.rn["ENSP_RNB"], resultado.rn["ENO_RNB"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        var prob_rn_moderado = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNM"], resultado.rn["ENPN_RNM"], resultado.rn["ENSP_RNM"], resultado.rn["ENO_RNM"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        var prob_rn_elevado = inferencia.calculaProbInicialRiscoNut(resultado.rn["ENBP_RNE"], resultado.rn["ENPN_RNE"], resultado.rn["ENSP_RNE"], resultado.rn["ENO_RNE"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);

        var prob_ini_imc_bp = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCBP"], resultado.imc["RNM_IMCBP"], resultado.imc["RNE_IMCBP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_ini_imc_pn = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCPN"], resultado.imc["RNM_IMCPN"], resultado.imc["RNE_IMCPN"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_ini_imc_sp = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCSP"], resultado.imc["RNM_IMCSP"], resultado.imc["RNE_IMCSP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_ini_imc_ob = inferencia.calculaProbInicialIMC(resultado.imc["RNB_IMCO"], resultado.imc["RNM_IMCO"], resultado.imc["RNE_IMCO"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);

        var prob_ini_ca_adeq = inferencia.calculaProbInicialCA(resultado.ca["RNB_CAAd"], resultado.ca["RNM_CAAd"], resultado.ca["RNE_CAAd"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_ini_ca_alt  = inferencia.calculaProbInicialCA(resultado.ca["RNB_CAAl"], resultado.ca["RNM_CAAl"], resultado.ca["RNE_CAAl"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);

        var prob_rdc_a = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCA"], resultado.rdc["ENPN_RDCA"], resultado.rdc["ENSP_RDCA"], resultado.rdc["ENO_RDCA"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        var prob_rdc_p = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCP"], resultado.rdc["ENPN_RDCP"], resultado.rdc["ENSP_RDCP"], resultado.rdc["ENO_RDCP"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);

        var prob_ini_afs_s = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSS"], resultado.afs["RDCP_AFSS"], prob_rdc_a, prob_rdc_p);
        var prob_ini_afs_i = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSI"], resultado.afs["RDCP_AFSI"], prob_rdc_a, prob_rdc_p);
        var prob_ini_afs_a = inferencia.calculaProbInicialAtivFisicaSemanal(resultado.afs["RDCA_AFSA"], resultado.afs["RDCP_AFSA"], prob_rdc_a, prob_rdc_p);

        var prob_ini_afo_pm = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFOPM"], resultado.afo["RDCP_AFOPM"], prob_rdc_a, prob_rdc_p);
        var prob_ini_afo_a  = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFOA"], resultado.afo["RDCP_AFOA"], prob_rdc_a, prob_rdc_p);
        var prob_ini_afo_n  = inferencia.calculaProbInicialAscendFamObesid(resultado.afo["RDCA_AFON"], resultado.afo["RDCP_AFON"], prob_rdc_a, prob_rdc_p);

        var prob_ini_pa_n = inferencia.calculaProbInicialPA(resultado.pa["RDCA_PAN"], resultado.pa["RDCP_PAN"], prob_rdc_a, prob_rdc_p);
        var prob_ini_pa_a = inferencia.calculaProbInicialPA(resultado.pa["RDCA_PAA"], resultado.pa["RDCP_PAA"], prob_rdc_a, prob_rdc_p);

        var valor_imc = imc.Calcular_imc(input.peso, input.altura);

        var valor_percentil5 = 0;
        var valor_percentil85 = 0;
        var valor_percentil95 = 0;

        if (input.sexo == "F") {

            valor_percentil5 = imc.Calcular_percentil5_fem(input.idade);
            valor_percentil85 = imc.Calcular_percentil85_fem(input.idade);
            valor_percentil95 = imc.Calcular_percentil95_fem(input.idade);

        } else if (input.sexo == "M") {
            valor_percentil5 = imc.Calcular_percentil5_masc(input.idade);
            valor_percentil85 = imc.Calcular_percentil85_masc(input.idade);
            valor_percentil95 = imc.Calcular_percentil95_masc(input.idade);
        }

        var evidencia_imc = imc.calcular_evidencia_imc(valor_imc, valor_percentil5, valor_percentil85, valor_percentil95);
        var delta_imc = 0;
        var alfa_imc = 0;

        if (evidencia_imc == "Abaixo do Peso"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado.imc["RNB_IMCBP"], resultado.imc["RNM_IMCBP"], resultado.imc["RNE_IMCBP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.imc["RNB_IMCBP"], prob_rn_baixo, alfa_imc);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.imc["RNM_IMCBP"], prob_rn_moderado, alfa_imc);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.imc["RNE_IMCBP"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Peso Normal"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado.imc["RNB_IMCPN"], resultado.imc["RNM_IMCPN"], resultado.imc["RNE_IMCPN"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.imc["RNB_IMCPN"], prob_rn_baixo, alfa_imc);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.imc["RNM_IMCPN"], prob_rn_moderado, alfa_imc);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.imc["RNE_IMCPN"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Sobrepeso"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado.imc["RNB_IMCSP"], resultado.imc["RNM_IMCSP"], resultado.imc["RNE_IMCSP"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.imc["RNB_IMCSP"], prob_rn_baixo, alfa_imc);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.imc["RNM_IMCSP"], prob_rn_moderado, alfa_imc);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.imc["RNE_IMCSP"], prob_rn_elevado, alfa_imc);

        }else if(evidencia_imc == "Obesidade"){

            delta_imc = no_intermediario.calcula_Delta_Risco_Nut(resultado.imc["RNB_IMCO"], resultado.imc["RNM_IMCO"], resultado.imc["RNE_IMCO"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_imc =  no_intermediario.calcula_Alfa(delta_imc);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.imc["RNB_IMCO"], prob_rn_baixo, alfa_imc);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.imc["RNM_IMCO"], prob_rn_moderado, alfa_imc);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.imc["RNE_IMCO"], prob_rn_elevado, alfa_imc);
        }
        
        $("#resultado_imc").text(evidencia_imc);

        var valor_percentil90 = 0;

        if (input.raca == "B") {
            if (input.sexo == "M") {
                valor_percentil90 = ca.Calcular_percentil90_masc_branco(input.idade);
            } else if (sexo_r == "F") {
                valor_percentil90 = ca.Calcular_percentil90_fem_branco(input.idade);
            }

        } else if (input.raca == "N") {
            if (input.sexo == "M"){
                valor_percentil90 = ca.Calcular_percentil90_masc_negro(input.idade);
            } else if (input.sexo == "F"){
                valor_percentil90 = ca.Calcular_percentil90_fem_negro(input.idade);
            }
        }

        //Instancia o nó CA da rede bayesiana
        var evidencia_ca = ca.calcular_evidencia_ca(input.circunferencia_abdominal, valor_percentil90);
        var delta_ca = 0;
        var alfa_ca = 0;

        $("#resultado_ca").text(evidencia_ca);

        if (evidencia_ca == "Adequada") {

            delta_ca = no_intermediario.calcula_Delta_Risco_Nut(resultado.ca["RNB_CAAd"], resultado.ca["RNM_CAAd"], resultado.ca["RNE_CAAd"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_ca = no_intermediario.calcula_Alfa(delta_ca);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.ca["RNB_CAAd"], prob_rn_baixo, alfa_ca);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.ca["RNM_CAAd"], prob_rn_moderado, alfa_ca);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.ca["RNE_CAAd"], prob_rn_elevado, alfa_ca);

        } else if (evidencia_ca == "Alterada") {

            delta_ca = no_intermediario.calcula_Delta_Risco_Nut(resultado.ca["RNB_CAAl"], resultado.ca["RNM_CAAl"], resultado.ca["RNE_CAAl"], prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
            alfa_ca = no_intermediario.calcula_Alfa(delta_ca);

            prob_rn_baixo    = no_intermediario.calcula_ProbCond(resultado.ca["RNB_CAAl"], prob_rn_baixo, alfa_ca);
            prob_rn_moderado = no_intermediario.calcula_ProbCond(resultado.ca["RNM_CAAl"], prob_rn_moderado, alfa_ca);
            prob_rn_elevado  = no_intermediario.calcula_ProbCond(resultado.ca["RNE_CAAl"], prob_rn_elevado, alfa_ca);
        }

	var str_sexo = pa.Definir_sexo(input.sexo);

        if(input.sexo == "M"){
            percentil5_alt  = pa.Calcular_percentil5_masc_altura(input.idade);
            percentil10_alt = pa.Calcular_percentil10_masc_altura(input.idade);
            percentil25_alt = pa.Calcular_percentil25_masc_altura(input.idade);
            percentil50_alt = pa.Calcular_percentil50_masc_altura(input.idade);
            percentil75_alt = pa.Calcular_percentil75_masc_altura(input.idade);
            percentil90_alt = pa.Calcular_percentil90_masc_altura(input.idade);

        } else if(input.sexo == "F"){
            percentil5_alt  = pa.Calcular_percentil5_fem_altura(input.idade);
            percentil10_alt = pa.Calcular_percentil10_fem_altura(input.idade);
            percentil25_alt = pa.Calcular_percentil25_fem_altura(input.idade);
            percentil50_alt = pa.Calcular_percentil50_fem_altura(input.idade);
            percentil75_alt = pa.Calcular_percentil75_fem_altura(input.idade);
            percentil90_alt = pa.Calcular_percentil90_fem_altura(input.idade);
        }

        //Estabelecer em qual percentil a altura se encontra	 
        var evidencia_altura = pa.estabelecer_altura(input.altura, percentil5_alt, percentil10_alt, percentil25_alt, percentil50_alt, percentil75_alt, percentil90_alt);
        var pa_sist = 0;
        var pa_diast = 0;

        if(input.sexo == "M"){
            if(evidencia_altura == 5){
                pa_sist  = pa.Calcular_percentil5_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil5_masc_diastolica(input.idade);
            }else if(evidencia_altura == 10){
                pa_sist  = pa.Calcular_percentil10_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil10_masc_diastolica(input.idade);
            } else if(evidencia_altura == 25){
                pa_sist  = pa.Calcular_percentil25_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil25_masc_diastolica(input.idade);
            } else if(evidencia_altura == 50){
                pa_sist  = pa.Calcular_percentil50_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil50_masc_diastolica(input.idade);
            } else if(evidencia_altura == 75){
                pa_sist  = pa.Calcular_percentil75_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil75_masc_diastolica(input.idade);
            } else if(evidencia_altura == 90){
                pa_sist  = pa.Calcular_percentil90_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil90_masc_diastolica(input.idade);
            } else if(evidencia_altura == 95){
                pa_sist  = pa.Calcular_percentil95_masc_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil95_masc_diastolica(input.idade);
            }
        } else if(input.sexo == "F"){
            if(evidencia_altura == 5){
                pa_sist  = pa.Calcular_percentil5_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil5_fem_diastolica(input.idade);
            }else if(evidencia_altura == 10){
                pa_sist  = pa.Calcular_percentil10_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil10_fem_diastolica(input.idade);
            } else if(evidencia_altura == 25){
                pa_sist  = pa.Calcular_percentil25_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil25_fem_diastolica(input.idade);
            } else if(evidencia_altura == 50){
                pa_sist  = pa.Calcular_percentil50_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil50_fem_diastolica(input.idade);
            } else if(evidencia_altura == 75){
                pa_sist  = pa.Calcular_percentil75_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil75_fem_diastolica(input.idade);
            } else if(evidencia_altura == 90){
                pa_sist  = pa.Calcular_percentil90_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil90_fem_diastolica(input.idade);
            } else if(evidencia_altura == 95){
                pa_sist  = pa.Calcular_percentil95_fem_sistolica(input.idade);
                pa_diast = pa.Calcular_percentil95_fem_diastolica(input.idade);
            }
        }

        var evidencia_pa = pa.calcular_evidencia(pa_sist ,pa_diast ,input.pa_sist, input.pa_diast);
        $("#resultado_pa").text(evidencia_pa);

        var evidencia_afo = afo.calcular_evidencia(input.obesidade);
        $("#resultado_afo").text(evidencia_afo);


        //CALCULA PROBABILIDADE CONDICIONAL ESTADO NUTRICIONAL
        var prob_cond_rn_baixo_en    = no_intermediario.calcula_ProbCond_RN_EN(resultado.rn["ENBP_RNB"], resultado.rn["ENPN_RNB"], resultado.rn["ENSP_RNB"], resultado.rn["ENO_RNB"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        var prob_cond_rn_moderado_en = no_intermediario.calcula_ProbCond_RN_EN(resultado.rn["ENBP_RNM"], resultado.rn["ENPN_RNM"], resultado.rn["ENSP_RNM"], resultado.rn["ENO_RNM"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);
        var prob_cond_rn_elevado_en  = no_intermediario.calcula_ProbCond_RN_EN(resultado.rn["ENBP_RNE"], resultado.rn["ENPN_RNE"], resultado.rn["ENSP_RNE"], resultado.rn["ENO_RNE"], prob_ini_en_bp, prob_ini_en_pn, prob_ini_en_sp, prob_ini_en_o);

        var prob_cond_baixoPeso_rn_baixo  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENBP_RNB"], prob_ini_en_bp, prob_cond_rn_baixo_en);
        var prob_cond_pesoNormal_rn_baixo = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENPN_RNB"], prob_ini_en_pn, prob_cond_rn_baixo_en);
        var prob_cond_sobrepeso_rn_baixo  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENSP_RNB"], prob_ini_en_sp, prob_cond_rn_baixo_en);
        var prob_cond_obesidade_rn_baixo  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENO_RNB"],  prob_ini_en_o,  prob_cond_rn_baixo_en);

        var prob_cond_baixoPeso_rn_moderado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENBP_RNM"], prob_ini_en_bp, prob_cond_rn_moderado_en);
        var prob_cond_pesoNormal_rn_moderado = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENPN_RNM"], prob_ini_en_pn, prob_cond_rn_moderado_en);
        var prob_cond_sobrepeso_rn_moderado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENSP_RNM"], prob_ini_en_sp, prob_cond_rn_moderado_en);
        var prob_cond_obesidade_rn_moderado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENO_RNM"],  prob_ini_en_o, prob_cond_rn_moderado_en);

        var prob_cond_baixoPeso_rn_elevado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENBP_RNE"], prob_ini_en_bp, prob_cond_rn_elevado_en);
        var prob_cond_pesoNormal_rn_elevado = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENPN_RNE"], prob_ini_en_pn, prob_cond_rn_elevado_en);
        var prob_cond_sobrepeso_rn_elevado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENSP_RNE"], prob_ini_en_sp, prob_cond_rn_elevado_en);
        var prob_cond_obesidade_rn_elevado  = no_intermediario.calcula_ProbCond_EN(resultado.rn["ENO_RNE"],  prob_ini_en_o,  prob_cond_rn_elevado_en);

        //CALCULA PROBABILIDADE FINAL ESTADO NUTRICIONAL
        var prob_final_baixoPeso  = no_intermediario.calcula_ProbFinal_EN_RN(prob_cond_baixoPeso_rn_baixo,  prob_cond_baixoPeso_rn_moderado,prob_cond_baixoPeso_rn_elevado,   prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_final_pesoNormal = no_intermediario.calcula_ProbFinal_EN_RN(prob_cond_pesoNormal_rn_baixo, prob_cond_pesoNormal_rn_moderado,prob_cond_pesoNormal_rn_elevado, prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_final_sobrepeso  = no_intermediario.calcula_ProbFinal_EN_RN(prob_cond_sobrepeso_rn_baixo,  prob_cond_sobrepeso_rn_moderado,prob_cond_sobrepeso_rn_elevado,   prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);
        var prob_final_obesidade  = no_intermediario.calcula_ProbFinal_EN_RN(prob_cond_obesidade_rn_baixo,  prob_cond_obesidade_rn_moderado,prob_cond_obesidade_rn_elevado,   prob_rn_baixo, prob_rn_moderado, prob_rn_elevado);

        $("#resultado_baixo_peso").text(prob_final_baixoPeso);
        $("#resultado_peso_normal").text(prob_final_pesoNormal);
        $("#resultado_sobrepeso").text(prob_final_sobrepeso);
        $("#resultado_obesidade").text(prob_final_obesidade);

        var prob_rdc_a = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCA"], resultado.rdc["ENPN_RDCA"], resultado.rdc["ENSP_RDCA"], resultado.rdc["ENO_RDCA"], prob_final_baixoPeso, prob_final_pesoNormal, prob_final_sobrepeso, prob_final_obesidade);
        var prob_rdc_p = inferencia.calculaProbInicialRiscoDoencaCronica(resultado.rdc["ENBP_RDCP"], resultado.rdc["ENPN_RDCP"], resultado.rdc["ENSP_RDCP"], resultado.rdc["ENO_RDCP"], prob_final_baixoPeso, prob_final_pesoNormal, prob_final_sobrepeso, prob_final_obesidade);

    });
});
