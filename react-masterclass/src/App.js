import styled from "styled-components";

// npm i styled-components
// vscode-styled-components 익스텐션 필요
const Father = styled.div`
  display: flex;
`;
const Box1 = styled.div`
  background-color: teal;
  width: 100px;
  height: 100px;
`;
const Box2 = styled.div`
  background-color: tomato;
  width: 100px;
  height: 100px;
`;
const Text = styled.span`
  color: white;
`;

function App() {
  return (
    <Father>
      <Box1>
        <Text>Hello</Text>
      </Box1>
      <Box2 />
    </Father>
  );
}

export default App;
