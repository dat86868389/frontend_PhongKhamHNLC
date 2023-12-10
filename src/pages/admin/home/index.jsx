import LayoutAdmin from "@/layouts/components/LayoutAdmin";
import { Column, LineChart, PieChart } from "@ant-design/charts";
import { Breadcrumb } from "antd";
import { HomeOutlined } from "@ant-design/icons";

export default function Dashboard() {
  const dataColumnChart = [
    { year: "2020", value: 20 },
    { year: "2021", value: 30 },
    { year: "2022", value: 40 },
    // Thêm dữ liệu của bạn vào đây
  ];
  const dataPieChart = [
    { type: "A", value: 100 },
    { type: "B", value: 200 },
    { type: "C", value: 150 },
    // Thêm dữ liệu khác nếu cần
  ];
  const configPieChart = {
    data: dataPieChart,
    angleField: "value",
    colorField: "type",
    // Cấu hình khác của biểu đồ Pie
  };

  const configColumnChart = {
    data: dataColumnChart,
    xField: "year",
    yField: "value",
    columnWidthRatio: 0.5,
    label: {
      position: "middle",
      style: {
        fill: "#FFFFFF",
        opacity: 0.6,
      },
    },
  };

  const breadcrumb = [
    {
      href: "/admin/home",
      title: (
        <p className="text-cyan-700">
          <HomeOutlined />
          <span className="ml-1">Trang chủ</span>
        </p>
      ),
    },
  ];

  return (
    <div>
      <Breadcrumb className="mb-5" items={breadcrumb} />
      <p className="my-10 text-2xl">Bảng thống kê</p>
      <Column {...configColumnChart} />
      <Column {...configColumnChart} />

      {/* <LineChart {...config} /> */}

      {/* <PieChart {...configPieChart} /> */}
    </div>
  );
}

Dashboard.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
