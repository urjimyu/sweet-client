import * as S from './GiftHomeDetail.styled';
import MiniTimer from '../../components/common/MiniTimer/MiniTimer';
import useGetFriendGift from '../../hooks/queries/gift/useGetFriendGift';
import { useLocation } from 'react-router-dom';
import GiftHomePriceTag from '../../components/common/GiftHome/Price/GiftHomePriceTag';
import GiftDetailHeader from '../../components/common/GiftDetail/GiftDetailHeader';

function GiftHomeDetailFriends() {
  const location = useLocation();

  const searchParams = new URLSearchParams(location.search);
  const roomId = searchParams.get('roomId');
  const targetDate = searchParams.get('targetTime');

  const roomIdNumber = parseInt(roomId || '');
  const { data } = useGetFriendGift({ roomId: roomIdNumber });

  return (
    <S.GiftHomeDetailPageWrapper>
      <GiftDetailHeader title='친구가 등록한 선물' />
      <MiniTimer targetDate={targetDate?.toString() || ''} />
      <S.GiftHomeDetailWrapper>
        {data.data.friendGiftDto.length > 0 ? (
          data.data.friendGiftDto.map((item, index) => (
            <S.GiftsItemWrapper key={index}>
              <S.GiftsItemImage src={item.imageUrl} />
              <S.GiftsItemTitle>{item.name}</S.GiftsItemTitle>
              <GiftHomePriceTag price={item.cost} fonts={`body_07`} />
            </S.GiftsItemWrapper>
          ))
        ) : (
          <></>
        )}
      </S.GiftHomeDetailWrapper>
    </S.GiftHomeDetailPageWrapper>
  );
}

export default GiftHomeDetailFriends;
