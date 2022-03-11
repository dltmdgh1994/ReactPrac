import React, { useState } from "react";
import Circle from "./Circle";

function TypescriptPrac() {
  const [value, setValue] = useState("");
  // typescript는 any 타입을 원치 않기 때문에 타입을 지정
  const onChange = (event: React.FormEvent<HTMLInputElement>) => {
    // const value = event.currentTarget.value;와 같다.
    // ES6 문법으로 여러 개의 인자를 가져올 때 편하다.
    // const{ currentTarget: {value, tagName, width, id}} = event
    const {
      currentTarget: { value },
    } = event;
    setValue(value);
  };
  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log("hello", value);
  };

  return (
    <div>
      <Circle bgColor="teal" borderColor="black" text="React" />
      <Circle bgColor="orange" />
      <div>
        <form onSubmit={onSubmit}>
          <input
            value={value}
            onChange={onChange}
            type="text"
            placeholder="username"
          />
          <button>Log in</button>
        </form>
      </div>
    </div>
  );
}

export default TypescriptPrac;
