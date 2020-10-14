import styled, { css } from 'styled-components';

const ButtonIcon = styled.button`
  width: 6.7rem;
  height: 6.7rem;

  ${({ active }) =>
    active &&
    css`
      background-color: ${({ theme }) => theme.white};
      border-radius: 10px;
    `}
`;

export default ButtonIcon;
