"use client";

import { FileImageOutlined } from "@ant-design/icons";
import { Button } from "antd";
import { CldUploadWidget } from "next-cloudinary";
import { useEffect, useState } from "react";

interface ImageUploadProps {
  setImageUrl: (url: string) => void;
  imageUrl: string;
  onUploadSuccess?: () => void;
  onUploadError?: (err: any) => void;
}

const ImageUpload: React.FC<ImageUploadProps> = ({
  setImageUrl,
  imageUrl,
  onUploadSuccess,
  onUploadError,
}) => {
  const [isMounted, setIsMounted] = useState(false);

  const onUpload = (result: any) => {
    setImageUrl(result.info.secure_url);
    if (onUploadSuccess) {
      onUploadSuccess();
    }
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  if (!isMounted) {
    return null;
  }

  return (
    <div>
      <CldUploadWidget onUpload={onUpload} uploadPreset="sf4vsqtt">
        {({ open }) => {
          const onClick = () => {
            open();
          };

          return (
            <Button style={{ width: "100%" }} onClick={onClick}>
              <FileImageOutlined
                onMouseEnter={() => {}}
                onMouseLeave={() => {}}
              />
              Upload an Image
            </Button>
          );
        }}
      </CldUploadWidget>
    </div>
  );
};

export default ImageUpload;