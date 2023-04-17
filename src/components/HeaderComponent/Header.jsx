import { Col } from "antd";
import React from "react";
import { WrapperHeader, WrapperHeaderAccount } from "./style";
import { Link } from "react-router-dom";
import {
  SearchOutlined,
  CaretDownOutlined,
  UserOutlined,
  ShoppingCartOutlined,
} from "@ant-design/icons";

const Header = () => {
  return (
    <WrapperHeader>
      <Col span={4}>
        <Link to="/" className="navbar-brand">
          <img
            src="https://drive.google.com/uc?id=1bd5GaHPmS_n5dlKfgxH43Md_hjGKYH_u"
            width={110}
            height={72}
            alt="Logo"
          />
        </Link>
      </Col>
      <Col span={12}>
        <div id="search__area">
          <form>
            <input
              className=" me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="" type="submit">
              <SearchOutlined />
            </button>
          </form>
        </div>
      </Col>
      <Col span={6}>
        <WrapperHeaderAccount>
          <UserOutlined style={{ fontSize: "24px" }} />
          <div>
            <span style={{ fontSize: "0.7rem" }}>Đăng nhập/Đăng ký</span>
            <div>
              <span>Tài khoản</span>
              <CaretDownOutlined />
            </div>
          </div>
        </WrapperHeaderAccount>
        <div>
          <ShoppingCartOutlined />
        </div>
      </Col>
    </WrapperHeader>
  );
};

export default Header;
