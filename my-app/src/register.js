import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import { useEffect } from 'react';
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
		marginTop: theme.spacing(3),
	},
	submit: {
		margin: theme.spacing(3, 0, 2),
	},
}));

export default function SignUp() {
	const history = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		username: '',
		password: '',
		first_name: '',
		last_name: ''
	});

	const [formData, updateFormData] = useState(initialFormData);
	const [formerrors, setFormErrors] = useState(initialFormData);
	const [isSubmit, setIssubmit] = useState(false);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			// Trimming any whitespace
			[e.target.name]: e.target.value.trim(),
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormErrors(Validate(formData))
		setIssubmit(true)
		console.log(formData);


		axios.post(`http://127.0.0.1:8000/register/`, {
			email: formData.email,
			user_name: formData.username,
			password: formData.password,
			first_name: formData.first_name,
			last_name: formData.last_name,
		})
			.then((res) => {
				history('/signin');
				console.log(res);
				console.log(res.data);
			});
	};

	useEffect(() => {
		console.log(formerrors);
		if (Object.keys(formerrors).length === 0 && isSubmit) {
			console.log(formData);

		}
	}, [formerrors])
	const Validate = (values) => {
		const errors = {};
		const regex = /^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
		if (!values.username) {
			errors.username = 'Username is required!';
		}
		if (!values.first_name) {
			errors.first_name = 'First Name is required!';
		}
		if (!values.last_name) {
			errors.last_name = 'Last Name is required!';
		}

		if (!values.email) {
			errors.email = 'email is required!';
		}

		if (!values.password) {
			errors.password = 'password  is required!';
		} else if (values.password <= 10) {
			errors.password = 'password cannot exceed more than 10 characters';
		}

		return errors;
	}

	const classes = useStyles();

	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Sign up
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="Email Address"
								name="email"
								autoComplete="email"
								onChange={handleChange}

							/>
							<p style={{ color: 'red' }}>{formerrors.email}</p>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="username"
								label="Username"
								name="username"
								autoComplete="username"
								onChange={handleChange}
							/>
							<p style={{ color: 'red' }}>{formerrors.username}</p>
						</Grid>

						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="first"
								label="First Name"
								name="first_name"
								autoComplete="first_name"
								onChange={handleChange}
							/>
							<p style={{ color: 'red' }}>{formerrors.first_name}</p>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="last"
								label="Last Name"
								name="last_name"
								autoComplete="last_name"
								onChange={handleChange}
							/>
							<p style={{ color: 'red' }}>{formerrors.last_name}</p>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
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
						</Grid>
						<Grid item xs={12}>
							<FormControlLabel
								control={<Checkbox value="allowExtraEmails" color="primary" />}
								label="I want to receive inspiration, marketing promotions and updates via email."
							/>
						</Grid>
					</Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Sign Up
					</Button>
					<Grid container justify="flex-end">
						<Grid item>
							<Link href="#" variant="body2">
								Already have an account? Sign in
							</Link>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}