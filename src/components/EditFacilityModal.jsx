'use client'

import { authClient } from '@/lib/auth-client';
import { Button, Modal } from '@heroui/react';
import { redirect } from 'next/navigation';
import { useForm } from "react-hook-form";

const EditFacilityModal = ({ facility }) => {



    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();





    const facilityId = facility._id;


    const onSubmit = async (formData) => {
        const updatedFacility = { ...formData }

        
        const {data : tokenData } = await authClient.token()
        // console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${facilityId}`, {
            method: "PATCH",
            headers: { "content-type": "application/json" ,
                authorization : `Bearer ${tokenData?.token}`
            },
            body: JSON.stringify(updatedFacility)
        });

        const data = await res.json()

        if (data.modifiedCount > 0) {
            redirect('/my-facilities')
        }

        // console.log(updatedFacility)
    }

    // const isNotValid = !name || !location || !price || !capacity;




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

                                    
                                    <input
                                        {...register("name", { required: true })}
                                       
                                        placeholder="Facility Name"
                                        defaultValue={facility?.name}
                                        className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                    />



                                    
                                    <input
                                        {...register("location", { required: true })}
                                        placeholder="Location"
                                        defaultValue={facility?.location}
                                        
                                        className="w-full p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                    />

                                    <div className="flex gap-3 justify-between">

                                        <div className='flex gap-2 items-center'>
                                            
                                            <input
                                                {...register("price", { required: true })}
                                                type="number"
                                                
                                                placeholder="price/hr"
                                                defaultValue={facility?.price_per_hour}
                                                className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                            />
                                        </div>

                                        <div className='flex gap-2 items-center'>
                                            
                                            <input
                                                {...register("capacity", { required: true })}
                                                type="number"
                                                
                                                placeholder="Capacity"
                                                defaultValue={facility?.capacity}
                                                className="w-1/2 p-3 bg-[#1A1D18] text-[#E8EDE3] border border-[#1E2219] rounded"
                                            />
                                        </div>
                                    </div>

                                    <Button
                                        // isDisabled={isNotValid}
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