import React from 'react'
import DefaultLayout from '../components/layout'

const ContactPage = ({ data }) => {
    return (
        <DefaultLayout>
            <div className="content-box clearfix">
                <div className="blog-tags">
                    <h1>Contact</h1>
                    <form method="post" action="#">
                        <label for="email">
                            <div>Email :</div>
                            <input type="email" name="email" id="email" aria-label="Email" aria-required="true" required />
                        </label>
                        <label for="message">
                            <div>Message :</div>
                            <textarea rows="5" name="message" id="message" aria-label="Message" aria-required="true" required />
                        </label>
                        <div>
                            <button data-element="submit" type="submit">Send</button>
                        </div>
                    </form>
                </div>
            </div>
        </DefaultLayout>
    )
}

export default ContactPage