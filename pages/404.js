import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router'

const NotFound = () => {
    const router = useRouter();
    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])
    return ( 
        <div className="not-found">
            <h1>Ooops........</h1>
            <h2>Cette page n'existe pas.</h2>
            <p>Veuillez retourner à <Link href='/'><a>l'accueil</a></Link></p>
        </div>

     );
}
 
export default NotFound