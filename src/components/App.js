import { GlobalStyle } from "./globalStyle";
import { lazy, Suspense } from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import CommonLoader from "./common/Loader";
import CommonScrollToTop from "./common/ScrollToTop";
import CommonPrivateRoute from "./common/PrivateRoute";

const Hotels = lazy(() => import("./pages/Hotels"));
const Hotel = lazy(() => import("./pages/Hotel"));
const News = lazy(() => import("./pages/News"));
const Reviews = lazy(() => import("./pages/Reviews"));
const LogIn = lazy(() => import("./pages/LogIn"));
const SignUp = lazy(() => import("./pages/SignUp"));
const Book = lazy(() => import("./pages/Book"));
const NotFound = lazy(() => import("./pages/404"));

function App() {
  return (
    <div className="App">
      <CommonScrollToTop />
      <GlobalStyle />
      <Suspense fallback={<CommonLoader fullPage />}>
        <Switch>
          <Redirect exact from="/" to="/hotels" />
          <Route exact path="/hotels" component={Hotels} />
          <Route exact path="/hotels/:hotelId" component={Hotel} />
          <CommonPrivateRoute exact path="/hotels/:hotelId/book/:roomId">
            <Book />
          </CommonPrivateRoute>
          <Route exact path="/news" component={News} />
          <Route exact path="/reviews" component={Reviews} />
          <Route exact path="/log-in" component={LogIn} />
          <Route exact path="/sign-up" component={SignUp} />
          <Route path="*" component={NotFound} />
        </Switch>
      </Suspense>
    </div>
  );
}

export default App;
