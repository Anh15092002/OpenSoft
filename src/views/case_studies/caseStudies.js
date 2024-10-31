import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/home/field/bgr_case.png";
import LOGO from "assets/home/partner/logoNew.png";
import React from "react";
//--------------------------------------------Sử dụng footer ------------------------------------
import Footer from "../../components/footer/Footer";
//---------------------------------------- SỬ DỤNG CAROUSEL ----------------------------------
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image: "https://openway.vn/wp-content/uploads/2024/07/OIP-2.jpg",
    title:
      "Các tổ chức có được thiết lập để thành công trong ký nguyên chuỗi cung ứng được hỗ trợ bởi AI?",
    description:
      "Tại sao AI sẽ là một chủ đề mang tính chuyển đổi đối với các giám đốc chuỗi cung ứng. Chúng ta sẽ tập trung vào các cơ hội áp dụng AI để giải quyết các thách thức lớn xung...",
  },
  {
    id: 2,
    image: "https://openway.vn/wp-content/uploads/2024/07/RPA-cr-1200x630-1-768x403.jpg",
    title: "DocPath: Mô hình ngôn ngữ lớn chuyên biệt trích xuát thông tin từ tài liệu ",
    description:
      "Đây là bài viết đầu tiên trong loạt bài viết đánh giá công trình của UiPath Research, một nhóm các nhà khoa học, nhà nghiên cứu và kỹ sư AI đang ngày càng mở rộng khả năng AI của UiPath...",
  },
  {
    id: 3,
    image: "https://openway.vn/wp-content/uploads/2024/07/image-21.jpg",
    title: "Xử lý tài liệu thông minh IDP: Tự xây dựng hay mua?",
    description:
      "Các loại tài liệu và thông tin giao tiếp (như email hoặc chat) là nền tảng cho hầu hết mọi quy trình. Do đó, không có gì ngạc nhiên khi thị trường xử lý tài liệu thông minh (IDP) đang tăng trưởng...",
  },
];
function CaseStudies() {
  // Desktop view - show 3 items at once
  const DesktopView = () => (
    <div className="d-none d-md-block">
      <Row>
        {newsItems.map((news) => (
          <Col md={4} key={news.id}>
            <Card className="news-card mb-4">
              <Card.Img variant="top" src={news.image} className="news-image" />
              <Card.Body>
                <Card.Title className="news-title">{news.title}</Card.Title>
                <Card.Text className="news-description text-muted">{news.description}</Card.Text>
                <button className="btn btn-link text-primary p-0">Xem thêm</button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </div>
  );

  // Mobile view - show 1 item with carousel
  const MobileView = () => (
    <div className="d-md-none">
      <Carousel
        prevIcon={<ChevronLeft size={24} />}
        nextIcon={<ChevronRight size={24} />}
        indicators={true}
        interval={5000}
      >
        {newsItems.map((news) => (
          <Carousel.Item key={news.id}>
            <Card className="news-card">
              <Card.Img variant="top" src={news.image} className="news-image" />
              <Card.Body>
                <Card.Title className="news-title">{news.title}</Card.Title>
                <Card.Text className="news-description text-muted">{news.description}</Card.Text>
                <button className="btn btn-link text-primary p-0">Xem thêm</button>
              </Card.Body>
            </Card>
          </Carousel.Item>
        ))}
      </Carousel>
    </div>
  );
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
          <DesktopView />
          <MobileView />
        </Container>
      </section>
      <MKBox pt={6} px={1} mt={6}>
        <Footer />
      </MKBox>
    </>
  );
}

export default CaseStudies;
