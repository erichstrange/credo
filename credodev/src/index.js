import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import { useForm } from "react-hook-form";
// import Headers from "./Header";




ReactDOM.render(<App />, document.getElementById('root'));



//
// export default function credo() {
//     const {register, handleSubmit} = useForm();
//     const onSubmit = (data) => alert(JSON.stringify(data));
//
//     return (
//         <form onSubmit={handleSubmit(onSubmit)}>
//             <Headers/>
//
//             <input name="firstName" ref={register} placeholder="First name"/>
//
//             <input name="lastName" ref={register} placeholder="Last name"/>
//
//             <select name="Type of Campaign" ref={register}>
//                 <option value="Environmental">Select...</option>
//                 <option value="Social Movement">Category A</option>
//                 <option value="Other">Category B</option>
//             </select>
//
//             <input type="submit"/>
//         </form>
//     );
// }