import { BrowserRouter, Route, Switch } from "react-router-dom";
import Home from "./pages/home/index";
import Invalid from "./pages/invalid";
import NotFound from "./pages/notFound/index";
import Success from "./pages/success";

export default function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/404">
          <NotFound />
        </Route>
        <Route path="/invalid">
          <Invalid />
        </Route>
        <Route path="/success">
          <Success />
        </Route>
        <Route path="/:hash">
          <Home />
        </Route>
        <Route path="/">
          <NotFound />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
