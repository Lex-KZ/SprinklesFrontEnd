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
//const {topics} = getTopics
	//const {dispatch, store} = useGlobalState()
	//const {enquiries} = store;

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

	// function getLastId() {
	// 	console.log(enquiries)
	// 	const ids = enquiries.map(enquiry => enquiry.id)
	// 	console.log(ids)
	// 	return Math.max(...ids)
	// }

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
				//dispatch({type: 'updateEnquiry', data: {id: id, ...formState}})
				history.push(`/enquiries/${id}`)
			})
		}
		else {
			// const nextId = getLastId() + 1;
			createEnquiry({...formState })
			.then(() => {
		
				//dispatch({type: 'addEnquiry', data: enquiry})
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
		<div className=" flex justify-center w-full pt-4">
			<form onSubmit={handleEnquiry} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 mt-6">
				<fieldset className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Name</label>
					<input name="name" type="text" value={formState.name} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
				</fieldset>
				<fieldset className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Contact Number</label>
					<input name="contact" type="text" value={formState.contact} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></input>
				</fieldset>
				<fieldset className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Topic</label>
					<select name='topic_id' value={formState.topic_id} onChange={handleChange} class="block appearance-none w-full bg-white border border-gray-400 hover:border-gray-500 px-4 py-2 pr-8 rounded shadow leading-tight focus:outline-none focus:shadow-outline">
						{topics.map((topic) => <option key={topic.id} value={topic.id}>{topic.name}</option>)}
					</select>
				</fieldset>
				<fieldset className="mb-4">
					<label className="block text-gray-700 text-sm font-bold mb-2">Message</label>
					<textarea name="message" rows="10" cols="50" value={formState.message} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"></textarea>
				</fieldset>
				<input type="submit" value="Submit" className="bg-purple-400 hover:bg-purple-600 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"></input>
			</form>
		</div>
    )
}

export default EnquiryForm;