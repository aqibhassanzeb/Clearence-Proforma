import React from 'react'
import { useHistory } from 'react-router-dom';
import './Home.css'
import Navbar1 from './Navbar1'

const Home = () => {
    const history=useHistory();
    return (

        <>
        <Navbar1/>
        <div className='Home'>
        <h1 className='wellcomeuniversitytext' >Welcome to<br/> UNIVERSITY OF SWABI</h1>
        <h3 className='wellcomeclearencetext'>Clearence Proforma </h3>
        
        <div className='homepagebuttons'>
        <button className='btnhomepage12 btn-primary'
         onClick={()=> history.push('/login')}
        >Student Login</button>
        <br/>
        <button className='btnhomepage2 btn-success' 
         onClick={()=> history.push('/depttlogin')}
        >Department Login</button>
        </div>
        </div>
        </>
    )
}

export default Home
