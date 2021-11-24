import React from "react"
import PropTypes from 'prop-types';
import "../css/index.css"

async function loginUser(credentials){
    return fetch('/datasnap/rest/TServerMethods1/"Login"',{
        method:'POST',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
    .then(response=>response.json())
    .then(resultObj=>resultObj[0])
}

export default function Login({ setToken }){
    const [userName, setUserName] = React.useState()
    const [password, setPassword] = React.useState()

    const handleSubmit = async e => {
        e.preventDefault()
        const token = loginUser({userName, password})
        setToken(token)
    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" onChange={e => setUserName(e.target.value)} />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" onChange={({target}) => setPassword(target.value)} />
                </label>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        </div>
    )
}

Login.propTypes = {
    setToken: PropTypes.func.isRequired
};