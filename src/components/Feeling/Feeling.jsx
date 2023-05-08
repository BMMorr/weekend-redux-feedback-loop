import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Feeling() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [feelingInput, setFeelingInput] = useState('');

    const subData = () => {
        const currentData = {
            feeling_data: feelingInput,
        }
        dispatch({
            type: 'SUB_INFO',
            payload: currentData
        })
        history.push("/understanding")
    }

    const handleFeelingInput = event => {
        setFeelingInput(event.target.value);
    };

    return (
        <>
            <h1>How are you Feeling today?</h1>
            <input type="number" value={feelingInput} onChange={handleFeelingInput} />
            <button onClick={subData} >NEXT</button>
        </>
    )
}
export default Feeling;