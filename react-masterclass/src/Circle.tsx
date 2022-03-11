import styled from "styled-components";

interface ContainerProps {
  bgColor: string;
  borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  border-radius: 100px;
  background-color: ${(props) => props.bgColor};
  border: 2px solid ${(props) => props.borderColor};
  display: flex;
  justify-content: center;
  align-items: center;
`;

interface CircleProps {
  bgColor: string;
  borderColor?: string; // ? : optional prop
  text?: string;
}

// 인자 부분에서 default 값을 설정할 수 있다.
// 혹은 return에서 prop ?? default 을 통해 default 값 설정
function Circle({ bgColor, borderColor, text = "default text" }: CircleProps) {
  return (
    <Container bgColor={bgColor} borderColor={borderColor ?? bgColor}>
      {text}
    </Container>
  );
}

export default Circle;
