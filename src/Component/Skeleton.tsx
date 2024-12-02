const Skeleton = () => {
    return ( 
        <div className="border p-4 rounded-lg shadow-2xl w-[18%] mx-auto mt-[20px] max-w-[500px]">
            <div className="relative h-[200px] w-[200px] mb-4 flex justify-center items-center bg-gray-300 animate-pulse ">
                <svg
                className="w-10 h-10 text-gray-200 dark:text-gray-200"
                aria-hidden="true"
                xmlns='http://ww.w3.org./2000/svg'
                fill="currentColor"
                viewBox="0 0 20 18">
                <path d="M18 0H18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0 0-2-2h16a2 2 0 0 0"/>
                </svg>
            </div>
            <div className="h-4 bg-gray-300 rounded-full mb-4 "></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 "></div>
            <div className="h-3 bg-gray-300 rounded-full mb-3 "></div>
            
        </div>
    );
}
 
export default Skeleton;