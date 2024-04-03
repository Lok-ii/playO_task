import { IoCaretUpSharp } from "react-icons/io5";
import { IoCaretDownSharp } from "react-icons/io5";
import TableRow from "../Extra/TableRow";
import { useEffect } from "react";
import { getUserData } from "../../utils/getUserData";
import { useTask } from "../../Context/Context";

const Table = () => {
  const header = [
    "Tracking ID",
    "Product",
    "Customer",
    "Date",
    "Amount",
    "Payment Mode",
    "Status",
    "Action",
  ];

  const { userData, setUserData } = useTask();

  useEffect(() => {
    const tableData = async () => {
      const data = await getUserData();
      setUserData(data.data);
    }
    tableData();
  }, [])
  return (
    <div className="w-full">
      <table className="tableHeader w-full">
        <thead className="w-full flex items-center justify-around">
          {header.map((head, idx, arr) => {
            return (
              <th key={idx + "header"} className="flex items-center gap-1 w-[6rem]">
                <p>{head}</p>
                {(idx === 1 || idx === 2 || idx === 3 || idx === 6) && (
                  <div className="flex flex-col items-center">
                    <IoCaretUpSharp className="text-[0.75rem] cursor-pointer" />{" "}
                    <IoCaretDownSharp className="text-[0.75rem] cursor-pointer" />{" "}
                  </div>
                )}
              </th>
            );
          })}
        </thead>
        <tbody>
          {
            userData && userData.map((item, idx) => {
              return <TableRow key={item._id} item={item} idx={idx} />;
            })
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
