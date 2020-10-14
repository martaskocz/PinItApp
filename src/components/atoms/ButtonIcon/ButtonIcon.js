import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 6.7rem;
  height: 6.7rem;
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: 50% 50%;
  background-color: transparent;
  border: none;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.white};
      border-radius: 20px;
    `}
`;

export default ButtonIcon;
