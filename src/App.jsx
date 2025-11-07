import { Home } from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Notfound } from "./pages/Notfound";
function App() {
 

  return (
    <>
     <BrowserRouter>
     <Routes>
      <Route index element={<Home />}/>

      <Route path="*"element= {<Notfound />} />
     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
