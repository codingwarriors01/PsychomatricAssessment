// import React from 'react'
// import axios from 'axios';
// import {  Link } from 'react-router-dom';

// export default class Result extends React.Component {
//   state = {
//     persons: [],
//     person: "",

//   }
//   constructor() {

//     super();

//   }


//   componentDidMount() {
//     axios.get('http://localhost:8000/resultview')
//       .then(res => {
//         const persons = res.data;
//         this.setState({ persons });
//       })
//   }

//   render() {
//     return (

//       <html>
//         <head>
//           <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous" ></link>

//         </head>
//         <body>
//           <br />
//           <table class="table table-bordered">
//             <thead>
//               <tr class="table-info text-center">
//                 <th scope="col-2">Candidate ID</th>
//                 <th scope="col-2">Correct Answer</th>
//                 <th scope="col-3">Incorrect Answer</th>

//               </tr>
//             </thead>
//             <tbody>
//               {this.state.persons.map(person => <tr className="text-center">
//                 <td>{person.id}</td>
//                 <td>{person.user_cresult}</td>
//                 <td> {person.user_wresult}</td>


//               </tr>)
//               }
//             </tbody>
//           </table>
//           <div class="text-center" style={{ marginTop: "20px;" }}>
//             <Link to="/feedback" className="btn btn-info">Exit</Link>
//           </div>

//         </body>
//       </html>

//     )
//   }

// }

