import ABOUTUS from "views/aboutUs/aboutUs";
import CaseStudies from "views/case_studies/caseStudies";
import News from "views/news/news";
import CONTACTUS from "views/contactus/Contactus";

const routes = [
  {
    name: "VỀ CHÚNG TÔI",
    route: "/aboutUs",
    component: <ABOUTUS />,
  },
  {
    name: "SẢN PHẨM",
    collapse: [
      {
        name: "RPA",
        dropdown: true,
        collapse: [
          {
            name: "RPA Chính Quyền Số",
            dropdown: true,
            collapse: [
              {
                name: "Xử Lý Văn Bản Tự Động",
                href: "/",
              },
            ],
          },
          {
            name: "RPA Nhà Máy Sản Xuất",
            href: "/",
          },
          {
            name: "RPA Bảo Hiểm",
            href: "/",
          },
          {
            name: "RPA Y Tế",
            href: "/",
          },
          {
            name: "RPA Tài Chính Ngân Hàng",
            href: "/",
          },
          {
            name: "RPA Logistic",
            href: "/",
          },
        ],
      },
      {
        name: "AI",
        dropdown: true,
        collapse: [
          {
            name: "Trợ Lý Ảo AI",
            href: "/",
          },
          {
            name: "Callbot",
            href: "/",
          },
          {
            name: "Thể Thức Văn Bản AI",
            href: "/",
          },
        ],
      },
    ],
  },
  {
    name: "CASE STUDIES",
    route: "/case-studies",
    component: <CaseStudies />,
  },
  {
    name: "TIN TỨC",
    route: "/news",
    component: <News />,
  },
  {
    name: "LIÊN HỆ",
    route: "/contact-us",
    component: <CONTACTUS />,
  },
];

export default routes;
