import { useState, useEffect } from "react";
import "./App.css";

function App() {
    const [data, setData] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [registerMessage, setRegisterMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState("");

    // useEffect works on Load and on change -> condition stored in []
    // useEffect(() => {
    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(`http://localhost:8000/data`);

    //             const data = await response.json();
    //             setData(data.user01.name);
    //         } catch (error) {
    //             console.log(error);
    //         }
    //     };
    //     fetchData();
    // }, []);

    const fetchData = async () => {
        try {
            const response = await fetch(`http://localhost:8000/data`);

            const data = await response.json();
            setData(data.user01.name);
        } catch (error) {
            console.log(error);
        }
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (!email || !password) {
            setErrorMessage("Please fill out all information");
            return;
        }

        const submission = { email, password };

        try {
            const response = await fetch(`http://localhost:8000/register`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(submission),
            });

            if (!response.ok) {
                const errorData = await response.json();
                setErrorMessage("Registration failed");
                return;
            }

            const data = await response.json();
            setRegisterMessage(data);
        } catch (error) {
            console.log(error);
            setErrorMessage(errorData?.message || "Registration failed");
        }
    };
    

    return (
        <>
            <button onClick={fetchData}>Click me to fetch /data</button>
            <br></br>
            Message: {data}
            <p>---------------------</p>
            <form onSubmit={handleRegister}>
                Email:
                <input
                    type="email"
                    placeholder="Add your email here"
                    value={email}
                    onChange={(e) => {
                        setEmail(e.target.value);
                    }}
                    required
                />
                <br></br> Password:
                <input
                    type="password"
                    placeholder="Add your password here"
                    value={password}
                    onChange={(e) => {
                        setPassword(e.target.value);
                    }}
                    required
                />
                <br></br>
                <button type="submit">Register</button>
            </form>
            Registration Message: {registerMessage}
        </>
    );
}

export default App;
