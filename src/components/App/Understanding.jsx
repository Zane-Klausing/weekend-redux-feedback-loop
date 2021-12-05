import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Understanding (){
    const dispatch = useDispatch();
    const history = useHistory();
    let [infoToAdd, setInfoToAdd] = useState({understanding: 0});

    const handleUnderstandingChange = (event) => {
        setInfoToAdd({
        understanding: event.target.value,
        })}


        const addInfo = (event) => {
            event.preventDefault();
            console.log(infoToAdd);
            dispatch({
                type: 'INFO_FORM',
                payload: infoToAdd
            })
            history.push('/Supported');
        }





    return (
        <div>
            <h1>
                How well did you understand todays topic?
            </h1>
            <form onSubmit={(event) => addInfo(event)}>
                <input
                    onChange={handleUnderstandingChange}
                    type='number'
                    placeholder='Understanding?'
                />
                <button>NEXT</button>
            </form>
        </div>
    )
}

export default Understanding;