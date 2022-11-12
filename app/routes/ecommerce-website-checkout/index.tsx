import { Link } from "@remix-run/react";
import {
  ApplePaySVG,
  CartSVG,
  ClockSVG,
  CreditCardSVG,
  EmailSVG,
  GooglePaySVG,
  LeftArrowSVG,
  MultipleUsersSVG,
  PhoneSVG,
  RightArrowSVG,
  RocketSVG,
  TruckSVG,
  UserSVG,
  WifiSVG,
} from "./svg";
import styles from "~/styles/ecommerce-website-checkout/styles.css";
import type { LinksFunction } from "@remix-run/node";

export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: styles }];
};

export const WebsiteRender = () => {
  return (
    <div>
      <NavBar />
      <main className="flex px-16 pt-12">
        <MainContent />
        <div className="ml-auto">
          <CheckoutCard />
        </div>
      </main>
    </div>
  );
};

const NavBar = () => {
  const onHoverLink = "hover:text-primary-blue hover:underline";
  const linkStyle = `cursor-pointer ${onHoverLink}`;
  return (
    <div className="px-8">
      <nav className="flex items-center justify-between h-24 border-b-gray-light border-b">
        <h1 className="text-primary-blue">Novea Shop</h1>
        <ol className="flex items-center gap-x-6">
          <li className={linkStyle}>Home</li>
          <li className={linkStyle}>New Items</li>
          <li className={linkStyle}>Support</li>
          <li className={linkStyle}>About</li>
          <li className={linkStyle}>Contact</li>
          <li className={linkStyle}>Need Help?</li>
        </ol>
        <div className="flex gap-x-4">
          <div className="flex items-center gap-x-1">
            <p className="text-primary-blue text-sm">( 4 items )</p>
            <div className="text-gray-dark">
              <CartSVG />
            </div>
          </div>
          <div className="w-8 h-8 bg-primary-blue rounded-md grid place-items-center text-white">
            NS
          </div>
        </div>
      </nav>
    </div>
  );
};

const MainContent = () => {
  return (
    <div className="flex flex-col gap-y-12">
      <Link
        to="#"
        className="text-primary-blue flex items-center gap-x-2 hover:underline"
      >
        <LeftArrowSVG />
        <span className="text-xs">Back to card</span>
      </Link>
      <div>
        <h1 className="text-5xl pb-5">Checkout</h1>
        <p className="text-gray-light">
          a checkout is a counter where you pay for things you are buying
        </p>
      </div>
      <ol className="flex flex-col gap-y-6 list-decimal list-inside text-lg">
        <li>
          Contact Information
          <div className="all-inputs pt-6">
            <Input
              icon={<UserSVG />}
              defaultValue="Nivekithan"
              label="First Name"
            />
            <Input
              icon={<MultipleUsersSVG />}
              defaultValue="Vinayagam"
              label="Last Name"
            />
            <Input
              icon={<PhoneSVG />}
              defaultValue="998199123X"
              label="Phone Number"
            />
            <Input
              icon={<EmailSVG />}
              defaultValue="hey@nivekithan.com"
              label="Email"
            />
          </div>
        </li>
        <li>
          Delivery Method
          <div className="flex gap-x-16 pt-6">
            <SelectButton text="Some-day" icon={<RocketSVG />} active />
            <SelectButton text="Express" icon={<TruckSVG />} />
            <SelectButton text="Normal" icon={<ClockSVG />} />
          </div>
        </li>
        <li>
          Payment Method
          <div className="flex gap-x-16 pt-6">
            <SelectButton text="Apply Pay" active icon={<ApplePaySVG />} />
            <SelectButton text="Google Pay" icon={<GooglePaySVG />} />
          </div>
        </li>
      </ol>
    </div>
  );
};

type InputProps = {
  icon: React.ReactNode;
  label: string;
  defaultValue: string;
};

const Input = ({ defaultValue, icon, label }: InputProps) => {
  return (
    <div className="input-container">
      <div className="icon justify-self-center text-gray-dark-200">{icon}</div>
      <span className="h-3 seperator border-r border-gray-light"></span>
      <label className="text-xs text-gray-dark" htmlFor={`${label}-input`}>
        {label}
      </label>
      <input
        type="text"
        className="pr-2 pb-1 leading-none outline-none"
        defaultValue={defaultValue}
        id={`${label}-input`}
      />
      <div className="border"></div>
    </div>
  );
};

type SelectButtonProps = {
  icon: React.ReactNode;
  text: string;
  active?: boolean;
};

const SelectButton = ({ icon, text, active }: SelectButtonProps) => {
  const activeSpecificStyles = active ? "bg-primary-blue text-white" : "";
  const activeSpecificStylesForText = active
    ? "text-white"
    : "text-gray-dark-200";

  return (
    <button
      className={`flex gap-x-2 px-4 py-3 rounded-md ${activeSpecificStyles} border-gray-dark-200 border w-40 items-center`}
    >
      {icon}
      <span className={`text-base ${activeSpecificStylesForText} `}>
        {text}
      </span>
    </button>
  );
};

const CheckoutCard = () => {
  return (
    <div className="w-96 isolate pb-6">
      <div className="w-80 mx-auto">
        <DebitCard />
        <CartInfoCard />
      </div>
    </div>
  );
};

const DebitCard = () => {
  return (
    <div className="bg-primary-blue text-white h-52 mx-auto z-10 relative">
      <div className="p-7 h-full credit-card-container">
        <div className="credit-card-icon">
          <CreditCardSVG />
        </div>
        <div className="wifi-icon">
          <WifiSVG />
        </div>
        <p className="expiry-date text-base font-medium">Exp 09 / 27</p>
        <p className="card-number text-2xl font-medium">**** 5478</p>
        <p className="card-holder-name text-sm font-medium">Mr. Nivekithan S</p>
      </div>
    </div>
  );
};

const CartInfoCard = () => {
  return (
    <div className="-mt-40">
      <WhitespaceForDebitCard />
      <div className="cart-info">
        <div className="h-16 flex justify-between items-center inside">
          <p className="text-base">Manage Cards</p>
          <RightArrowSVG />
        </div>
        <div className="out border-b border-gray-light "></div>
        <h1 className="text-5xl font-light out mx-auto py-8">36 Items</h1>
        <div className="inside flex flex-col gap-y-6 pb-8">
          <BillPrice label="Subtotal" price="$ 581.00" />
          <BillPrice label="Discount" price="- $ 100.00" />
          <BillPrice label="Delivery Service" price="+ $ 30.00" />
        </div>
        <div className="out border-b border-gray-light"></div>
        <div className="inside flex justify-between items-center font-medium py-6">
          <h3 className="font-bold">Total</h3>
          <p>
            <span>$ </span>
            <span className="text-3xl">499.00</span>
          </p>
        </div>
        <button className="out bg-primary-blue text-white py-3 grid place-items-center text-xl">Pay</button>
      </div>
    </div>
  );
};

type BillPriceProps = {
  label: string;
  price: string;
};

const BillPrice = ({ label, price }: BillPriceProps) => {
  return (
    <div className="flex items-center justify-between text-base">
      <h3 className="text-gray-dark-200">{label}</h3>
      <p>{price}</p>
    </div>
  );
};

const WhitespaceForDebitCard = () => {
  return <div className="h-40"></div>;
};

export default WebsiteRender;
