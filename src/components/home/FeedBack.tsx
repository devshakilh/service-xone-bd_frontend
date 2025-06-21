import FeedbackForm from "../ui/FeedbackForm";

const FeedBack = () => {
  return (
    <div>
      {/* heding */}
      <div
        style={{
          padding: "30px 0",
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          
        }}
      >
        <h1
          style={{
            fontSize: "50px",
            color:"#007bff",
          }}
        >
          Feedback Form
        </h1>
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
            color: "#808080",
          }}
        >
          Please provide a brief description of your feedback
        </p>
      </div>

      {/* service option */}
      <FeedbackForm />
    </div>
  );
};

export default FeedBack;
