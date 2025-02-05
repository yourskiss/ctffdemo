import { Link } from 'react-router-dom';
import { useState } from 'react';

import featured1 from "./../assets/images/featured_1.svg"
import featured2 from "./../assets/images/featured_2.svg"
import featured3 from "./../assets/images/featured_3.svg"
const data = [
    {
        id:1,
        title: 'Explore Fly Fishing',
        description:'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
        url:'/aboutus',
        label:'Learn more',
        image:featured1
    },
    {
        id:2,
        title: 'Fly Fishing Experiences',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url:'/aboutus',
        label:'Learn more',
        image:featured2
    },
    {
        id:3,
        title: 'Gear Up and Catch More',
        description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry.',
        url:'/aboutus',
        label:'Learn more',
        image:featured3
    },
]


export default function Featured() {
    const[isactive, setIsactive] = useState(1);
    const toggleclick = (val) => {
        setIsactive(val);
    }
    

  return (<section className="w-full bg-tan-lighter py-40 lg:py-80 flex justify-center items-start">
    <div className="w-full sm:max-w-[400px] lg:max-w-[1024px] py-8 px-16 lg:px-0">
        <h2 className="w-full mb-32 hidden lg:block heading-medium text-neutral-90">
            Featured options
        </h2>
        <h2 className="w-full mb-20 block lg:hidden heading-default text-neutral-90">
            Featured options
        </h2>
        {
            data.map((item)=>(
                <div key={item.id} className='w-full'>
                    <div className='hidden lg:block'>
                        <aside className={`body-medium text-neutral-90 py-8 border-b-[1px] border-neutral-40 ${isactive === item.id ? 'activeted' : 'noactived'} `} onClick={()=>toggleclick(item.id)}>{item.title}</aside>
                        { isactive === item.id ?
                        <section className='w-full flex justify-between items-center'>
                            <aside className='w-full lg:w-[400px] lg:mr-5'>
                                <img className='w-full' src={item.image} alt={item.title} / >
                            </aside>
                            <div className='w-full lg:w-[580px] gap-y-8 flex flex-stat items-start flex-col'>
                                <h2 className='heading-small text-neutral-90'>
                                    {item.title}
                                </h2>
                                <p className='body-medium text-neutral-60'>
                                    {item.description}
                                </p>
                                <aside>
                                    <Link to={item.url} className="body-default text-left text-neutral-90 bg-neutral-10 px-8 py-4 rounded-[4px]">
                                        {item.label}
                                    </Link>
                                </aside>
                            </div>
                        </section>
                        : '' }
                    </div>
                    <div className='w-full flex lg:hidden justify-center items-center relative my-16'>
                        <img className='w-full lg:mr-5 opacity-20' src={item.image} alt={item.title} / >
                        <div className='w-full h-full p-24 gap-y-8 flex justify-center items-start flex-col absolute top-0 left-0'>
                            <h2 className='heading-small text-neutral-90'>
                                {item.title}
                            </h2>
                            <p className='body-medium text-neutral-60'>
                                {item.description}
                            </p>
                            <aside>
                                <Link to={item.url} className="body-default text-left text-neutral-90 bg-neutral-10 px-8 py-4 rounded-[4px]">
                                    {item.label}
                                </Link>
                            </aside>
                        </div>
                    </div>
                </div>
            ))
        }
 
</div>
</section>)}
