/* eslint-disable @next/next/no-img-element */
import { FaAngleDoubleRight } from "react-icons/fa";

function BlogPost() {
    return (
        <div className="bg-purple-100 pt-16 p-7">
            <h1 className="text-3xl font-semibold text-center mb-5 text-cyan-700">Latest Blog</h1>
            <h1 className="text-xl font-semibold text-center mb-8">Exploring Ideas, Igniting Insights: Your Gateway to a World of Knowledge and Inspiration.</h1>
            
            <div className="md:flex items-center justify-between md:h-60 lg:mb-5">
                <div>
                <img src="https://pluralsight.imgix.net/paths/path-icons/c-plus-plus-93c7ddd5cc.png" alt="c++/programming language" />
                </div>
                <div>
                    <p className="text-lg mb-3">Programming, C++ 20-December-2023</p>
                <h1 className="text-2xl font-semibold ">Exploring Ideas, Igniting Insights: Your Gateway to a World of Knowledge and Inspiration.</h1>
                </div>
                <div>
                <p className="flex w-24 mt-5 items-center bg-cyan-400 p-3 rounded-3xl hover:bg-cyan-600"><span className="text-gray-800 font-semibold mr-2">read</span><span className=""><FaAngleDoubleRight /></span></p>
                </div>

            </div>
            <div className="md:flex items-center justify-between md:h-60 lg:mb-4">
                <div>
                <img className="h-60" src="https://www.freecodecamp.org/news/content/images/2023/04/JavaScript-Blog-Cover.png" alt="c++/programming language" />
                </div>
                <div>
                    <p className="text-lg mb-3">Programming.JavaScript 20-December-2023</p>
                <h1 className="text-2xl font-semibold ">Exploring Ideas, Igniting Insights: Your Gateway to a World of Knowledge and Inspiration.</h1>
                </div>
                <div>
                <p className="flex w-24 mt-5 items-center bg-cyan-400 p-3 rounded-3xl hover:bg-cyan-600"><span className="text-gray-800 font-semibold mr-2">read</span><span className=""><FaAngleDoubleRight /></span></p>
                </div>

            </div>
            <div className="md:flex items-center justify-between md:h-60 lg:mb-4">
                <div>
                <img className="h-60" src="https://images.ctfassets.net/23aumh6u8s0i/1IKVNqiLhNURzZXp652sEu/4379cfba19f0e19873af6074d3017f70/csharp" alt="c++/programming language" />
                </div>
                <div className="md:ml-16">
                    <p className="text-lg mb-3">Programming 20-December-2023</p>
                <h1 className="text-2xl  font-semibold ">Exploring Ideas, Igniting Insights: Your Gateway to a World of Knowledge and Inspiration.</h1>
                </div>
                <div>
                <p className="flex w-24 mt-5 items-center bg-cyan-400 p-3 rounded-3xl hover:bg-cyan-600"><span className="text-gray-800 font-semibold mr-2">read</span><span className=""><FaAngleDoubleRight /></span></p>
                </div>

            </div>
        </div>
    );
};

export default BlogPost;