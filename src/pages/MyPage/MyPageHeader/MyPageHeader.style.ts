import styled from 'styled-components';
import { IcCancel } from '../../../assets/svg';

export const StartHeaderWrapper = styled.div`
  ${({ theme: { mixin } }) => mixin.flexBox({})};
  padding: 0 2rem;
  justify-content: end;
  height: 5.6rem;
  gap: 21.2rem;
  background: none;
`;

export const ImgWrapper = styled.header`
  display: flex;
  justify-content: flex-end;
  height: 5.6rem;
`;

export const SidebarWrapper = styled.div<{ isOpen: boolean }>`
  display: flex;
  flex-direction: column;
  position: fixed;
  transform: ${({ isOpen }) => (isOpen ? 'translateX(0)' : 'translateX(-100%)')};
  transition: transform 0.3s ease-in-out;

  width: 100%;
  height: 100vh;
  bottom: 0;
  left: 0;

  padding: 0 1.5rem;
  background-color: white;
  z-index: 9;
`;

export const Sidebar = styled.div`
  padding: 4.5rem 1.6rem 1.6rem 1.6rem;
  h2 {
    ${({ theme }) => theme.fonts.heading_01};
    margin-bottom: 2.3rem;
  }
`;
export const ButtonWrapper = styled(IcCancel)`
  position: absolute; /* 추가 */
  right: 2rem; /* 추가 */
  top: 50%; /* 추가 */
  transform: translateY(-50%); /* 추가 */

  font-size: 20px;
  color: white;
  cursor: pointer;
  z-index: 2; /* 추가 */
`;
