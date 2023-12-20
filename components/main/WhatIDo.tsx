import { TbWorldSearch } from "react-icons/tb";
import { GoArrowUpRight } from "react-icons/go";
import { BsClipboardDataFill } from "react-icons/bs";
import { TbBrandCodesandbox } from "react-icons/tb";
import { TbCode } from "react-icons/tb";

function WhatIDo() {

    return (
        <div className="bg-purple-100 pt-16 p-7">
            <h1 className="text-3xl font-semibold text-center mb-5 text-cyan-700">What I Do?</h1>
            <h1 className="text-xl font-semibold text-center mb-8">Empowering Excellence: Unleashing the Power of Skills for Success!</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 mt-4">

            <div className="p-5 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
            <TbWorldSearch className="text-4xl " />
            <h1 className="text-3xl text-cyan-600 font-semibold mt-4 mb-4">SEO Marketing</h1>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">White hat SEO</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Black hat SEO</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Gray hat SEO</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Negative SEO</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">On-page SEO</span></p>
            </div>

            <div className="p-5 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
            <BsClipboardDataFill className="text-4xl " />
            <h1 className="text-3xl text-cyan-600 font-semibold mt-4 mb-4">Data Analysis</h1>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Diagnostic Analysis</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Predictive Analysis</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Prescriptive Analysis</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Risk Assessment</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Sales Forecasting
</span></p>
            </div>

            <div className="p-5 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
            <TbBrandCodesandbox className="text-4xl " />
            <h1 className="text-3xl text-cyan-600 font-semibold mt-4 mb-4">Brand Identity</h1>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Brand Architecture</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Brand Authenticity</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Brand Awareness</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Brand Management</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Brand Metrics
</span></p>
            </div>

            <div className="p-5 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
            <TbCode className="text-4xl " />
            <h1 className="text-3xl text-cyan-600 font-semibold mt-4 mb-4">Development</h1>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">HTML/CSS</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">TailwindCSS</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">JavaScript</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">React.js</span></p>
            <p className="flex items-center mb-3"><span className="mr-2"><GoArrowUpRight /></span><span className="text-gray-800">Angular.js
</span></p>
            </div>

            </div>

        </div>
    );
};

export default WhatIDo;