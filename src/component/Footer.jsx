import { Link } from 'react-router-dom';
import footerdata  from '../assets/data/footer.json';

import footerlogo from "./../assets/images/footerlogo.svg"
import Facebook from "./../assets/images/Facebook.svg"
import Instagram from "./../assets/images/Instagram.svg"
import Linkedin from "./../assets/images/Linkedin.svg"

export default function Footer() {
  
  return (<footer className="w-full bg-neutral-90 flex justify-center">
    <div className="w-full max-w-[1024px] py-24 px-16 lg:px-0">
      <div className="w-full flex justify-between flex-col lg:flex-row">
          <ul className="w-full lg:w-auto flex justify-center items-center gap-x-24 flex-wrap">
            <li className='mb-12 lg:mb-0 block lg:inline-block w-full lg:w-auto text-center'><img src={footerlogo} alt="logo" className="mx-auto" /></li>
            {footerdata.map((item) => (
              <li key={item.id} >
                <Link to={item.url} className="body-default text-left text-neutral-5">{item.label}</Link>
              </li>
            ))}
          </ul>
          <ul className="mt-12 lg:mt-0 w-full lg:w-auto flex justify-center items-start gap-x-8">
            <li className="w-40 text-center">
                <img src={Facebook} alt="Facebook" className="w-24 mx-auto" />
            </li>
            <li className="w-40 text-center">
                <img src={Instagram} alt="Instagram" className="w-24 mx-auto" />
            </li>
            <li className="w-40 text-center">
                <img src={Linkedin} alt="Linkedin" className="w-24 mx-auto" />
            </li>
          </ul>
      </div>
      <p className="w-full pt-24 body-caption text-center text-neutral-30">
        © 2024 Central Texas Fly Fishing All Rights Reserved.
      </p>
    </div>
  </footer>)
}
