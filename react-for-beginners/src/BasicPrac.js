import Button from "./Button";
import styles from "./App.module.css";
import { useEffect, useState } from "react";

function BasicPrac() {
  const [counter, setValue] = useState(0);
  const [keyword, setKeyword] = useState("");
  const [showing, setShowing] = useState(false);
  const onClick = () => setValue((prev) => prev + 1);
  const onChange = (event) => setKeyword(event.target.value);
  const onShow = () => setShowing((prev) => !prev);

  console.log("I run all the time");
  // 렌더링 될 때마다 실행되는 것을 방지, 원하는 경우에만 함수를 실행
  useEffect(() => {
    if (keyword.length > 5) {
      console.log("Search for", keyword);
    }
  }, [keyword]); // 여러 개를 집어 넣으면 각각이 변하면 함수 실행

  return (
    <div>
      <div>
        <h1 className={styles.title}>Welcome React!</h1>
        <Button text={"Continue"} />
      </div>
      <hr />
      <div>
        <input
          value={keyword}
          onChange={onChange}
          type="text"
          placeholder="Search here..."
        ></input>
        <h1>{counter}</h1>
        <button onClick={onClick}>click me</button>
      </div>
      <hr />
      <div>
        {showing ? <Hello /> : null}
        <button onClick={onShow}>{showing ? "Hide" : "Show"}</button>
      </div>
    </div>
  );

  function Hello() {
    useEffect(() => {
      console.log("created ^오^");
      return () => console.log("destroyed T오T"); // 컴포넌트가 없어질 때 실행
    }, []);
    return <h1>Hello</h1>;
  }
}

export default BasicPrac;
