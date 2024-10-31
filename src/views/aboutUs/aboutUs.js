import MKBox from "components/MKBox";
import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/home/field/brg_rpa.png";
import LOGO from "assets/home/partner/logoNew.png";
import AVT from "assets/home/partner/avt_tgd.jpg";
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import Footer from "../../components/footer/Footer";

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
        minHeight="35vh"
        width="100%"
        sx={{
          backgroundImage: `url(${bgImage})`,
          backgroundSize: "cover",
          backgroundPosition: "top",
          display: "grid",
          placeItems: "center",
          marginTop: "90px",
        }}
      ></MKBox>
      <div className="mt-4 w-100">
        <div className="ms-5 d-lg-flex w-100">
          <div
            className="col-7 ms-5"
            style={{
              maxWidth: "800px",
              textAlign: "justify",
              padding: "20px",
              paddingLeft: "150px",
              boxSizing: "border-box",
              wordWrap: "break-word",
              overflow: "hidden",
              fontSize: "16px",
            }}
          >
            <h3 className="d-flex justify-content-center">Về Chúng Tôi</h3>
            <p>
              Kính thưa quý khách hàng, Công ty OpenSoft là đơn vị chuyên cung cấp giải pháp phần
              mềm công nghệ Tự Động Xử Lý Nghiệp Vụ Quy Trình – Robotic Process Automation (RPA) và
              các giải pháp công nghệ Trí Tuệ Nhân Tạo AI. Các giải pháp công nghệ do chúng tôi phát
              triển với lực lượng các chuyên gia được đào tạo chuyên sâu nhiều chục năm kinh nghiệm
              đã từng làm việc tại nhiều nước trên thế giới và tại các tập đoàn công nghệ lớn ở
              trong nước.
            </p>
            <p>
              Với nhu cầu ngày một lớn về ứng dụng RPA – Tự động hóa xử lý các nghiệp vụ và tích hợp
              AI để đưa ra những giải pháp vận hành tốt hơn, giúp doanh nghiệp tối ưu chi phí, nâng
              cao năng suất, chúng tôi đã mang lại nhiều kết quả tốt và đóng góp vào quá trình
              chuyển đổi số cho doanh nghiệp.
            </p>
            <p>
              Phương châm của chúng tôi là Đồng Hành để Tối Ưu Chi Phí và Tạo Hiệu Quả Rõ Rệt cho
              doanh nghiệp và luôn cam kết chất lượng giải pháp phần mềm lên hàng đầu để tạo sự khác
              biệt.
            </p>
            <p>
              Công ty OpenSoft luôn mong muốn được hợp tác và đồng hành với khách hàng và duy trì sự
              phát triển lâu bền, hiệu quả.
            </p>
            <div className="d-flex flex-column align-items-end">
              <p className="d-flex justify-content-center">
                <i>Trân trọng cảm ơn</i>
              </p>
            </div>
          </div>
          <div
            className="d-flex flex-column align-items-center justify-content-center col-5"
            style={{ gap: "10px", width: "300px", marginLeft: "80px" }} // Added margin to separate sections
          >
            <img
              src={AVT}
              alt="Avatar"
              className="img-fluid"
              style={{ height: "350px", width: "200px", borderRadius: "5px" }} // Set to rectangular with slight border-radius
            />
            <div style={{ textAlign: "center" }}>
              <span style={{ fontSize: "18px", fontWeight: "bold" }}>Giang Cao</span> <br />
              <span style={{ fontSize: "16px", color: "#555" }}>Chủ Tịch HĐQT & CEO</span>
            </div>
          </div>
          <div className="col-5"></div>
        </div>
      </div>
      <Container className="my-5">
        <h2 className="text-center mb-5">Tầm nhìn – Sứ mệnh</h2>
        <Row className="text-center mx-5 px-5">
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <div className="icon mb-3">
                  <i className="bi bi-eye" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px", justifyContent: "start" }}
                >
                  <img
                    src="https://openway.vn/wp-content/uploads/2024/07/Layer_1-1.svg"
                    style={{ width: "50px", height: "50px" }}
                    alt="Icon"
                  />
                  <h5 className="card-title m-0">Tầm nhìn</h5>
                </div>
                <Card.Text style={{ textAlign: "start", marginTop: "15px", fontSize: "16px" }}>
                  OpenSoft hướng đến mục tiêu trở thành doanh nghiệp hàng đầu tiên phong trong giải
                  pháp phần mềm Tự động hóa tích hợp trí tuệ nhân tạo AI. Đồng hành cùng giải bài
                  toán do doanh nghiệp đưa ra nhằm tạo ra giá trị kinh tế thể hiện trên những con số
                  cụ thể.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://openway.vn/wp-content/uploads/2024/07/image-21.jpg"
                alt="Vision Image"
              />
            </Card>
          </Col>
        </Row>
        <Row className="text-center mx-5 px-5">
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Img
                variant="top"
                src="https://openway.vn/wp-content/uploads/2024/07/image-22-300x196.jpg"
                alt="Mission Image"
              />
            </Card>
          </Col>
          <Col md={6} className="mb-4">
            <Card className="h-100 shadow-sm border-0">
              <Card.Body style={{ display: "flex", flexDirection: "column" }}>
                <div className="icon mb-3">
                  <i className="bi bi-eye" style={{ fontSize: "2rem", color: "#007bff" }}></i>
                </div>
                <div
                  className="d-flex align-items-center"
                  style={{ gap: "10px", justifyContent: "end" }}
                >
                  <img
                    src="https://openway.vn/wp-content/uploads/2024/07/Isolation_Mode.svg"
                    style={{ width: "50px", height: "50px" }}
                    alt="Icon"
                  />
                  <h5 className="card-title m-0">Sứ Mệnh</h5>
                </div>
                <Card.Text style={{ textAlign: "end", marginTop: "15px", fontSize: "16px" }}>
                  Chúng Tôi tập trung chuyên sâu đồng hành, giải quyết bài toán cụ thể cho các
                  Khối/Ngành/Lĩnh vực: Chính Quyền Số; Kinh Tế Số; Bưu Chính – Vận Tải – Logistic;
                  Cảng Biển; Y Tế; Giáo Dục; Nhà máy sản xuất; Doanh Nghiệp FDI trên địa bàn Thành
                  Phố. Góp phần vào xây dựng chuyển đổi số của Thành Phố.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default ContactUs;
