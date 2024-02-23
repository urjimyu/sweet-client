import React from 'react';
import * as S from './DeleteModal.style';
import BtnMedium from '../Button/Cta/medium/BtnMedium';
import { IcCancel } from '../../../assets/svg';

interface DeleteModalProps {
  children: React.ReactNode;
  onClickDelete: (giftId: number) => void;
  onClickCancel: () => void;
  clickedItem: number | undefined;
}

const DeleteModal = ({ children, onClickDelete, onClickCancel, clickedItem }: DeleteModalProps) => {
  return (
    <>
      <S.Overlay />
      <S.DeleteModalWrapper>
        <IcCancel style={{ width: '2.4rem', color: 'black' }} onClick={onClickCancel} />
        <S.DeleteModalContent>{children}</S.DeleteModalContent>
        <S.BtnWrapper>
          <BtnMedium
            customStyle={{
              width: '12rem',
              outline: 'none',
              border: 'none',
              backgroundColor: 'white',
              color: 'black',
            }}
            onClick={() => (clickedItem ? onClickDelete(clickedItem) : onClickCancel())}
          >
            네, 삭제할게요
          </BtnMedium>
          <BtnMedium customStyle={{ width: '12rem' }} onClick={onClickCancel}>
            아니오
          </BtnMedium>
        </S.BtnWrapper>
      </S.DeleteModalWrapper>
    </>
  );
};

export default DeleteModal;