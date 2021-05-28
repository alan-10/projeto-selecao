import Link from "next/link";
import { useSession, signIn, signOut } from "next-auth/client";
import { LinkHTMLAttributes } from "react";

import { Container } from './styles';



export function Header() {
  const [session, loading] = useSession();
  const handleSignin = (e: any) =>{
    e.preventDefault();
    signIn();
  };
  const handleSignout = (e: any) => {
    e.preventDefault();
    signOut();
  };

  return (
    <Container >
   <h3>Cliente GitHub</h3>


      {session && (
        <a href="#" onClick={handleSignout} className="btn-signin">
          Sair
        </a>
      )}
      {!session && (
        <a href="#" onClick={handleSignin} className="btn-signin">
          Faça seu login 
        </a>
      )}
    </Container>
  );
}
