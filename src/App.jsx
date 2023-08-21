import { Route, Routes } from "react-router-dom"
import Products from "./pages/products"
import Add from "./pages/Add"
import Update from "./pages/Update"
function App() {

  return (
    <>

      <Routes>
        <Route path="/" element={<Products />} />
        <Route path="/add" element={<Add />} />
        <Route path="/update/:id" element={<Update />} />
      </Routes>

    </>
  )
}

export default App
