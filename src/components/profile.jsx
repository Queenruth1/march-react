import {useState, useEffect} from 'react';

export default function Profile() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    // Does side effects
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then((response) => response.json())
            .then((data) => {
                setUsers(data)
           setLoading(false);  // Only when the data is fetching completely, that the loading state should be false.
           });
    },);


    return (
        <>
            <div>{loading ? (<p>Loading...</p>) : users.map((user) => {
                return(
                <>
                <h1>{user.name}</h1>
                <p>{user.email}</p>
                </>
                )
            })}</div>
        </>
        );
}

