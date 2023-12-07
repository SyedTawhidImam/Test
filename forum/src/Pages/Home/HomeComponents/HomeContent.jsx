
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Blog from './Blog';

const HomeContent = () => {
    const [data, setData]=useState([])
    useEffect(()=>{
        fetch("/data.json")
        .then(res => res.json())
        .then(data => setData(data[0].blogs))
    },[])
    return (
        <div className='flex  w-[90%] mx-auto my-20 gap-14 max-w-[1200px]'>



            {/* Categories section */}
            <div className='w-[30%] flex flex-col gap-5'>
                <div className='bg-[#B68C5A] text-5xl font-semibold text-white p-7 rounded-md'>
                    <h1>Categories</h1>
                </div>
                <ul className='bg-[#F3F3F3] flex flex-col gap-5 p-7 rounded-md'>
                    <li className='bg-white font-semibold p-3 rounded-md'><Link>UI/UX DESIGN</Link></li>
                    <li className='bg-white font-semibold p-3 rounded-md'><Link>SOFTWARE ENGINEERING</Link></li>
                    <li className='bg-white font-semibold p-3 rounded-md'><Link>FRONT END-DEVELOPER</Link></li>
                    <li className='bg-white font-semibold p-3 rounded-md'><Link>FULL STACK WEB DEVELOPER</Link></li>
                    <li className='bg-white font-semibold p-3 rounded-md'><Link>DATA ANALYSIS</Link></li>
                </ul>
            </div>
            
            
            
            {/* Blog section */}
            <div className='w-full flex flex-col gap-5'>
                {
                    data.map((d,idx)=> <Blog key={idx} content={d}></Blog>)
                }
            </div>



        </div>
    );
};

export default HomeContent;