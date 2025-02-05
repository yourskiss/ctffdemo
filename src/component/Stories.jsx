import { Link } from 'react-router-dom';

import stories1 from "./../assets/images/stories_1.svg"
import stories2 from "./../assets/images/stories_2.svg"
import stories3 from "./../assets/images/stories_3.svg"
import stories4 from "./../assets/images/stories_4.svg"

const data = [
    {
        id:1,
        title: "John's Story",
        description:'Non arcu risus quis varius quam quisque. Ornare suspendisse sed nisi lacus. Eu feugiat pretium nibh ',
        url:'/contact',
        label:'Read more',
        image:stories1
    },
    {
        id:2,
        title: 'The Journey',
        description:'Proin nibh nisl condimentum id venenatis a condimentum vitae sapien. Tellus in metus vulputate eu sc',
        url:'/contact',
        label:'Read more',
        image:stories2
    },
    {
        id:3,
        title: 'Catch Day',
        description:'Elit pellentesque habitant morbi tristique senectus et netus et. In hendrerit gravida rutrum quisque',
        url:'/contact',
        label:'Read more',
        image:stories3
    },
    {
        id:4,
        title: 'Trout Tales',
        description:'Sit amet mattis vulputate enim nulla aliquet. At augue eget arcu dictum varius. Volutpat commodo sed',
        url:'/contact',
        label:'Read more',
        image:stories4
    }
]


export default function Stories() {
  return (<section className="w-full bg-neutral-0 py-40 lg:py-80 flex justify-center items-start">
    <div className="w-full sm:max-w-[400px] lg:max-w-[1024px] py-8 px-16 lg:px-0">
        <h2 className="w-full mb-32 hidden lg:block heading-medium text-neutral-90">
            Member stories
        </h2>
        <h2 className="w-full mb-20 block lg:hidden heading-default text-neutral-90">
            Member stories
        </h2>
        <ul className="w-full grid gap-40 grid-cols-1 lg:grid-cols-2">
            {
                data.map((item) =>(<li key={item.id} className="w-full">
                    <h3 className='w-full pt-20 mb-8 block lg:hidden accent text-neutral-90 border-t-[1px] border-neutral-20'>{item.title}</h3>
                    <div className='w-full flex justify-between stratch'>
                        <aside className='w-[30%] lg:w-[40%] row-span-3 col-start-1 row-start-1'>
                            <img className='w-full' src={item.image} alt={item.title} />
                        </aside>
                        <div className='w-[65%] lg:w-[55%] grid gap-y-16 grid-cols-1 place-content-center'>
                            <h3 className='w-full hidden lg:block accent text-neutral-90'>{item.title}</h3>
                            <p className='w-full body-small text-neutral-60'>{item.description}</p>
                            <aside className='w-full  hidden lg:block'>
                                <Link to={item.url} className="body-small text-left text-neutral-90 bg-neutral-10 px-8 py-4 rounded-[4px]">
                                    {item.label}
                                </Link>
                            </aside>
                        </div>
                    </div>
                    <aside className='w-full mt-16 block lg:hidden'>
                        <Link to={item.url} className="body-default text-left text-neutral-90 bg-neutral-0 px-12 py-8 rounded-[4px] border-[1px] border-neutral-40">
                            {item.label}
                        </Link>
                    </aside>
                </li>))
            }
        </ul>
    </div>
</section>)
}
