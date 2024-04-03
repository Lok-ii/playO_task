import React from "react";
import Select from "react-select";
import { useTask } from "../../Context/Context";
import { createUser } from "../../utils/createUser";
import { updateUser } from "../../utils/updateUser";
import { IoClose } from "react-icons/io5";

const Form = () => {
  const {
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
    showForm,
    setShowForm,
    productData,
  } = useTask();
  return (
    <div
      className={`w-[20rem] h-[100vh] bg-white text-black fixed ${
        showForm ? "right-0" : "right-[-50rem]"
      } transition-all duration-300 ease-in-out top-0`}
    >
      <div className="w-full h-full overflow-y-auto relative">
        <IoClose
          className="absolute top-6 right-8 text-2xl cursor-pointer"
          onClick={() => setShowForm((prev) => !prev)}
        />
        <form
          className="w-full h-full p-4 flex flex-col gap-3"
          onSubmit={(e) => {
            if (id === "") {
              createUser({
                customer: customerName,
                product: product,
                date: date,
                amount: amount,
                payment: transfer,
                status: status,
              });
            } else {
              updateUser({
                userData: {
                  customer: customerName,
                  product: product,
                  date: date,
                  amount: amount,
                  payment: transfer,
                  status: status,
                },
                id: id,
              });
            }
            e.preventDefault();
            setAmount(0);
            setCustomerName("");
            setTransfer("");
            setDate("");
            setProduct("");
            setStatus("");
          }}
        >
          <h1 className="text-lg font-bold">Add Customer</h1>
          <div className="w-[100%] flex flex-col gap-2">
            <label htmlFor="product">Select Product</label>
            <Select
              name="product"
              placeholder="Select a Product"
              options={productData}
              isSearchable={true}
              isClearable={false}
              formatOptionLabel={(prod) => (
                <div className="product-option flex items-center gap-3">
                  <img src={prod.value[0]} alt="product-image" />
                  <span>{prod.label}</span>
                </div>
              )}
              className="basic-single max-w-[100%] w-[100%] rounded-lg"
              classNamePrefix="innerSelect select"
              onChange={(e) => {
                setProduct(e.value);
              }}
              required
            />
          </div>
          <div className="w-[100%] flex flex-col gap-2 justify-center">
            <label htmlFor="customer">Customer Name </label>
            <input
              value={customerName}
              onChange={(e) => {
                setCustomerName(e.target.value);
              }}
              className="w-full py-2 px-3 rounded-md border-[1px] border-gray outline-none"
              type="text"
              name="customer"
              id="customer"
              placeholder="Enter Customer Name"
              required
            />
          </div>
          <div className="w-[100%] flex flex-col gap-2 justify-center">
            <label htmlFor="date">Date </label>
            <input
              className="w-full py-2 px-3 rounded-md border-[1px] border-gray outline-none"
              type="Date"
              name="date"
              id="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
              placeholder="Enter Customer Name"
              required
            />
          </div>
          <div className="w-[100%] flex flex-col gap-2 justify-center">
            <label htmlFor="amount">Amount </label>
            <div className="flex items-center gap-1 bg-white rounded-md px-2 border-[1px] border-gray ">
              <span>$</span>
              <input
                className="w-full py-2 rounded-md outline-none"
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="Enter Customer Name"
                required
              />
            </div>
          </div>
          <div className="w-[100%] flex flex-col gap-2">
            <label htmlFor="payment">Payment Mode</label>
            <Select
              name="payment"
              options={[
                { value: "transfer", label: "Transfer Bank" },
                { value: "cash", label: "Cash on Delivery" },
              ]}
              isSearchable={true}
              isClearable={false}
              className="basic-single max-w-[100%] w-[100%] rounded-lg"
              classNamePrefix="innerSelect select"
              onChange={(e) => {
                setTransfer(e.value);
              }}
              required
            />
          </div>
          <div className="w-[100%] flex flex-col gap-2">
            <label htmlFor="status">Status</label>
            <Select
              name="status"
              options={[
                { value: "complete", label: "Complete" },
                { value: "process", label: "Process" },
                { value: "cancelled", label: "Cancelled" },
              ]}
              isSearchable={true}
              isClearable={false}
              className="basic-single max-w-[100%] w-[100%] rounded-lg"
              classNamePrefix="innerSelect select"
              onChange={(e) => {
                setStatus(e.value);
              }}
              required
            />
          </div>
          <button
            type="submit"
            className="bg-black text-white py-2 rounded-lg "
          >
            {" "}
            + Add
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
