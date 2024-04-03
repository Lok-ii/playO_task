import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";
import { useTask } from "../../Context/Context";
import { deleteUser } from "../../utils/deleteUser";

const TableRow = ({ item, idx }) => {
  const {
    setId,
    setShowForm,
    setStatus,
    setTransfer,
    setDate,
    setProduct,
    setCustomerName,
    setAmount,
    setUserData,
  } = useTask();
  const date = dayjs(item.date).format("YYYY-MM-DD");
  console.log(date);
  return (
    <tr
      className={`flex md:flex-row flex-col items-center justify-around md:h-[3rem] ${
        idx % 2 === 0 ? "bg-gray-100" : "bg-white"
      }`}
    >
      <td>
        <p>#{item.trackingId}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem] flex items-center gap-2">
        <div className="flex items-center gap-2">
          <img src={item.product[0]} alt="" />
        </div>
        <p>{item.product[1]}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
        <p>{item.customer}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
        <p>{date}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
        <p>${item.amount}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
        <p>{item.payment}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
        <p>{item.status}</p>
      </td>
      <td className="flex items-center gap-2">
        <LiaEditSolid
          className="text-2xl cursor-pointer"
          onClick={() => {
            setId(item._id);
            setAmount(item.amount);
            setCustomerName(item.customer);
            setDate(date);
            setProduct(item.product);
            setTransfer(item.payment);
            setStatus(item.status);
            setShowForm(true);
          }}
        />
        <MdDelete
          className="text-2xl cursor-pointer"
          onClick={() => {
            deleteUser(item._id);
            setUserData((prev) => {
              return prev.filter((e) => e._id !== item._id);
            });
          }}
        />
      </td>
    </tr>
  );
};

export default TableRow;
