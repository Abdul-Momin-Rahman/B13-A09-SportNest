"use client";

import { redirect, useParams } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { Button, Modal } from "@heroui/react";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";

export default function BookingModal({ facility }) {

    const { id } = useParams();
    // console.log(id)

    const {
        data: session,
    } = authClient.useSession()

    const user = session?.user;
    // console.log(user)


    const [hours, setHours] = useState("");
    const [date, setDate] = useState("");
    const [slot, setSlot] = useState("");

    const isValid = date && hours && slot;

    const { name, price_per_hour, available_slots } = facility;


    const handleSubmit = async (e) => {
        e.preventDefault();

        if (!date || !hours || !slot) {
            alert("All fields are neccessary!")
            return;
        }

        const booking = {
            userId: user?.id,
            facilityName: name,
            date,
            slot,
            totalPrice: price_per_hour * Number(hours),
            status: "pending",
            email: user?.email
        }

        const { data: tokenData } = await authClient.token()
        console.log(tokenData)

        const result = await fetch(`http://localhost:5000/all-facilities/${id}`, {
            method: "POST",
            headers: {
                "content-type": "application/json",
                authorization : `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(booking)
        });

        const data = await result.json();
        // console.log(data)


        if (data.acknowledged) {
            toast.success(`${name} booked!`, {
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
            redirect('/my-bookings')
        }

    }

    return (
        <div className="flex flex-wrap gap-4">

            <Modal>

                <Button
                    variant="primary"
                    className="mt-5 w-full bg-[#C8F04B] hover:bg-[#A8CC30] transition text-black font-semibold py-6 rounded-2xl"
                >
                    Book Now
                </Button>

                <Modal.Backdrop variant="opaque">

                    <Modal.Container>

                        <Modal.Dialog className="max-w-2xl overflow-hidden border border-white/10 bg-[#0B0F19] shadow-2xl">

                            <Modal.CloseTrigger className="text-white/60 bg-[#121410] hover:text-white" />


                            <Modal.Body className="bg-[#0B0F19] p-2">

                                <form onSubmit={handleSubmit} className="space-y-5">


                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Facility Name
                                        </label>


                                        <p className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none">
                                            {
                                                name
                                            }
                                        </p>
                                    </div>


                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Booking Date
                                        </label>

                                        <input
                                            name="date"
                                            value={date} onChange={(e) => setDate(e.target.value)}
                                            type="date"
                                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B] focus:ring-2 focus:ring-[#C8F04B]/20 [&::-webkit-calendar-picker-indicator]:invert"
                                        />
                                    </div>


                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Time Slot
                                        </label>

                                        <select
                                            name="slot"
                                            value={slot} onChange={(e) => setSlot(e.target.value)}
                                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B] focus:ring-2 focus:ring-[#C8F04B]/20"
                                        >
                                            <option value="">Select slot</option>
                                            {
                                                available_slots.map((slot, index) => <option key={index}>{slot}</option>)
                                            }

                                        </select>
                                    </div>


                                    <div>
                                        <label className="mb-2 block text-sm font-medium text-gray-300">
                                            Hours
                                        </label>

                                        <input
                                            name="hours"
                                            type="number"
                                            value={hours}
                                            onChange={(e) => setHours(e.target.value)}
                                            min="1"
                                            max="8"
                                            placeholder="Enter booking hours"
                                            className="w-full rounded-2xl border border-white/10 bg-black/20 px-4 py-3 text-white outline-none transition focus:border-[#C8F04B] focus:ring-2 focus:ring-[#C8F04B]/20"
                                        />
                                    </div>


                                    <div className="rounded-2xl border border-[#C8F04B]/20 bg-[#C8F04B]/10 p-5">

                                        <div className="flex items-center justify-between">

                                            <div>
                                                <p className="text-sm text-gray-300">
                                                    Total Price
                                                </p>

                                                <h3 className="mt-1 text-3xl font-bold text-[#C8F04B]">
                                                    ৳ {price_per_hour * hours}
                                                </h3>
                                            </div>

                                            <div className="rounded-full bg-[#C8F04B]/20 px-4 py-2 text-sm font-medium text-[#C8F04B]">
                                                {hours} Hours
                                            </div>

                                        </div>

                                    </div>

                                    <button
                                        disabled={!isValid}
                                        type="submit"
                                        className={`w-full rounded-2xl ${isValid ? 'bg-[#C8F04B] transition hover:scale-[1.02] hover:shadow-lg hover:shadow-[#C8F04B]/20' : 'bg-[#C8F04B]/20'} py-3 text-base font-bold text-black  cursor-pointer`}
                                    >
                                        Confirm Booking
                                    </button>

                                </form>

                            </Modal.Body>



                        </Modal.Dialog>

                    </Modal.Container>

                </Modal.Backdrop>

            </Modal>

        </div>
    );
}