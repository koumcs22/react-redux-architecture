import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';
import { useDispatch, useSelector } from 'react-redux';
import { decNumber, incNumber } from '../../../../../Store/Actions';

const Home = () => {
    const currentValue = useSelector((state) => state.changeTheNumber )
    const dispatch = useDispatch();
    const handleOnclick = (action,value) => {
        if(action === 'INCREMENT'){
            dispatch(incNumber(value));
        }else{
            dispatch(decNumber(value));
        }
    };

    return (
        <center>
            <button type="button" className="btn btn-danger" onClick={() => {handleOnclick('DECREMENT',5)}}>Decrement</button>
            <input name ="quantity" type='text' value={currentValue}/>
            <button type="button" className="btn btn-primary" onClick={() => {handleOnclick('INCREMENT',5)}}>Increment</button>
        </center>
    )
}

export default Home;