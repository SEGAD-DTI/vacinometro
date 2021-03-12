export class AppModel {

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
