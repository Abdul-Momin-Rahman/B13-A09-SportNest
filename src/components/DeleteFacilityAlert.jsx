"use client";
import { authClient } from "@/lib/auth-client";
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { Bounce, toast } from "react-toastify";


export function DeletFacilityAlert({ facilityId }) {

    const [loading, setaLoading] = useState(false);

    const router = useRouter();

    // console.log(facilityId)

    const handeleDeleteFacility = async () => {

        setaLoading(true)

        const { data: tokenData } = await authClient.token()
        // console.log(tokenData)

        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/my-facilities/${facilityId}`, {
            method: "DELETE",
            headers: {
                'content-type': 'application/json',
                authorization: `Bearer ${tokenData?.token}`
            }
        })

        const data = await res.json();
        // console.log(data)

        setaLoading(false)

        if (data.deletedCount > 0) {

            toast.info('Facility Deleted!', {
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
            router.refresh();
        }

    }

    return (
        <AlertDialog
            className="relative sm:max-w-[400px] rounded-3xl border border-[#1E2219] bg-[#121410] text-[#E8EDE3] shadow-2xl shadow-black/40">

            {loading && (
                <div className="absolute inset-0 z-50 flex items-center justify-center rounded-3xl bg-[#121410]/80 backdrop-blur-sm">
                    <div className="flex flex-col items-center gap-4">
                        <div className="h-14 w-14 animate-spin rounded-full border-4 border-[#2A2E28] border-t-[#FF4D4D]" />

                        <div className="text-center">
                            <p className="text-sm font-semibold tracking-wide text-[#E8EDE3]">
                                Deleting Facility...
                            </p>

                            <p className="mt-1 text-xs text-[#9BA694]">
                                Please wait a moment
                            </p>
                        </div>
                    </div>
                </div>
            )}


            <Button variant="ghost" className="h-12 px-6 py-2 rounded-xl border border-red-500/40 text-red-400 hover:bg-red-500/10 transition-all duration-300 font-semibold">
                Delete
            </Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog
                        className="sm:max-w-[400px] rounded-3xl border border-[#1E2219] bg-[#121410] text-[#E8EDE3] shadow-2xl shadow-black/40"
                    >
                        <AlertDialog.CloseTrigger />

                        <AlertDialog.Header className="border-b border-[#1E2219] pb-5">
                            <div className="flex items-center gap-4">
                                <div className="flex h-14 w-14 items-center justify-center rounded-2xl border border-[#FF4D4D40] bg-[#FF4D4D15]">
                                    <AlertDialog.Icon status="danger" className="text-[#FF4D4D]" />
                                </div>

                                <div>
                                    <AlertDialog.Heading className="text-2xl font-black uppercase tracking-wide text-[#E8EDE3]">
                                        Confirm Delete Facility
                                    </AlertDialog.Heading>

                                    <p className="mt-1 text-sm text-[#9BA694]">
                                        This action cannot be undone.
                                    </p>
                                </div>
                            </div>
                        </AlertDialog.Header>

                        <AlertDialog.Footer className="mt-6 flex gap-3">
                            <Button
                                slot="close"
                                variant="tertiary"
                                className="flex-1 rounded-2xl border border-[#2A2E28] bg-[#1A1D18] text-[#9BA694] hover:bg-[#2A2E28] hover:text-[#E8EDE3] transition-all duration-300"
                            >
                                Back
                            </Button>

                            <Button
                                onClick={handeleDeleteFacility}
                                slot="close"
                                variant="danger"
                                className="flex-1 rounded-2xl border border-[#FF4D4D40] bg-[#FF4D4D15] text-[#FF4D4D] hover:bg-[#FF4D4D] hover:text-white transition-all duration-300"
                            >
                                Delete Facility
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
}