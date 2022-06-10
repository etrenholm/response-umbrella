import { useState } from 'react';

const validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

function Contact() {

    const [errorMessage, setErrorMessage] = useState('')
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: ''
    });

    const { name, email, message } = formState

    const handleChange = event => {

        if(event.target.name === 'email') {

            const isValid = validateEmail(event.target.value)

            if (!isValid) {
                setErrorMessage('Please enter a valid email address.')
            } else {
                setErrorMessage('')
            }
        } else {
            if (!event.target.value.length) {
                setErrorMessage(`${event.target.name} is required.`)
            } else {
                setErrorMessage('')
            }
        } 

        if(!errorMessage) {
            setFormState({ ...formState, [event.target.name]: event.target.value})
        }
    }

    const handleSubmit = event => {
        event.preventDefault()
        console.log(formState)
    }
    
    return (
        <div className="contact">

            <h2>Contact</h2>

            <p>Fill out the form below or email me at <a href="mailto:erica.trenholm48@gmail.com">erica.trenholm48@gmail.com</a>.</p>

            <form id="contact-form" onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input 
                        type="text" 
                        name="name" 
                        defaultValue={name} 
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input 
                        type="email" 
                        name="email" 
                        defaultValue={email} 
                        onBlur={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea 
                        className="message" 
                        type="message" 
                        name="message" 
                        defaultValue={message} 
                        onBlur={handleChange}
                    />
                </div>
                {errorMessage && (
                    <div>
                        <p className="error">{errorMessage}</p>
                    </div>
                )}
                <button 
                    id="submit-btn" 
                    type="submit">
                        Submit
                </button>
            </form>

        </div>
    )
}

export default Contact;