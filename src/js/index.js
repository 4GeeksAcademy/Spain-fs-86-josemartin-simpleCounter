import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";

import "../styles/index.css";

import Home from "./component/home.jsx";

ReactDOM.createRoot(document.getElementById('app')).render(
<StrictMode>
<Home/>
</StrictMode>);

