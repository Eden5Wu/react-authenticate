import React from "react"

export default function SurveyContainer(props){
    const [showClick, setShowClick] = React.useState(false)
    const {id, title, handleNextClick, isLast, setAnser} = props
    const itemOptions = props.itemOptions.split(";")
    const handleOptionChange = (e) => {
        if (!showClick)
            setShowClick(!showClick)
        setAnser(e.target.value)
    }
    return (<>
        <div>
            <h2>{title}</h2>
            {itemOptions.map( (element, index) => {
                return (
                    <div key={element+index}>
                        <label><input type="radio" name={id} value={index+1} onChange={handleOptionChange} />{element}</label>
                    </div>
                )
            })}
            <button style={{display:showClick?"block":"none"}} onClick={handleNextClick}>{isLast?"Finish":"Next"}</button>
        </div>
    </>)
}