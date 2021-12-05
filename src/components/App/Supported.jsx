import {useState} from 'react'
import { useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom';

function Supported (){
    const dispatch = useDispatch();
    const history = useHistory();
    let [infoToAdd, setInfoToAdd] = useState({supported: 0});

    const handleSupportedChange = (event) => {
        setInfoToAdd({
        supported: event.target.value,
        })}


        const addInfo = (event) => {
            event.preventDefault();
            console.log(infoToAdd);
            dispatch({
                type: 'INFO_FORM',
                payload: infoToAdd
            })
            history.push('/Comments');
        }


    



    return (
        <div>
            <h1>
                How supported do you feel today?
            </h1>
            <form onSubmit={(event) => addInfo(event)}>
                <input
                    onChange={handleSupportedChange}
                    type='number'
                    placeholder='Supported?'
                />
                <button>NEXT</button>
            </form>
        </div>
    )
}

export default Supported;