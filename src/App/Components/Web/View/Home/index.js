import React from 'react'
import 'bootstrap/dist/css/bootstrap.css';

const Home = () => {
    return (
        <center>
            <button type="button" class="btn btn-danger">Decrement</button>
            <input name ="quantity" type='text' value={"0"}/>
            <button type="button" class="btn btn-primary">Increment</button>
        </center>
    )
}

export default Home;