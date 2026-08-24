import { FaClapperboard } from "react-icons/fa6";

function Home() {
  return (
    <section>
      <div className='flex flex-col text-center max-w-255 mx-auto space-y-8'>
        <p className='text-3xl text-white'>Welcome to <span className='text-yellow-300'>Film Finder</span> a simple and straightforward way to find information a movie and or tv series you are looking for.</p>
        <p className='text-4xl text-white'>Give it a try!</p>  
      </div>
      <div>
        <div className='
         bg-yellow-300 
         w-0 
         h-0 
         border-l-10 
         border-l-transparent 
         border-r-10 
         border-r-transparent 
         border-t-10 
         border-t-yellow-300 
         mx-auto
         bouncing'>
        </div>
        <div className='flex justify-center mt-4'><span className='text-yellow-300 text-9xl'><FaClapperboard /></span></div>
      </div>      
    </section>
  );    
};

export default Home;