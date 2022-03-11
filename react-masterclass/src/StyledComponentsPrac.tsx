import styled, { keyframes } from "styled-components";

// npm i styled-components
// vscode-styled-components 익스텐션 필요
const Father = styled.div`
  display: flex;
`;
interface BoxProps {
  bgColor: string;
}
const Box = styled.div<BoxProps>`
  background-color: ${(props) => props.bgColor};
  width: 200px;
  height: 200px;
`;
// Box의 모든 속성에 border-radius를 추가
const Circle = styled(Box)`
  border-radius: 50px;
`;
const Btn = styled.button`
  color: white;
  background-color: tomato;
  border: 0;
  border-radius: 15px;
`;
// Attaching additional props => attrs
const Input = styled.input.attrs({ required: true })`
  background-color: tomato;
`;

const anim = keyframes`
  0%{
    transform:rotate(0deg) ;
    border-radius: 0px;
  }
  50%{
    transform:rotate(360deg) ;
    border-radius: 100px;
  }
  100%{
    transform:rotate(0deg) ;
    border-radius: 0px;
  }
`;
const Star = styled.span`
  font-size: 36px;
`;
const BoxAnim = styled(Box)`
  animation: ${anim} 2s linear infinite;
  display: flex;
  justify-content: center;
  align-items: center;
  ${Star} {
    font-size: 36px;
    // & : Star(shortcut), hover : 마우스 갖다대면 커짐
    &:hover {
      font-size: 72px;
    }
    // active 클릭하고 있으면 활성화
    &:active {
      opacity: 0;
    }
  }
`;

function StyledComponentsPrac() {
  return (
    <Father>
      <Box bgColor="teal" />
      <Circle bgColor="tomato" />
      <Btn>Log in</Btn>
      {/* as을 사용하여 엘리먼트를 다른 엘리먼트로 교체 */}
      <Btn as="a" href="/">
        Log out
      </Btn>
      <Input />
      <BoxAnim bgColor="gray">
        <Star>★</Star>
      </BoxAnim>
    </Father>
  );
}

export default StyledComponentsPrac;
