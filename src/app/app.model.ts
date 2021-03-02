export class AppModel {

  totalValcinados: string;
  totalVacinadosHoje: string;
  totalEstabelecimentos: string;
  totalVacinadores: string;
  totalVacinadosPorMunicipio: any[];
  totalVacinadosporDia: any;
  totalCategorias: string;
  totalSubcategorias: string;
  dataImportacao: string;
  totalAplicadasPorLaboratorio: [ 
    {
      vacina_fabricante_nome: '',
      vacina_nome:'',
      quantidade: ''
    }
  ];
  totalPorDose: any[] = [{descricao:'', quantidade:''}, {descricao:'', quantidade:''}];
}
