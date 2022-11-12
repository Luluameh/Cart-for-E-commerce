import React from 'react'
import Collections from '../Pages/Collections'
import Men from '../Pages/Men'
import Women from '../Pages/Women'
import About from '../Pages/About'
import Contact from '../Pages/Contact'




import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const route = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Collections />} />
          <Route path="/Men" element={<Men />} />
          <Route path="/Women" element={<Women />} />
            <Route path="/About" element={<About />} />
            <Route path="/contact" element={<Contact />} />

      </Routes>
      </BrowserRouter>,

    </>
  )
}

export default route