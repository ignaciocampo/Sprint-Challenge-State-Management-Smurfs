// import React, { Component, useState, useEffect } from "react";
// import "./App.css";
// import axios from 'axios'
// function App() {
//   const [smurfs, setSmurf] = useState([])
//   const [newSmurf, setNewSmurf] = useState(
//     {
//     name:"",
//     age:"",
//     height: ""
//   })
//   const [users, setUsers] = useState([])


 
//   useEffect(() => {
//     axios
//         .get(`http://localhost:3333/smurfs`)
//         .then(res => {
//             setSmurf(res.data);
//             console.log(res);
//         })
//         .catch(err => {
//             console.log(err.message);
//         });
//   }, []);
  
  
//   const handleSubmit = (event, ) => {
//     event.preventDefault();
//     axios
//     .post("http://localhost:3333/smurfs" ,newSmurf)
//     .then(response => setUsers([...users, response.data]))
//     .catch(err => console.log(err));
//   };
  
//   const handleChange = (event) => {
//     setNewSmurf({...newSmurf, [event.target.name]: event.target.value})
//     console.log(newSmurf);
//   }
//   console.log(newSmurf)


 
//     return (
//       <div className="App">
       
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>
//         <form onSubmit={handleSubmit}>
//           <label htmlFor="Name">Name:</label>
//           <input className="name-input" 
//             id="name"
//             type="text"
//             name="name"
//             placeholder="Please Enter Your Name:"
//             value={newSmurf.name}
//             onChange={handleChange}
//           />
//               <button className='submit-button'
//           type="submit">Click To Submit!</button>
//           </form>
     
//                {smurfs.map((smurf) => (
//           <div className="plant-card" key={smurf.id}>
//               <h2 className="plant-name">{smurf.name}</h2>
//           </div>
//         ))}
//       </div>
//     );
  
// }

// export default App;







