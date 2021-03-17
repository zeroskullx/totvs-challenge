import { useEffect, useState } from 'react';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import Users from '../controllers/Users';

const PrimeiroAcesso = ({ callBackList }: { callBackList: () => void }) => {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [msg, setMsg] = useState('Um momento...');

    const mountList = async () => {

        setError(false);
        setLoading(true);

        const result = await Users.mountUserList();
        //'Ok, lista criada...'
        setLoading(false);

        if (result.message === 3) {
            setMsg('Ooops... algo deu errado!');
            setError(true);
            return;
        }
        if (result.message === 2) {
            setMsg('Um lista já foi criada');
            return;
        }

        setMsg('Ok, lista criada...');

    }

    useEffect(() => {
        let isMount = true;
        if (isMount) mountList();
        return () => {
            isMount = false;
        }
    }, [])

    function handleItemUpdate() {
        setLoading(true);
        setMsg('Um momento...');
        setError(false);
        mountList();
    }

    function handleINext() {
        setLoading(true);
        setMsg('Um momento...');
        setError(false);
        callBackList();
    }

    return (
        <div className="user-list-container mount-alert">
            <Card className={"user-list-card"}>
                <CardContent>
                    <h2>
                        <span>{msg}</span>
                        {loading && <CircularProgress size={22} />}
                    </h2>
                    <p>Estamos criando o banco de dados!</p>
                </CardContent>
                <CardActions>
                    {!loading && !error && <Button size="small" onClick={handleINext} >Continua</Button>}
                    {error && <Button size="small" onClick={handleItemUpdate}>Atualizar a página</Button>}
                </CardActions>
            </Card>
        </div>
    );
}

export default PrimeiroAcesso;