import { Barlow_Condensed, DM_Sans } from 'next/font/google'
import "./globals.css";
import { ToastContainer } from 'react-toastify';


const barlowCondensed = Barlow_Condensed({
  subsets: ['latin'],
  weight: ['700', '800', '900'],
  variable: '--font-display',
})

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500'],
  variable: '--font-body',
})

export const metadata = {
  title: "SportNest",
  description: "Sports Facility Booking Management System ",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      data-theme="light"
      className={`${barlowCondensed.variable} ${dmSans.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}<ToastContainer /></body>
    </html>
  );
}
