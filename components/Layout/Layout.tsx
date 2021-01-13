import React from 'react'

import { Navbar } from '../Navbar/Navbar'


const Layout: React.FC = ({ children }) => {
  return(
    <div>
      <Navbar />
      { children }
      <footer>This is the footer</footer>

      <style jsx>{`
        div {
          background-color: salmon;
        }
      `}</style>
    </div>
  )
}

export default Layout