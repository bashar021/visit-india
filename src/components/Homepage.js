import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Homepage.css'
import red_fort from '../images/red_fort.jpg'
export default function Homepage() {
    return (
        <>
            <div className='container-fluid banner_container'>
                {/* background image  */}
                <blockquote id='banner_img_blockquote' cite='https://wallpaperaccess.com/red-fort'>
                    <img id='banner_img' src={red_fort} alt="red fort" width='100%' />
                </blockquote>

                <div className='container-fluid get_ticket_btn_box'>
                    <div id='ticket_btn_cont' className='row ml-5'>
                        <div class="col-md-12 ticket_btn_col">
                            <h1  >Visit India </h1>
                            <Link className='text-decoration-none' to='/user/select place'>
                            <button className=' g_y_t_btn mt-5'>Get Your Ticket</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}
