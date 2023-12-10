import Link from "next/link";
import layoutUserStyle from "@/styles/layout_user_style.module.css";
import {
  DownOutlined,
  SearchOutlined,
  CloseOutlined,
  PhoneFilled,
  MailFilled,
  FacebookFilled,
  PushpinFilled,
} from "@ant-design/icons";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBars,
  faCalendarDays,
  faEnvelope,
  faLocationPin,
  faPhone,
} from "@fortawesome/free-solid-svg-icons";
const LayoutUser = ({ children }) => {
  const [activeSearchbar, setActiveSearchbar] = useState(false);

  const showSearchBar = () => {
    setActiveSearchbar(!activeSearchbar);
  };
  return (
    <>
      <header>
        <div className={`${layoutUserStyle.background_info_top}`}>
          <div className="container mx-auto text-white flex justify-between">
            <div className="flex items-center">
              <p className="px-2 flex">
                <PhoneFilled /> <span className="mx-2">0214.2202.888</span>
              </p>
              <p className="px-2 flex">
                <MailFilled />{" "}
                <span className="mx-2">phongkhamhanoilaocai@gmail.com</span>
              </p>
            </div>

            <div className="flex items-center">
              <Link
                href={`#`}
                className="text-lg py-4 px-4 flex hover:bg-cyan-400"
              >
                <FacebookFilled />
              </Link>
              <Link
                href={`#`}
                className="text-lg py-4 px-4 flex hover:bg-cyan-400"
              >
                <PushpinFilled />
              </Link>
            </div>
          </div>
        </div>

        <div className="container mx-auto flex justify-between items-center relative">
          <Link href={`#`}>
            <div className="flex items-center">
              <img src="/images/logo.png" className="w-14 h-14" />
              <p
                className={`${layoutUserStyle.text_logo} font-bold xl:text-xl lg:text-base`}
              >
                Phòng Khám HNLC
              </p>
            </div>
          </Link>

          <div className="flex">
            <div className="navbar self-stretch lg:static absolute bg-white z-10 top-full w-full lg:w-fit left-0">
              <ul className="lg:flex items-center h-full">
                <li className="h-full relative">
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    <p>Trang chủ</p>
                  </Link>
                </li>

                <li className="h-full relative">
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    Giới thiệu
                  </Link>
                </li>

                <li className={`h-full relative ${layoutUserStyle.menu_item}`}>
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    Chuyên khoa{" "}
                    <DownOutlined
                      style={{ fontSize: "14px", marginLeft: "5px" }}
                    />
                  </Link>

                  <div
                    className={`${layoutUserStyle.submenu} lg:absolute lg:w-max w-full`}
                  >
                    <ul className="w-max bg-white">
                      <li className="w-full">
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa nội
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa nhi
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa phụ sản
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa dược
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa chuẩn đoán hình ảnh
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa y học cổ truyền - Phục hồi chức năng
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa nội tiêu hóa
                        </Link>
                      </li>

                      <li>
                        <Link
                          href={`#`}
                          className="hover:text-white block hover:bg-cyan-600 py-2 px-8 transition-all duration-300 lg:px-4 lg:py-2"
                        >
                          Khoa xét nghiệm
                        </Link>
                      </li>
                    </ul>
                  </div>
                </li>

                <li className="h-full relative">
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    Đội ngũ bác sỹ
                  </Link>
                </li>

                <li className="h-full relative">
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    Tuyển dụng
                  </Link>
                </li>

                <li className="h-full relative">
                  <Link
                    href={`#`}
                    className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 lg:py-0 py-2"
                  >
                    Nội bộ
                  </Link>
                </li>
              </ul>
            </div>
            <div className="search flex">
              <div className="search-container relative">
                <button
                  className="h-full flex items-center px-2 hover:text-cyan-600 transition-all duration-300 text-2xl relative"
                  onClick={() => showSearchBar()}
                >
                  {!activeSearchbar ? <SearchOutlined /> : <CloseOutlined />}
                </button>

                {activeSearchbar ? (
                  <div
                    className={`${layoutUserStyle.searchbar} absolute w-max right-1 py-4 px-2`}
                  >
                    <form>
                      <input
                        type="text"
                        placeholder="Tìm kiếm ..."
                        className="px-4 py-2 text-lg outline-1 outline-cyan-600"
                      />
                      <button
                        className={`px-4 py-2 text-lg ${layoutUserStyle.button_search} text-white hover:bg-slate-950`}
                      >
                        <SearchOutlined />
                      </button>
                    </form>
                  </div>
                ) : (
                  <></>
                )}
              </div>

              <button className="block lg:hidden">
                <FontAwesomeIcon icon={faBars} />
              </button>
              <Link
                href={`#`}
                className={`transition-all duration-300 flex items-center p-4 text-white rounded-md hover:bg-slate-950 ${layoutUserStyle.apoiment}`}
              >
                Thêm lịch hẹn +
              </Link>
            </div>
          </div>
        </div>
      </header>
      <main>{children}</main>

      <footer
        className={`${layoutUserStyle.background_footer} text-white py-28`}
      >
        <div className="container mx-auto relative">
          <div className="grid grid-cols-4 gap-4">
            <div className="footer_logo">
              <div className="flex items-center mb-6">
                <img src={`/images/logo.png`} className="w-14 h-14" />
                <span className={`font-bold xl:text-2xl lg:text-2xl`}>
                  Phòng Khám HNLC
                </span>
              </div>

              <p className="text-lg">
                Slogan có giá trị đối với doanh nghiệp nha sĩ và hoạt động tiếp
                thị của nó. Mỗi nha sĩ phải nhận thức được tầm quan trọng của
                Slogan đối với hình ảnh thương hiệu. Slogan là một phần quan
                trọng của tiếp thị. Đây là những nhận thức về doanh nghiệp của
                bạn mà bạn muốn khắc sâu trong tâm trí người tiêu dùng, chẳng
                hạn như sự tin tưởng, đổi mới và chất lượng.
              </p>
            </div>

            <div className="footer_logo">
              <div className="h-14 mb-6 flex items-center">
                <p className="text-2xl font-medium ">Thời Gian Làm Việc</p>
              </div>
              <div className="text-lg">
                <p className="mb-6">Giờ làm việc: 24/7</p>
                <p>
                  Khám bệnh: Sáng 07:30 - 12:00; Chiều 13:00 - 16:30; Tối: 16:30
                  - 21:00
                </p>
              </div>
            </div>

            <div className="newest_blogs">
              <div className="h-14 mb-6 flex items-center">
                <p className="text-2xl font-medium ">Bài Viết Mới</p>
              </div>
              <div className="text-lg">
                <div className="blog mb-6">
                  <Link href={`#`}>
                    <div className="flex items-center">
                      <div>
                        <div className="w-20 h-20">
                          <img
                            src="/images/blog1.jpg"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="info_blog mx-4 ">
                        <p>
                          <FontAwesomeIcon icon={faCalendarDays} /> 11/12/2023
                        </p>
                        <p>Get The Exercise Limited Mobility</p>
                      </div>
                    </div>
                  </Link>
                </div>

                <div className="blog">
                  <Link href={`#`}>
                    <div className="flex items-center">
                      <div>
                        <div className="w-20 h-20">
                          <img
                            src="/images/blog1.jpg"
                            className="w-full h-full"
                          />
                        </div>
                      </div>
                      <div className="info_blog mx-4 ">
                        <p>
                          <FontAwesomeIcon icon={faCalendarDays} /> 11/12/2023
                        </p>
                        <p>Get The Exercise Limited Mobility</p>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="Contact_US">
              <div className="h-14 mb-6 flex items-center">
                <p className="text-2xl font-medium ">Liên Hệ Với Chúng Tôi</p>
              </div>
              <div className="text-lg">
                <p className="mb-6">
                  <FontAwesomeIcon icon={faPhone} className="mr-4" /> 0214 2202
                  888
                </p>
                <p className="mb-6">
                  <FontAwesomeIcon icon={faEnvelope} className="mr-4" />{" "}
                  pkhnlc@gmail.com
                </p>

                <p>
                  <FontAwesomeIcon icon={faLocationPin} className="mr-4" />
                  Địa chỉ: Số 022 đường Chiềng On, phường Bình Minh, thành phố
                  Lào Cai, tỉnh Lào Cai
                </p>
              </div>
            </div>
          </div>

          <div className={`${layoutUserStyle.send_email} z-10 p-6`}>
            <div className="flex">
              <div className="mail_logo">
                <FontAwesomeIcon icon={faEnvelope} />
              </div>
              <p>Đăng Ký Email Để Nhận Thông Báo Mới Nhất Từ Chúng Tôi</p>
            </div>

            <form>
              <input type="text" placeholder="Email" className={`${layoutUserStyle.send_email_input} text-xl py-2 mr-6 px-4`}/>
              <button className="text-xl text-black bg-white py-2 px-4 transition-all duration-300 hover:text-white hover:bg-black">Xác Nhận</button>
            </form>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LayoutUser;
