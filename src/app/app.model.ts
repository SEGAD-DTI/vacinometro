export class AppModel {

  distribuidoMunicipios: any = [
    {
        id: 0,
        id_usuario: 0,
        created_at: null,
        updated_at: null,
        total_alto_alegre_envidadas_nepni: 0,
        total_alto_alegre_aplicadas_nepni: 0,
        total_amajari_envidadas_nepni: 0,
        total_amajari_aplicadas_nepni: 0,
        total_boa_vista_envidadas_nepni: 0,
        total_boa_vista_aplicadas_nepni: 0,
        total_bonfim_envidadas_nepni: 0,
        total_bonfim_aplicadas_nepni: 0,
        total_canta_envidadas_nepni: 0,
        total_canta_aplicadas_nepni: 0,
        total_caracarai_envidadas_nepni: 0,
        total_caracarai_aplicadas_nepni: 0,
        total_caroebe_envidadas_nepni: 0,
        total_caroebe_aplicadas_nepni: 0,
        total_iracema_envidadas_nepni: 0,
        total_iracema_aplicadas_nepni: 0,
        total_mucajai_envidadas_nepni: 0,
        total_mucajai_aplicadas_nepni: 0,
        total_normandia_envidadas_nepni: 0,
        total_normandia_aplicadas_nepni: 0,
        total_pacaraima_envidadas_nepni: 0,
        total_pacaraima_aplicadas_nepni: 0,
        total_rorainopolis_envidadas_nepni: 0,
        total_rorainopolis_aplicadas_nepni: 0,
        total_sao_joao_baliza_envidadas_nepni: 0,
        total_sao_joao_baliza_aplicadas_nepni: 0,
        total_sao_luiz_envidadas_nepni: 0,
        total_sao_luiz_aplicadas_nepni: 0,
        total_uiramuta_envidadas_nepni: 0,
        total_uiramuta_aplicadas_nepni: 0,
        total_dsei_leste_envidadas_nepni: 0,
        total_dsei_leste_aplicadas_nepni: 0,
        total_dsei_yanomami_envidadas_nepni: 0,
        total_dsei_yanomami_aplicadas_nepni: 0
      }
  ]
  estoque:any = [
    {
      id: 0,
      doses_recebidas: 0,
      doses_recebidas_1_dose: 0,
      doses_recebidas_2_dose: 0,
      doses_recebidas_indigenas: 0,
      doses_recebidas_publico_geral: 0,
      doses_distribuidas: 0,
      doses_distribuidas_1_dose: 0,
      doses_distribuidas_2_dose: 0,
      doses_distribuidas_indigenas: 0,
      doses_distribuidas_indigenas_dleste: 0,
      doses_distribuidas_indigenas_dyanomami: 0,
      doses_distribuidas_publico_geral: 0,
      saldo_estoque: 0,
      saldo_estoque_indegena: 0,
      saldo_estoque_publico_geral: 0,
      created_at: null,
      updated_at: null
    }
  ];
  totalValcinados: string = '0';
  totalVacinadosHoje: string = '0';
  totalEstabelecimentos: string = '0';
  totalVacinadores: string = '0';
  totalVacinadosPorMunicipio: any[];
  totalVacinadosporDia: any = '0';
  totalCategorias: string;
  totalSubcategorias: string;
  dataImportacao: string;
  publicoAlvoFase = [{fase: 0, total: 0}];
  totalAplicadasPorLaboratorio: [ 
    {
      vacina_fabricante_nome: '',
      vacina_nome:'',
      quantidade: ''
    }
  ];
  totalPorDose: any[] = [{descricao:'', quantidade:'0'}, {descricao:'', quantidade:'0'}];
}
