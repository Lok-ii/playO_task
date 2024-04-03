import "@coreui/coreui/dist/css/coreui.min.css";
import { CSidebar } from "@coreui/react";
import { CSidebarHeader } from "@coreui/react";
import { CSidebarBrand } from "@coreui/react";
import { CSidebarNav } from "@coreui/react";
import { CNavTitle } from "@coreui/react";
import { CNavItem } from "@coreui/react";
import { CNavGroup } from "@coreui/react";
import CIcon from "@coreui/icons-react";
import {
  cilSpeedometer,
  cilPuzzle,
  cilCloudDownload,
  cilLayers,
  cilPeople,
  cilUser,
} from "@coreui/icons";
import { CBadge } from "@coreui/react";
import Logo from "../../assets/svgs/Logo";
import people from "../../assets/svgs/Elements/Icon 1.svg";
import download from "../../assets/svgs/Elements/Icon 2.svg";
import analysis from "../../assets/svgs/Elements/Icon 3.svg";
import images from "../../assets/svgs/Elements/Icon 4.svg";
import calender from "../../assets/svgs/Elements/Icon 5.svg";
import fire from "../../assets/svgs/Elements/Icon 6.svg";
import data from "../../assets/svgs/Elements/Icon 7.svg";
import settings from "../../assets/svgs/Elements/Icon 8.svg";

const Sidebar = () => {
  return (
    <CSidebar
      className="border-end bg-black rounded-e-2xl text-white h-[100vh]"
      unfoldable
    >
      <CSidebarHeader className="border-bottom">
        <CSidebarBrand>
          <Logo />{" "}
        </CSidebarBrand>
      </CSidebarHeader>
      <CSidebarNav>
        <CNavTitle className="text-white flex gap-3"> Menu</CNavTitle>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={people} alt="" /> People
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={download} alt="" /> Download
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          {" "}
          <img src={analysis} alt="" />
          Analysis
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={images} alt="" />
          Images
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={calender} alt="" />
          Calender
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={fire} alt="" />
          Firewall
        </CNavItem>
        <CNavItem href="#" className="text-white flex gap-3">
          <img src={data} alt="" />
          Data
        </CNavItem>
      </CSidebarNav>
    </CSidebar>
  );
};

export default Sidebar;
