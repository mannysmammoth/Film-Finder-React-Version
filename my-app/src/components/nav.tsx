import { FaFilm } from "react-icons/fa";
import { Link, useLocation } from "react-router-dom";

function Nav() {
  const { pathname } = useLocation();
  const isLandingPage = pathname === "/";
  const isSearchPage = pathname === "/search";



  return (
    <section>
      <div className='flex justify-between text-center p-10 m-auto'>
        <div>
          <div className='mt-8 '>
            {!isLandingPage && (
              <Link to="/" className='text-yellow-300 text-3xl cursor-pointer font-bold  link__hover--effect home-querie'>
                Home  
              </Link>
            )}
          </div>
        </div>
        <h1 className='text-yellow-300 text-8xl font-bold flex justify-center title'>Film Finder<span className='rotate-20 mt-5 ml-2 film'><FaFilm /></span></h1>
        <div>
          <div className='mt-8 '>
            {!isSearchPage && (
              <Link to="/search" className='text-yellow-300 text-3xl cursor-pointer font-bold link__hover--effect search-querie'>
                Search
              </Link>
            )}
          </div>
        </div>
      </div>    
    </section>
  );
};

export default Nav;