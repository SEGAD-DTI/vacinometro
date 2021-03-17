export class AppModel {

  distribuidoMunicipios: any = [
    {
      id: 0,
      id_usuario: 0,
      total_alto_alegre_d1_d2_coronavac: 0,
      total_alto_alegre_d1_aztrazeneca: 0,
      total_amajari_d1_d2_coronavac: 0,
      total_amajari_d1_aztrazeneca: 0,
      total_boa_vista_d1_d2_coronavac: 0,
      total_boa_vista_d1_aztrazeneca: 0,
      total_bonfim_d1_d2_coronavac: 0,
      total_bonfim_d1_aztrazeneca: 0,
      total_canta_d1_d2_coronavac: 0,
      total_canta_d1_aztrazeneca: 0,
      total_caracarai_d1_d2_coronavac: 0,
      total_caracarai_d1_aztrazeneca: 0,
      total_caroebe_d1_d2_coronavac: 0,
      total_caroebe_d1_aztrazeneca: 0,
      total_iracema_d1_d2_coronavac: 0,
      total_iracema_d1_aztrazeneca: 0,
      total_mucajai_d1_d2_coronavac: 0,
      total_mucajai_d1_aztrazeneca: 0,
      total_normandia_d1_d2_coronavac: 0,
      total_normandia_d1_aztrazeneca: 0,
      total_pacaraima_d1_d2_coronavac: 0,
      total_pacaraima_d1_aztrazeneca: 0,
      total_rorainopolis_d1_d2_coronavac: 0,
      total_rorainopolis_d1_aztrazeneca: 0,
      total_sao_joao_baliza_d1_d2_coronavac: 0,
      total_sao_joao_baliza_d1_aztrazeneca: 0,
      total_sao_luiz_d1_d2_coronavac: 0,
      total_sao_luiz_d1_aztrazeneca: 0,
      total_uiramuta_d1_d2_coronavac: 0,
      total_uiramuta_d1_aztrazeneca: 0,
      total_dsei_leste_d1_d2_coronavac: 0,
      total_dsei_leste_d1_aztrazeneca: 0,
      total_dsei_yanomami_d1_d2_coronavac: 0,
      total_dsei_yanomami_d1_aztrazeneca: 0,
      created_at: '2021-03-13 00:13:48',
      updated_at: '2021-03-13 00:13:48',
      total_geral_alto_alegre: 0,
      total_geral_amajari: 0,
      total_geral_boa_vista: 0,
      total_geral_bonfim: 0,
      total_geral_canta: 0,
      total_geral_caracarai: 0,
      total_geral_caroebe: 0,
      total_geral_iracema: 0,
      total_geral_mucajai: 0,
      total_geral_normandia: 0,
      total_geral_pacaraima: 0,
      total_geral_rorainopolis: 0,
      total_geral_sao_joao_baliza: 0,
      total_geral_sao_luiz: 0,
      total_geral_uiramuta: 0,
      total_geral_dsei_leste: 0,
      total_geral_dsei_yanomami: 0
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
