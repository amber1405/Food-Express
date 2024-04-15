import Header from "./components/Header";
import Body from "./components/Body";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import RestaurantMenu from "./components/RestaurantMenu";
import { Suspense, lazy } from "react";
import { Provider } from "react-redux";
import appStore from "./utils/appStore";
import Cart from "./components/Cart";
const Grocery = lazy(() => import("./components/Grocery"));

function App() {
  return (
    <Provider store={appStore}>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Body />} errorElement={<Error />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/restaurants/:resId" element={<RestaurantMenu />} />
          <Route
            path="/grocery"
            element={
              <Suspense fallback={<h1>Loading</h1>}>
                <Grocery />
              </Suspense>
            }
          />
          <Route path="/cart" element={<Cart />} />
        </Routes>
        {/* <Footer /> */}
      </BrowserRouter>
    </Provider>
  );
}

export default App;
