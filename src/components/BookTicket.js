import React from 'react'
import '../styles/BookTicket.css'
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
export default function BookTicket(props) {
   /* These are all state variables declared using the `useState` hook in a React functional component. */
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
   /* `useEffect(() => { getDate() }, []);` is a React hook that is used to run a side effect after the
   component has rendered. In this case, it is calling the `getDate()` function to set the default
   date when the component mounts. The empty array `[]` as the second argument means that the effect
   will only run once, when the component mounts, and not on subsequent re-renders. */
    useEffect(() => {
        getDate()
    }, []); 
    /**
     * The function gets the current date and formats it as a string in the format "YYYY-MM-DD".
     */
    function getDate() {
        var today = new Date();
        let new_date = today.getFullYear() + '-' + ('0' + (today.getMonth() + 1)).slice(-2) + '-' + ('0' + today.getDate()).slice(-2);
        setDate(new_date)
    }
   
   /**
    * The function updates a list of persons and calls another function to update the price.
    * @param myword - myword is a variable that represents a string value that will be added to the end
    * of the number_of_person array.
    */
    function update_person_list(myword) {
        setnumber_of_person(number_of_person.concat(myword))
        // CALLING THE PRICE FUNCTION TO ALSO UPDATE THE PRICE 
        price()
    }
   
   /**
    * The function adds a person's name, phone number, and date to a list if the name is not empty.
    */
    function add_persons() {
        let data = { name: name, phone: phone, date: date }
        if (name !== '') {
            update_person_list(data)
        }
    }
   /**
    * The function calculates the price based on the number of persons and nationality and updates the
    * price.
    */
    
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
    /**
     * The function stops a form submission, sets place and person data, and navigates to a ticket page
     * based on the number of persons added.
     * @param event - The event parameter is an object that represents an event that occurred in the
     * browser, such as a button click or form submission.
     */
    
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
   /* This code block is removing the "required" attribute from the input fields for name and phone
   number if there is at least one person added to the list of persons. This is done to allow the
   user to submit the form without filling in the name and phone number fields again if they have
   already added at least one person. */
   
    if (number_of_person.length > 0) {
        const name_Input = document.getElementById("person_name");
        const phone_Input = document.getElementById("person_phone");
        name_Input.removeAttribute("required");
        phone_Input.removeAttribute("required");

    }
    return (
        <>
        {/* The above code is rendering a form for booking tickets for a selected place. The form has
        input fields for name, phone number, and date, and a button to add more members to the form.
        Additionally, it has radio buttons to select the nationality of the person filling the form,
        which updates the price accordingly. The code is written in JavaScript and uses React
        syntax. The code also displays the total price of the ticket based on the number of persons
        and nationality selected by the user. Finally, the code conditionally renders a message to
        the user if they have not clicked on the "Add member" */}
        
            <div className='container-fluid ticket_book_cont' >
                <div className='row'>
                    <div className='col-md-5 book_cont '>
                        <form onSubmit={stop_form} >
                           { /* The above code is rendering a form with input fields for name, phone
                            number, and date. It also has a button to add more members to the form.
                            Additionally, it has radio buttons to select the nationality of the
                            person filling the form, which updates the price accordingly. The code
                            is written in JavaScript and uses React syntax. */}
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
                            {/* This code block is rendering a list of names of the persons added for
                            the ticket. It is using the `map()` method to iterate over the
                            `number_of_person` array and create a new array of `span` elements with
                            the class name `person_list_name` and the name of the person as the text
                            content. The `fontSize` style property is set to `18px` for each `span`
                            element. The `key` attribute is set to the `index` of each element in
                            the array to help React identify each element uniquely. The `span`
                            elements are then wrapped inside a `p` element with the class name
                            `person_list_box`. */}
                            <p className='person_list_box'>
                                {
                                    number_of_person.map((person, index) => {
                                        return (<span style={{ fontSize: "18px" }} className='person_list_name' key={index}>{person.name}</span>)
                                    })
                                }
                            </p>
                                                        
                            {/* This code block is rendering a paragraph element with the id `total_price`. Inside the paragraph
                            element, there is a button element with the id `payment_btn` and class name `btn btn-primary` and
                            the text "Payment". After the button element, there are two `span` elements. The first `span`
                            element has the text "Total = ", and the second `span` element displays the value of the
                            `updated_price` state variable. This code block is displaying the total price of the ticket based on
                            the number of persons and nationality selected by the user. The `updated_price` state variable is
                            updated by the `price()` function, which is called whenever a person is added or the nationality is
                            changed. The `Payment` button is used to submit the form and navigate to the ticket page. */}

                            <p id='total_price'> <button id='payment_btn' className='btn btn-primary' type='submit'>Payment</button>
                                <span>Total = </span><span>{updated_price}</span> </p>

                           {/* This code block is conditionally rendering a message to the user. If the
                           `mssg` state variable is not an empty string, it will render a paragraph
                           element with the class name `text-danger` and the text "Please, First
                            click on Add member". Otherwise, it will render an empty `span` element. */}
                                
                            {
                                mssg !== '' ? <p className='text-danger'>Please , First click on Add member</p> : <span></span>
                            }

                        </form>
                    </div>

                   {/* This code block is rendering an image of the selected place if `props.place_data`
                   is not an empty string. It is using a ternary operator to conditionally render
                   either the image or an empty span element. The image source is taken from the
                   `img_url` property of `props.place_data`. The `className` attribute is setting
                   the column width to 5 out of 12 columns for medium-sized screens. */}
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
