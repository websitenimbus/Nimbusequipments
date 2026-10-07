import React from 'react';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import { AuthProvider } from '@/contexts/AuthContext';
import HomePage from './pages/HomePage';
import ProductsPage from './pages/ProductsPage';
import ProductDetailPage from './pages/ProductDetailPage';
import ContactPage from './pages/ContactPage';
import RecipCompressorsPage from './pages/RecipCompressorsPage';
import AccessoriesPage from './pages/AccessoriesPage'; // <-- Naya import

function App() {
    return (
        <AuthProvider>
            <Router>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route path="/products" element={<ProductsPage />} />
                    <Route path="/products/reciprocating-compressors" element={<RecipCompressorsPage />} />
                    <Route path="/accessories" element={<AccessoriesPage />} /> {/* <-- Naya route */}
                    <Route path="/products/:id" element={<ProductDetailPage />} />
                    <Route path="/contact" element={<ContactPage />} />
                </Routes>
            </Router>
        </AuthProvider>
    );
}

export default App;
