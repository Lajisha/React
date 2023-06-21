import React from 'react'
import pic from '../assets/task2.jpg'
import './Register.css'
const Register = () => {
  return (
    <div>
      <div class="container">
        <div class="first">
            <img class="img1" src={pic} alt=""></img>
            <div class="navbar">
                    <a href="">INBIO</a>
                <div class="nav">
                    <a href="">HOME</a>
                    <a href="">FEATURES</a>
                    <a href="">PORTFOLIO</a>
                    <a href="">RESUME</a>
                    <a href="">CLIENTS</a>
                    <a href="">PRICING</a>
                    <a href="">BLOG</a>
                    <a href="">CONTACT</a>                
                </div>
            </div>
        </div>

        <div class="second">
            <div class="text">
                <div class="wel">
                    WELCOME TO MY WORLD
                </div>
                <div class="hi">
                    Hi,I'm <span class="name">Jone Lee</span> 
                </div>
                <div class="dev">
                    a Developer.
                </div>
                <div class="i">
                    I use animation as a third dimension by which to simply experiences and including through each and every interaction. I'm not adding motion just to spruce things up, but doing it in ways that.
                </div>
            </div>
            <div class="pic">
                <img class="img2" src={pic} alt=""></img>
            </div>
        </div>
    </div>
    </div>
  )
}

export default Register
