import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
// import LOGOOPENSOFT from "../../assets/home/partner/logoOpenSoft.png";
// import "./Footer.css";

const Footer = () => {
  return (
    <footer className="text-white py-5" style={{ backgroundColor: "#27AAE1" }}>
      <div className="container">
        <div className="row">
          {/* Logo and Company Info */}
          <div className="col-md-6 d-flex flex-column">
            <strong>CTY CỔ PHẦN CÔNG NGHỆ OPENSOFT</strong>
            <span>
              📍 Trụ sở: Tòa nhà CIC Tower, số 1 Phố Nguyễn Thị Duệ, Phường Yên Hòa, Quận Cầu Giấy,
              TP Hà Nội
            </span>
            <span>
              📧 Email:{" "}
              <a href="mailto:support@opensoft.com.vn" className="text-white">
                support@opensoft.com.vn
              </a>
            </span>
          </div>

          {/* Information and Automation Solutions */}
          <div className="col-md-6">
            <div className="row">
              <div className="col-md-5">
                <h4 className="mb-3">Thông tin</h4>
                <ul className="list-unstyled" style={{ fontSize: "0.9em" }}>
                  <li>
                    <a href="#" className="text-white">
                      • Về chúng tôi
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • Sản phẩm
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • Case Studies
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • Tin tức
                    </a>
                  </li>
                </ul>
              </div>

              <div className="col-md-7">
                <h4 className="mb-3">Giải pháp tự động hoá</h4>
                <ul className="list-unstyled" style={{ fontSize: "0.9em" }}>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Chính Quyền Số
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Nhà Máy Sản Xuất - DN Vốn FDI
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Bảo Hiểm
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Tài Chính / Ngân Hàng
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Vận Tải - Logistic
                    </a>
                  </li>
                  <li>
                    <a href="#" className="text-white">
                      • RPA - Y Tế
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <hr className="border-white" />
        <div className="text-center">
          <p className="mb-0">Cty Cổ Phần Công Nghệ OpenSoft</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
