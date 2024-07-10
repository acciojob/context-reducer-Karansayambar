import React, { useState } from 'react'

const LoginFile = () => {
    console.log("login page render")
    const [islogin , setIsLogin] = useState(false);
    const [data, setData] = useState('');
    const [list , setList] = useState([]);

    const loginUser = () => {
        setIsLogin(true)
    }

    const handleChange = (e) => {
        const getData = e.target.value;
        console.log(getData);
        setData(getData);
    }

    const signoutUser = () => {
        setIsLogin("");
    }

    const addData = () => {
        setList([...list, data]);
        console.log("list data", list);
    }

    const removeData = (itemToRemove) => {
        setList(list.filter((item) => item !== itemToRemove));
    }

  return (
    <div>
        <div>
            <button id='login-btn' onClick={loginUser}>Login</button>
            <button id='signout' onClick={signoutUser}>Signout</button>
        </div>
        <input type='text' id='shopping-input' onChange={handleChange}/> <br/>
        <button id='clear-list'>Clear List</button>
        <div>
            <button id={`item-${data}`} onClick={addData}>Add Btn</button>
        </div>

        <div>
           {islogin ?  <p>{`Current user ${data}:, isAuthenticated: Yes`}</p> :  <p>{`Current user :, isAuthenticated: No`}</p>}
        </div>
        <div>
            {
                list.map((item, index) => (
                    <div key={index} style={{display : "flex"}}>
                        <p>{item}</p>
                        <button id={`remove-${item}`} onClick={() => removeData(item)}>Remove Btn</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default LoginFile;