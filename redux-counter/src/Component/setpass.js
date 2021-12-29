import React, { useState } from 'react';
import  { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
// import GoogleLogin from 'react-google-login';
import { useSelector } from 'react-redux';
// import googleLogin from './GOOGLELOGIN'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import { useDispatch } from 'react-redux';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
// import Exam from '../exam_page';
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

function ResetPassword() {
	const history=useNavigate();
	const initialFormData = Object.freeze({
		password: '',
	});
	const [formData, updateFormData] = useState(initialFormData);
    const [post, setPost] =useState([]);
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};


    console.log("vaish",post.data)
	const passSubmit=(e)=>{
		axios.patch(`http://127.0.0.1:8000/password-reset-complete`, {
			password: formData.password,	
			token:localStorage.getItem('token'),
			uidb64:localStorage.getItem('uidb64')
		})
		.then((res) => {
			history('/signin')
		});
	}
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
						name="password"
						label="Password"
						type="password"
						id="password"
						autoComplete="current-password"
						onChange={handleChange}
					/>
					<Grid container>
						<Grid item xs>
						<Button 	
                        href="#"					
                        fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
                        onClick={passSubmit} 
                        variant="body2">	
							Submit
                            </Button>
						</Grid>
					</Grid>
				</form>
			</div>
		</Container>
	);
}
export default ResetPassword
