import { createContext, useContext, useRef, useState } from "react";
import hat from "../assets/images/hat.png";
import laptop from "../assets/images/laptop.png";
import phone from "../assets/images/phone.png";
import bag from "../assets/images/bag.png";
import headset from "../assets/images/headset.png";
import mouse from "../assets/images/mouse.png";
import clock from "../assets/images/clock.png";
import tshirt from "../assets/images/tshirt.png";
import monitor from "../assets/images/monitor.png";
import keyboard from "../assets/images/keyboard.png";

export const TaskContext = createContext({});

export const useTask = () => useContext(TaskContext);

const Context = ({ children }) => {
  const [pages, setPages] = useState(10);
  const [searchIcon, setSearchIcon] = useState(true);
  const [customerName, setCustomerName] = useState("");
  const [product, setProduct] = useState([]);
  const [date, setDate] = useState("");
  const [transfer, setTransfer] = useState("");
  const [status, setStatus] = useState("");
  const [amount, setAmount] = useState(0);
  const [id, setId] = useState("");
  const [userData, setUserData] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [loading, setLoading] = useState(false);
  const productRef = useRef();
  const paymentRef = useRef();
  const statusRef = useRef();

  const productData = [
    {
      value: ["https://i.ibb.co/SdWWZRZ/hat.png", "Hat"],
      label: "Hat",
    },
    {
      value: ["https://i.ibb.co/GxYDtPR/laptop.png", "Laptop"],
      label: "Laptop",
    },
    {
      value: ["https://i.ibb.co/cJsqjLb/phone.png", "Phone"],
      label: "Phone",
    },
    {
      value: ["https://i.ibb.co/yVZS9V8/bag.png", "Bag"],
      label: "Bag",
    },
    {
      value: ["https://i.ibb.co/Dghmp0b/headset.png", "Headset"],
      label: "Headset",
    },
    {
      value: ["https://i.ibb.co/LzCPgvL/mouse.png", "Mouse"],
      label: "Mouse",
    },
    {
      value: ["https://i.ibb.co/93KZ9sx/clock.png", "Clock"],
      label: "Clock",
    },
    {
      value: ["https://i.ibb.co/VqsqK73/tshirt.png", "T-shirt"],
      label: "T-shirt",
    },
    {
      value: ["https://i.ibb.co/PwDZxMY/monitor.png", "Monitor"],
      label: "Monitor",
    },
    {
      value: ["https://i.ibb.co/V318xdx/keyboard.png", "Keyboard"],
      label: "Keyboard",
    },
  ];

  const value = {
    pages,
    setPages,
    searchIcon,
    setSearchIcon,
    status,
    setStatus,
    transfer,
    setTransfer,
    date,
    setDate,
    product,
    setProduct,
    customerName,
    setCustomerName,
    searchIcon,
    setSearchIcon,
    pages,
    setPages,
    amount,
    setAmount,
    id,
    setId,
    userData,
    setUserData,
    showForm,
    setShowForm,
    productData,
    productRef,
    paymentRef,
    statusRef,
    loading,
    setLoading,
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
export default Context;
