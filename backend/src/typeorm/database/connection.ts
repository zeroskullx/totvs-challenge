import { createConnection, getConnectionManager, ConnectionManager, Connection } from "typeorm";
import ClientesInadimplentes from '../entities/ClientesInadimplentes';


createConnection().then(
    () => console.log('📦 Successfully connected with database')
);





