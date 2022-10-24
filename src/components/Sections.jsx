import React from 'react'
import { Link } from 'react-router-dom'
import './css/Sections.css'
const Sections = () => {
    return (
        <div className='sections'>
            <Link to='/notebooks'>
                <h3>Notebooks</h3>
            </Link>
            <Link to='/Phones'>
                <h3 >Celulares</h3>
            </Link>
            <Link to='/Acessories'>
                <h3>Acessórios</h3>
            </Link>
        </div>
    )
}

export default Sections