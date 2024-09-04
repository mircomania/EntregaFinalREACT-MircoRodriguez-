import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ErrorPage } from './components/utils/paginaError';
import { ItemDetailContainer } from './components/itemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';
import { Provider } from './contexts/itemContext';
import { Cart } from './components/Checkout';

function App() {
    return (
        <Provider>
            <BrowserRouter>
                <NavBar />
                <Routes>
                    <Route path="/" element={<ItemListContainer />} />
                    <Route path="/cart" element={<Cart />} />
                    <Route path="/category/:id" element={<ItemListContainer />} />
                    <Route path="/Item/:id" element={<ItemDetailContainer />} />
                    <Route path="*" element={<ErrorPage />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    );
}

export default App;
