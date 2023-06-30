import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'

import './Login.css'

export default function Login() {

    const [inputs, setInputs] = useState({})

    const handleChange = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setInputs(values => ({...values, [name]: value }));
    }

    const handleSubmit = (event) => {
        event.preventDefault();

        console.log(inputs);
    }

    return (
        <div className='akun'>
            <div className='akun-user'>

                <h1 className='login'>
                    Login
                </h1>

                <form className='isil' onSubmit={handleSubmit}>
                    <table style={{ marginLeft: '26%', marginTop: '8%' }}>
                        <tbody>
                            <tr>
                                <th>
                                    <label style={{ marginLeft: '-155%' }}
                                        for="exampleInputUsername1">
                                        Username
                                    </label>
                                </th>

                                <td>
                                    <input type="username"
                                        className="form-control"
                                        id="exampleInputUsername1"
                                        placeholder="Enter username"
                                        onChange={handleChange}
                                        style={{ width: '200%', marginLeft: '-50%' }}
                                    />
                                </td>
                            </tr>

                            <tr>
                                <th>
                                    <label style={{ marginLeft: '-155%', marginTop: '20%' }}
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
                                        onChange={handleChange}
                                        style={{ width: '200%', marginLeft: '-50%', marginTop: '6%' }}
                                    />
                                </td>
                            </tr>

                            <td>
                                <button type="submit"
                                    className="btn btn-primary sbt">
                                    Login
                                </button>
                            </td>
                        </tbody>
                    </table>
                    <div className='pindah'>
                        <h6
                            style={{ marginLeft: '0%' }}
                            className='gak-punya-akun'>
                            Don't have an account?
                            <NavLink to={"/signup"}>
                                <button type="masuk"
                                    className="btn msk">
                                    Sign Up
                                </button>
                            </NavLink>
                        </h6>
                    </div>
                </form>
            </div>
        </div>
    )
}
