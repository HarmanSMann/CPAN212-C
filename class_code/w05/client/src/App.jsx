import { useState, useEffect } from "react";

function App() {
    const [message, setMessage] = useState("");
    const [singleFile, setSingleFile] = useState(null);
    const [displaySingleFile, setDisplaySingleFile] = useState(null);

    const fetchSingleFile = async () => {
        try {
            const response = await fetch(`http://localhost:8000/fetch/single`);

            const blob = await response.blob();
            const imageUrl = URL.createObjectURL(blob);
            setDisplaySingleFile(imageUrl);
        } catch (error) {
            console.log(error);
        }
    };

    const handleSingleUpload = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("file", singleFile);

        try {
            const response = await fetch(`http://localhost:8000/save/single`, {
                method: "POST",
                body: formData,
            });

            const data = await response.json();

            setMessage(data.message || "Upload successful");
        } catch (error) {
            console.log(error);
            setMessage("Upload failed");
        }
    };

    return (
        <>
            Message: {message}
            <div>
                Single File Upload
                <form onSubmit={handleSingleUpload}>
                    <input
                        type="file"
                        onChange={(e) => {
                            setSingleFile(e.target.files[0]);
                        }}
                        required
                    />
                    <br></br>
                    <button type="submit">Upload Single File</button>
                </form>
                <button onClick={fetchSingleFile}>
                    Click me to fetch /data
                </button>
                {displaySingleFile && (
                    <div>
                        <h4>Fetched Image:</h4>
                        <img
                            src={displaySingleFile}
                            alt="Fetched from server"
                            style={{ maxWidth: "300px" }}
                        />
                    </div>
                )}
                <br></br>
            </div>
            <p>---------------------</p>
        </>
    );
}

export default App;
