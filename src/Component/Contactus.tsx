import { CiMail, CiPhone } from "react-icons/ci"
import { FaLocationPin } from "react-icons/fa6"




function Contactus() {
  return (
    <div className="w-full h-screen p-4 ">
      <div>
      <h1 className="text-center text-4xl font-semibold">Contact US</h1>
      <p className="text-center text-sm mt-2 px-[300px] mb-4 space-y-5 ">Lorem ipsum dolor sit amet consectetur, adipisicing elit.  perferendis inventore provident, eum sint vel sapiente esse debitis ipsa suscipit minus? Dicta quidem quia perferendis expedita porro ipsam ipsa illum aspernatur accusamus dolore?</p>
    
      </div>
      <div className="w-full h-fit  flex flex-row py-3 mx-aut rounded-lg">
      <div className="rounded-lg w-[500px] h-[450px]  px-6 mx-auto space-y-6  ">
        <h1 className=" text-3xl font-semibold mt-[100px]">
          Get In Touch
        </h1>
        <p className="text-sm text-black w-[100%]">we'll create high-quality linkable content and build at least 40 high-authortiy</p>
        <div className="flex flex-row items-center ">
          <CiPhone color="" size={25} className="mt-1"/>
          <div className="flex flex-col ">
            <p>+45566666543</p>
            {/* <p>+45566666543</p> */}
          </div>
        </div>
        <div className="flex flex-row ">
          <CiMail color="" size={25} className="text-black"/>
            <p>Support@shopfromteepha.com</p>
          </div>
          <div className="flex flex-row">
          <FaLocationPin  size={25} color="" className="text-black"/>
            <p>Lagos,Nigeria</p>
          </div> 
      </div>
      <div className="w-[600px] h-[400px] bg-[#deb5de]  rounded-lg  px-6 mx-auto space-y-3">
        <form action="" >
          {/* <div className="flex flex-row gap-8 mt-[100px] py-8"> */}
          <div className="flex flex-col mt-[20px] py-8 ">
            <input type="text"
            placeholder="Name"
            className="border-b border-gray-800 w-[400px] bg-[#deb5de] text-white" />
          </div>
          <div className="flex flex-col">
            <input type="email"
            placeholder="Email"
            className="border-b border-gray-800 w-[400px] outline-none bg-[#deb5de] text-white" />
          </div>
          {/* </div> */}
          <div className="flex flex-col">
            <textarea 
            placeholder="Message"
            className="border-b border-gray-800 w-[400px] outline-none pt-[10px] bg-[#deb5de] text-white"
            rows={4}
            maxLength={200}
             />
          </div>
          <button className="w-[120px] p-2  rounded-full mt-3 text-white">Submit</button>
        </form>
      </div>
    </div>
    {/* <GeoLocation/> */}
    
    </div>
  )
}

export default Contactus