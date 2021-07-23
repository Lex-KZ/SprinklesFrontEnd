import React from 'react';

function EnquiryForm({handleEnquiry}) {
    return(
        <form onSubmit={handleEnquiry}>
            <fieldset>
                <label>Name</label>
                <input name="name" type="text"></input>
            </fieldset>
            <fieldset>
                <label>Contact Number</label>
                <input name="contact-number" type="text"></input>
            </fieldset>
            <fieldset>
                <label>Topic</label>
                <input list="topics" name="topic"></input>
                <datalist id="topics">
                <option value="Booking" />
                <option value="Question" />
                <option value="Complaint" />
                <option value="Other" />
                </datalist>
            </fieldset>
            <fieldset>
                <label>Message</label>
                <textarea name="message" rows="10" cols="50"></textarea>
            </fieldset>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default EnquiryForm;