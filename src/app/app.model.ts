export class AppModel {

  totalValcinados: string = '0';
  totalVacinadosHoje: string = '0';
  totalEstabelecimentos: string = '0';
  totalVacinadores: string = '0';
  totalVacinadosPorMunicipio: any[];
  totalVacinadosporDia: any = '0';
  totalCategorias: string;
  totalSubcategorias: string;
  dataImportacao: string;
  publicoAlvoFase = [{fase:'', total:0}];
  totalAplicadasPorLaboratorio: [ 
    {
      vacina_fabricante_nome: '',
      vacina_nome:'',
      quantidade: ''
    }
  ];
  totalPorDose: any[] = [{descricao:'', quantidade:'0'}, {descricao:'', quantidade:'0'}];
}
