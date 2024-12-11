import { CiMail, CiPhone } from "react-icons/ci"
import { FaLocationPin } from "react-icons/fa6"


function Contactus() {
  return (
    <div className="w-full h-screen bg-cyan-400 p-4">
    <div className="w-full h-fit  flex flex-row py-3 mx-auto bg-white rounded-lg">
      <div className="bg-cyan-400 rounded-lg w-[300px] h-[450px]  px-6 mx-auto space-y-6  ">
        <h1 className="text-white text-2xl font-semibold mt-[100px]">
          Contact Information
        </h1>
        <p className="text-sm text-white w-[100%]">we'll create high-quality linkable content and build at least 40 high-authortiy</p>
        <div className="flex flex-row ">
          <CiPhone color="white" size={25} className="mt-3"/>
          <div className="flex flex-col text-white">
            <p>+45566666543</p>
            <p>+45566666543</p>
          </div>
        </div>
        <div className="flex flex-row text-white">
          <CiMail color="white" size={25} className=""/>
            <p>Support@shopfromteepha.com</p>
          </div>
          <div className="flex flex-row text-white">
          <FaLocationPin  size={25} className=""/>
            <p>Lagos,Nigeria</p>
          </div> 
      </div>
      <div className="w-[900px] bg-white rounded-lg mt-5 px-6 mx-auto  space-y-6">
        <form action="">
          <div className="flex flex-row gap-8 mt-[100px] py-8">
          <div className="flex flex-col">
            <label htmlFor="">Your Name</label>
            <input type="text"
            placeholder="Name"
            className="border-b border-gray-800 w-[300px]" />
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Your email</label>
            <input type="email"
            placeholder="shopfromteepha@gmail"
            className="border-b border-gray-800 w-[300px] outline-none" />
          </div>
          </div>
          <div className="flex flex-col">
            <label htmlFor="">Your Subject</label>
            <textarea 
            placeholder="I want to make enquiry for a bag that interest me"
            className="border-b border-gray-800 w-[630px] outline-none"
            rows={4}
            maxLength={200}
             />
          </div>
          <button className="w-[150px] p-2 bg-cyan-400 rounded-lg mt-[50px] text-white">Send Message</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Contactus