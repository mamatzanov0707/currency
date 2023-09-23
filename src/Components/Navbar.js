import React from 'react';
import {FaCoins} from "react-icons/fa";
import  './Navbar.css'
import {Link} from "react-router-dom";

const Navbar = () => {
    return (
       <div style={{
           display:'flex',
           alignItems:'center',
           justifyContent:'center'
       }}>
           <Link to='/'>
               <div className='navbar'>
                   <FaCoins className='icon'/>
                   <h1>Coin <span className='purple'>Search</span></h1>
               </div>
           </Link>
           <div>
              <Link to='/corr'>
                  <button style={{
                      padding:'10px 30px',
                      cursor:'pointer',
                      border:'none',
                      marginLeft:'20px',
                      color:'white',
                      fontSize:'19px',
                      fontWeight:'bold',
                      background:'#000',
                      borderRadius:'20px',
                  }}>send</button>
              </Link>
           </div>
       </div>
    );
};

export default Navbar;