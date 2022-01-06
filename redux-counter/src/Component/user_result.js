import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from 'react-router';



export default function UserResult() {
    const { id } = useParams();
    const [user_name, setUser] = useState('')
    const [user_coanswer, setUserCOAnswer] = useState('')
    const [user_canswer, setUserCAnswer] = useState('')



    useEffect(() => {
        axios.get('http://127.0.0.1:8000/candidateshow/' + id + '/')
            .then(res => {
                const user_name = res.data.user_name;
                setUser(user_name);
                axios.get('http://127.0.0.1:8000/CandidateResultList/')
                    .then(res => {
                        const userdatas = res.data;
                           userdatas.map((userdata) => {
                                const username = userdata.username
                                const testtype=userdata.testtype
                                if (user_name === username) {
                                    if (testtype ==='Aptitude') {
                                        const usercresult = userdata.user_cresult
                                        setUserCAnswer(usercresult)
                                    } else  if (testtype ==='Reasoning') {
                                        const userresult = userdata.user_cresult
                                        setUserCOAnswer(userresult)
                                    } 
                                } 

                                


                            });

                        



                    })

            })

            .catch(err => {
            })
    }, [])



    return (
        <div className='container'>
            <table class="table table-bordered">
                <thead>
                    <tr class="table-info">
                        <th scope="col-2">ID</th>
                        <th scope="col-2">User Name</th>
                        <th scope="col-2">Aptitude Score</th>
                        <th scope="col-2">Reasoning Score</th>
                        <th scope="col-3">Verbal Score</th>
                        <th scope="col-3">Self Assesment Score</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>{id}</td>
                        <td>{user_name}</td>
                        <td>{user_canswer}</td>
                        <td>{user_coanswer}</td>
                        <td></td>
                        <td></td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}