/* eslint-disable @next/next/no-img-element */


function TrustedCompany() {
    return (
        <div className="bg-purple-100 pt-16 p-7">
            <h1 className="text-3xl font-semibold text-center mb-5 text-cyan-700">Work with Trusted Company</h1>
            <h1 className="text-xl font-semibold text-center mb-8">Collaborate. Innovate. Elevate: Working Together for a Brighter Future.</h1>
            <div className="grid sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-5 gap-y-5 mt-4">

            <div className="p-2 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
           <img className="rounded-2xl animate-pulse" src="https://t3.ftcdn.net/jpg/05/05/94/08/360_F_505940885_kmTN2GvEUmdY0uylOR5bAaEgTRVXUndm.jpg" alt="google/image" />
           <h1 className="text-2xl font-semibold text-center mb-2 mt-2 text-gray-700 hover:text-gray-900">Google</h1>
            </div>

            <div className="p-2 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
           <img className="rounded-2xl animate-pulse" src="https://c8.alamy.com/comp/DDH6GR/an-office-building-occupied-by-adobe-systems-DDH6GR.jpg" alt="google/image" />
           <h1 className="text-2xl font-semibold text-center mb-2 mt-2 text-gray-700 hover:text-gray-900">Adobe</h1>
            </div>

            <div className="p-2 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
           <img className="rounded-2xl animate-pulse" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRIzlbq1bJs7Cw0ZW0dVN9hrG-3pPyQdUtBjWDczZWGvg&s" alt="google/image" />
           <h1 className="text-2xl font-semibold text-center mb-2 mt-2 text-gray-700 hover:text-gray-900">Facebook</h1>
            </div>

            <div className="p-2 bg-gray-200 font-semibold hover:border-2 hover:border-purple-500 duration-500 rounded-2xl shadow-2xl">
           <img className="rounded-2xl animate-pulse" src="https://techcrunch.com/wp-content/uploads/2013/07/intel.jpg" alt="google/image" />
           <h1 className="text-2xl font-semibold text-center mb-2 mt-2 text-gray-700 hover:text-gray-900">Intel</h1>
            </div>


            </div>

        </div>
    );
};

export default TrustedCompany;