import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import {useNavigate} from 'react-router-dom';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { useParams } from 'react-router';


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

export default function Manage(){
    const {id}=useParams();
    const[user_name,setUser]=useState('')
    const[first_name,setFirst]=useState('')
    const[last_name,setLast]=useState('')
    const[email,setEmail]=useState('')
	const[password,setPassword]=useState('')


    const history =  useNavigate();
    useEffect(() => {
        axios.get('http://127.0.0.1:8000/candidateshow/'+ id +'/')
        .then(res=>{
            const user_name=res.data.user_name;
            console.log("ppppp",res.data.user_name)
            const first_name=res.data.first_name;
            const last_name=res.data.last_name;
            const email=res.data.email;
			const password=res.data.password;
            setUser(user_name);
            setFirst(first_name);
            setLast(last_name);
            setEmail(email);
			setPassword(password);
        })
    }, [])

    function Submit(e){
        e.preventDefault();
    const data={
         user_name:user_name,
         first_name:first_name,
         last_name:last_name,
         email:email,
		 password:password,
    }
    console.log(data)
        axios.put('http://127.0.0.1:8000/update/'+id+'/',data)
            .then(res=>{
               console.log(res.data)
			   history('/exam_dashboard')
        }).catch(err=>console.error(err))
    }
    function Userhandle(e){
        setUser(e.target.value)
    }
    function Firsthandle(e){
        setFirst(e.target.value)
    }
    function Lasthandle(e){
        setLast(e.target.value)
    }
    function Emailhandle(e){
        setEmail(e.target.value)
    }
	function Passwordhandle(e){
        setPassword(e.target.value)
    }

    const classes = useStyles();
    return (
		<Container component="main" maxWidth="xs">
			<CssBaseline />
			<div className={classes.paper}>
				<Avatar className={classes.avatar}></Avatar>
				<Typography component="h1" variant="h5">
					Edit Your details
				</Typography>
				<form className={classes.form} noValidate>
					<Grid container spacing={2}>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="usename"
								label="username"
                                value={user_name} 
								onChange={Userhandle}		
							/>

						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="email"
								label="email"
								value={email} 
								onChange={Emailhandle}
							/>
	
						</Grid>

                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="first"
								label="First Name"
                                value={first_name} 
								onChange={Firsthandle}
							/>
						</Grid>
                        <Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="last"
								label="Last Name"
                                value={last_name} 
								onChange={Lasthandle}
							/>
						</Grid>
						<Grid item xs={12}>
							<TextField
								variant="outlined"
								required
								fullWidth
								id="last"
								type="password"
								label="Password"
                                value={password} 
								onChange={Passwordhandle}
							/>
						</Grid>
          </Grid>
					<Button
						type="submit"
						fullWidth
						variant="contained"
						color="primary"
						className={classes.submit}
						onClick={ Submit}
					>
						Edit Save
					</Button>
					<Grid container justify="flex-end">

					</Grid>
				</form>
			</div>
		</Container>
	);
    }

   
    

