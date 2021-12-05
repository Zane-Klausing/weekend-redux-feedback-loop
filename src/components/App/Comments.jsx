import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Comments (){
    const dispatch = useDispatch();
    const history = useHistory();
    let [infoToAdd, setInfoToAdd] = useState({comments: ''});

    const handleCommentsChange = (event) => {
        setInfoToAdd({
        comments: event.target.value,
        })}


        const addInfo = (event) => {
            event.preventDefault();
            console.log(infoToAdd);
            dispatch({
                type: 'INFO_FORM',
                payload: infoToAdd
            })
            history.push('/review');
        }


    



    return (
        <div>
            <h1>
                Any comments on today?
            </h1>
            <form onSubmit={(event) => addInfo(event)}>
                <input
                    onChange={handleCommentsChange}
                    type='text'
                    placeholder='Comments?'
                />
                <button>NEXT</button>
            </form>
        </div>
    )
}

export default Comments;