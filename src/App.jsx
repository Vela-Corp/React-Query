import { Route, Routes } from "react-router-dom"
import Products from "./pages/Products.jsx"
import Add from "./pages/Add.jsx"
import Update from "./pages/Update.jsx"
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
