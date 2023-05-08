import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Supported() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [supportedInput, setSupportedInput] = useState('');

    const subData = () => {
        const currentData = {
            supported_data: supportedInput,
        }
        dispatch({
            type: 'SUB_INFO',
            payload: currentData
        })
        history.push("/comments")
    }

    const handleSupportedInput = event => {
        setSupportedInput(event.target.value);
    };

    return (
        <>
            <h1>How well are you being supported?</h1>
            <input type="number" value={supportedInput} onChange={handleSupportedInput} />
            <button onClick={subData} >NEXT</button>
        </>
    )
}
export default Supported;