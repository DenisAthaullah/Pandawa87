import React from 'react'
import './footer.css'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="kontakPerson" id='kontak'>
            <h3>Kontak Person</h3>
            <div className="notlp">
                <p>
                    Office: (0343) 564 3603 <br />
                    DAYAT: 0813 7315 6565 <br />
                    ALI: 0822 4421 8887
                </p>    
            </div>
        </div>

        <div className="ourPandawa">
            <h3>Our Pandawa</h3>
            <div className="alamat">
                <p>
                    pandawa87pasuruan.com <br /> (Pasuruan) <br /> www.pandawa87.co.id (Boyolali) <br /> pandawa87cianjur.com <br /> (Cinanjur) pandawa87karawang
                </p>
            </div>
        </div>

    </div>
  )
}

export default Footer