import React, { useEffect, useState } from "react";
import Header from "../../../widget/Header/ui/Header";
import { Outlet } from "react-router-dom";
import { Sidebar } from "../../../widget/Sidebar";
import { Highlight, themes } from "prism-react-renderer";

const pythonCode = `
#include <iostream> 
using namespace std;


int main() {    
 char op;
 float num1, num2;

cout << "Enter operator either + or - or * or /: ";
cin >> op; cout << "Enter two operands: ";
cin >> num1 >> num2;


switch(op) {
  case '+':
    cout << num1+num2;
    break;
  case '-':
    cout << num1-num2;
    return 0;}
`;

// const customTheme = {
//   plain: {
//     backgroundColor: "rgb(250, 250, 250)", // Цвет фона
//     color: "#000", // Цвет текста
//   },
//   styles: [
//     {
//       types: ["comment"],
//       style: {
//         color: "#8e908c", // Цвет комментариев
//       // Итальянский стиль
//       },
//     },
//     {
//       types: ["keyword"],
//       style: {
//         color: "#DF3079", // Цвет ключевых слов
//         fontWeight: "regular", // Жирный шрифт
//       },
//     },
//     {
//       types: ["string"],
//       style: {
//         color: "#50fa7b", // Цвет строк
//         fontWeight: "regular", 
//       },
//     },
//     {
//       types: ["variable", "parameter"],
//       style: {
//         color: "#DF3079", // Цвет переменных
//         fontWeight: "regular", 
//       },
//     },
//     {
//       types: ["function"],
//       style: {
//         color: "#F22C3D", // Цвет функций
//         fontWeight: "regular", 
//       },
//     },
//   ],
// };

const Layout = () => {
  const [codeHtml, setCodeHtml] = useState("");

  return (
    <div className="row">
      <Sidebar />
      <div className="row__content" style={{ paddingTop: "100px" }}>
        {/* <Highlight code={pythonCode} theme={customTheme} language="cpp">
          {({ style, tokens, getLineProps, getTokenProps }) => (
            <pre
              style={{
                ...style,
                padding: "12px 16px ",
                borderRadius: "12px",
                fontFamily:'Inter',
                fontSize:'16px'
              }}
            >
              {tokens.map((line, i) => (
                <div key={i} {...getLineProps({ line, key: i })}>
                  {line.map((token, key) => (
                    <span key={key} {...getTokenProps({ token })} />
                  ))}
                </div>
              ))}
            </pre>
          )}
        </Highlight> */}
        <Header />
        <Outlet />
      </div>
    </div>
  );
};

export default Layout;
