import React from 'react';
import ReactDOM from 'react-dom';
import "./style.css"
import {BrowserRouter as router, Switch, route} from 'react-router-dom'
function Form() {
    const [form, formData] =React.useState({text:"", password:""})
      function handleChange(event) {
        return formData(function prevData(params) {
         return ({
            ...prevData,
            [event.target.name]:event.target.value
         })
        })
      }
    return(
       <div className='container'>
         <div className='cover'>
            <form className='form'>
              <input
               type="text"
               id="hospital"
               placeholder='Name'
               name='text'
               value={form.text}
               onChange={handleChange}
              />
              <br></br>
              <br></br>

              <input
               type="password"
               id="identification"
               placeholder='ID'
               name='password'
               value={form.password}
               onChange={handleChange}
              />
                 <button>log in</button>
            </form>
        </div>
       </div>
    )
}
ReactDOM.render(<Form />, document.getElementById("root"))

