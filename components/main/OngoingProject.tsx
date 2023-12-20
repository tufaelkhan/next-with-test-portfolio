import { SlCalender } from "react-icons/sl";
import { AiTwotoneProject } from "react-icons/ai";
import { MdOutlineIncompleteCircle } from "react-icons/md";
import { FaUserSecret } from "react-icons/fa";
import { FaHospitalUser } from "react-icons/fa";

function OngoingProject() {
    return (
        <div className="md:pl-10 md:pr-10 bg-purple-100">
        <div className="bg-cyan-900 p-6 rounded-xl shadow-2xl grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="flex items-center"> <span className="text-3xl mr-3"><SlCalender /></span><span className="text-5xl font-semibold">10+</span></p>
                <p>Work Experience</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="flex items-center"> <span className="text-3xl mr-3"><AiTwotoneProject /></span><span className="text-5xl font-semibold">8+</span></p>
                <p>Ongoing Project</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="flex items-center"> <span className="text-3xl mr-3"><MdOutlineIncompleteCircle /></span><span className="text-5xl font-semibold">30+</span></p>
                <p>Complete Project</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="flex items-center"> <span className="text-3xl mr-3"><FaUserSecret /></span><span className="text-5xl font-semibold">100+</span></p>
                <p>Client</p>
            </div>
            <div className="text-white hover:text-cyan-300 duration-500">
                <p className="flex items-center"> <span className="text-3xl mr-3"><FaHospitalUser /></span><span className="text-5xl font-semibold">50+</span></p>
                <p>Happy Client</p>
            </div>
        </div>
        </div>
    );
};

export default OngoingProject;