import React, { useState, useEffect } from "react";
function Loading() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setData("Fetched data");
      setLoading(false);
    }, 2000);
  }, []);

  return (
    <div className="container">
      {loading ? (
        <div class="loader">
          Loading
          <span></span>
        </div>
      ) : (
        <div>
          <p>Data: {data}</p>
        </div>
      )}
    </div>
  );
}

export default Loading;
