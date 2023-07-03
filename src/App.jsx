import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/layouts/Navbar/Navbar";
import Footer from "./components/layouts/Footer/Footer";
import DentistContextProvider from "./context/DentistContext";
import ThemeContextProvider from "./context/ThemeContext";
import DentistsContainer from "./components/pages/Dentists/DentistsContainer";
import Home from "./components/pages/Home/Home"

//import './App.css'

function App() {

  return (
    <BrowserRouter>
      <ThemeContextProvider>
        <DentistContextProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route element={<Navbar />}>
              <Route element={<Footer />}>
                <Route path="dentists" element={<DentistsContainer />} />
                <Route path="dentist/:id" element={<h1>Here will be selected dentist' card</h1>} />
                <Route path="contact" element={<h1>Here will be contacts' form</h1>} />
                <Route path="favs" element={<h1>Here will be favorites dentists' data</h1>} />
              </Route>
            </Route>
            <Route path="*" element={<h1>Not Found</h1>} />
          </Routes>
        </DentistContextProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  )
}

export default App
