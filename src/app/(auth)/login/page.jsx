import Link from 'next/link';
import React from 'react';

const LoginPage = () => {
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

               
                <form className="mt-8 space-y-4">

                    <input
                        type="email"
                        placeholder="Email"
                        className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                    />

                    <input
                        type="password"
                        placeholder="Password"
                        className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                    />

                    <button
                        type="submit"
                        className="cursor-pointer w-full bg-[#C8F04B] text-black font-bold py-3 rounded-xl hover:scale-[1.02] transition"
                    >
                        Login
                    </button>
                </form>

                
                <button className="cursor-pointer mt-4 w-full border border-white/10 bg-white/5 py-3 rounded-xl hover:bg-white/10 transition">
                    Continue with Google
                </button>

                
                <div className="mt-6 text-center text-sm text-gray-400">
                    Don’t have an account?{" "}
                    <Link href="/register" className="text-[#C8F04B]">
                        Register
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default LoginPage;