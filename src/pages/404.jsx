import React, { ReactNode } from "react";
import { Result, Button } from "antd";
import { useRouter } from "next/router";

const Error401 = () => {
  const router = useRouter();

  return (
    <Result
      className="pt-40"
      status="404"
      title="404"
      subTitle="Không tìm thấy trang."
      extra={
        <Button onClick={() => router.push("/")}>
          <span className="font-normal mr-2">&#60;</span>Trang chủ
        </Button>
      }
    />
  );
};

export default Error401;
