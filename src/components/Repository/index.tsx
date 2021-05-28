import Link from "next/link";
import { FormEvent, useState } from "react";
import { Container, Title, Form, Repositorie, PhraseErro } from "./styles";
import { api } from "../../services/api";

interface Repositoroy {
  full_name: string;
  id: string;
  description: string;
  html_url: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

export function Repository() {
  const [repositories, setRepositories] = useState<Repositoroy[]>([]);
  const [newRepository, setNewRepository] = useState("");
  const [isErro, setErro] = useState(false);
  const [messageErro, setMessageErro] = useState('')

  async function handleSubmitForm(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const tagRepositoryExixts =   repositories.find(
      (repo) => { 
       return (repo.full_name === newRepository)? true : false;
      }
      
    );

    if(tagRepositoryExixts) {
      setMessageErro('Repositório já listado');
      setErro(true);
      return;
    }

    try {
      const response = await api.get(`repos/${newRepository}`);
      const repository = response.data;

      
      

      setRepositories([...repositories, repository]);
      setNewRepository('');
      setErro(false);
    } catch (err) {
      setMessageErro('Digite un repositório válido');
      setErro(true);
    }
  }

  return (
    <Container>
      <Title>Explore repositórios no Github</Title>
      <Form  isError={isErro} onSubmit={handleSubmitForm}>
        <input
          type="text"
          placeholder="Digite o nome do repositório"
          value={newRepository}
          onChange={(e) => setNewRepository(e.target.value)}
        />
        <button> Pesquisar</button>
      </Form>
      {isErro && <PhraseErro> { messageErro } </PhraseErro>}
      {repositories.map((repository) => (
        <>
          <Repositorie key={repository.id}>
            <a target="_blank" href={repository.html_url}>
              <img src={repository.owner.avatar_url} alt="" />
              <div>
                <strong>{repository.full_name}</strong>
                <p>{repository.description}</p>
              </div>
            </a>
          </Repositorie>
        </>
      ))}
    </Container>
  );
}
