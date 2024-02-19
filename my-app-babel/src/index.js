import React from 'react' // nạp thư viện react
import ReactDOM from 'react-dom' // nạp thư viện react-dom
import { createRoot } from "react-dom/client";

// Tạo component App
function App() {
    const name = "Nguyen Sy Manh"
    return (
        <div>
            <h1>Xin chào {name}</h1>
            <h2>Xin chào Manh Nguyen Sy</h2>
        </div>
    )
}

// Render component App vào #root element
const root = createRoot(document.getElementById('root'))
root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );

