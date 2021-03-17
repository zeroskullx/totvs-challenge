import moment from 'moment';
import { userData, userDataRequest } from '../controllers/Users';

export function formatMoney(value: number) {

    const signal = value < 0 ? "-" : '';

    let _value = String(value).replace(/\D/g, "");

    value = Number(_value) / 100;

    _value = value.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    })

    return signal + _value;
}


export function prepareList(data: userData[]) {

    if (!data) {
        return [];
    }

    const results: userData[] = data.map((data: userDataRequest) => {

        const dd = moment(data.desde, "YYYY-MM-DD").format("DD/MM/YYYY");
        const x = moment(data.desde, "YYYY-MM-DD").format("x");

        return {
            id: data.id,
            nome: data.nome,
            valor: Number(data.valor),
            desde: Number(x),
            desde_label: dd,
            valor_label: formatMoney(data.valor),
        }
    })

    return results;

}