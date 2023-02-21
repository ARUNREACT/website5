import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Banking() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="banking">
          <h1 className="text-center d-flex align-items-center text-white justify-content-center">
            Banking Services
          </h1>
        </div>
        <div className="bg-secondary p-5">
          <Twoslide
            classname={" twoslide-one"}
            h1={`AePS (Aadhaar Enabled Payment System)`}
            p={`The Spice Money AePS service enables the customer to use their Aadhaar card to access their Aadhaar-linked bank account and carry out basic banking transactions like withdrawals, deposits, balance enquiry, and bank transfers. These transactions can be easily done using a secure Biometric Scanner which is available with all Adhikaris at Spice Money with Digital Dukaan.`}
            img={"https://spicemoney.com/assets/images/services/AePS.jpg"}
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`AePS (Aadhaar Enabled Payment System)`}
            p={`The Spice Money AePS service enables the customer to use their Aadhaar card to access their Aadhaar-linked bank account and carry out basic banking transactions like withdrawals, deposits, balance enquiry, and bank transfers. These transactions can be easily done using a secure Biometric Scanner which is available with all Adhikaris at Spice Money with Digital Dukaan.`}
            img={"https://spicemoney.com/assets/images/services/AePS.jpg"}
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
