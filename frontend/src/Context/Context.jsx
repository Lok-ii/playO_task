import { createContext, useContext, useState } from "react";

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
  };
  return <TaskContext.Provider value={value}>{children}</TaskContext.Provider>;
};
export default Context;
