import ReactDOMServer from "react-dom/server";
import { StaticRouter } from "react-router";

import Routes from "./Routes";
import { UserProvider } from "./contexts/user/UserContextProvider.tsx";

import "./index.css";

export function render(url, context) {
  return ReactDOMServer.renderToString(
    <StaticRouter location={url} context={context}>
      <UserProvider>
        <Routes />
      </UserProvider>
    </StaticRouter>
  );
}
