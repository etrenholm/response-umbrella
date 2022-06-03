function Portfolio() {

    return (
        <div class="contact">

            <h2>Contact</h2>

            <form id="contact-form">
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" />
                </div>
                <div>
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" />
                </div>
                <div>
                    <label htmlFor="message">Message:</label>
                    <textarea class="message" type="message" name="message"></textarea>
                </div>
                <button id="submitbtn" type="submit">Submit</button>
            </form>

        </div>
    )
}

export default Portfolio;