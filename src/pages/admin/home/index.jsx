import LayoutAdmin from "@/layouts/components/LayoutAdmin";

export default function Dashboard() {
  return <div>Dashboard</div>;
}

Dashboard.getLayout = function getLayout(page) {
  return <LayoutAdmin>{page}</LayoutAdmin>;
};
