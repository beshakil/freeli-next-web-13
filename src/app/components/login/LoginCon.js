"use client"
import React, { useState, useEffect } from 'react';
import classNames from 'classnames';
import Link from 'next/link';
import Carousel from '../../Partial/Carousel';
import Image from 'next/image';

const LoginCon = () => {
    const [errorCounter, setErrorCounter] = useState(0);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loader, setLoader] = useState(false);
    const [rememberMe, setRememberME] = useState(false);
    const [status, setStatus] = useState(false);
    const [passValidStatus, setPassValidStatus] = useState(false);

    const [theme, setTheme] = useState('light');

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

    const handleSignIn = () => {
        setLoader(true);
        // Your submission logic goes here
    };

    return (
        <div className="login_container" style={{ overflow: 'hidden' }}>
            <div className="leftFeb">
                <div className="FebHeader">
                    <Image src="/media/images/loginBefore/Workfreeli-logo-1.webp" height={60} width={190} alt="Workfreeli" />
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
                <form action="/" method="POST" style={{ margin: '0 auto' }}>
                    <div className="formHeader" style={{ marginBottom: '18px' }}>
                        Hello! Welcome back.
                    </div>
                    <div className="formHeader" style={{ fontSize: '16px', color: '#565656' }}>
                        Sign into your account here
                    </div>
                    <div className="loginBody" style={errorCounter >= 3 ? { marginBottom: '25px' } : {}}>
                        <div className="form-field email-address">
                            <label>Your email</label>
                            <span className="emailAt"></span>
                            <input
                                aria-labelledby="email"
                                type="text"
                                name="email"
                                id="email"
                                value={email}
                                placeholder="youremail@email.com"
                                autoFocus
                                autoComplete="new-password"
                                required
                                onChange={(e) => setEmail(e.target.value)}
                            />
                            <span className="errorLabel" style={{ position: 'relative' }}>
                                Invalid email address.
                            </span>
                        </div>
                        <div className="form-field password">
                            <label htmlFor="password">Your password</label>
                            <span className="passwordLock"></span>
                            <span
                                className="passwordView"
                                style={password === '' ? { pointerEvents: 'none' } : {}}
                                data-for="loginTooltip"
                                data-tip="Click to view the password as plain text"
                            ></span>
                            <input
                                style={{ marginBottom: '22px' }}
                                type="password"
                                name="password"
                                id="password"
                                value={password}
                                placeholder=""
                                autoComplete="new-password"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                            <span className="errorLabel" style={{ position: 'relative', top: '-18px' }}>
                                Invalid password.
                            </span>
                            <span className="passwordPlaceholder">......</span>
                            {passValidStatus ? '' : (
                                <span className="passwordInfoLabel" style={{ position: 'relative', top: '-18px' }}>
                                    Minimum 6 Characters, One Lowercase & One Number.
                                </span>
                            )}
                        </div>
                        <div className="remember-me">
                            <button
                                type="button"
                                className={classNames('policyCheck', rememberMe ? 'active' : '')}
                                aria-label="Remember me"
                                name="remember-me"
                            ></button>
                            <span className="policyText"> Remember me</span>
                            <Link className="forgotPass otp" href="/signin-with-otp">
                                Sign in with OTP ?
                            </Link>
                            <Link className="forgotPass" href="/forgot-password">
                                Forgot your Password ?
                            </Link>
                        </div>
                    </div>
                </form>
                <div className="sign-in" style={{ margin: '0 auto' }}>
                    {loader === true ? (
                        <button name="button" className="sendButton btn_loader"></button>
                    ) : !status ? (
                        <button name="button" className="sendButton" onClick={handleSignIn}>
                            Sign In
                        </button>
                    ) : (
                        <button name="button" className="sendButton active" onClick={handleSignIn}>
                            Sign in
                        </button>
                    )}
                </div>
                <div className="sign-up" style={{ margin: '20px auto 0' }}>
                    Do not have an account? <Link href="/signup"> Sign Up</Link>
                </div>
                <div className="sign-up" style={{ margin: '20px auto 0' }}>
                    Privacy Policy <span style={{ fontWeight: 'bold', margin: '0 3px' }}>|</span> <Link href="/">Contact</Link>
                </div>
            </div>
        </div>
    );
};

export default LoginCon;
