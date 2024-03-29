import { ThemeProvider } from "styled-components";
import { ThemeLight } from "./theme/theme-light";
import {
  Route,
  createBrowserRouter,
  RouterProvider,
  createRoutesFromElements,
  Navigate,
} from "react-router-dom";
import { observer } from "mobx-react-lite";
import { MainPage } from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";
import { RootWrapper, Wrapper } from "./App.styles";
import Cabinet from "./pages/MainPage/Cabinet/Cabinet";
import Messages from "./pages/MainPage/Cabinet/Messages/Messages";
import Store from "./pages/MainPage/Cabinet/Store/Store";
import Price from "./pages/MainPage/Cabinet/Price/Price";
import Documentation from "./pages/MainPage/Cabinet/Documentation/Documentation";
import DocFilesPage from "./pages/MainPage/Cabinet/Documentation/DocFilesPage/DocFilesPage";
import { OrderHistory } from "./pages/MainPage/Cabinet/OrederHistory/OrderHistory";
import { Booking } from "./pages/MainPage/Cabinet/Booking/Booking";
import { MyBooking } from "./pages/MainPage/Cabinet/Booking/MyBooking/MyBooking";
import userStore from "./stores/user-store";
import { BookingCreate } from "./pages/MainPage/Cabinet/Booking/BookingCreate/BookingCreate";
import { useEffect } from "react";
import UserSettings from "./pages/MainPage/Cabinet/UserSettings/UserSettings";

import statusStore from "./stores/status-store";
/* import { getMe, login } from "./testData/apitest";
import AuthService from "./services/AuthService"; */
import { AuthPage } from "./pages/AuthPage/AuthPage";
import { User } from "./types/types";
import { RegisterPage } from "./pages/RegisterPage/RegisterPage";
import { ForgotPage } from "./pages/ForgotPage/ForgotPage";

function generateRoutes(user: User | undefined) {
  const storedValue = localStorage.getItem("user");
  if (user || (storedValue !== undefined && storedValue !== null)) {
    if (user?.data) {
      return (
        <Route path="/" element={<MainPage user={user}></MainPage>}>
          <Route path="/" element={<Cabinet />}>
            <Route index element={<Messages />} />
            <Route path="messages" element={<Messages />} />
            <Route path="store" element={<Store />} />
            <Route path="documentation">
              <Route index element={<Documentation />} />
              <Route
                path="instructions"
                element={
                  <DocFilesPage
                    itemsHref="/"
                    title="Инструкции по эксплуатации"
                  />
                }
              />
              <Route
                path="certificates"
                element={<DocFilesPage itemsHref="/" title="Сертификаты" />}
              />
              <Route
                path="techinfo"
                element={
                  <DocFilesPage itemsHref="/" title="Техническая информация" />
                }
              />
              <Route
                path="typedcomertial"
                element={
                  <DocFilesPage
                    itemsHref="/"
                    title="Образцы коммерческих предложений"
                  />
                }
              />
            </Route>
            <Route path="booking">
              <Route index element={<Booking />} />
              <Route path="mybooking" element={<MyBooking />} />
              <Route path="create" element={<BookingCreate />} />
              <Route path="create/:id" element={<BookingCreate />} />
            </Route>
            <Route path="price" element={<Price />} />
            <Route path="my" element={<>my</>} />
            <Route path="account" element={<UserSettings />} />
            <Route path="history" element={<OrderHistory />} />
          </Route>
        </Route>
      );
    } else {
      return (
        <>
          <Route path="/" element={<FormPage></FormPage>} />
          <Route path="*" element={<Navigate to="/" />} />{" "}
        </>
      );
    }
  } else {
    return (
      <Route path="/">
        <Route path="/" element={<AuthPage />} />
        <Route path="/forgot" element={<ForgotPage />} />
        <Route path="*" element={<Navigate to="/" />} />
        <Route path="/register" element={<RegisterPage />} />
      </Route>
    );
  }
}

const App = observer(() => {
  const { current } = statusStore;
  const { user, setUser } = userStore;

  useEffect(() => {
    const storedValue = localStorage.getItem("user");
    console.log(storedValue);

    if (storedValue !== null && storedValue !== undefined) {
      setUser({ ...JSON.parse(storedValue) });
    } else {
      /* setUser({
        id: 1,
        login: "admin",
        email: "admin@gmail.com",
        data: undefined,
        token: "1",
      }); */
    }

    //login("dimas", "secret");
    //AuthService.login("dimas", "secret");

    /*
    posts();
    createUser(); */

    return () => {
      if (user !== null && user !== undefined) {
        localStorage.setItem("user", JSON.stringify(user));
      }
    };
  }, []);

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {/* {user?.data ? (
          <Route path="/" element={<MainPage user={user}></MainPage>}>
            <Route path="/" element={<Cabinet />}>
              <Route index element={<Messages />} />
              <Route path="messages" element={<Messages />} />
              <Route path="store" element={<Store />} />
              <Route path="documentation">
                <Route index element={<Documentation />} />
                <Route
                  path="instructions"
                  element={
                    <DocFilesPage
                      itemsHref="/"
                      title="Инструкции по эксплуатации"
                    />
                  }
                />
                <Route
                  path="certificates"
                  element={<DocFilesPage itemsHref="/" title="Сертификаты" />}
                />
                <Route
                  path="techinfo"
                  element={
                    <DocFilesPage
                      itemsHref="/"
                      title="Техническая информация"
                    />
                  }
                />
                <Route
                  path="typedcomertial"
                  element={
                    <DocFilesPage
                      itemsHref="/"
                      title="Образцы коммерческих предложений"
                    />
                  }
                />
              </Route>
              <Route path="booking">
                <Route index element={<Booking />} />
                <Route path="mybooking" element={<MyBooking />} />
                <Route path="create" element={<BookingCreate />} />
                <Route path="create/:id" element={<BookingCreate />} />
              </Route>
              <Route path="price" element={<Price />} />
              <Route path="my" element={<>my</>} />
              <Route path="account" element={<UserSettings />} />
              <Route path="history" element={<OrderHistory />} />
            </Route>
          </Route>
        ) : (
          <>
            <Route path="/" element={<FormPage></FormPage>} />
            <Route path="*" element={<Navigate to="/" />} />{" "}
          </>
        )} */}
        {generateRoutes(user)}
      </Route>
    )
  );

  return (
    <RootWrapper bgcolor={current?.backgroundColor}>
      <ThemeProvider theme={ThemeLight}>
        <Wrapper bgcolor={current?.backgroundColor}>
          <RouterProvider router={router} />
        </Wrapper>
      </ThemeProvider>
    </RootWrapper>
  );
});

export default App;
