"use client";

import { useState } from "react";
import LoadingDots from "./LoadingDots";

export default function YardCodeCard() {
  const [yardcode, setYardcode] = useState("");
  const [spot, setSpot] = useState("");
  const [state, setState] = useState("");
  const [Loading, setLoading] = useState(false);
  const [link, setLink] = useState("");
  const [error, setError] = useState("");
  const [showResult, setShowResult] = useState(false);

  const getYardCode = async () => {
    setLoading(true);
    if (!navigator.geolocation) {
      alert("Geolocation is not supported by your browser.");
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const res = await fetch(
            `/api/location?lat=${latitude}&lon=${longitude}`
          );
          const data = await res.json();

          if (data.yard === "invalid") {
            setYardcode("UNAVAILABLE, YOU ARE OUTSIDE NIGERIA");
            setSpot("-");
            setState("-");
            setLink("https://yardcode.ng");
          } else {
            setYardcode(data.yard);
            setSpot(data.spot);
            setState(data.state);
            const generatedLink = `https://yardcode.ng/${data.yard} ${data.spot}`;
            setLink(generatedLink);
          }
          setShowResult(true);
          setLoading(false);
        } catch (err) {
          alert("Error fetching YardCode: " + err);
        }
      },
      (err) => alert("Unable to retrieve location: " + err.message)
    );
  };

  return (
    <div>
      <h3 className="text-xl font-semibold mb-4">
        Check Your Current YardCode
      </h3>
      <button onClick={getYardCode} className="btn">
        {Loading ? (
          <LoadingDots loadingText="Getting your YardCode" />
        ) : (
          "Get My YardCode"
        )}
      </button>

      {showResult && (
        <div className="mt-4 p-4 border border-gray-200 rounded bg-gray-50">
          <p>
            <strong>Your Full YardCode:</strong> {yardcode} ({spot}), {state}
          </p>
          <p>
            <strong>{yardcode}:</strong> This is your yard, it covers a 111 m by
            111 m area of land.
          </p>
          <p>
            <strong>{spot}:</strong> This is your actual spot within that yard,
            and it covers 78cm radius - useful for site engineers or precise
            drone destination.
          </p>
          <p>
            So, if you do not want them to know exactly where you are, do not
            include your 'spot'.
          </p>
          <p>
            <strong>
              -<span>Guess what else is cool.-</span>
            </strong>
            :{" "}
            <strong>
              -<span>You can share this link with your clients: -</span>{" "}
              <a
                href={link}
                target="_blank"
                className="text-blue-600 underline"
              >
                {link}
              </a>
            </strong>
          </p>
        </div>
      )}
    </div>
  );
}
