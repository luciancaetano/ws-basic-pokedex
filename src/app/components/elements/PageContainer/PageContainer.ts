import styled from 'styled-components';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  width: 100vw;
  height: 100vh;
  background: #E5E5E5;
  padding: 40px;
  box-sizing: border-box;
  background-image: url('/images/pokeball.png');
  background-position: top right;
  background-repeat: no-repeat;
  background-size: 100%;
  overflow-y: scroll;
`;

export default PageContainer;
