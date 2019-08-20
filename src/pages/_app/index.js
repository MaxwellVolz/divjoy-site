import React from "react";
import Navbar from "./../../components/Navbar";
import HomePage from "./../home";
import AboutPage from "./../about";
import ResumePage from "./../resume";
import FaqPage from "./../faq";
import PricingPage from "./../pricing";
import ContactPage from "./../contact";
import DashboardPage from "./../dashboard";
import SigninPage from "./../signin";
import SignupPage from "./../signup";
import ForgotpassPage from "./../forgotpass";
import ChangepassPage from "./../changepass";
import { Switch, Route, Router } from "./../../util/router.js";
import Divider from "./../../components/Divider";
import Footer from "./../../components/Footer";
import analytics from "./../../util/analytics.js";
import { ProvideAuth } from "./../../util/auth.js";
import "./styles.scss";

import mvolzlogo from "../../assets/logos/mvolzlogo.png";
import mvolzlogoblack from "../../assets/logos/mvolzlogoblack.png";


function App(props) {
  return (
    <ProvideAuth>
      <Router>
        <>
          <Navbar
            color="primary"
            spaced={true}
            logo={mvolzlogo}
          />

          <Switch>
            <Route exact path="/" component={HomePage} />

            <Route exact path="/about" component={AboutPage} />

            {/* <Route exact path="/resume" component={ResumePage} /> */}

            <Route exact path="/faq" component={FaqPage} />

            <Route exact path="/pricing" component={PricingPage} />

            <Route exact path="/contact" component={ContactPage} />

            <Route exact path="/dashboard" component={DashboardPage} />

            <Route exact path="/signin" component={SigninPage} />

            <Route exact path="/signup" component={SignupPage} />

            <Route exact path="/forgotpass" component={ForgotpassPage} />

            <Route exact path="/changepass" component={ChangepassPage} />

            <Route
              component={({ location }) => {
                return (
                  <div
                    style={{
                      padding: "50px",
                      width: "100%",
                      textAlign: "center"
                    }}
                  >
                    The page <code>{location.pathname}</code> could not be
                    found.
                  </div>
                );
              }}
            />
          </Switch>

          <Divider color="light" />
          <Footer
            color="white"
            size="medium"
            logo={mvolzlogoblack}
            description="Designs, Develops, Delivers"
            copyright=""
          />
        </>
      </Router>
    </ProvideAuth>
  );
}

export default App;
