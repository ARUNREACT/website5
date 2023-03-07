import { Twoslide } from "../../../component/Layout";
import { Footer } from "../footer/Footer";
import { Header } from "../header/Header";

export function Payment() {
  return (
    <div className="main">
      <Header />
      <div className="mainpagehead">
        <div className="payment">
          <h1 className="text-center d-flex align-items-center text-white justify-content-center">
            Payment Services
          </h1>
        </div>
        <div className="p-sm-5 p-3">
          <p>
            The Spice Money Payment Services allow Adhikaris to accept payments
            in different ways – including debit cards, and by generating a QR
            Code in an Android Smartphone. The payment methods are robust,
            efficient and secure.
          </p>
          <Twoslide
            classname={"twoslide-one"}
            h1={`Cash Collection Point`}
            p={`Spice Money branches are now Cash Collection Points where Agents, customers and bank representatives can deposit their premiums, EMIs etc. This service provides our Adhikaris with a unique way to expand their business and earn more at the same time. It is free for both Adhikaris and customers and is aimed at expanding customer reach by diversifying their services.`}
            img={
              "https://zenithfinserv.com/img/images/cash-collection-point.png"
            }
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`BBPS`}
            p={`Spice Money enables its Adhikaris to accept payments for all utility bills such as water, electricity, Gas, and Broadband through the Bharat Bill Payment System (BBPS). The BBPS service also facilitates other payments for services like FasTag, Municipal Corporation Tax, LIC Premiums and much more.`}
            img={
              "https://www.bankit.in/uploads/category/8791BillPaymentImage.png"
            }
          />
          <Twoslide
            classname={"twoslide-one"}
            h1={`Mobile and DTH Recharge`}
            p={`Spice Money Adhikaris can now get the mobile phones and DTH services recharged for their customers and earn attractive commission on every transaction. Recharge is now available from all operators across India. Customers also have access to all the latest offers that come with the recharge.`}
            img={
              "https://www.bankit.in/uploads/category/3014BankitRechargeImage.png"
            }
          />
          <Twoslide
            classname={" twoslide-two"}
            h1={`Aadhaar Pay`}
            p={`With the Spice Money Aadhaar Pay, Adhikaris can accept cashless payments from their customers, simply with an Aadhaar number and a fingerprint scanner. This system of fast, secure, and seamless payment management service gives both the customers and our Adhikaris the freedom from day-to-day cash management.`}
            img={"https://pay1v2site.s3.ap-south-1.amazonaws.com/aeps.png"}
          />
          <Twoslide
            classname={"twoslide-one"}
            h1={`Prepaid Card`}
            p={`Prepaid Card is an innovation for Spice Money Adhikaris. Spice money provides co-branded, open-loop prepaid cards which Adhikaris can use to purchase items online or pay bills for their customers.`}
            img={
              "https://payabl.com/storage/app/media/Pages-New/prepaid-cards/Group%205696.png"
            }
          />
        </div>
      </div>
      <Footer />
    </div>
  );
}
