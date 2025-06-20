// "use client";

// import SBTable from "@/components/ui/SBTable";
// import {
//   useBookingQuery,
//   useDeletebookingMutation,
// } from "@/redux/api/bookingApi";
// import { getUserInfo } from "@/services/auth.service";
// import {
//   CheckOutlined,
//   ClockCircleOutlined,
//   DeleteOutlined,
// } from "@ant-design/icons";
// import { Avatar, Button, Timeline, message } from "antd";
// import dayjs from "dayjs";




// const BookingList = () => {
//   const { role, userId } = getUserInfo() as any;

//   const [deletebooking] = useDeletebookingMutation();

//   const { data, isLoading, refetch } = useBookingQuery({});

//   const bookings = data?.data;

//   const deleteHandler = async (id: { id: string }) => {
//     message.loading("Booking...");
//     try {
//       const res = await deletebooking(id).unwrap();
//       if (res?.success) {
//         message.success("Booking deleted successfully");
//       } else {
//         message.error("Something went wrong");
//       }
//     } catch (err: any) {
//       message.error(err.message);
//     }
//   };

//   const columns = [
//     {
//       title: "Services",
//       render: function (data: any) {
//         // return <img src={data?.profilePicture} alt="profile" width="50px" height="50px" />
//         return {
//           children: (
//             <Avatar shape="square" size={50} src={data?.service?.imageLink} />
//           ),
//           props: {
//             colSpan: 1,
//           },
//         };
//       },
//     },
//     {
//       title: "Service Name",
//       render: function (data: any) {
//         return {
//           children: data?.service?.title,
//           props: {
//             colSpan: 1,
//           },
//         };
//       },
//     },

//     {
//       title: "Booking Schedule",
//       render: function (data: any) {
//         return (
//           <p>
//             {data?.date}&nbsp;
//             <span
//               style={{
//                 color: "red",
//                 fontWeight: "bold",
//               }}
//             >
//               {data?.startTime}
//             </span>
//             &nbsp; To&nbsp;
//             <span
//               style={{
//                 color: "red",
//                 fontWeight: "bold",
//               }}
//             >
//               {data?.endTime}
//             </span>
//           </p>
//         );
//       },
//     },

//     {
//       title: "Price",
//       render: function (data: any) {
//         return {
//           children: data?.service?.price,
//           props: {
//             colSpan: 1,
//           },
//         };
//       },
//     },
//     {
//       title: "Tax",

//       sorter: true,
//       render: function (data: any) {
//         return {
//           children: data?.service?.tax,
//           props: {
//             colSpan: 1,
//           },
//         };
//       },
//     },
//     {
//       title: "Booking Status",
//       dataIndex: "status",

//       render: function (data: any) {
//         return data === "pending" ? (
//           <strong style={{ color: "orange" }}>Pending</strong>
//         ) : data === "accepted" ? (
//           <strong style={{ color: "green" }}>Accepted</strong>
//         ) : (
//           <strong
//             style={{
//               color: "red",
//             }}
//           >
//             Rejected
//           </strong>
//         );
//       },
//     },
//     {
//       title: "Payment Status",
//       render: function (data: any) {
//         return data?.status === "pending" ? (
//           <strong style={{ color: "orange" }}>Pending</strong>
//         ) : data?.status === "accepted" ? (
//           <strong style={{ color: "yellowgreen" }}>Paid</strong>
//         ) : (
//           <strong
//             style={{
//               color: "red",
//             }}
//           >
//             Unpaid
//           </strong>
//         );
//       },
//     },

//     {
//       title: "Created At",
//       dataIndex: "createdAt",
//       render: function (data: any) {
//         return data && dayjs(data).format("MMM D, hh:mm A");
//       },
//       sorter: true,
//     },
//     {
//       title: "Update Hestory",
//       render: function (data: any) {
//         return (
//           <Timeline
//             style={{
//               margin: "0",
//               padding: "0",
//             }}
//             items={[
//               {
//                 color: "orange",
//                 children: "Pernding",
//               },
//               {
//                 dot: <ClockCircleOutlined 
//                   style={{ fontSize: "16px" }}
//                   onPointerEnterCapture={() => {}} 
//                   onPointerLeaveCapture={() => {}}
//                 />,
//                 color: `${data?.status === "accepted" ? "green" : "gray"}`,
//                 children: "Accepted",
//               },
//               {
//                 color: `${data?.status === "rejected" ? "red" : "gray"}`,

//                 children: "Rejected",
//               },
//               {
//                 color: `${data?.status === "accepted" ? "green" : "gray"}`,
//                 dot: <CheckOutlined 
//                   style={{ fontSize: "16px" }}
//                   onPointerEnterCapture={() => {}} 
//                   onPointerLeaveCapture={() => {}}
//                 />,

//                 children: "Done",
//               },
//             ]}
//           />
//         );
//       },
//     },
//     {
//       title: "Action",
//       render: function (data: any) {
//         return (
//           <div>
//             <Button onClick={() => deleteHandler(data?.id)} danger>
//               <DeleteOutlined 
//                 onPointerEnterCapture={() => {}} 
//                 onPointerLeaveCapture={() => {}}
//               />
//             </Button>
//           </div>
//         );
//       },
//     },
//   ];

//   return (
//     <div
//       style={{
//         height: "100vh",
//       }}
//     >
//       <SBTable
//         loading={isLoading}
//         columns={columns}
//         dataSource={bookings}
//         // pageSize={sige}
//         // totalPages={meta?.total}
//         showSizeChanger={true}
//         // onPaginationChange={onPaginationChange}
//         // onTableChange={onTableChange}
//         showPagination={false}
//       />
//     </div>
//   );
// };

// export default BookingList;
"use client";

import SBTable from "@/components/ui/SBTable";
import {
  useBookingQuery,
  useDeletebookingMutation,
} from "@/redux/api/bookingApi";
import { getUserInfo } from "@/services/auth.service";
import { CheckOutlined, ClockCircleOutlined, DeleteOutlined } from "@ant-design/icons";
import { Avatar, Button, Timeline, message } from "antd";
import dayjs from "dayjs";

const BookingList = () => {
  const { role, userId } = getUserInfo() as any;

  const [deletebooking] = useDeletebookingMutation();
  const { data, isLoading, refetch } = useBookingQuery({});

  const bookings = data?.data;

  const deleteHandler = async (id: { id: string }) => {
    message.loading("Booking...");
    try {
      const res = await deletebooking(id).unwrap();
      if (res?.success) {
        message.success("Booking deleted successfully");
      } else {
        message.error("Something went wrong");
      }
    } catch (err: any) {
      message.error(err.message);
    }
  };

  const columns = [
    {
      title: "Services",
      render: function (data: any) {
        return {
          children: (
            <Avatar shape="square" size={50} src={data?.service?.imageLink} />
          ),
          props: {
            colSpan: 1,
          },
        };
      },
    },
    {
      title: "Service Name",
      render: function (data: any) {
        return {
          children: data?.service?.title,
          props: {
            colSpan: 1,
          },
        };
      },
    },
    {
      title: "Booking Schedule",
      render: function (data: any) {
        return (
          <p>
            {data?.date} 
            <span style={{ color: "red", fontWeight: "bold" }}>
              {data?.startTime}
            </span>
              To 
            <span style={{ color: "red", fontWeight: "bold" }}>
              {data?.endTime}
            </span>
          </p>
        );
      },
    },
    {
      title: "Price",
      render: function (data: any) {
        return {
          children: data?.service?.price,
          props: {
            colSpan: 1,
          },
        };
      },
    },
    {
      title: "Tax",
      sorter: true,
      render: function (data: any) {
        return {
          children: data?.service?.tax,
          props: {
            colSpan: 1,
          },
        };
      },
    },
    {
      title: "Booking Status",
      dataIndex: "status",
      render: function (data: any) {
        return data === "pending" ? (
          <strong style={{ color: "orange" }}>Pending</strong>
        ) : data === "accepted" ? (
          <strong style={{ color: "green" }}>Accepted</strong>
        ) : (
          <strong style={{ color: "red" }}>Rejected</strong>
        );
      },
    },
    {
      title: "Payment Status",
      render: function (data: any) {
        return data?.status === "pending" ? (
          <strong style={{ color: "orange" }}>Pending</strong>
        ) : data?.status === "accepted" ? (
          <strong style={{ color: "yellowgreen" }}>Paid</strong>
        ) : (
          <strong style={{ color: "red" }}>Unpaid</strong>
        );
      },
    },
    {
      title: "Created At",
      dataIndex: "createdAt",
      render: function (data: any) {
        return data && dayjs(data).format("MMM D, hh:mm A");
      },
      sorter: true,
    },
    {
      title: "Update History",
      render: function (data: any) {
        return (
          <Timeline
            style={{
              margin: "0",
              padding: "0", 
            }}
            items={[
              {
                color: "orange",
                children: "Pending",
              },
              {
                dot: <ClockCircleOutlined style={{ fontSize: "16px" }} />,
                color: `${data?.status === "accepted" ? "green" : "gray"}`,
                children: "Accepted",
              },
              {
                color: `${data?.status === "rejected" ? "red" : "gray"}`,
                children: "Rejected",
              },
              {
                color: `${data?.status === "accepted" ? "green" : "gray"}`,
                dot: <CheckOutlined style={{ fontSize: "16px" }} />,
                children: "Done",
              },
            ]}
          />
        );
      },
    },
    {
      title: "Action",
      render: function (data: any) {
        return (
          <div>
            <Button onClick={() => deleteHandler(data?.id)} danger>
              <DeleteOutlined />
            </Button>
          </div>
        );
      },
    },
  ];

  return (
    <div
      style={{
        height: "100vh",
      }}
    >
      <SBTable
        loading={isLoading}
        columns={columns}
        dataSource={bookings}
        showSizeChanger={true}
        showPagination={false}
      />
    </div>
  );
};

export default BookingList;