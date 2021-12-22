import React, {  useEffect } from 'react';
import axios from 'axios'
import { useNavigate } from 'react-router-dom';

export default function LogOut() {
	const history = useNavigate();

	useEffect(() => {
		const response = axios.post('http://127.0.0.1:8000/logout/blacklist/', {
			refresh_token: localStorage.getItem('refresh_token'),

		});
		console.log(response)
		localStorage.removeItem('access_token');
		localStorage.removeItem('refresh_token');
		axios.defaults.headers['Authorization'] = null;
		history('/');
	});
	return <div>Logout</div>;
}