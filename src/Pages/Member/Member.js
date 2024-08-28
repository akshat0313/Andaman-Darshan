import React,{ useRef, useState, useEffect } from 'react'
import { Button } from '@chakra-ui/react';
//import AddBlog from '../AddBlog/AddBlog';
import "./Member.css";
import Admin from '../Admin/Admin';
const Member = () => {
    const userRef = useRef();
    const errRef = useRef();

    const [user, setUser] = useState('');
    const [pwd, setPwd] = useState('');
    const [errMsg, setErrMsg] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        userRef.current.focus();
    }, [])

    useEffect(() => {
        setErrMsg('');
    }, [user, pwd])

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (user==="ArjunDutta" && pwd === "1234")
        {
            setSuccess(true);
        }
        else
        {
            setErrMsg("Wrong Password for this username");
        }
    }
  return (
    <>{(success) ? 
        <div>
            <Admin />
        </div> :
        <div className="bgm">
		<div className="containerAd">
			
			<div className="form_containerAd">
                <section className="Appo2"> 
                    <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">{errMsg}</p>
                    <h1>Sign In</h1>
                    <form onSubmit={handleSubmit} className='polo'>
                        <label htmlFor="username">Username:</label>
                        <input
                            className='kolo'
                            type="text"
                            id="username"
                            ref={userRef}
                            autoComplete="off"
                            onChange={(e) => setUser(e.target.value)}
                            value={user}
                            required
                        />

                        <label htmlFor="password">Password:</label>
                        <input
                            className='kolo'
                            type="password"
                            id="password"
                            onChange={(e) => setPwd(e.target.value)}
                            value={pwd}
                            required
                        />
                        
                        <Button type="submit" colorScheme='red'>
                            Sign In</Button>
                    </form>
                </section>
                </div>
		</div>
		</div>
  }</>)
}

export default Member