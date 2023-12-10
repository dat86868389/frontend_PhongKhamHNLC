import { useState } from "react";

import {
  HomeOutlined,
  FileSearchOutlined,
  FolderOpenOutlined,
  MenuOutlined,
  UnorderedListOutlined,
  FileTextOutlined,
  BellOutlined,
  UploadOutlined,
  ApartmentOutlined,
  ClusterOutlined,
  UsergroupAddOutlined,
  UserOutlined,
  PartitionOutlined,
} from "@ant-design/icons";
import CollapseMemuItem from "./CollapseMemuItem";

const MenuSidebar = (props) => {
  const { isCloseMenu } = props;
  const [indexItemSelected, setIndexItemSelected] = useState(null);

  const lstDataMenu = [
    {
      text: "Trang quản trị",
      icon: <HomeOutlined />,
    },
    {
      text: "Quản trị nội dung",
      icon: <FileSearchOutlined />,
      listSubMenu: [
        {
          icon: (
            <UnorderedListOutlined className={`${isCloseMenu && "text-xs"}`} />
          ),
          text: "Các trang chính",
        },
        {
          icon: <FileTextOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Các bài viết",
        },
        {
          icon: <BellOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Thông báo nội bộ",
        },
      ],
    },
    {
      text: "Quản lý File",
      icon: <FolderOpenOutlined />,
      listSubMenu: [
        {
          icon: <UploadOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Upload - Download File",
        },
      ],
    },
    {
      text: "Quản lý Menu",
      icon: <FolderOpenOutlined />,
      listSubMenu: [
        {
          icon: <MenuOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Menu chính",
        },
        {
          icon: <ApartmentOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Các nút lệnh",
        },
        {
          icon: <ClusterOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Chức năng nội bộ",
        },
      ],
    },
    {
      text: "Quản lý Tài khoản",
      icon: <UsergroupAddOutlined />,
      listSubMenu: [
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản quản trị",
        },
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản nhân viên",
        },
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản bệnh nhân",
        },
      ],
    },
    {
      text: "Phân quyền tài khoản",
      icon: <PartitionOutlined />,
      listSubMenu: [
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản quản trị",
        },
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản nhân viên",
        },
        {
          icon: <UserOutlined className={`${isCloseMenu && "text-xs"}`} />,
          text: "Tài khoản bệnh nhân",
        },
      ],
    },
  ];

  const handleClickItem = (index) => {
    if (indexItemSelected !== index) {
      setIndexItemSelected(index);
    } else {
      setIndexItemSelected(null);
    }
  };

  return (
    <div className="w-full h-full ">
      {lstDataMenu.map((itemMenu, index) => (
        <CollapseMemuItem
          key={index}
          listSubMenu={itemMenu?.listSubMenu}
          isCloseMenu={isCloseMenu}
          isActive={indexItemSelected === index ? true : false}
          onClick={() => handleClickItem(index)}
          text={itemMenu.text}
          icon={itemMenu.icon}
        />
      ))}
    </div>
  );
};

export default MenuSidebar;
