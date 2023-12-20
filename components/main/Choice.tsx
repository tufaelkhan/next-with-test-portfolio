import { FaCode } from "react-icons/fa";
import { MdDesignServices } from "react-icons/md";
import { BiSupport } from "react-icons/bi";
import { FaCreditCard } from "react-icons/fa6";
import { GiArchiveResearch } from "react-icons/gi"; 

function Choice() {
    return (
        <div className="md:pl-10 md:pr-10 bg-purple-100">
            <h1 className="text-3xl font-semibold text-center mb-5 text-cyan-700">Why Choice Me</h1>
            <h1 className="text-xl font-semibold text-center mb-8">Save your time with a lot of features</h1>
        <div className="bg-cyan-500 p-6 rounded-xl shadow-2xl grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="text-6xl ml-4"> <FaCode /></p>
                <p>Standard Code</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="text-6xl ml-6"> <MdDesignServices /></p>
                <p>Responsive Design</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="text-6xl ml-4"> <BiSupport /></p>
                <p>Quick Support</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="text-6xl ml-6"> <FaCreditCard /></p>
                <p>Easy to Customize</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="text-6xl ml-3"> <GiArchiveResearch /></p>
                <p>SEO Ranking</p>
            </div>
           
        </div>
        </div>
    );
};

export default Choice;