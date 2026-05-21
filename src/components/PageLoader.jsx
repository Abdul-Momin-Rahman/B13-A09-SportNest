export default function PageLoader({ text = "Loading..." }) {
    return (
        <div className="min-h-screen bg-[#0A0D0A] flex items-center justify-center">
            <div className="text-center">
                <div className="h-12 w-12 mx-auto rounded-full border-4 border-white/10 border-t-[#C8F04B] animate-spin" />
                <p className="text-gray-400 mt-4 text-sm">{text}</p>
            </div>
        </div>
    );
}