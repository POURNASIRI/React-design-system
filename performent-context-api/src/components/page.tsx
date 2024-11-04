import { ReactNode } from 'react';
import NavController from '../context/nav-controller';
import styled from 'styled-components';
const Container = styled.div`
  display: flex;
  height: 100vh;
`;

const Page = ({ children }: { children: ReactNode }) => {
  return (
    <NavController>
      <Container>{children}</Container>
    </NavController>
  );
};

export default Page;
