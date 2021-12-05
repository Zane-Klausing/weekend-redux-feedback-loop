import { useSelector } from "react-redux";
import axios from 'axios'
function Review (){
    const infoObject = useSelector(store => store.infoForm);
    console.log(infoObject)


function submitHandler () {
    console.log("submit button clicked");
    axios.post("/feedback", infoObject)
    .then((response) =>{
        console.log('got a response', response);
    }).catch((error) =>{
        console.log(error);
    })
    };







    return (
        <div>
            <h1>Review your feedback!</h1>
            <h2>Feelings: {infoObject.feeling}</h2>
            <h2>Understanding: {infoObject.understanding}</h2>
            <h2>Support: {infoObject.supported}</h2>
            <h2>Comments: {infoObject.comments}</h2>
            <button onClick={()=>submitHandler()}>SUBMIT</button>
        </div>
    )
}

export default Review;