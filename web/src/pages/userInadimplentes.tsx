import { useEffect, useState } from 'react';

import './userInadimplentes.styles.scss'
import Alerts from './components/alert';
import MenuAppBar from './components/navbar';
import UsersList from './components/UsersList';
import Users from '../controllers/Users';
import PrimeiroAcesso from './primeiroAcesso';

const UserInadimplentes = () => {

    const [initNewList, setInitNewList] = useState(false);
    const [initList, setInitList] = useState(false);
    const [error, setError] = useState(false);

    const getUsersTotal = async () => {
        setError(false);
        const result = await Users.getTotal();

        if (result.statusCode === 1) {
            if (!result.data) {
                setInitNewList(true);
                return;
            }

            setInitList(true);
            return;
        }

        //tratar erros aqui
        setError(true);
    }
    useEffect(() => {
        let isMount = true;

        if (isMount) getUsersTotal();
        return () => {
            isMount = false;
        };
    }, []);

    return (
        <div className="app-mount">

            <MenuAppBar />

            {initList && <UsersList />}
            {initNewList && <PrimeiroAcesso callBackList={() => getUsersTotal()} />}
            {error && <Alerts />}
        </div>
    );
}

export default UserInadimplentes;