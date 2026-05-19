'use client'
import { authClient } from '@/lib/auth-client';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FaEye, FaEyeSlash } from 'react-icons/fa6';
import { Bounce, Slide, toast } from 'react-toastify';

const RegistrationPage = () => {


    const [loading, setLoading] = useState(false);

    const router = useRouter();

    const [showPassword, setShowPassword] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()

    const [password, setPassword] = useState("");


    const onSubmit = async (formdata) => {
        setLoading(true);

        const { name, email, photo, password } = formdata;

        const { data, error } = await authClient.signUp.email({
            email: email,
            password: password,
            name: name,
            image: photo
        })

        setLoading(false);

        // console.log({data, error})

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
            toast.success('Registration Successful', {
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

            router.push('/login')
        }
    };

    const handleGoogleSignin = async ()=> {
        await authClient.signIn.social({
            provider : 'google'
        })
    }


    return (
        <div className="min-h-screen flex items-center justify-center bg-[#0B0D0A] text-white px-4">


            <div className="absolute h-[400px] w-[400px] bg-[#C8F04B]/10 blur-[120px] rounded-full" />

            <div className="relative w-full max-w-md rounded-3xl border border-white/10 bg-white/5 backdrop-blur p-8">


                <h1 className="text-3xl font-bold text-center">
                    Create Account
                </h1>
                <p className="text-gray-400 text-center mt-2">
                    Join SportNest today
                </p>


                <form onSubmit={handleSubmit(onSubmit)} className="mt-8 space-y-4">

                    <div>
                        <input
                            type="text"
                            {...register("name", { required: "Name is required for Registration" })}
                            placeholder="Name"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        {errors.name && <p className="text-red-500 ">{errors.name.message}</p>}
                    </div>

                    <div>
                        <input
                            type="email"
                            {...register("email", { required: "Email is required for Registration" })}
                            placeholder="Email"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        {errors.email && <p className="text-red-500">{errors.email.message}</p>}
                    </div>

                    <div>
                        <input
                            type="text"
                            {...register("photo", { required: "Photo URL is required for Registration" })}
                            placeholder="Photo URL"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        {errors.photo && <p className="text-red-500 ">{errors.photo.message}</p>}
                    </div>

                    <div className="relative">
                        <input
                            type={showPassword ? "text" : "password"}
                            {...register("password", {
                                required: "Password is required for Registration",
                                pattern: {
                                    value: /^(?=.*[a-z])(?=.*[A-Z])[A-Za-z0-9]{8,}$/,
                                    message:
                                        "Must be 8+ chars, include uppercase, lowercase & number",
                                },
                            })}
                            placeholder="Password"
                            className="w-full p-3 rounded-xl bg-black/30 border border-white/10 outline-none focus:border-[#C8F04B]"
                        />
                        <span className="absolute right-5 top-4 text-white cursor-pointer" onClick={() => setShowPassword(!showPassword)}>{showPassword ? <FaEyeSlash /> : <FaEye />}</span>
                        {errors.password && <p className="text-red-500 text-center">{errors.password.message}</p>}
                    </div>

                    <button
                        type="submit"
                        disabled={loading}
                        className="cursor-pointer w-full bg-[#C8F04B] text-black font-bold py-3 rounded-xl disabled:opacity-40 hover:scale-[1.02] transition"
                    >
                        {loading ? <span className="loading loading-spinner loading-md"></span> : "Register"}
                    </button>
                </form>


                <button
                onClick={handleGoogleSignin}
                className="cursor-pointer mt-4 w-full border border-white/10 bg-white/5 py-3 rounded-xl hover:bg-white/10 transition">
                    Continue with Google
                </button>


                <div className="mt-6 text-center text-sm text-gray-400">
                    Already have an account?{" "}
                    <Link href="/login" className="text-[#C8F04B]">
                        Login
                    </Link>
                </div>

            </div>
        </div>
    );
};

export default RegistrationPage;