import React from 'react'
import { Link } from 'react-router-dom'
import './css/Fotter.css'
const Fotter = () => {
  return (
    <div className='fotter'>
      <div className='fotter-container'>
          <div className='fotter-item1'>
            <Link to="/">Home</Link>
            <Link to="">About</Link>
            <Link to="/services">Services</Link>
            <Link to="">Contact</Link>
          </div>

          <div className='fotter-item2'>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Obcaecati maiores earum labore quasi architecto nemo illum at doloribus nulla. Quae!</p>
          </div>
      </div>

    </div>
  )
}

export default Fotter
