import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import {
  MDBFooter,
  MDBContainer,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn,
} from "mdb-react-ui-kit";
import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

function App() {
  return (
    <div>
      <header className="sticky-top">
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <h2 className="first-title bg-dark">ThisCar</h2>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse bg-dark"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav">
              <a className="nav-item nav-link active bg-dark" href="#main">
                Home
              </a>
              <a className="nav-item nav-link active bg-dark" href="#info">
                Why our company?
              </a>
              <a className="nav-item nav-link active bg-dark" href="#pre-order">
                Pre-order
              </a>
            </div>
          </div>
        </nav>
      </header>
      <section id="main">
        <article
          className="background-img"
          style={{
            backgroundImage: `url("https://image.cnbcfm.com/api/v1/image/106964911-1635070875003-Xpeng_Flying_Car_.png?v=1635071509&w=1600&h=900")`,

            marginTop: "-70px",
            fontSize: "50px",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        >
          <h2 className="title">The future is in the air.</h2>
        </article>
      </section>
      <section id="info">
        <div>
          <h2 className="title-about-car">
            Why <i>ThisCar</i>?
          </h2>
          <br></br>
          <div className="about-car">
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Many metropolises have traffic
              problems, and car manufacturers are looking for practical, safe
              and fast alternatives for transporting people. A solution that the
              producers of our company have found is the flying car. The first
              prototypes have already appeared.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Pollution problems will disappear
              because our prototype is 100% electric. This car has special
              functionalities: it moves autonomously, with electric propulsion.
              In addition, the entire system is operated by artificial
              intelligence.
            </p>
            <p>
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Most likely, this transport system
              will be used by passengers through a mobile application that will
              schedule trips, taking into account both road traffic and weather
              conditions. After the passengers reach their destination, the two
              systems, road and air, return to the base, where they will
              recharge their batteries for the next trip ordered by the
              customers.
            </p>
            <h3 className="title-about-car">
              &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;BE ON TOP OF THE WORLD!
            </h3>
          </div>
        </div>
      </section>
      <section id="pre-order">
        <div>
          <Popup
            trigger={
              <button type="button" className="btn btn-primary">
                Pre-order now!
              </button>
            }
            position="right center"
          >
            <div> Pre-orders will be available soon!</div>
          </Popup>
        </div>
      </section>
      <section id="footer" className="bg-dark">
        <MDBFooter className="text-center" color="white" bgColor="dark">
          <MDBContainer className="p-4">
            <section className="">
              <form action="">
                <MDBRow className="d-flex justify-content-center">
                  <MDBCol size="auto">
                    <p className="pt-2">
                      <strong>Sign up</strong>
                    </p>
                  </MDBCol>

                  <MDBCol md="5" start>
                    <MDBInput
                      contrast
                      type="email"
                      label="Email address"
                      className="mb-4"
                    />
                  </MDBCol>

                  <MDBCol size="auto">
                    <MDBBtn
                      outline
                      color="light"
                      type="submit"
                      className="mb-4"
                    >
                      Subscribe
                    </MDBBtn>
                  </MDBCol>
                </MDBRow>
              </form>
            </section>

            <section className="mb-4">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt
                distinctio earum repellat quaerat voluptatibus placeat nam,
                commodi optio pariatur est quia magnam eum harum corrupti dicta,
                aliquam sequi voluptate quas.
              </p>
            </section>

            <section className="">
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </MDBCol>

                <MDBCol lg="3" md="6" className="mb-4 mb-md-0">
                  <h5 className="text-uppercase">Links</h5>

                  <ul className="list-unstyled mb-0">
                    <li>
                      <a href="#!" className="text-white">
                        Link 1
                      </a>
                    </li>
                    <li>
                      <a href="#!" className="text-white">
                        Link 2
                      </a>
                    </li>
                  </ul>
                </MDBCol>
              </MDBRow>
            </section>
          </MDBContainer>

          <div
            className="text-center p-3"
            style={{ backgroundColor: "rgba(0, 0, 0, 0.2)" }}
          >
            © 2022 Copyright:
            <a className="text-white" href="#1">
              ThisCar
            </a>
          </div>
        </MDBFooter>
      </section>
    </div>
  );
}

export default App;
