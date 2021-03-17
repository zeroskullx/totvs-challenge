import { Router } from 'express';

import ClientesInadimplentesModel from './clientes/model'
const routes = Router();

routes.get('/clientes/inadimplentes/get', ClientesInadimplentesModel.get);
routes.get('/clientes/inadimplentes/total', ClientesInadimplentesModel.total);
routes.get('/clientes/inadimplentes/search/:term', ClientesInadimplentesModel.search);

routes.post('/clientes/inadimplentes/add', ClientesInadimplentesModel.add);
routes.put('/clientes/inadimplentes/addManyUsers', ClientesInadimplentesModel.addManyUsers);

export default routes;