import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import FeedbackList from "./components/FeedbackList";
import FeedbackStats from "./components/FeedbackStats";
import FeedbackForm from "./components/FeedbackForm";
import AboutPage from "./pages/AboutPage";
import AbouticonLink from "./components/AbouticonLink";
import { FeedbackProvider } from "./context/FeedbackContext";

// State is Data

function App() {
  return (
    <FeedbackProvider>
      <Router>
        <Header />
        <div className="container">
          {/*// If we don't add *exact* then both / and /about will show both*/}
          <Routes>
            <Route
              exact
              path={"/"}
              element={
                <>
                  <FeedbackForm />
                  <FeedbackStats />
                  <FeedbackList />
                </>
              }
            ></Route>
            <Route path={"/about"} element={<AboutPage />} />
          </Routes>
          <AbouticonLink />
        </div>
      </Router>
    </FeedbackProvider>
  );
}

export default App;
