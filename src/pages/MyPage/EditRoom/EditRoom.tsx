import { useLocation } from 'react-router';
import useGetRoomMember from '../../../hooks/queries/room/useGetRoomMember';
import CardGuest from './CardGuest/CardGuest';
import * as S from './EditRoom.style';
import useGetRoomOwner from '../../../hooks/queries/room/useGetRoomOwner';
import { useEffect, useState } from 'react';

interface EditRoom {
  roomId: number;
}

const EditRoom = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);

  const roomIdString = searchParams.get('roomId');
  const roomId = parseInt(roomIdString || '', 10);
  console.log('추출된 초대 코드', roomId);
  const [roomWholeMemberData, setWholeMemberData] = useState<any>();
  const [roomWholeOwnerData, setWholeOwnerData] = useState<any>();
  useEffect(() => {
    setWholeOwnerData(useGetRoomMember(roomId).data);
    setWholeMemberData(useGetRoomOwner(roomId).data);
    console.log(roomWholeMemberData);
    console.log(roomWholeOwnerData);
  }, []);
  const roomOwnerData = roomWholeOwnerData.owner;
  const roomGifteeData = roomWholeOwnerData.room;
  const roomMemberData = roomWholeMemberData.members;
  return (
    <S.EditRoomWrapper>
      <S.TextWrapper>
        <S.Text>{roomGifteeData.gifterNumber}명이</S.Text>
        <S.Text>{roomGifteeData.gifteeName}님을 위한</S.Text>
        <S.Text>선물을 준비하고 있어요</S.Text>
      </S.TextWrapper>
      <S.CardWrapper>
        <CardGuest
          user={roomOwnerData.name}
          makerState={true}
          profileImageUrl={roomOwnerData.profileImgUrl}
          memberId={roomOwnerData.ownerId}
        />

        {Array.isArray(roomMemberData) &&
          roomMemberData.map((item, index) => (
            <CardGuest
              key={index}
              user={item.name}
              makerState={false}
              profileImageUrl={item.profileImageUrl}
              memberId={item.memberId}
            />
          ))}
      </S.CardWrapper>
    </S.EditRoomWrapper>
  );
};

export default EditRoom;
