// "use client";

// import Loading from "@/app/loading";
// import Form from "@/components/forms/form";
// import FormInput from "@/components/forms/formInput";
// import ImageUpload from "@/components/ui/image-upload";
// import { useProfileQuery, useUpdateProfileMutation } from "@/redux/api/user";
// import { getUserInfo } from "@/services/auth.service";
// import { Avatar, Button, Col, Row, message } from "antd";
// import { useRouter } from "next/navigation";
// import { useState } from "react";

// const EditProfile = () => {
//   const { role } = getUserInfo() as any;

//   const router = useRouter();
//   const [updateProfile] = useUpdateProfileMutation();

//   const { data, isLoading, refetch } = useProfileQuery({});
//   const user = data?.data;

//   const [imageUrl, setImageUrl] = useState(user?.profileImg);
//   const onSubmit = async (values: { title: string }) => {
//     message.loading("Updating User...");
//     try {
//       const res = await updateProfile({
//         profileImg: imageUrl,
//         ...values,
//       }).unwrap();
//       if (res?.success) {
//         message.success("Profile updated successfully");
//         refetch();
//       }
//     } catch (err: any) {
//       message.error(err.message);
//     }
//   };

//   const dafaultValues = {
//     name: user?.name || "",
//     contactNumber: user?.contactNumber || "",
//     address: user?.address || "",
//   };

//   if (isLoading) {
//     return <Loading />;
//     setImageUrl(user?.profileImg);
//   }

//   return (
//     <div>
//       <Form submitHandler={onSubmit} defaultValues={dafaultValues}>
//         <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
//           <Col span={24} style={{ margin: "10px 0" }}>
//             <FormInput
//               name="name"
//               label="Update yoer name"
//               size="large"
//               placeholder="Enter yoer name"
//             />
//           </Col>
//         </Row>
//         <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
//           <Col span={24} style={{ margin: "10px 0" }}>
//             <FormInput
//               name="contactNumber"
//               label="Update Number"
//               size="large"
//               placeholder="phone number"
//             />
//           </Col>
//         </Row>
//         <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
//           <Col span={24} style={{ margin: "10px 0" }}>
//             <FormInput
//               name="address"
//               label="Update Address"
//               size="large"
//               placeholder="address"
//             />
//           </Col>
//         </Row>
//         <Row gutter={{ xs: 24, xl: 8, lg: 8, md: 24 }}>
//           <Col
//             span={8}
//             style={{
//               margin: "10px 0",
//               display: "flex",
//               flexDirection: "column",
//               justifyContent: "center",
//               alignItems: "start",
//               gap: "10px",
//             }}
//           >
//             <Avatar shape="square" size={200} src={imageUrl} />
//             <ImageUpload setImageUrl={setImageUrl} imageUrl={imageUrl} />
//           </Col>
//         </Row>

//         <Button type="primary" htmlType="submit">
//           update
//         </Button>
//       </Form>
//     </div>
//   );
// };

// export default EditProfile;


"use client";

import Loading from "@/app/loading";
import Form from "@/components/forms/form";
import FormInput from "@/components/forms/formInput";
import ImageUpload from "@/components/ui/image-upload";
import { useProfileQuery, useUpdateProfileMutation } from "@/redux/api/user";
import { getUserInfo } from "@/services/auth.service";
import { Avatar, Button, Col, Row, Skeleton, message } from "antd";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const EditProfile = () => {
  const { role } = getUserInfo() as any;

  const router = useRouter();
  const [updateProfile] = useUpdateProfileMutation();

  const { data, isLoading, refetch } = useProfileQuery({});
  const user = data?.data;

  const [imageUrl, setImageUrl] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (user?.profileImg) {
      setImageUrl(user.profileImg);
    }
  }, [user]);

  const onSubmit = async (values: { name: string; contactNumber: string; address: string }) => {
    message.loading("Updating profile...");
    setLoading(true);
    try {
      const res = await updateProfile({
        profileImg: imageUrl,
        ...values,
      }).unwrap();
      if (res?.success) {
        message.success("Profile updated successfully");
        refetch();
      }
    } catch (err: any) {
      message.error(err?.data?.message || "Failed to update profile");
    } finally {
      setLoading(false);
    }
  };

  const defaultValues = {
    name: user?.name || "",
    contactNumber: user?.contactNumber || "",
    address: user?.address || "",
  };

  if (isLoading) {
    return (
      <Skeleton
        active
        avatar={{ size: 200, shape: "square" }}
        paragraph={{ rows: 4 }}
      />
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.5 }}
    >
      <Form submitHandler={onSubmit} defaultValues={defaultValues}>
        <Row gutter={[24, 16]}>
          <Col span={24} className="mb-4">
            <FormInput
              name="name"
              label="Update Your Name"
              size="large"
              placeholder="Enter your name"
            />
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col span={24}>
            <FormInput
              name="contactNumber"
              label="Update Number"
              size="large"
              placeholder="Enter your phone number"
            />
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col span={24} className="my-4">
            <FormInput
              name="address"
              label="Update Address"
              size="large"
              
              placeholder="Enter your address"
            />
          </Col>
        </Row>
        <Row gutter={[24, 16]}>
          <Col
            span={8}
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "start",
              gap: "10px",
            }}
          >
            <Avatar
              shape="square"
              size={200}
              src={imageUrl}
              style={{ boxShadow: "0px 4px 12px rgba(0, 0, 0, 0.1)" }}
            />
            <ImageUpload
              setImageUrl={setImageUrl}
              imageUrl={imageUrl}
              onUploadSuccess={() => {
                message.success("Image uploaded successfully");
              }}
              onUploadError={(err) => {
                message.error(err?.message || "Failed to upload image");
              }}
            />
          </Col>
        </Row>

        <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          <Button
            type="primary"
            htmlType="submit"
            loading={loading}
            className="bg-blue-600"
            size="large"
            style={{ marginTop: "20px" }}
          >
            Update
          </Button>
        </motion.div>
      </Form>
    </motion.div>
  );
};

export default EditProfile;
