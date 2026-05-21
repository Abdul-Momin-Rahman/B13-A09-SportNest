'use client'

import { Button, Modal } from '@heroui/react';
import { redirect } from 'next/navigation';
import { useState } from 'react';
import { useForm } from "react-hook-form";

const EditFacilityModal = ({ facility }) => {



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [price, setPrice] = useState("");
    const [capacity, setCapacity] = useState("");



    const facilityId = facility._id;


    const onSubmit = async (formData) => {
        const updatedFacility = { ...formData }

        

        const res = await fetch(`http://localhost:5000/my-facilities/${facilityId}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" },
            body: JSON.stringify(updatedFacility)
        });

        const data = await res.json()

        if (data.modifiedCount > 0) {
            redirect('/my-facilities')
        }

        // console.log(updatedFacility)
    }

    const isNotValid = !name || !location || !price || !capacity;




    return (
        <div className="flex flex-wrap gap-4">

            <Modal>

                <Button
                    variant="ghost"
                    className="px-5   border border-[#C8F04B]/40  w-full bg-[#C8F04B] hover:bg-[#A8CC30] transition text-black font-semibold py-6 rounded-2xl"
                >
                    Edit
                </Button>

                <Modal.Backdrop variant="opaque">

                    <Modal.Container>

                        <Modal.Dialog className=" bg-[#121410] border border-white/10 shadow-2xl">

                            <Modal.CloseTrigger className="text-white/60 bg-[#121410]  hover:text-white" />


                            <Modal.Body className="bg-[#121410] p-1 ">

                                <form
                                    onSubmit={handleSubmit(onSubmit)}
                                    className="w-full max-w-2xl    p-1 rounded-xl space-y-4"
                                >
                                    <h1 className="text-4xl md:text-6xl font-black uppercase tracking-tight text-[#E8EDE3]">
                                        Edit Facility
                                    </h1>

                                    <label>Facility Name</label>
                                    <input
                                        {...register("name", { required: true })}
                                        value={name} onChange={(e) => setName(e.target.value)}
                                        placeholder={facility.name}
                                        className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                    />



                                    <label>Location</label>
                                    <input
                                        {...register("location", { required: true })}
                                        placeholder={facility.location}
                                        value={location} onChange={(e) => setLocation(e.target.value)}
                                        className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                    />

                                    <div className="flex gap-3 justify-between">

                                        <div className='flex gap-2 items-center'>
                                            <label>price/hr</label>
                                            <input
                                                {...register("price", { required: true })}
                                                type="number"
                                                value={price} onChange={(e) => setPrice(e.target.value)}
                                                placeholder={facility.price_per_hour}
                                                className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                            />
                                        </div>

                                        <div className='flex gap-2 items-center'>
                                            <label>Capacity</label>
                                            <input
                                                {...register("capacity", { required: true })}
                                                type="number"
                                                value={capacity} onChange={(e) => setCapacity(e.target.value)}
                                                placeholder={facility.capacity}
                                                className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        isDisabled={isNotValid}
                                        type="submit"
                                        className="cursor-pointer w-full bg-[#C8F04B] text-black font-semibold p-3 rounded hover:bg-[#A8CC30]"
                                        slot="close"
                                    >
                                        Edit Facility
                                    </Button>
                                </form>

                            </Modal.Body>



                        </Modal.Dialog>

                    </Modal.Container>

                </Modal.Backdrop>

            </Modal>

        </div>
    );
};

export default EditFacilityModal;