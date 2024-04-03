import DropdownSelector from "../Extra/DropdownSelector";
import search from "../../assets/svgs/Search.svg";
import { useTask } from "../../Context/Context";
import Photo from "../../assets/Photo.png";
import Table from "../Table/Table";
import Form from "../Form/Form";

const Home = () => {
  const { searchIcon, setSearchIcon, setShowForm } = useTask();
  return (
    <div className="fixed w-[95%] h-full right-0 py-4 px-8 flex flex-col gap-4 overflow-y-auto">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <img
            src={search}
            alt=""
            className="cursor-pointer"
            onClick={() => setSearchIcon((prev) => !prev)}
          />
          <input
            type="text"
            placeholder="search..."
            className={`h-[2.5rem] bg-grayPrimary rounded-lg ${
              searchIcon ? "w-0 p-0" : "w-[50%] px-2"
            } transition-all duration-200 ease-in-out`}
          />
        </div>
        <div>
          <img className="cursor-pointer" src={Photo} alt="" />
        </div>
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <p>Show</p>
          <DropdownSelector />
          <p>entries</p>
        </div>
        <div>
          <button className="bg-black text-white py-1 px-6 rounded-lg " onClick={() => setShowForm(prev => !prev)}>
            + Add Customer
          </button>
        </div>
      </div>
      <div>
        <Table />
      </div>
      <Form />
    </div>
  );
};

export default Home;
