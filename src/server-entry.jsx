// import ReactDOMServer from "react-dom/server";
// import { StaticRouter } from "react-router";

// import Routes from "./Routes";

// import "./index.css";

// export function render(url, context) {
//   return ReactDOMServer.renderToString(
//     <StaticRouter location={url} context={context}>
//       <Routes />
//     </StaticRouter>
//   );
// }

// import React from "react";
import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";

// import App from "./App";
import Routes from "./Routes";

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <Routes />
    </StaticRouter>
  );
}