import React, { useEffect } from "react";
import "./index.css";
import Form from "./components/Form";

function App() {
  useEffect(() => {
    // Parse the query parameters from the URL
    const queryParams = new URLSearchParams(window.location.search);
    const bookingId = queryParams.get("bookingId");

    if (bookingId) {
      // Use the bookingId in your app logic
      console.log(`Booking ID: ${bookingId}`);

      // You can now implement logic to validate the booking ID and restrict access if needed.
    } else {
      // Handle the case where there is no 'bookingId' query parameter
      console.log("No booking ID found in the URL");
    }
  }, []);

  function isMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    );
  }

  return (
    <div className="parent-container">
      {isMobileDevice() ? (
        <Form />
      ) : (
        <p>This survey is only available on mobile devices.</p>
      )}
    </div>
  );
}

export default App;
