import React from "react"
import { useNavigate } from "react-router"
import SurveyContainer from "../components/survey-container"

const surveyItems = [
    {id:"1",title:"Topic1",itemOptions:"optionA;optionB;optionC;optionD"},
    {id:"2",title:"Topic2",itemOptions:"optionA;optionB;optionC;optionD"},
    {id:"3",title:"Topic3",itemOptions:"optionA;optionB;optionC;optionD"}
]

export default function Survey() {
    const [groupNum, setGroupNum] = React.useState(1)
    const [isLast, setIsLast] = React.useState(false)
    const [finished, setFinished] = React.useState(false)
    const [ansers, setAnsers] = React.useState([])

    const navigate = useNavigate();

    React.useEffect(()=>{
        if (finished)  {
            // calc score
            navigate('/score/100')
        }
    },[finished])

    const handleNextClick = (e) => {
        e.preventDefault()
        
        console.log(ansers)        
        
        setGroupNum(prevGroupNum=>{
            let newGroupNum = prevGroupNum+1
            if (surveyItems.length === newGroupNum)
                setIsLast(true)
            if (isLast) {
                setFinished(true)
                newGroupNum = prevGroupNum
            }
            return newGroupNum
        })
    }
    const handleSetAnser = (value) => {
        const newAnsers = [...ansers]
        newAnsers[groupNum-1] = value
        setAnsers(newAnsers)
    }

    return <>
        <form>
            <SurveyContainer key={groupNum} handleNextClick={handleNextClick} setAnser={handleSetAnser} isLast={isLast} {...surveyItems[groupNum - 1]} />
        </form>
    </>
}