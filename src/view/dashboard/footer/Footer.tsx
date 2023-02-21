import "../footer/Footer.css";

export function Option(props: any) {
  return (
    <div className="d-flex flex-column option">
      <h5 className="p-0 ">{props.h5}</h5>
      <span></span>
      <a href={props.a1href}>{props.a1name}</a>
      <a href={props.a2href}>{props.a2name}</a>
      <a href={props.a3href}>{props.a3name}</a>
      <a href={props.a4href}>{props.a4name}</a>
      <a href={props.a5href}>{props.a5name}</a>
      <a href={props.a6href}>{props.a6name}</a>
      <a href={props.a7href}>{props.a7name}</a>
      <a href={props.a8href}>{props.a8name}</a>
      <a href={props.a9href}>{props.a9name}</a>
      {/* <a href={props.a10href}>{props.a10name}</a>
      <a href={props.a11href}>{props.a11name}</a> */}
    </div>
  );
}
export function Icon(props: any) {
  return (
    <p className="d-flex icon">
      <i className={props.icon}></i>
      {props.p}
    </p>
  );
}

export function Footer() {
  return (
    <div className="main-footer">
      <div className="footer col-lg-12 mx-auto d-flex flex-wrap pt-5 p-0">
        <div className="col-lg-3 col-sm-6  logo text-center">
          <img
            className="img-fluid"
            src={require("../../../asset/sample1/logo.png")}
            alt=""
          />
          <br />
          <img
            className="img-fluid"
            src="https://in.rapipay.com/wp-content/uploads/2022/12/googleplay2.png"
            alt=""
          />
        </div>
        <div className="col-lg-3 col-sm-6 bg-dager">
          <Option
            h5={`General`}
            a1href={"/"}
            a1name={`Terms & Conditions`}
            a2href={"/"}
            a2name={`Privacy Policy`}
            a3href={"/"}
            a3name={`Careers`}
            a4href={"/"}
            a4name={`Contact Us`}
            a5href={"/"}
            a5name={``}
            a6href={"/"}
            a6name={""}
            a7href={"/"}
            a7name={""}
            a8href={"/"}
            a8name={""}
            a9href={""}
            a9name={""}
            // a10href={"/"}
            // a10name={"DBO Leads"}
          />
        </div>
        <div className="col-lg-3 col-sm-6 bg-ifo">
          <Option
            h5={`Services`}
            a1href={"/"}
            a1name={`Banking Services`}
            a2href={"/"}
            a2name={`Payment Services`}
            a3href={"/"}
            a3name={`Tours & Travel Services`}
            a4href={"/"}
            a4name={`Bada Bazar`}
            a5href={"/"}
            a5name={`Suraksha`}
            a6href={"/"}
            a6name={"Loan Services"}
            a7href={"/"}
            a7name={"Devices and Other Services"}
          />
        </div>
        <div className="col-lg-3 col-sm-6 bg-waning foot-address">
          <Option h5={`Corporate Office:`} />
          <Icon
            icon={"fa fa-home"}
            p={`Spice Money Limited, Spice Global Knowledge Park, 19A & 19B, Sector-125, Noida-201301, UP`}
          />
          <Icon icon={"fa fa-phone"} p={`+91 120 3645645, +91 120 5077786`} />

          <div className="d-flex social">
            <Icon icon={"fa fa-facebook"} />
            <Icon icon={"fa fa-twitter"} />
            <Icon icon={"fa fa-instagram"} />
            <Icon icon={"fa fa-linkedin"} />
            <Icon icon={"fa fa-youtube"} />
          </div>
        </div>

        <p className="text-center col-md-10 col-12 mt-4 last">
          © 2021 PayPe PVT. LTD. ALL RIGHT RESERVED.
        </p>
      </div>
    </div>
  );
}
