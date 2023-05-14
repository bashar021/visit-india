import React from 'react'
import '../styles/BookTicket.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
export default function BookTicket(props) {
    const navigate = useNavigate()
    const [date, setDate] = useState('2000-01-01');
    const [name, setName] = useState('')
    const [phone, setPhone] = useState('')
    const [number_of_person, setnumber_of_person] = useState([])
    const [mssg, set_mssg] = useState('')
    const [natl, set_natl] = useState('')
    // SETTING A BY DEFAULT PRICE FOR A PERSON ONE 
    const [updated_price, update_price] = useState(props.place_data.price)
    // const [selected_data,set_selected_data]  = useState({})
    useEffect(() => {
        getDate()
    }, []);
    //   setting a bydefault date of today onlad event 
    function getDate() {
        var today = new Date();
        let new_date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        setDate(new_date)
    }
    // combining the first person to the new person and then updating it to the array 
    function update_person_list(myword) {
        setnumber_of_person(number_of_person.concat(myword))
        // CALLING THE PRICE FUNCTION TO ALSO UPDATE THE PRICE 
        price()
    }
    // making a function to make object of the data of person and call the updat function to update in that function 
    function add_persons() {
        let data = { name: name, phone: phone, date: date }
        if (name !== '') {
            update_person_list(data)
        }
    }
    // UPDATING THE PRICE OF THE TICKET ACCORDING TO THE PERSONS AND SAVING THE PRICE TO THE USETATE AND USING IT IN THE HTML
    function price() {
        if (number_of_person.length !== 0) {
            let price;
            if (natl === 'Indian') {
                price = (number_of_person.length + 1) * props.place_data.price
                console.log(number_of_person.length)
                update_price(price)
            }
            if (natl === 'Foreigner') {
                price = (number_of_person.length + 1) * props.place_data.price_foren
                console.log(number_of_person.length)
                update_price(price)

            }

        }
    }
    // NAVIGATE THE PAGE ON THE TIKET GENRATOR PAGE AFTER PAYMENT 
    function stop_form(event) {
        event.preventDefault();
        props.set_place_data(props.place_data)
        // PASSING THE DATA OF THE PERSON TO THE TICKET PAGE ACCORDING TO THE LENGTH OF THE PERSONG ADDED FOR TICKET 
        if (number_of_person.length > 0) {
            props.set_persons_data(number_of_person)
            if (name === '' && phone === '') {
                navigate('/user/ticket')
                console.log(name, phone)
                console.log('null')
            } else {
                set_mssg('please add person')
            }
            // console.log(number_of_person)
        } else {
            props.set_persons_data([{ name: name, phone: phone, date: date }])
            navigate('/user/ticket')
            // console.log({name:name,phone:phone,date:date})
        }


    }
    // if the  number of person is  add to the list or there is more person then remove the required condition from the inputs so that form can be submit 
    if (number_of_person.length > 0) {
        const name_Input = document.getElementById("person_name");
        const phone_Input = document.getElementById("person_phone");
        name_Input.removeAttribute("required");
        phone_Input.removeAttribute("required");

    }
    return (
        <>
            {/* style={{backgroundImage:`url(${india_flag})`} */}
            <div className='container-fluid ticket_book_cont' >
                <div className='row'>
                    <div className='col-md-5 book_cont '>
                        <form onSubmit={stop_form} >
                            <ol className='list-unstyled list-inline'>
                                <li ><input id='person_name' className='book_input' value={name} onChange={function (event) { setName(event.target.value) }} type="text" placeholder='Name' required /></li>
                                <li> <input id='person_phone' className='book_input' style={{ WebkitAppearance: 'none' }} value={phone} onChange={function (event) { setPhone(event.target.value) }} type="number" placeholder='Phone' required /></li>
                                <li></li>
                            </ol>
                            {/* button to add the more peoples for ticket  */}
                            <input className='book_input' id='date' type="date" value={date} onChange={(event) => { setDate(event.target.value) }} placeholder='Date' />



                            <button id='add_person_btn' onClick={function () { add_persons(); setName(''); setPhone(''); set_mssg('') }} type='button'>Add member</button><br />

                            <input name='natl' onClick={function (event) { set_natl(event.target.value);console.log('foren');update_price(props.place_data.price) }} type="radio" value="Indian" />
                            <label className='mt-5 ml-3' htmlFor="">India</label>
                            <input name='natl' onClick={function (event) { set_natl(event.target.value);console.log('foren') ;update_price(props.place_data.price_foren);console.log(props.place_data.price_foren)}} className='ml-3' type="radio" value='Foreigner' />
                            <label className='ml-3' htmlFor="">Foreigner</label>
                            {/* presenting the names of the peoples  */}
                            <p className='person_list_box'>
                                {
                                    number_of_person.map((person, index) => {
                                        return (<span style={{ fontSize: "18px" }} className='person_list_name' key={index}>{person.name}</span>)
                                    })
                                }
                            </p>
                            <p id='total_price'> <button id='payment_btn' className='btn btn-primary' type='submit'>Payment</button>
                                <span>Total = </span><span>{updated_price}</span> </p>
                            {
                                mssg !== '' ? <p className='text-danger'>Please , First click on Add member</p> : <span></span>
                            }

                        </form>
                    </div>

                    <div className='col-md-5 select_place_image_cont'>
                        {
                            props.place_data !== '' ? <img src={props.place_data.img_url} alt="" /> : <span></span>
                        }
                    </div>
                </div>
            </div>
        </>
    )
}
