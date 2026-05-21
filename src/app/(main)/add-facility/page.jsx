"use client";

import { authClient } from "@/lib/auth-client"
import { useState } from "react";
import { useForm } from "react-hook-form";
import { Bounce, toast } from "react-toastify";
import { useRouter } from "next/navigation";

export default function FacilityForm() {
    const [slots, setSlots] = useState([""]);
    const router = useRouter();

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user

    // console.log(user.email)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const addSlot = () => {
        setSlots([...slots, ""]);
    };

    const handleSlotChange = (index, value) => {
        const updated = [...slots];
        updated[index] = value;
        setSlots(updated);
    };

    const onSubmit = async (data) => {

        if (slots.every(s => !s.trim())) {
            toast.warning("At least one time slot is required");
            return;

        }
        const facility = {
            userId : user?.id,
            ...data,
            slots,
            email: user.email
        };




        // console.log(facility);

        const {data : tokenData } = await authClient.token()
        // console.log(tokenData)

        const res = await fetch('http://localhost:5000/add-facility', {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
                authorization : `Bearer ${tokenData?.token}`
            },

            body: JSON.stringify(facility)
        })

        const result = await res.json();

        if (result.acknowledged) {
            toast.success('Facility created successfully!', {
                position: "top-center",
                autoClose: 1000,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
                transition: Bounce,
            });
            router.push('/my-facilities')
        }
    };

    return (
        <div className=" bg-[#0B0D0A] flex items-center justify-center p-12">
            <form
                onSubmit={handleSubmit(onSubmit)}
                className="w-full max-w-2xl bg-[#121410] border border-[#1E2219] p-6 rounded-xl space-y-4"
            >
                <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#E8EDE3]">
                    Add Facility
                </h1>

                <input
                    {...register("name", { required: true })}
                    placeholder="Facility Name"
                    className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                />


                <input
                    {...register("type", { required: true })}
                    placeholder="Facility Type"
                    className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                />

                <input
                    {...register("location", { required: true })}
                    placeholder="Location"
                    className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                />

                <div className="flex gap-3">
                    <input
                        {...register("price", { required: true })}
                        type="number"
                        placeholder="Price / Hour"
                        className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                    />

                    <input
                        {...register("capacity", { required: true })}
                        type="number"
                        placeholder="Capacity"
                        className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                    />
                </div>

                <textarea
                    {...register("description", { required: true })}
                    placeholder="Description"
                    className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                />

                <div>
                    <div className="flex justify-between items-center mb-2">
                        <p className="text-[#9BA694]">Available Time Slots</p>

                        <button
                            type="button"
                            onClick={addSlot}
                            className="cursor-pointer text-sm px-3 py-1 bg-[#C8F04B]/80 text-[#1A1D18] rounded hover:bg-[#C8F04B]"
                        >
                            + Add Slot
                        </button>
                    </div>

                    {slots.map((slot, index) => (
                        <input
                            key={index}
                            value={slot}
                            onChange={(e) => handleSlotChange(index, e.target.value)}
                            placeholder="e.g. 10:00 - 12:00"
                            className="w-full mb-2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                        />
                    ))}
                </div>

                <input
                    {...register("image", { required: true })}
                    placeholder="Image URL (https://...)"
                    className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                />

                <button
                    type="submit"
                    className="cursor-pointer w-full bg-[#C8F04B] text-black font-semibold p-3 rounded hover:bg-[#A8CC30]"
                >
                    Create Facility
                </button>
            </form>
        </div>
    );
}