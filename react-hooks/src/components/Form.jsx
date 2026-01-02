import React, { useState } from "react";


function Form() {

  const [color, setColor] = useState("black");
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState(""); 
  const [bgcolor, setBgColor] = useState("white");
  const [isLoggedIn,setIsLoggedIn]=useState(null)  ;
  
  //  const login =()=>{setIsLoggedIn(users.some(user))

  

  const users=[
    {username:'sejal',password:'sejal123'},
    {username:'payal',password:'payal123'},
    {username:'krunal',password:'krunal123'},
    {username:'priyal',password:'priyal123'},
    {username:'shreyal',password:'shreyal123'}
  ]
 

  const handleSubmit = (e) => {
    e.preventDefault();
   
  

    if (username === currentUser && password ==currentPass) {
      setMessage("Login Successful");
      setBgColor('green')
    } else {
      setMessage("Login Failed");
      setBgColor('red')
     
      
    }
  
};
  return (
    <div style={{ width: "300px", margin: "50px auto",color:"black" }}>
      <h2>Login</h2>

      <form onSubmit={handleSubmit}>
        <div>
          <label>Username</label>
          <br />
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            
          />
        </div>

        <br />

        <div>
          <label>Password</label>
          <br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            
          />
        </div>

        <br />

        <button  style= {{backgroundColor:"white",border:'10px'}}type="submit">Login</button>
      </form>

      <p style={{ bgcolor: color }}>{message}</p>
    </div>
  );
}

export default Form;
