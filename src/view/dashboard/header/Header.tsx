import "../header/Header.css";
import { List, XCircleFill } from "react-bootstrap-icons";

export function Headeroption(props: any) {
  return (
    <li className={props.footerli}>
      <a className={props.foota} href={props.href} target={props.footertarget}>
        {props.footaname}
        <span>{props.Headeroption}</span>
      </a>
    </li>
  );
}
export function Dropdown(props: any) {
  return (
    <div>
      <a className="dropdown-item head" href={props.headhref}>
        {props.headname}
      </a>
      <a className="dropdown-item ll" href={props.childhref1}>
        {props.childname1}
      </a>
      <a className="dropdown-item ll" href={props.childhref2}>
        {props.childname2}
      </a>
      <a className="dropdown-item ll" href={props.childhref3}>
        {props.childname3}
      </a>
      <a className="dropdown-item ll" href={props.childhref4}>
        {props.childname4}
      </a>
    </div>
  );
}

export function Header() {
  return (
    <div className="header fixed-top " style={{ height: "75px" }}>
      <nav className="navbar navbar-expand-md col-lg-10   mx-auto  p-0">
        <div className="col d-flex align-items-center justify-content-between  px-0">
          <a className="head-logo" href="/">
            <img
              src={require("../../../asset/sample1/logo.png")}
              alt="paype logo"
              className="logo-circle"
            />
          </a>
          <a
            className="navbar-toggler border-0 mt-3"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasExample"
            aria-controls="offc6anvasExample"
          >
            <i className="fs-1 text-dark mx-4">
              <List />
            </i>
          </a>
          <div
            className="offcanvas offcanvas-start-md "
            id="offcanvasExample"
            aria-labelledby="offcanvasExampleLabel"
          >
            <div
              className="offcanvas-header d-flex d-md-none "
              style={{ borderBottom: "1px solid black" }}
            >
              <a className="head-logo" href="/">
                <img
                  src={require("../../../asset/sample1/logo.png")}
                  alt="paype logo"
                  className="logo-circle"
                />
              </a>
              <a
                href="javascript:void(0) "
                className="text-reset p-0 mb-3"
                data-bs-dismiss="offcanvas"
                aria-label="close"
              >
                <i className="fs-1">
                  <XCircleFill />
                </i>
              </a>
            </div>
            <div className="offcanvas-body p-lg-0 ">
              <ul className="navbar-nav">
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/about">
                    About us
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    data-bs-toggle="dropdown"
                  >
                    Services
                  </a>

                  <ul className="dropdown-menu ">
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/banking"}
                      footaname={"Banking Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/payment"}
                      footaname={"Payment Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/tours"}
                      footaname={"Tours & Travel Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/bada"}
                      footaname={"Bada Bazar"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/suraksha"}
                      footaname={"Suraksha"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/loan"}
                      footaname={"Loan Services"}
                    />
                    <Headeroption
                      foota={"dropdown-item"}
                      href={"/devices"}
                      footaname={"Devices & Other Services"}
                    />
                  </ul>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link" href="/contactus">
                    Contact Us
                  </a>
                </li>
              </ul>
              <ul className="navbar-nav">
                <li className="nav-item">
                  <a className="nav-link" href="/login">
                    Logins
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
