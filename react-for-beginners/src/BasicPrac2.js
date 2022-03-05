import { useState } from "react";

function BasicPrac2() {
  const [toDo, setToDo] = useState("");
  const [toDos, setToDos] = useState([]);
  const onChange = (event) => setToDo(event.target.value);
  const onSubmit = (event) => {
    // submit태그는 값을 전송하면서 창이 새로고침(reload)된다.
    // 이런 태그의 이벤트 기능을 preventDefault를 통하여 동작 방지
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    // toDo.push() const이기 때문에 절대 직접적으로 값을 바꾸지 않는다.
    setToDos((currentArr) => {
      const newArr = [...currentArr, toDo]; // ...으로 안의 원소들을 가져온다.
      console.log(newArr);
      return newArr;
    });
    setToDo("");
  };
  const deleteBtn = (idx) => {
    setToDos(toDos.filter((item, todoIdx) => idx !== todoIdx));
  };

  return (
    <div>
      <h1>My To Dos ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="Write your to do..."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
        {toDos.map((item, idx) => (
          <li key={idx}>
            {item}
            {/*onClick={deleteBtn}이 아닌 이유는 "바로 실행"되지 않고 클릭을 기다리는 함수로 쓰기 위함 */}
            <button onClick={() => deleteBtn(idx)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default BasicPrac2;
