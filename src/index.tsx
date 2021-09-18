import React from "react"
import ReactDom from "react-dom"
import App from "./App"

import "./styles/styl/style.css"

const Application: React.FC = () => {
 return (
  <>
   <App />
  </>
 )
}

ReactDom.render(<Application />, document.getElementById("root"))