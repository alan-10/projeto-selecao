import { ComponentType, useState } from 'react';
import { ModalTags } from '../../components/ModalTags';
import { Container, Header, Buttons } from "./styles";
import { api } from '../../services/api'
import { useContextTag } from '../../Context/TagsContext';

interface UserProps {
  logo?: string | null;
  name?: string | null;
}

interface TagsInfo {
  name: string;
  id:string;
  html_url: string;
}






export function UserLogged({ logo, name }: UserProps) {

  const { visibleModal, openModal, setTitleModal } = useContextTag();

  const [tags, setTags] = useState<TagsInfo[]>([])
  const [starred, setStarred] = useState<TagsInfo[]>([]);

  async function selectTagsGit(){
    const response =  await api.get(`/users/${name}/repos`)
    setTags(response.data);
    setTitleModal('Tags de seu repositórios');
    openModal();
  }

  async function selectRepositoryStarred(){
    const response = await api.get(`users/${name}/starred`);
    setTags(response.data);
    setTitleModal('Repositóros que dei estrela');
    openModal()
  } 

  return (
    <Container>
       { visibleModal && <ModalTags  tag={tags} />  }
      <Header>
        <div>
         <img src={logo ? logo : ''} alt="" />
         <div>
            <strong>{name}</strong><br />
            
         </div>
         </div>

          <Buttons>
         <button onClick={selectTagsGit}>Minhas Tags</button>
         <button onClick={selectRepositoryStarred} >Repositórios que dei estrela</button>
       
         </Buttons>
      </Header>
    </Container>
  )
}
