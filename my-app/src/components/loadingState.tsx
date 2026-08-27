import { FaArrowRotateRight } from "react-icons/fa6";

function Loading() {
    return (
      <section>
        <div className='text-center p-50'>
          <span className='text-white text-9xl arrow-rotate'>
            <FaArrowRotateRight />
          </span>      
        </div>  
      </section>    
    );
};

export default Loading;