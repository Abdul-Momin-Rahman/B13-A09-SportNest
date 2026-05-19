'use client'

import Link from 'next/link';
import React from 'react';
import { authClient } from "@/lib/auth-client";
import { useForm } from "react-hook-form";
import { Bounce, Slide, toast } from "react-toastify";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useRouter } from "next/router";
import { useSearchParams } from "next/navigation";
import { useState } from "react";


const LoginPage = () => {

    const searchParams = useSearchParams();
    const next = searchParams.get("next");
    const [loading, setLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const { register, handleSubmit, formState: { errors } } = useForm()

    const handlLogin = async (formdata) => {
        setLoading(true);

        const { email, password } = formdata;

        const { data, error } = await authClient.signIn.email({
            email: email,
            password: password,

            callbackURL: next || "/"
        })

        setLoading(false);

        if (error) {
            toast.error(`${error.message}`, {
                position: "top-center",
                autoClose: 5000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
        if (data) {
            toast.success('Login Successful', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: true,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Slide,
            });
        }
    }

    const handleGoogleSignin = async () => {
        await authClient.signIn.social({
            provider: 'google'
        })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0D0A] text-white px-4">


            <div className="absolute h-[400px] w-[400px] bg-[#C8F04B]/10 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">


                <h1 className="text-3xl font-bold text-center">
                    Welcome Back
                </h1>
                <p className="text-gray-400 text-center mt-2">
                    Login to continue SportNest
                </p>


                <form onSubmit={handleSubmit(handlLogin)} className="mt-8 space-y-4">

                    <div>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required for Login" })}
                            placeholder="Email"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        {errors.email && <p className="text-red-500 ">{errors.email.message}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", { required: "Password is required for Login" })}
                            placeholder="Password"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        <span className="absolute right-5 top-4 text-white cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <p className="text-red-500 ">{errors.password.message}</p>}
                    </div>

                    <div className="flex justify-end">
                        <div className="text-right text-sm text-[#C8F04B] cursor-pointer hover:text-[#C8F04B]/80 w-fit">
                            Forgot password?
                        </div>
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full bg-[#C8F04B] text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition"
                    >
                        {loading ? <span className="loading loading-spinner loading-md"></span> : "Login"}
                    </button>
                </form>


                <button onClick={handleGoogleSignin} className="cursor-pointer mt-4 w-full border border-white/10 bg-white/5 py-3 rounded-xl hover:bg-white/10 transition">
                    Continue with Google
                </button>


                <div className="mt-6 text-center text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-[#C8F04B] hover:text-[#C8F04B]/80">
                        Register
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;