import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

function Feelings (){
    const dispatch = useDispatch();
    const history = useHistory();
    let [infoToAdd, setInfoToAdd] = useState({ feeling: 0});

    const handleFeelingChange = (event) => {
        setInfoToAdd({
        feeling: event.target.value,
        })}


        const addInfo = (event) => {
            event.preventDefault();
            console.log(infoToAdd);
            dispatch({
                type: 'INFO_FORM',
                payload: infoToAdd
            })
            history.push('/Understanding');
        }




    return (
        <div>
            <h1>
                How are you feeling today?
            </h1>
            <form onSubmit={(event) => addInfo(event)}>
                <input
                    onChange={handleFeelingChange}
                    type='number'
                    placeholder='Feeling?'
                />
                <button>NEXT</button>
            </form>
        </div>
    )
}

export default Feelings;