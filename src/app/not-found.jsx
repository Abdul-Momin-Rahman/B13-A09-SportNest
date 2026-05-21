import Link from "next/link";

export default function NotFound() {
    return (
        <div className="min-h-screen bg-[#0A0D0A] flex items-center justify-center px-6">

            <div className="max-w-xl w-full text-center border border-white/10 bg-[#0F1310] rounded-3xl p-10">


                <div className="text-7xl mb-6">
                    🏟️
                </div>


                <p className="text-[#C8F04B] uppercase tracking-[0.3em] text-xs font-semibold">
                    404 Error
                </p>


                <h1 className="mt-3 text-4xl md:text-5xl font-black text-white uppercase leading-tight">
                    Page Not Found
                </h1>


                <p className="mt-5 text-gray-400 text-sm md:text-base leading-relaxed">
                    The page you are looking for does not exist or may have been moved.
                    Explore facilities, manage bookings, or head back to the homepage.
                </p>


                <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center">

                    <Link href="/">
                        <button className="cursor-pointer w-full sm:w-auto rounded-2xl bg-[#C8F04B] px-6 py-3 font-semibold text-black hover:scale-[1.03] transition">
                            Back To Home
                        </button>
                    </Link>

                    <Link href="/all-facilities">
                        <button className="cursor-pointer w-full sm:w-auto rounded-2xl border border-white/10 bg-white/5 px-6 py-3 font-semibold text-white hover:bg-white/10 transition">
                            Browse Facilities
                        </button>
                    </Link>

                </div>

            </div>

        </div>
    );
}