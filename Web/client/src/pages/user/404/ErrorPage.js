// Modules or Utils
import React, { useEffect} from 'react'
import { Link } from 'react-router-dom'


import { BiLeftArrowAlt } from "react-icons/bi"
// css
import "./ErrorPage.css"
// components

import Footer from "../../../Layouts/footer/Footer"

const ErrorPage = () => {

  useEffect(() => {
    document.title = 404
  })
  return (
    <div>
    <Link style={{top:"3.5%",left:"8%" ,position:"absolute"}} to="/"><img alt="company" src="./logo.svg"/></Link>

      <div id="notfound">
        <div class="notfound">
          <div class="notfound-404">
            <h3>Oops! Page not found</h3>
            <h1><span>4</span><span>0</span><span>4</span></h1>
          </div>
          <h2>we are sorry, but the page you requested was not found</h2>
          <Link to="/" className='HomeLink'> <BiLeftArrowAlt />Go BackHome</Link>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ErrorPage