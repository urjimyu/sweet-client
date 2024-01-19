import { useState } from 'react';
import { IcCancel, IcMenu } from '../../../assets/svg';
import * as S from './MyPageHeader.style';
import { useNavigate } from 'react-router-dom';

const MyPageHeader = () => {
  const navigate = useNavigate();
  const handleSettingIcon = () => {
    setSidebarOpen(!isSidebarOpen);
    navigate(`/mypage`);
  };
  const handleSettingHomeIcon = () => {
    setSidebarOpen(!isSidebarOpen);
    navigate(`/`);
  };
  const [isSidebarOpen, setSidebarOpen] = useState(false);

  const toggleSidebar = () => {
    setSidebarOpen(!isSidebarOpen);
    console.log('눌렀다!');
  };
  return (
    <S.StartHeaderWrapper>
      <S.SidebarWrapper isOpen={isSidebarOpen}>
        <S.ImgWrapper>
          <IcCancel style={{ width: '2.8rem' }} onClick={toggleSidebar} />
        </S.ImgWrapper>

        <S.Sidebar>
          <h2 onClick={handleSettingHomeIcon}>홈</h2>
          <h2 onClick={handleSettingIcon}>마이페이지</h2>
        </S.Sidebar>
      </S.SidebarWrapper>

      {isSidebarOpen ? (
        <IcCancel style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      ) : (
        <IcMenu style={{ width: '2.8rem' }} onClick={toggleSidebar} />
      )}
    </S.StartHeaderWrapper>
  );
};

export default MyPageHeader;
