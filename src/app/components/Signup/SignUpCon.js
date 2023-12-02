"use client"
import React, { useState, useEffect } from 'react'
import classNames from 'classnames';
import Link from 'next/link';
import Carousel from '../../Partial/Carousel';
import Image from 'next/image';

const SignUpCon = () => {
    
    const [email, setEmail] = React.useState('');
    const [pageChange, setPageChange] = React.useState('emailPage');
    const [activationCode, setActivationCode] = useState('');
    const [theme, setTheme] = useState('light');

    const [hoveredElements, setHoveredElements] = useState({});
    // Function to handle mouse hover
    const handleMouseHover = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: true,
        }));
    };

    // Function to handle mouse leave
    const handleMouseLeave = (elementId) => {
        setHoveredElements((prevState) => ({
            ...prevState,
            [elementId]: false,
        }));
    };

    useEffect(() => {
        const storedTheme = localStorage.getItem('theme');
        if (storedTheme) {
            setTheme(storedTheme);
            updateThemeClass(storedTheme);
        }
    }, []);

    const updateThemeClass = (type) => {
        if (typeof document !== 'undefined') {
            const items = document.getElementById('root');
            if (items) {
                if (type === 'dark') {
                    items.classList.add('dark');
                } else {
                    items.classList.remove('dark');
                }
            }
        }
    };
    const selectTheme = (type) => {
        localStorage.setItem('theme', type);
        setTheme(type);
        updateThemeClass(type);
    };

    const handlePageChange = (type) => {
        setPageChange(type);
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value);
    };

    const handleCodeChange = (event) => {
        const { name, value } = event.target;
        if (value.length <= 1 && /^\d*$/.test(value)) {
            setActivationCode((prevState) => {
                const newCode = { ...prevState };
                newCode[name] = value;
                return newCode;
            });
            const nextElement = document.getElementById(`digit_${Number(name[name.length - 1]) + 1}`);
            if (nextElement) {
                nextElement.focus();
            }
        }
    };

    const handleResendCode = () => {
        // Logic to resend activation code
        console.log('Resending activation code...');
    };

    const handleSubmit = () => {
        // Logic to handle form submission
        // You can perform validation or submit the email
        console.log('Submitting email:', email);
    };
    return (
        <div>
             <div className="login_container" style={{ overflow: 'hidden' }}>
                <div className="leftFeb">
                    <div className="FebHeader">

                        <Image
                            src="/media/images/loginBefore/Workfreeli-logo-1.webp"
                            height={60} width={190}
                            alt="Workfreeli"
                        />
                    </div>
                    <Carousel />
                </div>
                <div className="form_container">
                <div className="loginTheme">
                    <span
                        className={classNames('loginThemeModes', theme === 'light' ? 'active' : '')}
                        onClick={() => selectTheme('light')}
                    >
                        Light
                    </span>
                    <span
                        className={classNames('loginThemeModes', theme === 'dark' ? 'active' : '')}
                        onClick={() => selectTheme('dark')}
                    >
                        Dark
                    </span>
                </div>
                    {
                        pageChange === "emailPage" ?
                            <div className="rg_container">
                                <div className="rgformHeader">
                                    <div className="rgformTitle">Sign Up</div>
                                    <div className="rgformSubTitle">Get started with Workfreeli for free!</div>
                                </div>
                                <div className="rgformBody" style={{ height: 'calc(100% - 100px)' }}>
                                    <div className="rgInputGroup">
                                        <label className="rgInputLabel">
                                            E-mail address <span style={{ color: 'red' }}>*</span>
                                        </label>
                                        <span className="emailAt"></span>
                                        <input
                                            type="email"
                                            id="email"
                                            className="rgInputf"
                                            placeholder="example@workfreeli.com"
                                            value={email}
                                            onChange={handleEmailChange}
                                        />
                                        <span className="rgInputMsg">
                                            Please use your work e-mail so we can help connect you with your team. This will be your username to login.
                                        </span>
                                    </div>
                                    <div className="rgformFooter">
                                        <button className="rgFromBack" style={{ visibility: 'hidden' }}>
                                            Back
                                        </button>
                                        <button className={`rgFromNext ${!email ? 'inactive' : ''}`} style={{ opacity: !email ? 0.5 : 1 }} onClick={() => handlePageChange("otpVerify")}>
                                            Continue
                                        </button>
                                    </div>
                                </div>
                            </div> :
                            pageChange === "otpVerify" ?
                                <div className="rg_container">
                                    <div className="rgformHeader">
                                        <div className="rgformTitle" style={{ fontSize: '20px', margin: '0px' }}>
                                            We have sent an activation code to nadisig379@cabose.com
                                        </div>
                                    </div>
                                    <div className="rgformBody">
                                        <div className="rgInputGroup">
                                            <label className="rgInputLabel">
                                                Please enter the activation code that has been sent to you:
                                            </label>
                                            <span className="tooltip tooltipactivation user_Management_title" style={{ cursor: 'pointer' }}>
                                                <span
                                                    onMouseEnter={() => handleMouseHover('element1')}
                                                    onMouseLeave={() => handleMouseLeave('element1')}
                                                    className="info_tooltip_new tooltipActivation"></span>
                                                {
                                                    hoveredElements['element1'] &&
                                                    <span className="tooltiptext tooltipActivationText">
                                                        <p>
                                                            If you have not received an activation code in your inbox, please check your SPAM folder or click this line to resend the code.
                                                        </p>
                                                        <span className="tooltipClose"></span>
                                                    </span>
                                                }
                                            </span>
                                            <div className="digitHolder">
                                                {[...Array(6)].map((_, index) => (
                                                    <input
                                                        key={index}
                                                        maxLength="1"
                                                        type="text"
                                                        id={`digit_${index + 1}`}
                                                        name={`digit_${index + 1}`}
                                                        value={activationCode[`digit_${index + 1}`] || ''}
                                                        onChange={handleCodeChange}
                                                    />
                                                ))}
                                            </div>
                                            <span className="rgInputMsg" style={{ width: 'calc(100% - 80px)', float: 'left' }}>
                                                If you have not received an activation code in your inbox, please check your SPAM folder or click this line to resend the code.
                                            </span>
                                            <span className="resendBTN" style={{ textDecoration: 'none' }} onClick={handleResendCode}>
                                                2:47
                                            </span>
                                        </div>
                                    </div>
                                    <div className="rgformFooter">
                                        <button className="rgFromBack" style={{ visibility: 'hidden' }}>Back</button>
                                        <button className={`rgFromNext ${Object.values(activationCode).join('').length !== 6 ? 'inactive' : ''}`} style={{ opacity: Object.values(activationCode).join('').length !== 6 ? 0.5 : 1 }} onClick={handleSubmit}>
                                            Continue
                                        </button>
                                    </div>
                                </div> : null
                    }

                    <div className="sign-up" style={{ margin: '20px auto 0', color: 'red', }}>
                        Already have login and password?&nbsp;
                        <Link href="/login">
                            Sign in
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUpCon;