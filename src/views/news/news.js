import MKBox from "components/MKBox";

import DefaultNavbar from "examples/Navbars/DefaultNavbar";
import routes from "routes";
import bgImage from "assets/home/field/bgr_tintuc.png";
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
    image: "https://openway.vn/wp-content/uploads/2024/08/hs-giang-vo-9516.png",
    title: "Học Sinh Hà Nội Gặt Hái Thành Công Tại Cưc Thi Sáng Chế Bảo Vé Môi Trường",
    description:
      "Với những nghiên cứu và sáng tạo đột phá trong lĩnh vực công nghệ và tự động hóa, nhóm học sinh Trường THCS Giảng Võ, quận Ba Đình (Hà Nội) đã xuất sắc đạt được nhiều giải thưởng cao quý...",
  },
  {
    id: 2,
    image:
      "https://openway.vn/wp-content/uploads/2024/08/anh-ho-tro-dien-thoai-17223108707831277931242.webp",
    title: "Đà Nẵng Hỗ Trợ 1.800 Hộ Dân Đổi Điện Thoại 'Cục Gạch' Sang Điện Thoại Thông Minh",
    description:
      "Hội đồng Nhân dân (HĐND) Thành phố Đà Nẵng đã chính thức thông qua một nghị quyết quan trọng về việc hỗ trợ chi phí mua điện thoại thông minh cho các hộ nghèo và cận nghèo, trong bối cảnh...",
  },
  {
    id: 3,
    image: "https://openway.vn/wp-content/uploads/2024/07/t2107cl7-5541.jpg-768x561.webp",
    title: "Thúc Đẩy Cải Cách Hành Chính Gắn Với Chuyển Đổi Số",
    description:
      "Trong thời gian qua, Long An đã quyết liệt đẩy mạnh cải cách hành chính, kết hợp chuyển đổi số. Qua 10 năm thực hiện, Long An đã vươn lên hạng 11 trong 63 tỉnh, thành phố. Ông Lê Văn...",
  },
  {
    id: 4,
    image:
      "https://openway.vn/wp-content/uploads/2024/07/z5664134720438_a16166c20874ffee5abe76cb5ce00f1d-1024x618.jpg",
    title: "Lễ Ký Kết Hợp Tác Kinh Doanh Các Dự Án Chuyển Đổi Số",
    description:
      "Sáng ngày 24/07/2024 , tại trụ sở công ty OpenSoft ở Hải Phòng, đã diễn ra lễ ký kết hợp tác kinh doanh giữa Công ty cổ phần phát triển phần mềm và giải pháp công nghệ openSoft và Công...",
  },
  {
    id: 5,
    image: "https://openway.vn/wp-content/uploads/2024/07/th.jpg",
    title: "Thúc Đẩy vai trò tiên phong để tăng tốc và bứt phá trong chuyển đổi só",
    description:
      "Sáng ngày 19/7/2024, Thủ tướng Phạm Minh Chính, Chủ tịch Ủy ban Quốc gia về chuyển đổi số, đã chủ trì Hội nghị Thường trực Chính phủ về chuyển đổi số với sự tham gia của các Bộ trưởng, lãnh...",
  },
  {
    id: 6,
    image:
      "https://openway.vn/wp-content/uploads/2024/07/toan-canh-hn-171935892377582550944-0-36-1155-1884-crop-17193589374971908981490.webp",
    title: "Tăng cường ứng dụng công nghệ trong công tác thanh tra",
    description:
      "Theo Chiến lược phát triển của Thanh tra Bộ TT&TT, đến năm 2025, việc giám sát sẽ đạt 100%, công tác kiểm tra đạt 70%, công tác thanh tra đạt 60% và xử lý vi phạm hành chính sẽ đạt...",
  },
  {
    id: 7,
    image:
      "https://openway.vn/wp-content/uploads/2024/07/z5623433479508_7992c1daad85fe18fb48b7a453c99d76-1024x597.jpg",
    title: "OpenSoft tham gia hội nghị chuyển đổi mô hình quận huyện tại Hải Phòng",
    description:
      "Ngày 27 tháng 6 năm 2024, Công ty openSoft đã tham gia Hội nghị các Trung tâm thuộc Sở Thông tin và Truyền thông khu vực miền Bắc lần thứ XIII tại Hải Phòng. Sự kiện này cũng đồng thời...",
  },
  {
    id: 8,
    image:
      "https://openway.vn/wp-content/uploads/2024/07/z5669646447521_5b708ec202e0381c52125eeabd83ae01-1-1024x576.jpg",
    title:
      "Công ty OpenSoft tham gia lễ kỷ niệm 15 năm thành lập trung tâm thông tin và truyền thông",
    description:
      "Ngày 27 tháng 6 năm 2024, Công ty OpenSoft đã vinh dự tham gia lễ kỷ niệm 15 năm thành lập Trung tâm Thông tin và Truyền thông Hải Phòng (26/6/2009 – 26/6/2024). Sự kiện này được tổ chức tại...",
  },
  {
    id: 9,
    image: "https://openway.vn/wp-content/uploads/2024/07/Rectangle-31.jpg",
    title:
      "Công ty công nghệ OpenSoft tham gia hội thảo xây dụng mô hình chuyển đổi số thành phố hải phòng",
    description:
      "Ngày 28/6/2024 vừa qua, Công ty Công Nghệ OpenSoft đã có buổi tham dự hội thảo Xây dựng mô hình chuyển đổi số tại Thành Phố do Sở Thông Tin Truyền Thôn tổ chức Với thế mạnh là Công ty...",
  },
];
function News() {
  // Desktop view - show 3 items at once
  const DesktopView = () => (
    <div className="d-none d-md-block">
      <Row>
        {newsItems.map((news) => (
          <Col md={4} key={news.id} className="mb-4">
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

export default News;
