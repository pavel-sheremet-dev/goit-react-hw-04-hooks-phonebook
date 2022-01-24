import { Toaster } from "react-hot-toast";

const Notify = () => {
  return (
    <div>
      <Toaster
        toastOptions={{
          style: {
            borderRadius: "10px",
            background: "#236d44",
            color: "#fff",
          },
        }}
      />
    </div>
  );
};

export default Notify;
