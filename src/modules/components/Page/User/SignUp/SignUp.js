import React, { Component, useState } from 'react'
import $ from "jquery";
import { NavLink } from 'react-router-dom'

import './SignUp.css'

export default function SignUp() {

    const [user, setUser] = useState({
        name : "", username : "", phone : "", address : "", email : "", password : ""
    })
    const [result, setResult] = useState("");

    // let name, value;

    // const handleInputs = (e) => {
    //     console.log(e);
    //     name = e.target.name;
    //     value = e.target.value;
        
    //     setUser({...user, [name]:value});
    // }

    const handleInputs = (e) => {
        e.preventDefault();
        const form = $(e.target.name);
        $.ajax({
            type: "POST",
            url: form.attr("action"),
            data: form.serialize(),
            success(data) {
                setResult(data);
            },
        });
    };

    return (
        <div className='akun'>
            <div className='akun-user'>

                <h1 className='signup'>
                    Create Your Account
                </h1>

                <form 
                action="http://localhost:8000/api/register" 
                method='POST' 
                className='isi' 
                onSubmit={handleInputs}>
                    <table>
                        <tbody>

                        <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputName1">
                                        Name
                                    </label>
                                </th>
                                <td>
                                    <input type="name"
                                        className="form-control"
                                        id="exampleInputName1"
                                        placeholder="Enter name" 
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputUsername1">
                                        Username
                                    </label>
                                </th>
                                <td>
                                    <input type="username"
                                        className="form-control"
                                        id="exampleInputUsername1"
                                        placeholder="Enter username"
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputPhone1">
                                        Phone
                                    </label>
                                </th>
                                <td>
                                    <input type="phone"
                                        className="form-control"
                                        id="exampleInputPhone1"
                                        placeholder="Enter phone" 
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputAddress1">
                                        Address
                                    </label>
                                </th>
                                <td>
                                    <input type="Address"
                                        className="form-control"
                                        id="exampleInputAddress1"
                                        placeholder="Enter address"
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputEmail1">
                                        Email
                                    </label>
                                </th>
                                <td>
                                    <input
                                        type="email"
                                        className="form-control"
                                        id="exampleInputEmail1"
                                        aria-describedby="emailHelp"
                                        placeholder="Enter email"
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginTop : '18%'}}
                                        for="exampleInputPassword1">
                                        Password
                                    </label>
                                </th>
                                <td>
                                    <input
                                        type="password"
                                        className="form-control"
                                        id="exampleInputPassword1"
                                        placeholder="Password"
                                        onChange={handleInputs}
                                        style={{ width: '220%', marginLeft: '2%', marginTop: '6%' }}
                                        />
                                </td>
                            </tr>

                            <td>
                                <input 
                                type="submit" 
                                name="signup"
                                id="signup"
                                className="form-submit"
                                value="register"
                                href="{{route('register')}}"
                                />
                            </td>

                        </tbody>
                    </table>

                    <div className='pindah'>
                        <h6 className='gak-punya'>
                            Have an account?
                            <NavLink to={"/login"}>
                                <button type="masuk"
                                    className="btn smk">
                                    Sign In
                                </button>
                            </NavLink>
                        </h6>
                    </div>

                </form>
            </div>
        </div>
    )
}
