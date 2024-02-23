import styled from 'styled-components';

export const Line = styled.div`
  width: 335px;
  height: 1px;
  margin: 0 auto;
  margin-bottom: 2rem;
  background-color: ${({ theme }) => theme.colors.G_02};
`;

export const PinkText = styled.span`
  color: ${({ theme }) => theme.colors.P_06};
`;

export const LinkButton = styled.button`
  ${({ theme }) => theme.mixin.flexCenter({})};
  padding: 10px;
  gap: 1rem;
  width: 13.4rem;
  height: 4rem;

  border-radius: 99px;
  border: 1px solid ${({ theme }) => theme.colors.P_06};
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.P_06};

  p {
    display: inline-flex;
    align-items: flex-end;
    gap: 8px;
    ${({ theme }) => theme.fonts.body_09};
  }
`;

export const SubTitle = styled.p`
  margin-bottom: 2rem;
  ${({ theme }) => theme.fonts.body_10};
  color: ${({ theme }) => theme.colors.G_07};
  text-align: center;
`;
export const KakaoButton = styled.button`
  ${({ theme }) => theme.mixin.flexCenter({})};
  padding: 1rem;
  gap: 1rem;
  width: 13.4rem;
  height: 4rem;
  border: none;
  color: ${({ theme }) => theme.colors.Black};
  ${({ theme }) => theme.fonts.body_09};
  border-radius: 100px;
  background: #fee500;
`;

export const ImageButton = styled.button`
  ${({ theme }) => theme.mixin.flexCenter({})};

  padding: 1rem;
  align-items: center;
  gap: 1rem;
  width: 13.4rem;
  height: 4rem;
  border-radius: 100px;
  border: none;
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.P_06};
`;

export const TournamentRenameTitleWrapper = styled.section`
  svg {
    width: 19.5rem;
    display: flex;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-bottom: 2.4rem;
  justify-content: center;
`;

export const Title = styled.p`
  margin-bottom: 0.8;
  color: ${({ theme }) => theme.colors.Black};
  text-align: center;
  font-family: SUIT;
  font-size: 28px;
  font-style: normal;
  font-weight: 600;
  line-height: 150%;
`;

export const ImgWrapper = styled.div`
  padding: 0 2rem;
  img {
    width: 33.5rem;
  }
`;