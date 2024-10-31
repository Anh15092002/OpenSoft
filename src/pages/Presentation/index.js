import Container from "@mui/material/Container";
// import Grid from "@mui/material/Grid";
import MKBox from "components/MKBox";
// import MKTypography from "components/MKTypography";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
// import bgImage from "assets/images/bg-presentation.jpg";
import bgImage from "assets/images/bannerNew.jpg";
import LOGO from "assets/home/partner/logoNew.png";
import React from "react";
import { Row, Col } from "react-bootstrap";
// import footerRoutes from "footer.routes";
// import DefaultFooter from "examples/Footers/DefaultFooter";

import "./index.css";

// -----------------------------------------lĩnh vực----------------------------------------------------------
import chinh_quyen_so from "assets/home/field/chinh_quyen_so.png";
import fdi from "assets/home/field/FDI.png";
import bao_hiem from "assets/home/field/bao_hiem.png";
import tai_chinh from "assets/home/field/tai_chinh.png";
import logistic from "assets/home/field/logistic.png";
import y_te from "assets/home/field/y_te.png";

const images = [
  { src: chinh_quyen_so, label: "RPA - CHÍNH QUYỀN SỐ" },
  { src: fdi, label: "RPA - NHÀ MÁY SẢN XUẤT - DN VỐN FDI" },
  { src: bao_hiem, label: "RPA - BẢO HIỂM" },
  { src: tai_chinh, label: "RPA - TÀI CHÍNH / NGÂN HÀNG" },
  { src: logistic, label: "RPA - VẬN TẢI - LOGISTIC" },
  { src: y_te, label: "RPA - Y TẾ" },
];

//----------------------------------------------đối tác ----------------------------------------
import VPBANK from "assets/home/partner/VPBANK.png";
import AMBER from "assets/home/partner/amber.jpg";
import VIETCREDIT from "assets/home/partner/vietcredit.jpg";
import FCCOM from "assets/home/partner/FCCOM.png";
import ENSPIRE from "assets/home/partner/enspire.jpg";
import BAOVIET from "assets/home/partner/baoviet.jpg";
import HP from "assets/home/partner/stttthp.jpg";
import HN from "assets/home/partner/hanam.jpg";
import CHUNGKHOAN from "assets/home/partner/chung-khoan.png";
import HTLOGISTIC from "assets/home/partner/hoangthanh.png";
import LPD from "assets/home/partner/luatphuongdong.jpg";
import PALOGISTIC from "assets/home/partner/phuonganh.png";
import REGINA from "assets/home/partner/regina.png";
import TON from "assets/home/partner/tonposhaco.png";
import VNPOST from "assets/home/partner/vnpost.png";
import FECREDIT from "assets/home/partner/fecredit.png";

//---------------------------------------- SỬ DỤNG CAROUSEL ----------------------------------
import CAROUSEL from "../../components/Carousel/Carousel";

//--------------------------------------------Sử dụng footer ------------------------------------
import Footer from "../../components/footer/Footer";

const imagesPartner = [
  { src: VPBANK },
  { src: AMBER },
  { src: VIETCREDIT },
  { src: FCCOM },
  { src: BAOVIET },
  { src: HP },
  { src: HN },
  { src: CHUNGKHOAN },
  { src: HTLOGISTIC },
  { src: LPD },
  { src: ENSPIRE },
  { src: PALOGISTIC },
  { src: REGINA },
  { src: TON },
  { src: VNPOST },
  { src: FECREDIT },
];

//----------------------------------------------tin tức - sự kiên ----------------------------------------

function Presentation() {
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
            // route: "https://openway.vn/",
            label: "OpenSoft",
            color: "info",
          }}
          // sticky
        />
      </MKBox>
      <MKBox
        minHeight="260px"
        // height="auto"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "contain",
          backgroundPosition: "center top",
          display: "grid",
          placeItems: "center",
          marginTop: "100px",
        }}
      >
        {/* <Container>
          <Grid container item xs={12} lg={7} justifyContent="center" mx="auto">
            <MKTypography
              variant="h4"
              color="white"
              mt={-6}
              mb={1}
              sx={({ breakpoints, typography: { size } }) => ({
                [breakpoints.down("md")]: {
                  fontSize: size["3xl"],
                },
              })}
            >
              OpenSoft{" "}
            </MKTypography>
            <MKTypography
              variant="body1"
              color="white"
              textAlign="center"
              px={{ xs: 6, lg: 12 }}
              mt={1}
            >
              Công Ty Cổ Phần Công Nghệ OpenSoft.
            </MKTypography>
          </Grid>
        </Container> */}
      </MKBox>
      <div
        className="d-flex justify-content-center align-items-center"
        style={{ height: "60px", backgroundColor: "#142859" }}
      >
        <div className="me-5">
          <img
            src="https://www.gdsonline.tech/wp-content/uploads/2022/02/B2B_Companies_UK_2021.png"
            alt=""
            style={{ width: "40px", height: "40px", margin: "auto", marginRight: "10px" }}
          />
          <img
            src="https://www.gdsonline.tech/wp-content/uploads/2022/02/Sao-Khue-2021.png"
            alt=""
            style={{ width: "40px", height: "40px", margin: "auto", marginRight: "10px" }}
          />
          <img
            src="https://www.gdsonline.tech/wp-content/uploads/2022/02/Frame-1000003080.png"
            alt=""
            style={{ width: "40px", height: "40px", margin: "auto", marginRight: "10px" }}
          />
          <img
            src="https://www.gdsonline.tech/wp-content/uploads/2022/02/Frame-1000003079.png"
            alt=""
            style={{ width: "40px", height: "40px", margin: "auto", marginRight: "10px" }}
          />
        </div>
        <div style={{ color: "white" }}>
          <h5>Đối tác chiến lược độc quyền của OpenSoft phát triển RPA tại Việt Nam</h5>
        </div>
      </div>
      <Container className="text-center my-5">
        <h3 className="mb-4">Tự Động Hoá Xử Lý Nghiệp Vụ Quy Trình RPA Các Lĩnh Vực</h3>
        <Row>
          {images.map((item, index) => (
            <Col key={index} sm={12} md={6} lg={4} className="mb-4">
              <div className="img-container">
                <img src={item.src} alt={item.label} className="img-fluid" />
              </div>
              <p className="mt-3 text__img">{item.label}</p>
            </Col>
          ))}
        </Row>
      </Container>
      <Container className="text-center my-5">
        <h3 className="mb-4">Khách hàng - Đối tác</h3>
        <Row className="justify-content-center">
          {imagesPartner.map((item, index) => (
            <Col
              key={index}
              xs={12}
              sm={6}
              md={4}
              lg={2}
              className="mb-4 d-flex justify-content-center"
            >
              <div className="imgPartner-container">
                <img src={item.src} alt={`Partner ${index}`} className="img-fluid" />
              </div>
            </Col>
          ))}
        </Row>
      </Container>
      <CAROUSEL />
      <MKBox pt={6} mt={6}>
        {/* <DefaultFooter content={footerRoutes} /> */}
        <Footer />
      </MKBox>
    </>
  );
}

export default Presentation;
