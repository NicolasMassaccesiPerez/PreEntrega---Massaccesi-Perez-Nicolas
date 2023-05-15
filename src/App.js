import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import { ItemListContainer } from "./components/ItemList/ItemListContainer";
import { ItemDetailContainer } from "./components/ItemDetail/ItemDetailContainer";
import { Navbar } from "./components/Navbar/Navbar";
import CartContainer from "./components/Cart/CartContainer";
import Footer from "./components/Footer/Footer";
import CartContextProvider from "./context/CartContext";
import { FormCheckoutContainer } from "./components/FormCheckout/FormCheckoutContainer";

function App() {
    return (
        <BrowserRouter>
            <CartContextProvider>
                <Routes>
                    <Route element={<Navbar />}>
                        <Route path="/" element={<ItemListContainer />} />
                        <Route path="/category/:category" element={<ItemListContainer />} />
                        <Route path="/itemDetail/:id" element={<ItemDetailContainer />} />
                        <Route path="/cart" element={<CartContainer />} />
                        <Route path="/checkout" element={<FormCheckoutContainer />} />
                        <Route path="*" element={<h1>Error 404 NOT FOUND</h1>} />
                    </Route>
                </Routes>
                <Footer />
            </CartContextProvider>
        </BrowserRouter>
    );
}

export default App;
