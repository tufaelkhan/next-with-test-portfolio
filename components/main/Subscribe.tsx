
function Subscribe() {
    return (
        <div className="pb-10">
        <div className="bg-purple-100 pt-16 p-7">
            <h1 className="text-3xl font-semibold text-center mb-5 text-cyan-700">For My Latest Update</h1>
            <h1 className="text-xl font-semibold text-center mb-4">Subscribe For Weekly News Letter</h1>
            
        </div>
        <div className="md:flex font-semibold bg-purple-100 pb-8">
        <input className="pt-3 pb-3 pl-5 border-2 border-cyan-400 md:w-1/4 md:ml-96 rounded-3xl mr-5" placeholder="example@gmail.com" type="text" />
        <input className="pt-3 pb-3 pl-4 pr-4 border-2 border-cyan-400 rounded-3xl hover:bg-purple-600 hover:text-white duration-500" placeholder="example@gmail.com" type="submit" />
        </div>
        </div>
    );
};

export default Subscribe;