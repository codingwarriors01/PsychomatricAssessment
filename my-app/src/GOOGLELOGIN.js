import axios from 'axios';
import { useHistory } from 'react-router-dom';

const googleLogin = (accesstoken) => {
	console.log(accesstoken);
	axios
		.post('http://127.0.0.1:8000/auth/convert_token', {
			token: accesstoken,
			backend: 'google',
			grant_type: 'convert_token',
			client_id: '526809489540-7euftut75c43atfg0vuvon7ormvos431.apps.googleusercontent.com',
			client_secret:
				'4ic7X_tU640Ouws1_uJ9ujKn',
		})
		.then((res) => {
			localStorage.setItem('access_token', res.data.access_token);
			localStorage.setItem('refresh_token', res.data.refresh_token);
		});
};

export default googleLogin;