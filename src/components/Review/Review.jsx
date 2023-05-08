import { useSelector } from "react-redux";
import axios from "axios";

function Review() {
    const submissionData = useSelector(state => state.submissionInformation);
    const submitData = (event) => {
        event.preventDefault();
        axios({
            method: 'POST',
            url: '/feedback',
            data: {
                feeling: submissionData.feeling_data,
                understanding: submissionData.understanding_data,
                support: submissionData.supported_data,
                comments: submissionData.comments_data
            }
        }).then(response => {
            console.log('It Worked!');
            alert('all done')
        }).catch((error) => {
            console.log('whoopsie:', error);
        })
    }

    return (
        <>
            <div>Feeling: {submissionData.feeling_data}</div>
            <div>Understanding: {submissionData.understanding_data}</div>
            <div>Supported: {submissionData.supported_data}</div>
            <div>Comments: {submissionData.comments_data}</div>
            <button onClick={submitData}>Submit</button>
        </>
    );
}

export default Review;
