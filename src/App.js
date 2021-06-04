import { RecoilRoot } from "recoil";
import { Router } from "../router/Router";
import { UserProvider } from "./providers/UserProvider";
import "./styles.css";

export default function App() {
  return (
    <RecoilRoot>
      <UserProvider>
        <Router />
      </UserProvider>
    </RecoilRoot>
  );
}
