import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavComponent } from "../components";
import { Home, ItemDetailContainer, ItemCategoryContainer } from "../containers";

export const MainRouter = () => {
    
    return(
        <BrowserRouter>
            <NavComponent/>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path="/item/:id" element={<ItemDetailContainer />} />
                <Route path="/category/:categoryId" element={<ItemCategoryContainer />} />
            </Routes>
        </BrowserRouter>
    );
};