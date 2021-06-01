import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../src/components/pages/Top";
import { Users } from "../src/components/pages/Users";
import { DefaultLayout } from "../src/components/templates/DefaultLayout";
import { HeaderOnly } from "../src/components/templates/HeaderOnly";

export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
