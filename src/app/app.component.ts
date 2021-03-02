import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AppModel } from './app.model';
import { Label, MultiDataSet, SingleDataSet } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: AppModel = new AppModel;
  dataAtualizacao = null;
  showModal = false;
  municipioSelecionado = '';
  unidadesSelecionadas = [];

  pageReady = false;

  //seta a primeira categoria a sert mostrada
  categoriaDefault: string =  'Trabalhadores de Saúde';
  codigoDefault: number = 9

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  barChartLabelsMunicipios: Label[] = [];
  barChartDataMunicipios: ChartDataSets[] = [{ data: [], label: '' }];

  dChartDataVacinasLaboratorios: Label[] = [];
  dChartLabelsVacinasLaboratorios: string[] = [];

  constructor(private service: AppService, private auth: AuthService){
    this.init();
  }

  init(){
    this.pageReady = false;
    this.auth.login()
    .then(resultado => {
      this.getData();
      this.categoriaDefault =  'Trabalhadores de Saúde';
      this.barChartLabels = [];
      this.barChartData = [{ data: [], label: '' }];

      this.barChartLabelsMunicipios = [];
      this.barChartDataMunicipios = [{ data: [], label: '' }];

      this.dChartDataVacinasLaboratorios = [];
      this.dChartLabelsVacinasLaboratorios = [];
    }).catch((erro) => console.log(erro));
  }

  ngOnInit(): void {
    setInterval(()=>{
      this.init();
    },60000);
  }

  getData(){
    this.service.index().then(response=>{
      this.data = response;
      this.filtrarSubcategoria(this.categoriaDefault, this.codigoDefault);
      this.setDataGrafico();
      this.setDataAtualizacao(this.data.dataImportacao);
    }).catch(e=>{
      console.log(e);
    });
  }

  setDataAtualizacao(date: string){
    this.dataAtualizacao = (new Date(date)).toLocaleString(['pt-BR']);
  }

  setDataGrafico(){

    this.data.totalVacinadosporDia.forEach(element => {
      this.barChartLabels.push(element.data_aplicacao);
      this.barChartData[0].data.push(element.quantidade)
      this.barChartData[0].label = 'Total de Vacinados por Dia'
    });

    this.data.totalVacinadosPorMunicipio.forEach(element => {
      this.barChartLabelsMunicipios.push(element.municipio);
      this.barChartDataMunicipios[0].data.push(element.quantidade)
      this.barChartDataMunicipios[0].label = 'Total de Vacinados por Município'
    });

    this.data.totalAplicadasPorLaboratorio.forEach(element => {     
      this.dChartLabelsVacinasLaboratorios.push(element.vacina_nome);
      this.dChartDataVacinasLaboratorios.push(element.quantidade);

    });
  }

  filtrar(event, categoria, codigo ){
    this.pageReady = false;
    event.preventDefault();
    this.filtrarSubcategoria(categoria, codigo);
  }

  filtrarSubcategoria(categoria, codigo){
    this.service.filter(codigo).then(response=>{
      this.data.totalSubcategorias = response.totalSubcategorias;
      this.categoriaDefault = categoria;
      this.pageReady = true;
    }).catch(e=>{
      console.log(codigo);
    });
  }

  selecionarMunicipio(event, codigo){
    event.preventDefault();
    this.showUnidades(codigo);
  }

  hideModal(){
    this.showModal = !this.showModal;
  }

  showUnidades(codigo){
    this.data.totalVacinadosPorMunicipio.forEach(element => {
      if(element.codigo == codigo){
        this.showModal = true;
        this.municipioSelecionado = element.municipio;
        this.unidadesSelecionadas = element.unidades;
        return;
      }
    });
  }
}

