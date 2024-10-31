import React from "react";
import { Container, Row, Col, Card, Carousel } from "react-bootstrap";
import { ChevronLeft, ChevronRight } from "lucide-react";

const newsItems = [
  {
    id: 1,
    image:
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Học sinh Hà Nội Gặt Hái Thành Công Tại Cuộc Thi Sáng Chế Bảo Vệ Môi Trường",
    description:
      "Với những nghiên cứu và sáng tạo đột phá trong lĩnh vực công nghệ và tự động hóa, nhóm học sinh Trường THCS Giảng Võ, quận Ba Đình (Hà Nội) đã xuất sắc đạt được nhiều giải thưởng cao quý...",
  },
  {
    id: 2,
    image:
      "https://images.unsplash.com/photo-1501504905252-473c47e087f8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Đà Nẵng Hỗ Trợ 1.800 Hộ Dân Đổi Điện Thoại 'Cục Gạch' Sang Điện Thoại Thông Minh",
    description:
      "Hội đồng Nhân dân (HĐND) Thành phố Đà Nẵng đã chính thức thông qua một nghị quyết quan trọng về việc hỗ trợ chi phí mua điện thoại thông minh cho các hộ nghèo và cận nghèo, trong bối cảnh...",
  },
  {
    id: 3,
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
    title: "Thúc đẩy cải cách hành chính gắn với chuyển đổi số",
    description:
      "Trong thời gian qua, Long An đã quyết liệt đẩy mạnh cải cách hành chính, kết hợp chuyển đổi số. Qua 10 năm thực hiện, Long An đã vươn lên hạng 11 trong 63 tỉnh, thành phố. Ông Lê Văn...",
  },
];

function NewsCarousel() {
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
    <section className="py-5 bg-light">
      <Container>
        <h2 className="text-center mb-4">Tin tức - Sự kiện</h2>
        <DesktopView />
        <MobileView />
      </Container>
    </section>
  );
}

export default NewsCarousel;
