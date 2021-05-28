import { createContext, ReactNode, useContext, useState } from 'react';

interface ContextDataTag {
  visibleModal: boolean;
  openModal(): void;
  closeModal(): void;
  titleModal: string;
  setTitleModal(title: string): void;
}

const ContexTag = createContext<ContextDataTag>({} as ContextDataTag);

interface ContextTagProps {
  children: ReactNode;
}

export function ConextTagProvider({ children }: ContextTagProps) {
  
  const [visibleModal, setVisibleModal] = useState(false);
  const [titleModal, setTitleModal] = useState('');
  
  function openModal() {
    setVisibleModal(true);
  }

  function closeModal() {
    setVisibleModal(false);
  }

  return (
    <ContexTag.Provider value={{
      visibleModal,
      openModal,
      closeModal,
      titleModal,
      setTitleModal
    }}>
      {children}
    </ContexTag.Provider>
  );
}

export function useContextTag() {
  return useContext(ContexTag);
}