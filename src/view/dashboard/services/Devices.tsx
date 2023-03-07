import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Devices() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="devices">
          <h1 className="text-center d-flex align-items-center text-white justify-content-center">
            Devices & Others Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            The different devices provided to our Adhikaris enables them to
            offer a host of services to their customers saving them time, money,
            and effort.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Biometric Devices, Printer`}
            p={`Adhikaris can buy biometric devices and printers from Spice Money to carry out seamless operations and provide hassle-free services to their customers.`}
            img={
              "https://www.idemia.com/wp-content/uploads/2020/10/mso-1300-series-idemia-450x256.jpg"
            }
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Pan Card Services`}
            p={`Spice Money Adhikaris can now get a new PAN card made or get an existing one updated through authorized government channels. Our strong and secure network provides seamless service, making the whole process quick and hassle-free for our customers.`}
            img={
              "https://egov.eletsonline.com/wp-content/uploads/2017/04/PAN-Card.png"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
