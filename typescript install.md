### 처음부터 설치하는 경우

1. npx create-react-app my-app --template typescript
2. npm i styled-components
3. npm i --save-dev @types/styled-components
4. npm i react-router-dom react-query
5. npm i --save-dev @types/react-router-dom



### 기존 파일에 설치하는 경우

1. **npm install -D typescript @types/node @types/react @types/react-dom @types/jest @types/styled-components**로 패키지 설치

2. .js -> .tsx extension 변경

3. tsconfig.json을 상위 폴더에 추가

   ```
   {
     "compilerOptions": {
       "target": "es5",
       "lib": ["dom", "dom.iterable", "esnext"],
       "allowJs": true,
       "skipLibCheck": true,
       "esModuleInterop": true,
       "allowSyntheticDefaultImports": true,
       "strict": true,
       "forceConsistentCasingInFileNames": true,
       "noFallthroughCasesInSwitch": true,
       "module": "esnext",
       "moduleResolution": "node",
       "resolveJsonModule": true,
       "isolatedModules": true,
       "noEmit": true,
       "jsx": "react-jsx"
     },
     "include": ["src"]
   }
   ```

4. src 폴더 내에 react-app-env.d.ts 파일을 추가

   ```
   /// <reference types="react-scripts" />
   ```

   



###  tsconfig.json

 ts 코드를 js 코드로 컴파일(type checking + transpile) 과정에 필요한 설정을 지정하는 파일



### react-app.env.d.ts

create-react-app으로 생성된 프로젝트에 필요한 type들을 참조하기 위한 type declaration 파일



### Typescript의 장점

코드 실행 전에 에러를 확인!