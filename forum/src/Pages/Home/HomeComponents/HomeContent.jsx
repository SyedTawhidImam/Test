
import { Link } from 'react-router-dom';

const HomeContent = () => {
    return (
        <div className='flex  w-[90%] mx-auto my-20'>



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
            <div className='w-full '>
                BLOGS
            </div>


            
        </div>
    );
};

export default HomeContent;