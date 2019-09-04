import styled from 'styled-components';
// import { darken } from 'polished';

export const BarM = styled.div`
  display: flex;
  position: absolute;
  flex: 1;
  width: calc(100vw);
  justify-content: space-between;
  margin-top: -35px;
  padding: 0 10px;

  @media (max-width: 280px) {
    flex-direction: column;
    align-items: flex-end;
    margin-top: -50px;
  }

  @media (max-width: 190px) {
    align-items: center;
  }

  a {
    text-decoration: none;

    h1 {
      font-size: 14px;
      color: #3bb9e3;
    }
  }

  a:first-child {
    padding-left: 0;
  }

  a:last-child {
    margin-right: 0;
  }
`;
