import { BrowserRouter, Switch, Route } from 'react-router-dom'; // Install / @types/react-router-dom

import UserInadimplentes from './pages/userInadimplentes';

function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path="/" exact component={UserInadimplentes} />
            </Switch>
        </BrowserRouter>
    );
}

export default Routes;