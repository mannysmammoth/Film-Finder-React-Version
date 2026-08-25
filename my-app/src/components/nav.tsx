import { FaFilm } from "react-icons/fa";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <section>
      <div className='flex justify-between text-center p-10 mx-40'>
        <div>
          <div className='mt-8'>
            <Link to={"/"}>
              <button className='text-yellow-300 text-3xl cursor-pointer font-bold link__hover--effect'>Home</button>
            </Link>
          </div>
        </div>
        <h1 className='text-yellow-300 text-8xl font-bold flex justify-center'>Film Finder<span className='rotate-20 mt-5 ml-2'><FaFilm /></span></h1>
        <div>
          <div className='mt-8'>
            <Link to={"/search"}>
              <button className='text-yellow-300 text-3xl cursor-pointer font-bold link__hover--effect'>Search</button>
            </Link>
          </div>
        </div>
      </div>    
    </section>
  );
};

export default Nav;