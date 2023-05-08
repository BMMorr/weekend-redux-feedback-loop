import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { useState } from 'react';

function Comments() {
    const history = useHistory();
    const dispatch = useDispatch();

    const [commentsInput, setCommentsInput] = useState('');

    const subData = () => {
        const currentData = {
            comments_data: commentsInput
        }
        dispatch({
            type: 'SUB_INFO',
            payload: currentData
        })
        history.push("/review")
    }

    const handleCommentsInput = event => {
        setCommentsInput(event.target.value);
    };

    return (
        <>
            <h1>Any comments you want to leave?</h1>
            <input type="text" value={commentsInput} onChange={handleCommentsInput} />
            <button onClick={subData} >NEXT</button>
        </>
    )
}
export default Comments;