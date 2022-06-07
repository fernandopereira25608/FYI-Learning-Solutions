import React, { Component } from "react";
import { Routes, Route, Link } from "react-router-dom";
import axios from 'axios';

export default class Forgot extends Component{

    redefinirSenha = e =>{
        e.preventDefault();

        const data = {
            email: this.email
        };

        axios.post('Forgot', data)
        .then(
            res => {
                console.log(res)
            }
        ).catch(
            erro => {
                console.log(erro)
            }
        )
    };


    render(){
        return(
            <form onSubmit={this.redefinirSenha}>
                <h3>Forgot password</h3>
                <div>
                    <label>Email</label>
                    <input
                    type="email"
                    name="email"
                    required
                    placeholder=" Email: "
                  />
                </div>
                <button>Submit</button>
            </form>
            
        )
    }

}