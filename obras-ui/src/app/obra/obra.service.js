export class ObraService {
	/*@ngInject*/
	constructor($http, config) {
		this.$http = $http;
		this.config = config;
		this.uriObras = `${config.uri}obras`;
	}

	pegaCincoPiores(idCidade) {
		let uriCincoPiores = `${this.uriObras}/cidade/${idCidade}/cinco-menos`;
		return this.$http.get(uriCincoPiores);
	}

	pegaCincoMelhores(idCidade) {
		let uriCincoMelhores = `${this.uriObras}/cidade/${idCidade}/cinco-mais`;
		return this.$http.get(uriCincoMelhores);
	}

}