import { useHistory } from 'react-router-dom';
function Success (){
    const history = useHistory();

    function newSubmission(){
        history.push('/');
    }

    return (
        <div>
            <h1>Submission Success!</h1>
            <button onClick ={() => {newSubmission()}}>New submission</button>
        </div>
    )
}
export default Success;