import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ItemDetailContainer } from './components/itemDetailContainer';
import { ItemListContainer } from './components/ItemListContainer';
import { NavBar } from './components/NavBar';

function App() {
    return (
        <BrowserRouter>
            <NavBar />
            <Routes>
                <Route path="/" element={<ItemListContainer />} />
                <Route path="/category/:id" element={<ItemListContainer />} />
                <Route path="/Item/:id" element={<ItemDetailContainer />} />
                <Route path="*" element={404} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
