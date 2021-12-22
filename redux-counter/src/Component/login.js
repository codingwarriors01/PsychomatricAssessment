import React, { useState } from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Exam from './exam_page'
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useDispatch, useSelector } from 'react-redux';

const useStyles = makeStyles((theme) => ({
	paper: {
		marginTop: theme.spacing(8),
		display: 'flex',
		flexDirection: 'column',
		alignItems: 'center',
	},
	avatar: {
		margin: theme.spacing(1),
		backgroundColor: theme.palette.secondary.main,
	},
	form: {
		width: '100%', // Fix IE 11 issue.
		marginTop: theme.spacing(1),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignIn() {
	let  image=0;
	
	const dispatch = useDispatch()
	
	let uid=0;
	let username=0;
	const history = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		password: '',
	});

	const [formData, updateFormData] = useState(initialFormData);
	const [formerrors, setFormErrors] = useState(initialFormData);
	const [isSubmit, setIssubmit] = useState(false);
	const[userid,setUserid]=useState('');
	const [post, setPost] =useState([]);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormErrors(Validate(formData))
		setIssubmit(true)
		console.log(formData);


		axios.post(`http://127.0.0.1:8000/token/`, {
			email: formData.email,
			password: formData.password,
		})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access);
				localStorage.setItem('refresh_token', res.data.refresh);
				axios.defaults.headers['Authorization'] =
					'JWT ' + localStorage.getItem('access_token');
				history('/exam_dashboard');

			});
	};
	useEffect(() => {



		axios.get('http://127.0.0.1:8000/candidateList/')
        .then(res=>{

            setPost(res.data)
           
			for (let i=0; i<res.data.length; i++){
				if (formData.email===res.data[i].email){
					console.log("userid before set", userid)
					uid = res.data[i].id;
					username=res.data[i].user_name;
					image=res.data[i].image;
					localStorage.setItem('image', image);

					localStorage.setItem('uid', uid);
					localStorage.setItem('username', username);
					console.log("userid22", username)
					setUserid(previd=>previd+uid)

			dispatch({type:'SUBMIT', payload:{username}})


				}
			}
	})




		console.log(formerrors);
		if (Object.keys(formerrors).length === 0 && isSubmit) {
			console.log(formData);

		}
	}, [formerrors])
	const Validate = (values) => {
		const errors = {};
		const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
		if (!values.email) {
			errors.email = 'Username is required!';
		}


		if (!values.password) {
			errors.password = 'password  is required!';
		} else if (values.password <= 10) {
			errors.password = 'password cannot exceed more than 10 characters';
		}

		return errors;
	}

	const TokenhandleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);


		axios.post(`http://127.0.0.1:8000/auth/token/`, {
			grant_type: 'Client credentials',
			client_id: '526809489540-7euftut75c43atfg0vuvon7ormvos431.apps.googleusercontent.com',
			client_secret:
				'4ic7X_tU640Ouws1_uJ9ujKn',
		})
			.then((res) => {
				localStorage.setItem('access_token', res.data.access_token);
				console.log("kkk", res.data.access_token)
				localStorage.setItem('refresh_token', res.data.refresh_token);
				axios.defaults.headers['Authorization'] =
					'Bearer' + localStorage.getItem('access_token');
				history('/display');
				window.location.reload();
			});
	};
	<Exam username= {username} />

	const classes = useStyles();

	return (
	
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign in
				</Typography>
				<form className={classes.form} noValidate>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						id="email"
						label="Email Address"
						name="email"
						autoComplete="email"
						autoFocus
						onChange={handleChange}
					/>
					<p style={{ color: 'red' }}>{formerrors.email}</p>
					<TextField
						variant="outlined"
						margin="normal"
						required
						fullWidth
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<p style={{ color: 'red' }}>{formerrors.password}</p>
					<FormControlLabel
						control={<Checkbox value="remember" color="primary" />}
						label="Remember me"
					/>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign In
					</Button>

					<Grid container>
						<Grid item xs>
							<Link href="#" variant="body2">
								Forgot password?
							</Link>
						</Grid>
						<Grid item>
							<Link href="#" variant="body2">
								{"Don't have an account? Sign Up"}
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}