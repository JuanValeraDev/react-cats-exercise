import React from "react";
import reactDom from 'react-dom/client'
import App from "./src/App.jsx";

const rootElement = document.getElementById("app")
const root = reactDom.createRoot(rootElement)
root.render(<App/>)
