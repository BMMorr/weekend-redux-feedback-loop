import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Understanding() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [understandingInput, setUnderstandingInput] = useState('');

    const subData = () => {
        const currentData = {
            understanding_data: understandingInput,
        }
        dispatch({
            type: 'SUB_INFO',
            payload: currentData
        })
        history.push("/supported")
    }

    const handleUnderstandingInput = event => {
        setUnderstandingInput(event.target.value);
    };

    return (
        <>
            <h1>How well are you understanding the content?</h1>
            <input type="number" value={understandingInput} onChange={handleUnderstandingInput} />
            <button onClick={subData} >NEXT</button>
        </>
    )
}
export default Understanding;