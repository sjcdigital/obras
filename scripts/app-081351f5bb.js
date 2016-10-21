/******/!function(a){function e(o){if(t[o])return t[o].exports;var r=t[o]={exports:{},id:o,loaded:!1};return a[o].call(r.exports,r,r.exports,e),r.loaded=!0,r.exports}// webpackBootstrap
/******/
var t={};return e.m=a,e.c=t,e.p="",e(0)}([function(a,e,t){"use strict";var o=t(1),r=t(2),n=t(3),i=t(4),s=t(5);angular.module("obrasUi",["ngResource","ui.router","ui.bootstrap","ui.select","ngSanitize"]).config(o.routerConfig).constant("config",{uri:"http://obras-trysoft.rhcloud.com/api/"}).service("cidadeService",n.CidadeService).service("obraService",i.ObraService).controller("MainController",r.MainController).controller("ObraController",s.ObraController)},function(a,e){"use strict";function t(a,e){"ngInject";a.state("home",{url:"/",templateUrl:"app/main/main.html",controller:"MainController",controllerAs:"main"}).state("obra-detalhada",{url:"/obra/{id}",templateUrl:"app/obra/obra.html",controller:"ObraController",controllerAs:"detalhada"}),e.otherwise("/")}t.$inject=["$stateProvider","$urlRouterProvider"],Object.defineProperty(e,"__esModule",{value:!0}),e.routerConfig=t},function(a,e){"use strict";function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function a(a,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}}();e.MainController=function(){function a(e,o){"ngInject";var r=this;t(this,a),this.tipoBusca="todasObras",this.obraService=o,e.pegaTodasCidades().success(function(a){r.cidades=a,r.cidade=a[0]}).error(function(a){alert(a)}),o.quantidade().success(function(a){return r.quantidade=a}).error(function(a){alert(a)}),this.buscaPorPagina()}return a.$inject=["cidadeService","obraService"],o(a,[{key:"buscar",value:function(){"todas"===this.pioresOuMelhores?this.buscaPorCidade():"melhores"===this.pioresOuMelhores?this.buscarCincoMelhores():"piores"===this.pioresOuMelhores&&this.buscarCincoPiores()}},{key:"buscaPorPagina",value:function(){var a=this;this.obraService.paginado(this.paginaCorrente).success(function(e){return a.obras=e}).error(function(a){alert(a)})}},{key:"buscaPorCidade",value:function(){var a=this;this.obraService.todasDaCidade(this.cidade.id).success(function(e){return a.obras=e}).error(function(a){alert(a)})}},{key:"buscarCincoPiores",value:function(){var a=this;this.obraService.pegaCincoPiores(this.cidade.id).success(function(e){return a.obras=e}).error(function(a){alert(a)})}},{key:"buscarCincoMelhores",value:function(){var a=this;this.obraService.pegaCincoMelhores(this.cidade.id).success(function(e){return a.obras=e}).error(function(a){alert(a)})}}]),a}()},function(a,e){"use strict";function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function a(a,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}}();e.CidadeService=function(){function a(e,o){t(this,a),this.$http=e,this.config=o,this.uriCidade=o.uri+"cidades"}return a.$inject=["$http","config"],o(a,[{key:"pegaTodasCidades",value:function(){return this.$http.get(this.uriCidade)}}]),a}()},function(a,e){"use strict";function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function a(a,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}}();e.ObraService=function(){function a(e,o){t(this,a),this.$http=e,this.config=o,this.uriObras=o.uri+"obras"}return a.$inject=["$http","config"],o(a,[{key:"pegaPorID",value:function(a){return this.$http.get(this.uriObras+"/"+a)}},{key:"pegaCincoPiores",value:function(a){var e=this.uriObras+"/cidade/"+a+"/cinco-menos";return this.$http.get(e)}},{key:"pegaCincoMelhores",value:function(a){var e=this.uriObras+"/cidade/"+a+"/cinco-mais";return this.$http.get(e)}},{key:"votar",value:function(a){var e=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],t=this.uriObras+"/"+a+"?util="+e;return this.$http.post(t)}},{key:"quantidade",value:function(){var a=this.uriObras+"/quantidade";return this.$http.get(a)}},{key:"paginado",value:function(){var a=arguments.length<=0||void 0===arguments[0]?1:arguments[0],e=this.uriObras+"/?pagina="+a;return this.$http.get(e)}},{key:"todasDaCidade",value:function(a){var e=this.uriObras+"/cidade/"+a;return this.$http.get(e)}}]),a}()},function(a,e){"use strict";function t(a,e){if(!(a instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(e,"__esModule",{value:!0});var o=function(){function a(a,e){for(var t=0;t<e.length;t++){var o=e[t];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(a,o.key,o)}}return function(e,t,o){return t&&a(e.prototype,t),o&&a(e,o),e}}();e.ObraController=function(){function a(e,o){"ngInject";t(this,a),this.obraService=o,this.buscaObraPorId(e.id)}return a.$inject=["$stateParams","obraService"],o(a,[{key:"votar",value:function(){var a=this,e=arguments.length<=0||void 0===arguments[0]?!0:arguments[0];this.obraService.votar(this.obra.id,e).success(function(e){a.votoComSucesso="Voto Realizado com Sucesso!",a.buscaObraPorId(a.obra.id)}).error(function(a){alert(a)})}},{key:"buscaObraPorId",value:function(a){var e=this;this.obraService.pegaPorID(a).success(function(a){return e.obra=a}).error(function(a){alert(a)})}},{key:"close",value:function(){this.votoComSucesso=""}}]),a}()}]),angular.module("obrasUi").run(["$templateCache",function(a){a.put("app/main/main.html",'<h4>Buscar:</h4><form class=form-inline><div class=form-group><div class=checkbox><label><input type=radio name=tipoBusca id=todasObras value=todasObras ng-model=main.tipoBusca ng-click=main.buscaPorPagina()> Todas</label></div><div class=checkbox><label><input type=radio name=tipoBusca id=porCidade value=porCidade ng-model=main.tipoBusca ng-click=main.buscaPorCidade()> Por cidade</label></div></div></form><br><form class=form-inline ng-show="main.tipoBusca === \'porCidade\'"><div class=form-group><select class=form-control ng-options="cidade as cidade.nome for cidade in main.cidades track by cidade.id" ng-model=main.cidade></select></div><!--\n  <div class="form-group">\n    <ui-select ng-model="vm.cidade" theme="bootstrap" \n               style="width: 300px;" \n               title="Escolha uma cidade" \n               append-to-body="true"\n               reset-search-input="false">\n\n      <ui-select-match placeholder="Selecione uma cidade">{{vm.cidade.nome}}</ui-select-match>\n\n      <ui-select-choices repeat="cidade in vm.cidades | filter: $select.search">\n        <span ng-bind-html="cidade.nome | highlight: $select.search"></span>\n      </ui-select-choices>\n\n    </ui-select>\n  </div>\n  --><div class=form-group><select class=form-control ng-model=main.pioresOuMelhores ng-init="main.pioresOuMelhores = \'todas\'"><option value=todas>Todas</option><option value=melhores>5 Melhores</option><option value=piores>5 Piores</option></select></div><button type=submit ng-click=main.buscar() class="btn btn-default" ng-disabled=!main.cidade>Buscar <span class="glyphicon glyphicon-search" aria-hidden=true></span></button></form><hr><div class=row><div class=col-md-12><div class="panel panel-default"><div class=panel-heading><h3 class=panel-title>Obras</h3></div><div class=panel-body><table class="table table-hover"><thead><tr><th>Cidade</th><th>Destinação da Obra</th><th>Nome da Empresa Contratada</th><th>Data Início da Obra</th><th>Valor Pago</th><th>Detalhar</th></tr></thead><tbody ng-repeat="obra in main.obras"><tr><td>{{::obra.cidade.nome}}</td><td>{{::obra.destinacaoObra}}</td><td>{{::obra.nomeEmpresaContratada}}</td><td>{{::obra.dataInicioObra}}</td><td>{{::obra.valorTotalContratado}}</td><td><a href=#/obra/{{obra.id}}>Detalhar</a></td></tr></tbody></table><uib-pagination ng-show="main.tipoBusca === \'todasObras\'" ng-model=main.paginaCorrente ng-change=main.buscaPorPagina() total-items=main.quantidade max-size=10 class=pagination-sm boundary-links=true force-ellipses=true></uib-pagination></div></div></div></div>'),a.put("app/obra/obra.html",'<div class=row><div class=col-md-12>{{detalhada.voto}}<uib-alert type=success close=detalhada.close() ng-hide=!detalhada.votoComSucesso>{{detalhada.votoComSucesso}}</uib-alert><div class="panel panel-default"><div class=panel-heading><h3 class=panel-title>Obra</h3></div><div class=panel-body><span class="help-block text-justify">As Prefeituras Municipais enviam a planilha de obras em execução até o dia 30 (trinta) do mês subsequente ao encerramento do semestre, reunindo informações dos órgãos da Administração Direta e Indireta municipais conforme Instrução nº 2/2008 em seu artigo 42. Eventuais informações faltantes serão inseridas oportunamente, após notificação do órgão pelo TCESP. <a href=http://transparencia.tce.sp.gov.br/obras-publicas-detalhe/17147#sthash.QsQP1Z10.dpuf>Veja mais. </a></span><small><strong>Última Posição: Exercício de {{detalhada.obra.exercicio}} - {{detalhada.obra.semestre}}º Semestre</strong><br><strong>Data Base da Informação: 30/06/2015</strong></small><div class=row style="padding-top: 30px"><div class=col-md-6><p><strong>Município: </strong>{{::detalhada.obra.cidade.nome}}</p><p><strong>Exercício: </strong>{{::detalhada.obra.exercicio}}</p><p><strong>Função de Governo: </strong>{{::detalhada.obra.funcaoDeGoverno}}</p><p><strong>Órgão Contratante: </strong>{{::detalhada.obra.orgaoContratante}}</p><p><strong>Denominação/Destinação da Obra: </strong>{{::detalhada.obra.destinacaoObra}}</p><p><strong>Endereço da Obra: </strong>{{::detalhada.obra.enderecoObra}}</p><p><strong>PPA (previsão): </strong>{{::detalhada.obra.pPA}}</p><p><strong>LDO (previsão): </strong>{{::detalhada.obra.lDO}}</p><p><strong>Meta Física Anual/Atendimento da População: </strong>{{::detalhada.obra.atendimentoPopulacao}}</p><p><strong>Valor Inicial Previsto: </strong>{{::detalhada.obra.valorInicialPrevisto}}</p><p><strong>Valor Total Contratado: </strong>{{::detalhada.obra.valorTotalContratado}}</p></div><div class=col-md-6><p><strong>Nome da Empresa Contratada: </strong>{{::detalhada.obra.nomeEmpresaContratada}}</p><p><strong>Data de Início da Obra: </strong>{{::detalhada.obra.dataInicioObra}}</p><p><strong>V. Total dos Termos Aditivos: </strong>{{::detalhada.obra.valorTotalTermosAditivos}}</p><p><strong>Reajuste/Revisão do Contrato em %: </strong>{{::detalhada.obra.reajuste}}</p><p><strong>Nível de Execução Física: </strong>{{::detalhada.obra.nivelExecucaoFisica}}</p><p><strong>Valor Total Pago: </strong>{{::detalhada.obra.valorTotalPago}}</p><p><strong>Data Prevista para Conclusão: </strong>{{::detalhada.obra.dataPrevistaConclusao}}</p><p><strong>Situação da Obra: </strong>{{::detalhada.obra.situacaoObra}}</p><p><strong>Data do Recebimento Definitivo: </strong>{{::detalhada.obra.dataRecebimentoDefinitivo}}</p><p><strong>Nome do Servidor Responsável: </strong>{{::detalhada.obra.nomeServidorResponsavel}}</p><p><strong>Observações: </strong>{{::detalhada.obra.observacoes}}</p></div></div></div><div class=panel-footer><button type=button class="btn btn-success" ng-click=detalhada.votar()><span class=badge>{{detalhada.obra.obraUtil}}</span> Útil <span class="glyphicon glyphicon-thumbs-up" aria-hidden=true></span></button> <button type=button class="btn btn-danger" ng-click=detalhada.votar(false)><span class=badge>{{detalhada.obra.obraInutil}}</span> Inútil <span class="glyphicon glyphicon-thumbs-down" aria-hidden=true></span></button></div></div></div></div>'),a.put("app/components/navbar/navbar.html",'<nav class="navbar navbar-static-top navbar-inverse"><div class=container-fluid><div class=navbar-header><a class=navbar-brand href=https://github.com/Swiip/generator-gulp-angular><span class="glyphicon glyphicon-home"></span> Gulp Angular</a></div><div class="collapse navbar-collapse" id=bs-example-navbar-collapse-6><ul class="nav navbar-nav"><li class=active><a ng-href=#>Home</a></li><li><a ng-href=#>About</a></li><li><a ng-href=#>Contact</a></li></ul><ul class="nav navbar-nav navbar-right acme-navbar-text"><li>Application was created {{ vm.relativeDate }}.</li></ul></div></div></nav>')}]);
//# sourceMappingURL=../maps/scripts/app-081351f5bb.js.map
