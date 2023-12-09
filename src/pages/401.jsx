import React, { ReactNode } from "react";
import { Result, Button } from "antd";
import { useRouter } from "next/router";

const Error401 = () => {
  const router = useRouter();

  return (
    <Result
      className="pt-40"
      status="403"
      title="401"
      subTitle="Bạn không có quyền xem trang này bằng thông tin đăng nhập mà bạn đã cung cấp khi đăng nhập."
      extra={
        <Button onClick={() => router.push("/")}>
          <span className="font-normal">&#60;</span> Trang chủ
        </Button>
      }
    />
  );
};

export default Error401;
