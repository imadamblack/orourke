import Link from 'next/link';
import { info } from '../../../info';
import Image from 'next/image';
import logo from '../../../public/logo.png';
import conducef from '../../../public/landing/p13.png'; //{/*Logo de Buro*/}
import buro from '../../../public/landing/p09.png'; //{/*Logo de Buro*/}

export default function Header() {
  return (

    <header
      className={`sticky top-0 bg-hero-color backdrop-blur-lg w-screen shadow-sm h-[8rem] flex justify-center z-[99] hover:top-0`}
    >
      <div className="flex items-center z-[1]">
        <div className="flex justify-center items-center p-4">
          <Link href="/" passhref>
            <Image src={logo} alt={info.companyName} width={180} height={180} objectFit="contain"/>
          </Link>
        </div>
      </div>
                           
    </header>

  );
}
