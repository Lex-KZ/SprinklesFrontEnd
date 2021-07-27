import React, {useState, useEffect} from 'react';
import {useHistory, useParams} from 'react-router-dom'
import { createEnquiry, getEnquiry, updateEnquiry, topics } from './enquiry'

function EnquiryForm({handleEnquiry}) {
    const initialFormState = {
		name: '',
        contact: '',
        topic_id: 1,
        message: ''
	}
	let history = useHistory()
	const [formState,setFormState] = useState(initialFormState)
	let {id} = useParams()

	useEffect(() => {
		if(id) {
			getEnquiry(id)
			.then((enquiry) => {
				console.log(enquiry)
				const topic = topics.find((topic) => topic.name.toLowerCase() === enquiry.topic.toLowerCase())
				setFormState({
					name: enquiry.name,
					contact: enquiry.contact,
                    message: enquiry.message,
					topic: enquiry.topic.id
				})
			})
		}
	},[id])

	function handleChange(event) {
		setFormState({
			...formState,
			[event.target.name]: event.target.value
		})
		
	}
	function handleEnquiry(event) {
		event.preventDefault()
		if(id) {
			updateEnquiry( {id: id, ...formState})
			.then(() => {
				history.push(`/enquiries/${id}`)
			})
		}
		else {
			createEnquiry({...formState })
			.then(() => {
				history.push('/enquiries')
			})
			.catch((error) => {
				if (error.response){
					console.log(error.response.data)
				} else if (error.request) {
					console.log(error.request)
				} else {
					console.log(error)    
				}
			})
		}
	}

    return(
        <form onSubmit={handleEnquiry}>
            <fieldset>
                <label>Name</label>
                <input name="name" type="text" value={formState.name} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Contact Number</label>
                <input name="contact" type="text" value={formState.contact} onChange={handleChange}></input>
            </fieldset>
            <fieldset>
                <label>Topic</label>
                <select name='topic_id' value={formState.topic_id} onChange={handleChange}>
					{topics.map((topic) => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
				</select>
            </fieldset>
            <fieldset>
                <label>Message</label>
                <textarea name="message" rows="10" cols="50" value={formState.message} onChange={handleChange}></textarea>
            </fieldset>
            <input type="submit" value="Submit"></input>
        </form>
    )
}

export default EnquiryForm;