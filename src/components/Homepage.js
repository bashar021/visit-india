/**
 * The function returns the homepage component with a banner section containing a background image and
 * a button to select a place to visit in India.
 * @returns The Homepage component is being returned, which contains JSX code for the homepage of a
 * website.
 */
import React from 'react'
import {Link} from 'react-router-dom'
import '../styles/Homepage.css'
import red_fort from '../images/red_fort.jpg'
export default function Homepage() {
    return (
        <>
            <div className='container-fluid banner_container'>
                {/* background image  */}
               {/* Creating a blockquote element with an ID of "banner_img_blockquote" and a citation of
               "https://wallpaperaccess.com/red-fort". Inside the blockquote element, it is adding
               an image element with an ID of "banner_img", a source of the "red_fort" image
               imported at the top of the file, an alt text of "red fort", and a width of 100%. This
                is used to display the background image for the banner section of the homepage. */}

                <blockquote id='banner_img_blockquote' cite='https://wallpaperaccess.com/red-fort'>
                    <img id='banner_img' src={red_fort} alt="red fort" width='100%' />
                </blockquote>
                                
                {/* This code is creating a container with a button that links to the "select place" page for the user
                to choose a place to visit in India. The container has a class of "container-fluid" and an ID of
                "get_ticket_btn_box". Inside the container, there is a row with a class of "row" and a margin-left
                of 5. Inside the row, there is a column with a class of "col-md-12" and a class of "ticket_btn_col".
                Inside the column, there is an h1 element with the text "Visit India" and a Link component that
                links to the "/user/select place" route. Inside the Link component, there is a button with a class
            of "g_y_t_btn" and a margin-top of 5, with the text "Get Your Ticket". */}

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
