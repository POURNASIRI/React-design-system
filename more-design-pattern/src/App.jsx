import { Card } from "./components/compound-component/Card";



// * card component using compound design pattern and composition this component togather 
function App() {
  return (
    <>
    <Card>
      <Card.Header>
        <h1 style={{margin:"0"}}>Header</h1>
      </Card.Header>
      <Card.Body>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quia et ad repellendus perferendis amet ea hic beatae illum sit veniam vel id, aut ipsam pariatur animi a labore, adipisci quam!
      </Card.Body>
      <Card.Footer>
        <h1 style={{margin:"0"}}>Footer</h1>
      </Card.Footer>
    </Card>
    </>
  );
}

export default App;


