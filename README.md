# Router + Vite + Typescript 프로잭트

created at : 2024-12-14

## 확장팩 설치

ES7+ React/Redux/React-Native snippets

## 프로잭트 생성

`npm create vite@latest`

- √ Project name: ... react02
- √ Select a framework: » React
- √ Select a variant: » TypeScript

## 추가 설치 1

npm install axios  
npm install recoil  
npm install --save-dev sass  
npm install react-router-dom  
npm install localforage  
npm install match-sorter  
npm install sort-by  
npm audit fix --force  
npm install @types/node  
npm install react-simple-toasts

## 추가 설치 2

npm install --save-dev eslint prettier eslint-config-prettier  
npm install --save-dev eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser  
npm install --save-dev eslint-plugin-jsonc

## .vscode/settings.json

```json
{
  "editor.tabSize": 4,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "files.associations": {
    "*.json": "jsonc"
  },
  "editor.quickSuggestions": {
    "comments": "on",
    "strings": "on"
  },
  "[typescript]": {
    "editor.formatOnSave": true
  },
  "[typescriptreact]": {
    "editor.formatOnSave": true
  }
}
```

## 환경 설정 파일 수정 (소스 참조)

1. vite.config.ts
2. tsconfig.app.json
3. eslint.config.js
4. prettier.json

## 참조

강의: https://www.youtube.com/watch?v=Yv5tSNr4h2c <br />
소스: https://github.com/daffy3/YT-React <br />
