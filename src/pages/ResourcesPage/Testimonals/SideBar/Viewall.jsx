import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Card, Row, Space } from "antd";
import { EnvironmentOutlined, MailOutlined } from "@ant-design/icons";
import { UserOutlined } from "@ant-design/icons";
import { Avatar } from "antd";

const Viewall = () => {
  return (
    <div>
      <div className="m-20 ">
        <Row gutter={16}>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                }}
              >
                <Space direction="vertical" size={16}>
                  <Space wrap size={16} className="p-8">
                    <Avatar size={64} icon={<UserOutlined />} />
                  </Space>
                </Space>

                <h5 className="pt-2  text-lg" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  alias dignissimos cupiditate doloremque dicta totam hic
                  distinctio laboriosam. Nam nostrum iure asperiores praesentium
                  nihil eaque delectus hic suscipit nesciunt voluptatibus?
                </h5>
                <h2 className="text-center pt-7 pb-2">
                  David Bamidele
                </h2>
                <h2 className="text-center text-sm text-[#444444] pb-5">
                  @davidBamidele
                </h2>
              </Card>
            </Space>
          </div>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                }}
              >
                <Space direction="vertical" size={16}>
                  <Space wrap size={16} className="p-8">
                    <Avatar size={64} icon={<UserOutlined />} />
                  </Space>
                </Space>

                <h5 className="pt-2  text-lg" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  alias dignissimos cupiditate doloremque dicta totam hic
                  distinctio laboriosam. Nam nostrum iure asperiores praesentium
                  nihil eaque delectus hic suscipit nesciunt voluptatibus?
                </h5>
                <h2 className="text-center pt-7 pb-2">
                  David Bamidele
                </h2>
                <h2 className="text-center text-sm text-[#444444] pb-5">
                  @davidBamidele
                </h2>
              </Card>
            </Space>
          </div>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                }}
              >
                <Space direction="vertical" size={16}>
                  <Space wrap size={16} className="p-8">
                    <Avatar size={64} icon={<UserOutlined />} />
                  </Space>
                </Space>

                <h5 className="pt-2  text-lg" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  alias dignissimos cupiditate doloremque dicta totam hic
                  distinctio laboriosam. Nam nostrum iure asperiores praesentium
                  nihil eaque delectus hic suscipit nesciunt voluptatibus?
                </h5>
                <h2 className="text-center pt-7 pb-2">
                  David Bamidele
                </h2>
                <h2 className="text-center text-sm text-[#444444] pb-5">
                  @davidBamidele
                </h2>
              </Card>
            </Space>
          </div>
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                }}
              >
                <Space direction="vertical" size={16}>
                  <Space wrap size={16} className="p-8">
                    <Avatar size={64} icon={<UserOutlined />} />
                  </Space>
                </Space>

                <h5 className="pt-2  text-lg" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  alias dignissimos cupiditate doloremque dicta totam hic
                  distinctio laboriosam. Nam nostrum iure asperiores praesentium
                  nihil eaque delectus hic suscipit nesciunt voluptatibus?
                </h5>
                <h2 className="text-center pt-7 pb-2">
                  David Bamidele
                </h2>
                <h2 className="text-center text-sm text-[#444444] pb-5">
                  @davidBamidele
                </h2>
              </Card>
            </Space>
          </div>
         
          <div className="p-1 m-2">
            <Space direction="vertical" size={16}>
              <Card
                className="custom-cards"
                style={{
                  width: 400,
                }}
              >
                <Space direction="vertical" size={16}>
                  <Space wrap size={16} className="p-8">
                    <Avatar size={64} icon={<UserOutlined />} />
                  </Space>
                </Space>

                <h5 className="pt-2  text-lg" >
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Est
                  alias dignissimos cupiditate doloremque dicta totam hic
                  distinctio laboriosam. Nam nostrum iure asperiores praesentium
                  nihil eaque delectus hic suscipit nesciunt voluptatibus?
                </h5>
                <h2 className="text-center pt-7 pb-2">
                  David Bamidele
                </h2>
                <h2 className="text-center text-sm text-[#444444] pb-5">
                  @davidBamidele
                </h2>
              </Card>
            </Space>
          </div>
        </Row>
      </div>
    </div>
  );
};

export default Viewall;
