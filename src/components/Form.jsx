import {useState} from 'react';

export default function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    function handleSubmit(e) {
        e.preventDefault();


        if(name === "") {
            alert("Please enter your name");
            return
        } else if(name.length < 3) {
            alert("Please enter a valid name");
            return
        }

        if(email === "") {
            alert("Please enter your email");
            return
        }

        if(password.length < 6) {
            alert("Please enter a password");
            return
        }

        alert("Form Submitted Successfully!");
        }

        return (
            <>
            <form onSubmit={handleSubmit}>
                <input value={name}onChange={(e)=> setName(e.target.value)} placeholder="Fullname..."/>
                <input type="email" value={email}onChange={(e)=> setEmail(e.target.value)} placeholder="Email..."/>
                <input type="password" value={password}onChange={(e)=> setPassword(e.target.value)} placeholder="....."/>
                <button>Submit</button>
            </form>
             <h1>{name}</h1>
             </>
            )
        
        
}