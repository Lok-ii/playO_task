import { createContext, useContext, useState } from "react";
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

  const productData = [
    {
      value: [hat, "Hat"],
      label: "Hat",
    },
    {
      value: [laptop, "Laptop"],
      label: "Laptop",
    },
    {
      value: [phone, "Phone"],
      label: "Phone",
    },
    {
      value: [bag, "Bag"],
      label: "Bag",
    },
    {
      value: [headset, "Headset"],
      label: "Headset",
    },
    {
      value: [mouse, "Mouse"],
      label: "Mouse",
    },
    {
      value: [clock, "Clock"],
      label: "Clock",
    },
    {
      value: [tshirt, "T-shirt"],
      label: "T-shirt",
    },
    {
      value: [monitor, "Monitor"],
      label: "Monitor",
    },
    {
      value: [keyboard, "Keyboard"],
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
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
export default Context;
