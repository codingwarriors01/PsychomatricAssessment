import React, { useState } from 'react';
import  { useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import axios from 'axios'
// import GoogleLogin from 'react-google-login';
import { useSelector } from 'react-redux';

import { ToastContainer, toast } from 'react-toastify';
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

function Forget_Password() {
	const notify = () => toast("Wow so easy!");
	const initialFormData = Object.freeze({
		email: '',
		password:'',
	});
	const [formData, updateFormData] = useState(initialFormData);
    const [post, setPost] =useState([]);
	const handleChange = (e) => {
		updateFormData({
			...formData,
			[e.target.name]: e.target.value.trim(),
		});
	};

    // useEffect(() => {
        
    //     axios.get('http://127.0.0.1:8000/password-reset/<uidb64>/<token>/')        
    //     .then(res=>{
    //         setPost(res.data)
    //         console.log("ppp",res.data[1].id)
    //     })
    //     .catch(err=>{
    //     })
    // },[])
    console.log("vaish",post.data)
	const passSubmit=(e)=>{
		axios.post(`http://127.0.0.1:8000/request-reset-email/`, {
			email: formData.email,	
		})
		.then((res) =>{
            window.alert("email sent successfully")
			localStorage.setItem('token', res.data.token)
            localStorage.setItem('uidb64', res.data.uidb64)
			// let token=localStorage.getItem('token');
			// let uidb64=localStorage.getItem('uidb64');
			// console.log('popopo',token)
			// console.log('popopo123',uidb64)
			// axios.get(`http://127.0.0.1:8000/password-reset/<uidb64>/<token>/`)

		});
	}
	const classes = useStyles();
	return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				{/* <Avatar className={classes.avatar}></Avatar> */}
				<Typography component="h1" variant="h5">
					please enter a valid email id
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
export default Forget_Password
