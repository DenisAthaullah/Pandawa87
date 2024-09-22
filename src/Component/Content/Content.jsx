import React from 'react';
import './content.css'

const Content = () => {
    return(
        <div className="container" >
            <div className="beranda">
                <div className="background" id='brnd'>
                    <center>
                    <img src="https://pandawa87pasuruan.com/wp-content/uploads/2024/06/Logo2024.png" className='gambar2' alt="" />
                    </center>
                </div>
            </div>
            
            <div id='unt' className="unit">
                <div className="content1">
                    <img src="https://awsimages.detik.net.id/community/media/visual/2022/11/01/po-pandawa-87-meluncurkan-bus-double-decker-dengan-bodi-adiputro_169.jpeg?w=1200" className='foto'  alt="" />
                    <div className="teks">
                        <h3>Armada</h3>
                        <h2>Unit elegan dan berkelas</h2>
                        <hr />
                        <p>Kami menyiapkan unit sesuai dengan kebutuhan Anda. Terdapat berbagai pilihan unit yang tersedia. Untuk perjalanan wisata, keluarga hingga untuk kebutuhan bisnis atau korporat.
                        Rasakan kenyamanan perjalanan dengan PO. Pandawa 87 Pasuruan.</p>
                    </div>
                </div>
                <div className="content2">
                    <img src="https://pandawa87pasuruan.com/wp-content/uploads/2020/02/GbrKecil1.jpg" className='bus1' alt="" />
                    <img src="https://pandawa87pasuruan.com/wp-content/uploads/2020/02/GbrKecil2.jpg" className='bus2' alt="" />
                    <img src="https://pandawa87pasuruan.com/wp-content/uploads/2020/02/GbrKecil3.jpg" className='bus3' alt="" />
                    <img src="https://pandawa87pasuruan.com/wp-content/uploads/2020/02/GbrKecil4.jpg" className='bus4' alt="" />
                </div>
            </div>

            <div className="partner">
                <center>
                <h3 id='partner' >Partner Kami</h3>
                <p>Untuk berkontribusi terhadap perubahan positif dan mencapai tujuan keberlanjutan, kami bermitra dengan banyak organisasi yang luar biasa.
                Keahlian mereka memungkinkan kami untuk melakukan jauh lebih banyak, gairah dan nama besar mereka menginspirasi kami.
                Kebanggaan kami untuk memperkenalkan Anda kepada beberapa organisasi yang prestasi dan komitmennya tidak diragukan lagi.</p>
                </center>
                <img src="src/Component/Content/logo-logoan.png" className='logoan' alt="" />
            </div>

            <div id='kontak' className="kontak">
                <img src="src/Component/Content/kontak.png" alt="" />
            </div>
        </div>
    )
}

export default Content