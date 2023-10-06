
import React from 'react';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';



const Login = () => {

    const { register, formState: { errors }, handleSubmit, } = useForm();

    const [
        signInWithEmailAndPassword,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();


    let from = location.state?.from?.pathname || "/";
    let signInError;


    if (error) {

        signInError = <p className='text-[red]'>{error?.message}</p>

    }


    if (loading) {


        return <button className="btn loading"> Loading</button>

    }

    



    const onSubmit = async (data) => {

        const email = data.email;
        const password = data.password;
        const user = { email, password }

        await signInWithEmailAndPassword(email, password);




        fetch(`http://localhost:5000/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },

            body: JSON.stringify(user)
        })

            .then(res => res.json())
            .then(data => {

                console.log(data);
                const token = data.accessToken;
                localStorage.setItem('token', token);
                navigate(from, { replace: true });


            })







    }


    return (
        <div className='flex h-screen justify-center items-center'>

            <div className="card md:w-96 w-72  bg-[#511849]">
                <div className="card-body">

                    <h2 className=" text-center font-bold  font-serif text-3xl text-white">Please Login</h2>

                    <form onSubmit={handleSubmit(onSubmit)}>

                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Email</span>

                            </label>

                            <input

                                type="email"
                                placeholder="Enter your email"
                                className="input input-bordered w-full max-w-xs"
                                {...register("email", {

                                    required: {
                                        value: true,
                                        message: 'Email is Required'
                                    },
                                    pattern: {
                                        value: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                                        message: 'Provide a Valid Email'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.email?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.email.message}
                                    </span>
                                }

                                {errors.email?.type === "pattern" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.email.message}
                                    </span>
                                }

                            </label>

                        </div>



                        <div className="form-control w-full max-w-xs">

                            <label className="label">
                                <span className="label-text text-white">Password</span>

                            </label>

                            <input

                                type="password"
                                placeholder="Enter your password"
                                className="input input-bordered w-full max-w-xs"
                                {...register("password", {

                                    required: {
                                        value: true,
                                        message: 'Password is Required'
                                    },
                                    minLength: {
                                        value: 8,
                                        message: 'Password must be 8 character or longer'
                                    }
                                })}
                            />

                            <label className="label">

                                {errors.password?.type === "required" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.password.message}
                                    </span>
                                }

                                {errors.password?.type === "minLength" &&

                                    <span className="label-text-alt text-[red] text-lg">
                                        {errors.password.message}
                                    </span>
                                }

                            </label>

                        </div>

                        {signInError}

                        <input className="bg-[#C70039] mt-3 px-16 py-3 font-bold font-sans rounded block mx-auto text-lg text-white cursor-pointer" type="submit" value='Login' />

                    </form>

                    <p className='text-white'><small>If you don't have any account ? <Link className='text-[blue] font-semibold' to='/sign-up'> Create a new account </Link> </small></p>

                </div>

            </div>


        </div>
    );
};

export default Login;