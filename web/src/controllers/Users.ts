
import service from "../utils/service";
import { prepareList } from "../utils/Utils";

export interface userData {
    id: string;
    nome: string;
    desde: number;
    desde_label: string;
    valor: number;
    valor_label: string;
}
export interface userDataRequest extends userData {
    createdAt?: string;
}

const Users = {
    async getAll() {

        const results = await service.get('clientes/inadimplentes/get').then(resp => {
            return { status: resp.status, data: resp.data };
        }).catch(error => {
            return error;
        })

        if (results.status !== 200) {
            return [];
        }

        const { ClientesInadimplentes } = results.data;

        return prepareList(ClientesInadimplentes)

    },
    async search(param: string) {

        const results = await service.get(`clientes/inadimplentes/search/${param}`).then(resp => {
            return { status: resp.status, data: resp.data };
        }).catch(error => {
            return error;
        })

        if (results.status !== 200) {
            return [];
        }

        const { ClientesInadimplentes } = results.data;

        return prepareList(ClientesInadimplentes)

    },
    async getTotal() {

        const results = await service.get(`clientes/inadimplentes/total`).then(resp => {
            return { status: resp.status, data: resp.data };
        }).catch(error => {
            return { status: 500, data: 0 };
        })

        if (results.status !== 200) {
            return { statusCode: 7, data: 0 };
        }

        return { statusCode: 1, data: results.data };
    },

    async mountUserList() {
        //resp 1 ok, 2 já foi gravada, 3 err de server
        const results = await service.put(`clientes/inadimplentes/addManyUsers`).then(resp => {
            return { status: resp.status, data: resp.data };
        }).catch(error => {
            return { status: 500, data: 3 };
        })

        if (results.status !== 201) {
            return { statusCode: 7, message: results.data };
        }

        return { statusCode: 1, message: results.data.message };
    }
}

export default Users;