import App from "./app"
export default function Home() {
  return (
    
    <div>
       <div className='header flex justify-center bg-black text-white p-6 w-full text-3xl font-bold'>
      <h1 className='text-center text-[20px]'>100 DAYS OF CODE WITH NONYDEV</h1>

     
      </div>

       <div className='project project-header text-xl font-bold justify-between uppercase bg-yellow-400 flex'>
         <h3 className='md:m-4 m-1 text-sm'>Title: color flipper</h3>
         <h3 className='md:m-4 m-1 text-sm'>Duration: 25th January, 2026 - 3rd February,2026</h3>
      </div>

      <App/>
    </div>

  );
}


