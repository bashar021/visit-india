
import '../styles/Ticket.css'
import React, { useState, useEffect } from 'react'
import QRCode from 'react-qr-code';
import { Canvg } from 'canvg';
import Postdata from '../controlers/post.js'
export default function Ticket(props) {
    const [ticket_img_ulr, set_ticket_img_url] = useState('')
    const [qr_img_genrated, set_img_genrated] = useState(false)
    const [download_url, set_download_url] = useState('')
    useEffect(() => {
        
        qrcode_daata_to_database()
        // genrate_ticket()
    }, [])


    // GENRATING THE DATA OF THE QRCODE 
    const genrate_ticket = function () {
        let names = ''
        let data = props.persons_data
        for (let i = 0; i < data.length; i++) {
            names += data[i].name
            
            names += data[i].phone
            names += data[i].date
            names += ','
        }
        set_ticket_img_url(names)
        return names;
    }
    // saving qr code data to the database 
    function qrcode_daata_to_database() {
        
        console.log(ticket_img_ulr)
        console.log(ticket_img_ulr)
        let url  = genrate_ticket()
        if (url !== '') {
            const data = Postdata("http://localhost/place/qrcode", { url:url})
            if (data.success !== false) {
                console.log('the data has been saved to the server ')
                set_img_genrated(true)
            } else {
                console.log("not saved the data ")
            }
            set_img_genrated(true)

        }
    }
    // CONVERTING THE SVG QRCODE TO PNG AND MAKING ITS URL AND SAVING IT FOR DWONLOADING 
    function download_qr_code() {
        // let svg = document.getElementById('qrCode')
        let svg = document.getElementById("qrCode");
        // Create a new canvas element.
        const canvas = document.createElement('canvas');
        // Set the canvas size to match the SVG size.
        canvas.width = svg.clientWidth;
        canvas.height = svg.clientHeight;
        // Render the SVG to the canvas using canvg.
        const ctx = canvas.getContext('2d');
        const v = Canvg.fromString(ctx, svg.outerHTML);
        v.render();
        const pngUrl = canvas.toDataURL('image/png');
        set_download_url(pngUrl)

    }
    return (
        <>
            {/* style={{ backgroundImage: `url(${india_flag})` } */}
            <div className='container-fluid ticket_cont' >
                <div className='row'>
                    {/* DOWNLOAD YOUR TICKET BUTTON CONTAINER  */}
                    <div className='col-md-5 download_btn_cont text-center'>
                        <p className='h1'>Happy Journey</p>
                        <p className='mt-0 mb-4 h4'><span>{ticket_img_ulr.split(',').length-1 } </span>  person ticket</p>
                        <button onClick={function () { download_qr_code() }} className='btn btn-primary'><a href={download_url} className='text-decoration-none text-white' download>Dwonload your ticket</a></button>
                        <p className='text-danger mt-5'>This ticket valid only for 24 hours </p>
                    </div>
                    {/* QR CODE IMAGE CONTAINER */}
                    <div className='col-md-5 text-center qr_code_img_cont ' >
                        {/* LOADDNG SPPINNER WHILE THE QR CODE IMAGE IS TAKING TIME TO GENRATE  */}
                        {/* IF IMAGE IS NOTE GENRATED THEN SHOW THE SPINNER IF GENRATED THEN SHOW THE QR CODE  */}
                        {qr_img_genrated === false ? <div class="spinner-border align-items-center qr_code_loding_cont" role="status"><span class="sr-only">Loading...</span> </div>
                            : <div  ><QRCode id="qrCode" title="Ticket" value={ticket_img_ulr} bgColor='white' fgColor="black" size={400} viewBox={`0 0 400 400`} /></div>}

                    </div>
                </div>
            </div>
        </>
    )
}
