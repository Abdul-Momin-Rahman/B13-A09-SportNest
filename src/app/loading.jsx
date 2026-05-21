export default function Loading() {
    return (
        <div className="min-h-screen bg-[#0A0D0A] flex items-center justify-center px-6">

            <div className="text-center">


                <div className="flex justify-center mb-6">
                    <div className="h-16 w-16 rounded-full border-4 border-white/10 border-t-[#C8F04B] animate-spin"></div>
                </div>


                <h1 className="text-3xl md:text-4xl font-black uppercase text-white tracking-wide">
                    Loading
                </h1>


                <p className="text-gray-400 mt-3 text-sm md:text-base max-w-md">
                    Preparing your facilities, bookings, and dashboard experience.
                </p>

            </div>

        </div>
    );
}