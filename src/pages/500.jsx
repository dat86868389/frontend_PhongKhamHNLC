import React, { ReactNode } from "react";
import { Result, Button } from "antd";

import { useRouter } from "next/router";

const Error401 = () => {
  const router = useRouter();

  return (
    <Result
      className="pt-40"
      status="500"
      title="500"
      subTitle="Đã xảy ra lỗi với máy chủ. Vui lòng liên hệ với quản trị viên trang web của bạn."
      extra={
        <Button onClick={() => router.push("/")}>
          <span className="font-normal mr-2">&#60;</span> Trang chủ
        </Button>
      }
    />
  );
};

export default Error401;
