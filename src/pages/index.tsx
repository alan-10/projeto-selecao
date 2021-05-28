import { Header } from '../components/Header';
import { useSession } from 'next-auth/client';

import { UserLogged } from '../components/UserLogged';
import { Repository } from '../components/Repository';

import { SiginInBackground } from '../styles/home';

export default function Home() {

  const [session, loading] = useSession();

  if(loading){
    return <h1> carregando...</h1>
  }

  return (
    <>
    < Header />
    
    {session ? (
    <>
      <UserLogged logo={session.user?.image} name={session.user?.name}/>
      <Repository />
      </> )
      : (
        <SiginInBackground>
          <img src="/backgroundSigin.svg" alt="" />
        </SiginInBackground>
      )
    }
    </>
  );
}
