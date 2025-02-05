import { Link } from 'react-router-dom';
import bannerweb from "./../assets/images/banner-web.svg"
import bannermobile from "./../assets/images/banner-mobile.svg"
export default function Banner() {
  return (<section className="w-full bg-neutral-5 py-0 lg:py-80 flex justify-center items-start">
    <div className="w-full sm:max-w-[400px] lg:max-w-[1024px] py-8 flex justify-between items-start flex-col-reverse lg:flex-row relative">
        <div className="w-full lg:w-[680px] px-16 py-40 lg:py-0 lg:px-0 flex justify-start items-start flex-wrap gap-y-16">
            <h2 className="w-full block lg:hidden heading-default text-neutral-90">
                Central Texas 
                <br />
                Fly Fishing
            </h2>
            <h2 className="w-full hidden lg:block heading-large text-neutral-90">
                Central Texas 
                <br />
                Fly Fishing
            </h2>
            <p className="w-full body-medium text-neutral-60">
                At lacus vitae nulla sagittis scelerisque nisl. Pellentesque duis cursus vestibulum, facilisi ac, sed faucibus.
            </p>
            <aside className="w-full">
                <Link to="/services" className="body-default text-neutral-5 bg-brown-default px-12 py-8 rounded-[4px]">
                    Get started
                </Link>
            </aside>
        </div>
        <div className="w-full lg:w-[300px]">
            <img src={bannerweb} alt="banner" className="hidden lg:block w-full" />
            <img src={bannermobile} alt="banner" className="block lg:hidden w-full" />
        </div>
    </div>
</section>)
}
