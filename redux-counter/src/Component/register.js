import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'
import  { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import '../ComponentStyle/register.css';
import $ from 'jquery';

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

export default function SignUp(){

	
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
			
	
		}
	},[formerrors])
  
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









    $(document).ready(function(){

        var current_fs, next_fs, previous_fs; //fieldsets
        var opacity;
        var current = 1;
        var steps = $("fieldset").length;
        
        setProgressBar(current);
        
        $(".next").click(function(){
			setFormErrors(Validate(formData))
            setIssubmit(true)
        
        current_fs = $(this).parent();
		if(isSubmit===true){
        next_fs = $(this).parent().next();
	
		
        //Add Class Active
        $("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
        
        //show the next fieldset
        next_fs.show();
		
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        next_fs.css({'opacity': opacity});
        },
        duration: 500
        });
        setProgressBar(++current);
	} });
        
        $(".previous").click(function(){
        
        current_fs = $(this).parent();
        previous_fs = $(this).parent().prev();
        
        //Remove class active
        $("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
        
        //show the previous fieldset
        previous_fs.show();
        
        //hide the current fieldset with style
        current_fs.animate({opacity: 0}, {
        step: function(now) {
        // for making fielset appear animation
        opacity = 1 - now;
        
        current_fs.css({
        'display': 'none',
        'position': 'relative'
        });
        previous_fs.css({'opacity': opacity});
        },
        duration: 500
        });
        setProgressBar(--current);
        });
        
        function setProgressBar(curStep){
        var percent = parseFloat(100 / steps) * curStep;
        percent = percent.toFixed();
        $(".progress-bar")
        .css("width",percent+"%")
        }
        
        // $(".submit").click(function(){
        // return false;
        // })
        
        });



    return(
        <div class="container-fluid">
    <div class="row justify-content-center">
        <div class="col-11 col-sm-10 col-md-10 col-lg-6 col-xl-5 text-center p-0 mt-3 mb-2">
            <div class="card px-0 pt-4 pb-0 mt-3 mb-3">
                <h2 id="heading">Sign Up Your User Account</h2>
                <p>Fill all form field to go to next step</p>
                <form id="msform">
                    <ul id="progressbar">
                        <li class="active" id="account"><strong>Account</strong></li>
                        <li id="personal"><strong>Personal</strong></li>
                        <li id="payment"><strong>Image</strong></li>
                        <li id="confirm"><strong>Finish</strong></li>
                    </ul>
                    <br/>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Account Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 1 - 4</h2>
                                </div>
                            </div> <label class="fieldlabels">Email: *</label>
                             <input onChange={handleChange} type="email" name="email" autoComplete="email" id="email" placeholder="Email Id" />
                            <p style={{ color: 'red' }}>{formerrors.email}</p>
                             <label class="fieldlabels">Username: *</label>
                              <input onChange={handleChange} type="text" name="user_name" autoComplete="user_name" placeholder="UserName" />
                             <p style={{ color: 'red' }}>{formerrors.user_name}</p>
                             <label class="fieldlabels">Password: *</label> 
                             <input onChange={handleChange} id="password" autoComplete="current-password" type="password" name="password" placeholder="Password" />
                             <p style={{ color: 'red' }}>{formerrors.password}</p>
                        </div> <input type="button" name="next" class="next action-button" value="Next" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Personal Information:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 2 - 4</h2>
                                </div>
                            </div> <label class="fieldlabels">First Name: *</label>
                             <input onChange={handleChange} type="text" name="first_name" id="first" autoComplete="first_name" placeholder="First Name" />
                            <p style={{ color: 'red' }}>{formerrors.first_name}</p>
                             <label class="fieldlabels">Last Name: *</label>
                             <input onChange={handleChange} type="text" name="last_name" id="last" autoComplete="last_name" placeholder="Last Name" />
                             <p style={{ color: 'red' }}>{formerrors.last_name}</p>
                              
                        </div> <input type="button" name="next" class="next action-button" value="Next" /> <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Image Upload:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 3 - 4</h2>
                                </div>
                            </div>
                             <label class="fieldlabels">Upload Your Photo:</label>
                              <input onChange={handleImageChange} className={classes.input} type="file" name="image" id="image" accept="image/png, image/jpeg"/> 
                        </div> 
                        <input type="button" className={classes.submit} onClick={handleSubmit} name="next" class="next action-button" value="Submit" />
                         <input type="button" name="previous" class="previous action-button-previous" value="Previous" />
                    </fieldset>
                    <fieldset>
                        <div class="form-card">
                            <div class="row">
                                <div class="col-7">
                                    <h2 class="fs-title">Finish:</h2>
                                </div>
                                <div class="col-5">
                                    <h2 class="steps">Step 4 - 4</h2>
                                </div>
                            </div> <br/><br/>
                            <h2 class="purple-text text-center"><strong>SUCCESS !</strong></h2> <br/>
                            <div class="row justify-content-center">
                                <div class="col-3"> <img src="https://i.imgur.com/GwStPmg.png" class="fit-image"/> </div>
                            </div> <br/><br/>
                            <div class="row justify-content-center">
                                <div class="col-7 text-center">
                                    <h5 class="purple-text text-center">You Have Successfully Signed Up</h5>
                                </div>
                            </div>
                        </div>
                    </fieldset>
                </form>
            </div>
        </div>
    </div>
</div>
    )
}