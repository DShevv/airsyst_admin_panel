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
import MainPage from "./pages/MainPage/MainPage";
import FormPage from "./pages/FormPage/FormPage";
import { RootWrapper, Wrapper } from "./App.styles";
import Cabinet from "./pages/MainPage/Cabinet/Cabinet";
import Messages from "./pages/MainPage/Cabinet/Messages/Messages";
import { statusSilver } from "./testData/status";
import Store from "./pages/MainPage/Cabinet/Store/Store";
import Price from "./pages/MainPage/Cabinet/Price/Price";
import Documentation from "./pages/MainPage/Cabinet/Documentation/Documentation";
import DocFilesPage from "./pages/MainPage/Cabinet/Documentation/DocFilesPage/DocFilesPage";
import { OrderHistory } from "./pages/MainPage/Cabinet/OrederHistory/OrderHistory";
import { Booking } from "./pages/MainPage/Cabinet/Booking/Booking";
import { MyBooking } from "./pages/MainPage/Cabinet/Booking/MyBooking/MyBooking";
import userStore from "./stores/user-store";
import { BookingCreate } from "./pages/MainPage/Cabinet/Booking/BookingCreate/BookingCreate";

const App = observer(() => {
  const { current } = statusSilver;
  const { user } = userStore;

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        {user?.data ? (
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
              <Route path="account" element={<FormPage />} />
              <Route path="history" element={<OrderHistory />} />
            </Route>
          </Route>
        ) : (
          <>
            <Route path="/" element={<FormPage></FormPage>} />
            <Route path="*" element={<Navigate to="/" />} />{" "}
          </>
        )}
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
