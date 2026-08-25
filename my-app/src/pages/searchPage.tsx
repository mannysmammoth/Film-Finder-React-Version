import Nav from "../components/nav";
import Footer from "../components/footer";
import { FaMagnifyingGlass } from "react-icons/fa6";

let currentSearchResults=[];



function SearchPage() {
  return (
    <section>
      <div>    
        <Nav />
      </div>
      <div className='text-center'>
        <h2 className='text-white text-4xl font-bold mt-25'>Take a Look<span className='absolute ml-1'><FaMagnifyingGlass /></span></h2>    
      </div>
      <div className='flex justify-center mt-7'>
        <input type="text" placeholder="Search for a movie/show..." className='text-3xl text-gray-300 border-4 border-yellow-300 rounded-xl p-1 min-w-120'/>
        <button className='
          ml-5 
          text-3xl 
          border-4 
          rounded-4xl 
          border-yellow-300 
          px-5 
          yellow-button
          button-transform
          scale-100 
          hover:scale-110
          '>Search</button>
      </div>
      <div className='m-10'>
        <h2 className='text-white text-5xl font-bold mt-30'>Sort by:</h2>
        <select className='text-yellow-300 min-w-50 mt-4'>
          <option value="" disabled selected>Sort</option>
          <option value="movie">Movie</option>
          <option value="TV">TV Show</option>
          <option value="year__newest_to_oldest">Year, Recent to Older</option>
          <option value="year__oldest_to_newest">Year, Older to Recent</option>    
        </select>
      </div>
      <div className='m-10'>
        <h2 className='text-white text-5xl font-bold mt-30'>Results:</h2>
      </div>
      <div>
        <Footer />
      </div>
    </section>
    
  );
};

export default SearchPage;