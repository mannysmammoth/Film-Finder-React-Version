import { Link } from "react-router-dom";
import { FaBan } from "react-icons/fa";

function NotFoundPage() {
  return (
    <div className='flex flex-col text-center p-50 '>
      <h1 className='text-red-500 mb-3 text-7xl'>Page Not Found<span className='absolute mt-1 ml-6'><FaBan /></span></h1>
      <Link to={"/"}>
        <button className='text-yellow-300 border-6 rounded-4xl p-4 mt-6 text-3xl'>Go Back Home</button>
      </Link>      
    </div>
  );
};

export default NotFoundPage;