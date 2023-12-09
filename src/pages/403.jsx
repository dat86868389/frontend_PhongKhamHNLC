import React, { ReactNode } from "react";
import { Result, Button } from "antd";
import { useRouter } from "next/router";

const Error403 = () => {
  const router = useRouter();

  return (
    <Result
      className="pt-40"
      status="403"
      title="403"
      subTitle="Bạn không có quyền truy cập trang này."
      extra={
        <Button onClick={() => router.push("/")}>
          <span className="font-normal mr-2">&#60;</span> Trang chủ
        </Button>
      }
    />
  );
};

export default Error403;
