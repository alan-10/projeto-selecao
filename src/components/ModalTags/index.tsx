import { useContextTag } from '../../Context/TagsContext';
import { Overlay, Content} from './styles';

interface TagInfo {
  name: string;
  id: string;
  html_url: string;
}

interface ModalDTO {
  tag: TagInfo[];
}



export function ModalTags({ tag }: ModalDTO) {
  const { closeModal, titleModal } = useContextTag()
  return (
    <Overlay>
      <Content >
        <button onClick={closeModal}> X </button>
          <strong>{titleModal}</strong>
          <div>
          {tag.map(tagInfo => (
          <a target="_blank" key={tagInfo.id} href={tagInfo.html_url}>{tagInfo.name}</a>
          ))}
          </div>
      </Content>
    </Overlay>
  );
}