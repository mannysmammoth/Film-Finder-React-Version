import { Link } from "react-router-dom";
import { FaBan } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className='flex flex-col text-center p-50 '>
      <h1 className='text-red-500 mb-3 text-7xl shadow-2xl shadow-red-500'>Page Not Found<span className='absolute  ml-6'><FaBan /></span></h1>
      <Link to={"/"}>
        <button className='text-yellow-300 border-6 rounded-4xl p-4 mt-20 text-3xl second-button-transform'>Go Back Home</button>
      </Link>      
    </div>
  );
};

export default NotFoundPage;