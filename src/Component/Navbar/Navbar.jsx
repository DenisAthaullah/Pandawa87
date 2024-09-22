import React from 'react';
import './navbar.css'

const Navbar = () => {
    return (
       <header className="header">
        <img src="http://pandawa87pasuruan.com/wp-content/uploads/2020/02/LogoPandawa87Pasuruan2020-min.jpeg" className='judul' alt="" />

        <nav className="navbar">
            <a href="#brnd">Beranda</a>
            <a href="#partner" className='profil'>Partner</a>
            <a href="#unt" className='unit'>Unit</a>
            <a href="#kontak" className='kontak kami'>Kontak kami</a>
        </nav>
       
       </header>
    )   
}

export default Navbar