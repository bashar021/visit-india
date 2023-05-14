import React, { useState } from 'react'
import '../styles/Searchplace.css'
import red_fort from '../images/red_fort.jpg'
import { useNavigate } from 'react-router-dom'
import fri from '../images/fri.jpg'
import qutubminar from '../images/qutubminar.jpg'
import sardar from '../images/sardar.jpg'
import purana from '../images/Purana-Qila.jpg'
import taj from '../images/taj.webp'
import jantar from '../images/d4.jpg'
import agra_fort from '../images/agra-fort.jpg'
import ajanta_caves from '../images/ajanta-caves.jpg'
import ancient_vaishali from '../images/ancient-rani-vaishali.jpeg'
import ropar_museusm from '../images/archaeological-museum-ropar.jpg'
import buddhist_cave from '../images/buddhist-cave.png'
import champaran_monument from '../images/champaran-monument.jpg'
import charminar from '../images/charminar.jpg'
import chittaugarh_fort from '../images/chittaurgarh-fort.jpg'
import daulat_bag from '../images/Daria-Daulat-Bagh.webp'
import fatehpur_sikri from '../images/fatehpur-sikri.jpg'
import hauz_khas from '../images/Hauz-Khas.jpg'
import jaigarg_fort from '../images/jaigarg-fort.jpg'
import jhansi_fort from '../images/jhansi-fort.jpg'
import shekchilli_tomb from '../images/sheikh-chilli-tomb.webp'
import sun_temple_konark from '../images/sun-temple-konark.webp'
import tipu_sultan from '../images/tipu-sultan-palace.jpg'
import tughlaqabad from '../images/Tughlaqabad-fort.webp'


export default function Searchplace(props) {
    let [show_place_img, set_show_place_img] = useState('')
    let [place_detail, set_place_detail] = useState({})
    const navigate = useNavigate()
    function redirect_page_onselect() {
        navigate('/user/book your ticket')
    }
    const visiting_place_data_arr = [
        {
            name:"Agra Fort",
            img_url:agra_fort,
            price:35,
            address:"Agra",
            price_foren:550


        },
        {
            name:"Ajanta Caves",
            img_url:ajanta_caves,
            price:35,
            address:"Aurangabad",
            price_foren:550


        },
        {
            name:"Rani Vaishali",
            img_url:ancient_vaishali,
            price:20,
            address:"Patna",
            price_foren:250

        },
        {
            name:"Ropar Museum",
            img_url:ropar_museusm,
            price:5,
            address:"Chandigarh",
            price_foren:250

        },
        {
            name:"Buddhist Caves",
            img_url:buddhist_cave,
            price:20,
            address:"Mumbai",
            price_foren:250

        },
        {
            name:"Champaran Fort",
            img_url:champaran_monument,
            price:35,
            address:"Aurangabad",
            price_foren:550

        },
        {
            name:"Char Minar",
            img_url:charminar,
            price:20,
            address:"Hyderabad",
            price_foren:250

        },
        {
            name:"Chittaurgarh Fort",
            img_url:chittaugarh_fort,
            price:35,
            address:"Jodhpur",
            price_foren:550

        },
        {
            name:"Daulat Bagh",
            img_url:daulat_bag,
            price:20,
            address:"Banglore",
            price_foren:250

        },
        {
            name:"Fatehpur Sikri",
            img_url:fatehpur_sikri,
            price:35,
            address:"Agra",
            price_foren:550

        },
        {
            name:"Hauz Khaz",
            img_url:hauz_khas,
            price:20,
            address:"Delhi",
            price_foren:250

        },
        {
            name:"Jaigarh Fort",
            img_url:jaigarg_fort,
            price:20,
            address:"Rajasthan",
            price_foren:250

        },
        {
            name:"Jhansi Fort",
            img_url:jhansi_fort,
            price:20,
            address:"Jhansi",
            price_foren:250

        },
        {
            name:"Shikh Chilli Tomb",
            img_url:shekchilli_tomb,
            price:20,
            address:"Chandigarh",
            price_foren:250

        },
        {
            name:"Sun Temple",
            img_url:sun_temple_konark,
            price:35,
            address:"Bhubaneshwar",
            price_foren:550

        },
        {
            name:"Tipu Sultan Palace",
            img_url:tipu_sultan,
            price:20,
            address:"Banglore",
            price_foren:250

        },
        {
            name:"Tughlaqabad Fort",
            img_url:tughlaqabad,
            price:20,
            address:"Delhi",
            price_foren:250

        },

        {
            name: 'Taj Mahal',
            img_url: taj,
            price: 45,
            address: "Agra",
            price_foren:1050
        },
        {
            name: 'Red Fort',
            img_url: red_fort,
            price: 35,
            address: "Delhi",
            price_foren:350
        },
        {
            name: 'Qutub minar',
            img_url: qutubminar,
            price: 35,
            address: "Delhi",
            price_foren:350
        },
        {
            name: 'Jantar Mantar ',
            img_url: jantar,
            price: 20,
            address: "Delhi",
            price_foren:250
        },
        {
            name: "Purana Quila",
            img_url: purana,
            price: 30,
            address: "Agra",
            price_foren:350
        },
        {
            name: "FRI",
            img_url: fri,
            price: 20,
            address: "Dehradun",
            price_foren:250
        },
        {
            name: 'Statue of Uniity',
            img_url: sardar,
            price: 150,
            address: "Gujarat",
            price_foren:1030

        }
    ]
    // DISPLAYING THE SEARCH PLACE FROM THE CURRENT PLACESS 
    function on_search(value) {
        let place_search_value = value.toUpperCase()
        let img_cont = document.querySelectorAll('.place_img_cont')
        for (let i = 0; i < img_cont.length; i++) {
            if (!img_cont[i].innerText.toUpperCase().includes(place_search_value)) {
                img_cont[i].style.display = 'none'
            } else {
                img_cont[i].style.display = 'block'
            }
        }

    }
    // FUNCTION TO SHOW THE PLACE DETIALS WITH IMAGE 
    function show_place_detail() {
        let place_detail_cont = document.getElementById('place_detail_cont')
        place_detail_cont.style.display = 'block'
    }
    function close_place_detail() {
        let place_detail_cont = document.getElementById('place_detail_cont')
        place_detail_cont.style.display = 'none'

    }
    return (
        <>
            <div className='search_place_cont'>

                <div className='container-fluid'>
                    <div className='search_bar_cont mx-auto '>
                        <form class="form-inline">
                            <div class="form-group  mb-2 search_input_cont mx-auto ">
                                <input onChange={function (event) { ; on_search(event.target.value) }} class=" search_input form-control mx-auto" style={{ width: "100%" }} type="text" placeholder="Search your place here…"></input>
                            </div>
                        </form>
                    </div>
                </div>

                <div clasName='places_items_cont' >
                    {
                        visiting_place_data_arr.map((place, index) => {
                            return (
                                <div onClick={function () { set_show_place_img(place); show_place_detail(); set_place_detail(place) }} className='col-md-3 place_img_cont text-center '>
                                    <img src={place.img_url} width='50%' height='200px' alt="" />
                                    <p >{place.name} :<span>{place.address}</span></p>
                                </div>

                            )
                        })
                    }
                </div>
                {/* CONTAINER TO SHOW THE SLECTED PLACE DETAIL  */}
                <div id='place_detail_cont' className='place_detail_cont'>
                    {/* CLOSE BUTTON OF THE PLACE DETAIL CONTAINER  */}
                    <button onClick={function () { close_place_detail() }} type="button" id="detail_cont_close_btn" aria-label="Close">
                        <span aria-hidden="true">&times; </span>
                    </button>


                    <div id='place_detail_cont_child'>
                        <div>
                            {
                                show_place_img !== '' ? <img src={show_place_img.img_url} width='100%' alt={show_place_img.name} /> : <span></span>
                            }

                        </div>
                        <div id='place_detail_box'>
                            <p className='h2 text-white'> {show_place_img.name}</p>
                            <p className='h3 text-white mt-1'>{place_detail.address}</p>
                            <p className='h3 text-white mt-1'> <span>Price/Person : </span>{place_detail.price}</p>
                            <p className='h3 text-white mt-1'> <span>Price/Person : </span>{place_detail.price_foren}  (Foreigner)</p>
                            
                            <button onClick={function () { props.state.set_selected_place_data(show_place_img); redirect_page_onselect() }} className='btn btn-primary text-white'>Continue</button>
                            
                        </div>

                    </div>


                </div>
            </div>
        </>
    )
}
