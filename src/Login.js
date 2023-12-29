// // // import { useEffect, useState } from "react";
// // // import { Link, useNavigate } from "react-router-dom";
// // // import { toast } from "react-toastify";
// // // import './Login.css'

// // // const Login = () => {
// // //     const [username, usernameupdate] = useState('');
// // //     const [password, passwordupdate] = useState('');

// // //     const usenavigate=useNavigate();

// // //     useEffect(()=>{
// // // sessionStorage.clear();
// // //     },[]);

// // //     const ProceedLogin = (e) => {
// // //         e.preventDefault();
// // //         if (validate()) {
// // //             ///implentation
// // //             // console.log('proceed');
// // //             fetch("http://localhost:3000/user/" + username).then((res) => {
// // //                 return res.json();
// // //             }).then((resp) => {
// // //                 //console.log(resp)
// // //                 if (Object.keys(resp).length === 0) {
// // //                     toast.error('Please Enter valid username');
// // //                 } else {
// // //                     if (resp.password === password) {
// // //                         toast.success('Success');
// // //                         sessionStorage.setItem('username',username);
// // //                         sessionStorage.setItem('userrole',resp.role);
// // //                         usenavigate('/')
// // //                     }else{
// // //                         toast.error('Please Enter valid credentials');
// // //                     }
// // //                 }
// // //             }).catch((err) => {
// // //                 toast.error('Login Failed due to :' + err.message);
// // //             });
// // //         }
// // //     }

// // //     const ProceedLoginusingAPI = (e) => {
// // //         e.preventDefault();
// // //         if (validate()) {
// // //             ///implentation
// // //             // console.log('proceed');
// // //             let inputobj={"username": username,
// // //             "password": password};
// // //             fetch("https://localhost:44308/User/Authenticate",{
// // //                 method:'POST',
// // //                 headers:{'content-type':'application/json'},
// // //                 body:JSON.stringify(inputobj)
// // //             }).then((res) => {
// // //                 return res.json();
// // //             }).then((resp) => {
// // //                 console.log(resp)
// // //                 if (Object.keys(resp).length === 0) {
// // //                     toast.error('Login failed, invalid credentials');
// // //                 }else{
// // //                     toast.success('Success');
// // //                     sessionStorage.setItem('username',username);
// // //                     sessionStorage.setItem('jwttoken',resp.jwtToken);
// // //                     usenavigate('/');
// // //                 }
// // //                 if (Object.keys(resp).length === 0) {
// // //                     toast.error('Please Enter valid username');
// // //                 } else {
// // //                     if (resp.password === password) {
// // //                         toast.success('Success');
// // //                         sessionStorage.setItem('username',username);
// // //                         usenavigate('/')
// // //                     }else{
// // //                         toast.error('Please Enter valid credentials');
// // //                     }
// // //                 }
// // //             }).catch((err) => {
// // //                 toast.error('Login Failed due to :' + err.message);
// // //             });
// // //         }
// // //     }
// // //     const validate = () => {
// // //         let result = true;
// // //         if (username === '' || username === null) {
// // //             result = false;
// // //             toast.warning('Please Enter Username');
// // //         }
// // //         if (password === '' || password === null) {
// // //             result = false;
// // //             toast.warning('Please Enter Password');
// // //         }
// // //         return result;
// // //     }
// // //     return (
// // //         <div className="row">
// // //             <div className="offset-lg-3 col-lg-6" style={{ marginTop: '100px' }}>
// // //                 <form onSubmit={ProceedLogin} className="container">
// // //                     <div className="card">
// // //                         <div className="card-header">
// // //                             <h2>Login Securely !</h2>
// // //                         </div>
// // //                         <div className="card-body">
// // //                             <div className="form-group">
// // //                                 <label><b>User Name </b><span className="errmsg">*</span></label>
// // //                                 <input value={username} onChange={e => usernameupdate(e.target.value)} className="form-control"></input>
// // //                             </div>
// // //                             <div className="form-group">
// // //                                 <label><b>Password </b><span className="errmsg">*</span></label>
// // //                                 <input type="password" value={password} onChange={e => passwordupdate(e.target.value)} className="form-control"></input>
// // //                             </div>
// // //                         </div>
// // //                         <div className="card-footer">
// // //                             <button type="submit" className="btn btn-primary">Login</button> |
// // //                             <Link className="btn btn-success" to={'/register'}>New User</Link>
// // //                         </div>
// // //                     </div>
// // //                 </form>
// // //             </div>
// // //         </div>
// // //     );
// // // }

// // // export default Login;








import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import './Login.css';

const Login = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate();

    useEffect(() => {
        sessionStorage.clear();
    }, []);

    const proceedLogin = (e) => {
        e.preventDefault();
        if (validate()) {
            fetch("http://localhost:3000/user/" + username)
                .then((res) => res.json())
                .then((resp) => {
                    if (Object.keys(resp).length === 0) {
                        toast.error('Please Enter valid username');
                    } else {
                        if (resp.password === password) {
                            toast.success('Success');
                            sessionStorage.setItem('username', username);
                            sessionStorage.setItem('userrole', resp.role);
                            navigate('/');
                        } else {
                            toast.error('Please Enter valid credentials');
                        }
                    }
                })
                .catch((err) => {
                    toast.error('Login Failed due to :' + err.message);
                });
        }
    };

    const validate = () => {
        let result = true;
        if (!username) {
            result = false;
            toast.warning('Please Enter Username');
        }
        if (!password) {
            result = false;
            toast.warning('Please Enter Password');
        }
        return result;
    };

    const handleSignIn = (provider) => {
        // You can add specific sign-in logic for each provider here
        toast.info(`${provider} Sign In clicked`);
    };

    return (
        <div className="container">
            <div className="row justify-content-center align-items-center min-vh-100">
                <div className="col-md-6">
                    <div className="card">
                        <div className="card-header">
                            <h2>Login Securely!</h2>
                        </div>
                        <div className="card-body">
                            <form onSubmit={proceedLogin}>
                                <div className="form-group">
                                    <label><b>User Name </b><span className="errmsg">*</span></label>
                                    <input
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <div className="form-group">
                                    <label><b>Password </b><span className="errmsg">*</span></label>
                                    <input
                                        type="password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="form-control"
                                    />
                                </div>
                                <br/>
                                <div className="card-footer">
                                    <button type="submit" className="btn btn-primary">Login</button> |
                                    <Link className="btn btn-success" to={'/register'}>New User</Link>
                                </div>
                            </form>
                        </div>
                        <div className="card-footer text-center">
                            <p>----------------------Or sign in with-------------------------</p>
                            <div className="mb-2">
                                <button className="btn btn-danger mr-2 md-2" onClick={() => handleSignIn('Google')}>
                                    Google
                                </button>
                                <button className="btn btn-primary mr-2  md-2" onClick={() => handleSignIn('Facebook')}>
                                    Facebook
                                </button>
                                <button className="btn btn-dark mr-2  md-2" onClick={() => handleSignIn('GitHub')}>
                                    GitHub
                                </button>
                                <button className="btn btn-info mr-2 md-2" onClick={() => handleSignIn('Twitter')}>
                                    Twitter
                                </button>
                            </div>
                            {/* Add more sign-in options as needed */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;

