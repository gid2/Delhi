import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import { StoreProvider } from 'app/providers/StoreProvider';

render(
    <BrowserRouter>
        <StoreProvider>
        <App />
        </StoreProvider>
    </BrowserRouter>,
    document.getElementById('root'),
);
