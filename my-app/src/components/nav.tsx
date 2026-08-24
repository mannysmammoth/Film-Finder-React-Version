import { FaFilm } from "react-icons/fa";

function Nav() {
  return (
    <section>
      <div className='flex justify-between text-center p-10 mx-40'>
        <div>
          <div className='mt-8'>
            <a href="" className='text-yellow-300 text-3xl cursor-pointer font-bold '>Home</a>
          </div>
        </div>
        <h1 className='text-yellow-300 text-8xl font-bold flex justify-center'>Film Finder<span className='rotate-20 mt-5 ml-2'><FaFilm /></span></h1>
        <div>
          <div className='mt-8'>
            <a className='text-yellow-300 text-3xl cursor-pointer font-bold'>Search</a>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default Nav;