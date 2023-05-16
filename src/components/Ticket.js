
import '../styles/Ticket.css'
import React, { useState, useEffect } from 'react'
import QRCode from 'react-qr-code';
import { Canvg } from 'canvg';
import Postdata from '../controlers/post.js'
export default function Ticket(props) {
    /* These are three state variables created using the `useState` hook in a React functional
    component. */
    const [ticket_img_ulr, set_ticket_img_url] = useState('')
    const [qr_img_genrated, set_img_genrated] = useState(false)
    const [download_url, set_download_url] = useState('')
   /* The `useEffect` hook is used to perform side effects in a functional component. In this case, it
   is called with an empty dependency array `[]`, which means it will only run once when the
   component mounts. */
    useEffect(() => {
        
        qrcode_daata_to_database()
        // genrate_ticket()
    }, [])


   /**
    * The function generates a ticket by concatenating the name, phone number, and date of each person
    * in a given data array.
    * @returns the concatenated string of names, phone numbers, and dates of all the persons in the
    * `props.persons_data` array. It is also setting the `ticket_img_url` state to the same
    * concatenated string.
    */
   
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
    /**
     * The function saves QR code data to a database by generating a ticket URL and posting it to a
     * server.
     */
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
    /**
     * The function converts an SVG QR code to a PNG, creates a download URL for it, and saves it for
     * downloading.
     */
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
        {/* This code is creating a container for the ticket and displaying some information related
        to the ticket. It includes a heading "Happy Journey", the number of persons for whom the
        ticket is generated, a button to download the ticket, and a warning message that the
        ticket is valid only for 24 hours. The `onClick` event of the download button is calling
        the `download_qr_code()` function, which converts the SVG QR code to a PNG, creates a
        download URL for it, and saves it for downloading. The `download_url` state variable is
        used to set the `href` attribute of the download link. It also creates a container for the
        QR code image. It includes a loading spinner that is displayed while the QR code image is
        being generated. Once the image is generated, it is displayed using the `QRCode` component
        from the `react-qr-code` library. The `qr_img_genrated` state variable is used to
        conditionally render either the loading spinner or the QR code image. The `ticket_img_ulr`
        state variable is passed as the `value` prop to the `QRCode` component to generate the QR
        code image. */}
        
            <div className='container-fluid ticket_cont' >
                <div className='row'>
                    {/* DOWNLOAD YOUR TICKET BUTTON CONTAINER  */}
                   {/* This code is creating a container for the download button and displaying some
                   information related to the ticket. It includes a heading "Happy Journey", the
                   number of persons for whom the ticket is generated, a button to download the
                   ticket, and a warning message that the ticket is valid only for 24 hours. The
                   `onClick` event of the download button is calling the `download_qr_code()`
                   function, which converts the SVG QR code to a PNG, creates a download URL for it,
                   and saves it for downloading. The `download_url` state variable is used to set
                   the `href` attribute of the download link. */}
                    <div className='col-md-5 download_btn_cont text-center'>
                        <p className='h1'>Happy Journey</p>
                        <p className='mt-0 mb-4 h4'><span>{ticket_img_ulr.split(',').length-1 } </span>  person ticket</p>
                        <button onClick={function () { download_qr_code() }} className='btn btn-primary'><a href={download_url} className='text-decoration-none text-white' download>Dwonload your ticket</a></button>
                        <p className='text-danger mt-5'>This ticket valid only for 24 hours </p>
                    </div>
                    {/* QR CODE IMAGE CONTAINER */}
                    {/* This code is creating a container for the QR code image. It also includes a
                    loading spinner that is displayed while the QR code image is being generated.
                    Once the image is generated, it is displayed using the `QRCode` component from
                    the `react-qr-code` library. The `qr_img_genrated` state variable is used to
                    conditionally render either the loading spinner or the QR code image. The
                    `ticket_img_ulr` state variable is passed as the `value` prop to the `QRCode`
                    component to generate the QR code image. */}
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
