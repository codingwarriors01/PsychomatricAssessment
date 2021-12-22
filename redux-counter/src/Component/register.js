import React, { useState } from 'react';

import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import  { useEffect } from 'react';
//MaterialUI
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useDispatch } from 'react-redux';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { IconButton } from '@material-ui/core';

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
	const dispatch=useDispatch();
	const history = useNavigate();
	const initialFormData = Object.freeze({
		email: '',
		user_name: '',
		password: '',
    first_name:'',
    last_name:'',

	});
  const [image, setimage ] = useState(null);

  const [formData, updateFormData] = useState(initialFormData);
  const [formerrors,setFormErrors]=useState(initialFormData);
  const [isSubmit,setIssubmit]=useState(false);

	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

const handleImageChange = (e) => {   
 
	setimage({
      ...image,
		  image: e.target.files[0],
		})
	  };
  
	
	const handleSubmit = (e) => {
		e.preventDefault();
		console.log(formData);
		setFormErrors(Validate(formData))
    setIssubmit(true)
		console.log(formData);
    
    let formnew_data = new FormData();
    formnew_data.append('image', image.image, image.image.name);
    formnew_data.append('email', formData.email);
    formnew_data.append('user_name', formData.user_name);
    formnew_data.append('password', formData.password);
    formnew_data.append('first_name', formData.first_name);
    formnew_data.append('last_name', formData.last_name);
		
		axios.post(`http://127.0.0.1:8000/register/`, formnew_data,
    {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    
			.then((res) => {
				history('/signin');

	
			});
            
			// dispatch({type:'SIGNIN',payload:{formData}})
			console.log("formdata",image.image.name)
	};

	useEffect(() => {
		// console.log(formerrors);
		if (Object.keys(formerrors).length===0 && isSubmit){
			console.log(formData);
	
		}
	},[formerrors])
  console.log("console",image)
	const Validate=(values)=>
	{
		const errors={};
		const regex=/^[a-zA-Z0-9]+@(?:[a-zA-Z0-9]+\.)+[A-Za-z]+$/
		if(!values.user_name){
			errors.user_name='Username is required!';
		}
		if(!values.first_name){
			errors.first_name='First Name is required!';
		}
		if(!values.last_name){
			errors.last_name='Last Name is required!';
		}
	
		if(!values.email){
			errors.email='email is required!';
		}

		if(!values.password){
			errors.password='password  is required!';
		}else if (values.password <= 10){
			errors.password='password cannot exceed more than 10 characters';
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
								id="user_name"
								label="Username"
								name="user_name"
								autoComplete="user_name"
								onChange={handleChange}
							/>
							<p style={{ color: 'red' }}>{formerrors.user_name}</p>
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
            {/* <input type="file"
                   id="image"
                   accept="image/png, image/jpeg"  onChange={handleImageChange} required/> */}
                   <div>
    						<input
							accept="image/png, image/jpeg"
							className={classes.input}
							id="image"
							onChange={handleImageChange}
							name="image"
							type="file"
						/>
            {/* <img  src='http://127.0.0.1:8000/{image}'  alt={''}/> */}

          </div>
          </Grid>
					{/* <Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={handleSubmit}
					>
						Create Post
					</Button> */}

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