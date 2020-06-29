









// import React, { Component } from "react";
// import "./App.css";
// import axios from 'axios'
// class App extends Component {
//     state = {
//     smurfs: [],
   
//   };

//   componentDidMount() {
//     console.log("componentDidMount running");
//     axios
//       .get("http://localhost:3333/smurfs")
//       .then(res => {
//         console.log(res);
//         this.setState({ smurfs: res.data});
//       })
//       .catch(err => console.log(err));
//   }






  
  
//   handleSubmit = (e) => {
    
//       axios({
//         method: "POST",
//         url: `http://localhost:3333/smurfs`
//       })
//       .then(res => {
//         console.log(res);
//         this.setState( res.data);
//       })
//       .catch(err => console.log(err));
//   };
  
//   handleChange = (e) => {
//     this.setState({ [e.target.name]: e.target.value });
    
//   }
 



//   render() {
//     return (
//       <div className="App">
//         <h1>SMURFS! 2.0 W/ Redux</h1>
//         <div>Welcome to your state management version of Smurfs!</div>
//         <div>Start inside of your `src/index.js` file!</div>
//         <div>Have fun!</div>

//         <form onSubmit={this.handleSubmit}>
//           <label htmlFor="Name">Name:</label>
//           <input className="name-input" 
//             id="name"
//             type="text"
//             name="name"
//             placeholder="Please Enter Your Name:"
//             value={this.state.name}
//             onChange={this.handleChange}
//           />
//               <button className='submit-button'
//           type="submit">Click To Submit!</button>
//           </form>
//         {this.state.smurfs.map((smurf) => (
//           <div className="plant-card" key={smurf.id}>
//               <h2 className="plant-name">{smurf.name}</h2>
//           </div>
//         ))}
//       </div>
//     );
//   }
// }

// export default App;
