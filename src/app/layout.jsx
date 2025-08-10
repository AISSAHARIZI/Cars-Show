import "./globals.css";
import Header from './cmntHome/Header'
import Footer from "./cmntHome/Footer";



export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body
        className={` relative `}
      >
        <div className=" w-[90%] mx-auto">
           <Header/>
        </div>
        <div className="">
           {children}
        </div>
        <div className=" w-[90%] mx-auto">
          <Footer/>
        </div>
        
      </body>
    </html>
  );
}
