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

const userStore = new UserStore();
userStore.setUser({ data: {} as UserData } as User);

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/">
      {userStore.user?.data ? (
        <Route index element={<MainPage user={userStore.user}></MainPage>} />
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
