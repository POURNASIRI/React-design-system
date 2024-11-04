// import styled from 'styled-components';
import Sidebar from './components/sidebar';
import Main from './components/main';

// import NavController from './context/nav-controller';
import Page from './components/page';

// const Container = styled.div`
//   display: flex;
//   height: 100vh;
// `;

//! explain isuue : in this way because all app children will be re-rended so slow component and all app children will bw re-rended so side bar collapsed take moment

//* to solve this issue we can using context API

export default function App() {
  return (
    // <NavController>
    //   <Container>
    //     <Sidebar />
    //     <Main />
    //   </Container>
    // </NavController>

    <Page>
      <Sidebar />
      <Main />
    </Page>
  );
}
