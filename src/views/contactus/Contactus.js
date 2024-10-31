import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/home/field/bgr_contact.png";
import LOGO from "assets/home/partner/logoNew.png";
import React from "react";
//--------------------------------------------Sử dụng footer ------------------------------------
import Footer from "../../components/footer/Footer";
//---------------------------------------- SỬ DỤNG CAROUSEL ----------------------------------
import { Container } from "react-bootstrap";
import { Phone, Mail, MapPin } from "lucide-react";

function ContactUs() {
  return (
    <>
      <MKBox position="fixed" top="0.5rem" width="100%" sx={{ zIndex: 1000 }}>
        <DefaultNavbar
          brand={{
            image: LOGO,
            name: "OpenSoft",
            height: "50px",
          }}
          routes={routes}
          action={{
            type: "external",
            label: "OpenSoft",
            color: "info",
          }}
        />
      </MKBox>
      <MKBox
        minHeight="35vh" // Chiều cao của background, bạn có thể thay đổi giá trị này tùy ý
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          marginTop: "90px", // Thêm khoảng cách từ top
        }}
      ></MKBox>
      <section className="py-5 bg-light mt-5">
        <Container>
          <div className="container py-5">
            <h2 className="mb-4 fw-bold">Thông tin liên hệ</h2>
            <div className="row">
              <div className="col-lg-7">
                <div className="bg-light rounded">
                  <form>
                    <div className="mb-3">
                      <input type="text" className="form-control" placeholder="Tên đầy đủ" />
                    </div>
                    <div className="row mb-3">
                      <div className="col-md-6">
                        <input type="email" className="form-control" placeholder="Địa chỉ email" />
                      </div>
                      <div className="col-md-6">
                        <input type="tel" className="form-control" placeholder="Số điện thoại" />
                      </div>
                    </div>
                    <div className="mb-3">
                      <textarea
                        className="form-control"
                        rows={6}
                        placeholder="Nội dung cần tư vấn"
                      ></textarea>
                    </div>
                    <button type="submit" className="btn btn-info text-white w-100 py-2">
                      Gửi đi
                    </button>
                  </form>
                </div>
              </div>

              <div className="col-lg-5">
                <div className="ps-lg-5 mt-5 mt-lg-0">
                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <Phone className="text-white" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Điện thoại</h5>
                      <p className="mb-0">0902229692</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-center mb-4">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <Mail className="text-white" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Email</h5>
                      <p className="mb-0">support@opensoft.com.vn</p>
                    </div>
                  </div>

                  <div className="d-flex align-items-start">
                    <div className="bg-info rounded-circle p-3 me-3">
                      <MapPin className="text-white" size={24} />
                    </div>
                    <div>
                      <h5 className="mb-1">Địa chỉ</h5>
                      <p className="mb-0">
                        Tầng 6, Tòa nhà CIC Tower, số 1 Phố Nguyễn Thị Duệ, Phường Yên Hòa, Quận Cầu
                        Giấy, TP Hà Nội
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </section>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default ContactUs;
