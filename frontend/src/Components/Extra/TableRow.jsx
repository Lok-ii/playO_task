import React from "react";
import { LiaEditSolid } from "react-icons/lia";
import { MdDelete } from "react-icons/md";
import dayjs from "dayjs";

const TableRow = ({ item, idx }) => {
  const date = dayjs(item.date).format("YYYY-MM-DD");
  console.log(date);
  return (
    <tr
      className={`flex items-center justify-around h-[3rem] ${
        idx % 2 === 0 ? "bg-gray-100" : "bg-white"
      }`}
    >
      <td>
        <p>#{item.trackingId}</p>
      </td>
      <td className="min-w-[3.5rem] w-[6rem]">
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
        <LiaEditSolid className="text-2xl" />
        <MdDelete className="text-2xl" />
      </td>
    </tr>
  );
};

export default TableRow;
