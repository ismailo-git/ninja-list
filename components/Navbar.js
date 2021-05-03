import Link from 'next/link'
import Image from 'next/image'


const Navbar = () => {
    return ( 
            <nav>
                <div className="logo">
                    <Image src="/https://vangogh.teespring.com/v3/image/a6ZxiiJEIyd7LgRXM8cspZ5BJWQ/960/1120.jpg" width={128} height={77} />
                </div>
                <Link href="/"><a>Home</a></Link>
                <Link href="/about"><a>About</a></Link>
                <Link href="ninjas"><a>Ninja Listing</a></Link>
             </nav> );
}
 
export default Navbar;