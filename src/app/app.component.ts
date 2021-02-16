import { Component, OnInit } from '@angular/core';
import { AppService } from './app.service';
import { AppModel } from './app.model';
import { Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';
import { AuthService } from './auth.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  data: AppModel = new AppModel;
  dataAtualizacao = (new Date()).toLocaleString('pt-BR');
  showModal = false;
  municipioSelecionado = '';
  unidadesSelecionadas = [];

  //seta a primeira categoria a sert mostrada
  categoriaDefault: string =  'Trabalhadores de Saúde';
  codigoDefault: number = 9

  barChartLabels: Label[] = [];
  barChartData: ChartDataSets[] = [{ data: [], label: '' }];

  barChartLabelsMunicipios: Label[] = [];
  barChartDataMunicipios: ChartDataSets[] = [{ data: [], label: '' }];

  constructor(private service: AppService, private auth: AuthService){
      this.auth.login();
    setInterval(()=>{
      this.getData();
      this.categoriaDefault =  'Trabalhadores de Saúde';
      this.barChartLabels = [];
      this.barChartData = [{ data: [], label: '' }];

      this.barChartLabelsMunicipios = [];
      this.barChartDataMunicipios = [{ data: [], label: '' }];

    }, 60000);
  }

  ngOnInit(): void {
    this.getData();
  }

  getData(){
    this.service.index().then(response=>{
      this.data = response;
      this.filtrarSubcategoria(this.categoriaDefault, this.codigoDefault);
      this.setDataGrafico();
    }).catch(e=>{
      console.log(e);
    });
  }

  setDataGrafico(){

    this.data.totalVacinadosporDia.forEach(element => {
      this.barChartLabels.push(element.data_aplicacao);
      this.barChartData[0].data.push(element.quantidade)
      this.barChartData[0].label = 'Total de Vacinados'
    });

    this.data.totalVacinadosPorMunicipio.forEach(element => {
      this.barChartLabelsMunicipios.push(element.municipio);
      this.barChartDataMunicipios[0].data.push(element.quantidade)
      this.barChartDataMunicipios[0].label = 'Total de Vacinados por Município'
    });



  }

  filtrar(event, categoria, codigo ){
    event.preventDefault();
    this.filtrarSubcategoria(categoria, codigo);
  }

  filtrarSubcategoria(categoria, codigo){
    this.service.filter(codigo).then(response=>{
      this.data.totalSubcategorias = response.totalSubcategorias;
      this.categoriaDefault = categoria;
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

