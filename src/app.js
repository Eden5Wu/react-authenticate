import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Survey from "./views/survey"
import Score from "./views/score"
import ExcuseMe from "./views/excuseme"
import "./css/index.css"
import Login from "./views/login"

function App(){
    const [token, setToken] = React.useState()
    if (!token)
        return <Login setToken={setToken} />

    return (
        <React.Fragment>
            <div className="wrapper">
                <h1>Eden's Survey</h1>
                <BrowserRouter>
                    <Routes>
                        <Route path="/" element={<Survey />} />
                        <Route path="/score/:score" element={<Score />} />
                        <Route path="/excuseme" element={<ExcuseMe />} />
                    </Routes>
                </BrowserRouter>
            </div>
        </React.Fragment>
    )
}

export default App