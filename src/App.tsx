import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme/theme-light";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
} from "react-router-dom";
import UserStore from "./stores/user-store";
import { observer } from "mobx-react-lite";
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";
import { User, UserData } from "./types/types";
import { Wrapper } from "./App.styles";
import Cabinet from "./pages/MainPage/Cabinet/Cabinet";
import Messages from "./pages/MainPage/Cabinet/Messages/Messages";

const userStore = new UserStore();
userStore.setUser({ data: {} as UserData } as User);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {userStore.user?.data ? (
        <Route path="/" element={<MainPage user={userStore.user}></MainPage>}>
          <Route path="/" element={<Cabinet />}>
            <Route index element={<>messages</>} />
            <Route path="messages" element={<Messages />} />
            <Route path="store" element={<>store</>} />
            <Route path="documentation">
              <Route index element={<>index</>} />
              <Route path="doc1" element={<>doc1</>} />
              <Route path="doc2" element={<>doc2</>} />
            </Route>
            <Route path="brone" element={<>store</>} />
            <Route path="price" element={<>store</>} />
            <Route path="my" element={<>my</>} />
            <Route path="account" element={<>account</>} />
            <Route path="history" element={<>history</>} />
          </Route>
        </Route>
      ) : (
        <Route index element={<FormPage></FormPage>} />
      )}
    </Route>
  )
);

const App = observer(() => {
  return (
    <ThemeProvider theme={ThemeLight}>
      <Wrapper>
        <RouterProvider router={router} />
      </Wrapper>
    </ThemeProvider>
  );
});

export default App;
