"use client";

import React, { useState, useRef } from "react";

const CameraPage = () => {
  const [cameraOn, setCameraOn] = useState(false);
  const videoRef = useRef(null);

  const handleStartCamera = async () => {
    try {
      const stream = await navigator.mediaDevices.getUserMedia({
        video: true,
        audio: true,
      });
      if (videoRef.current) {
        videoRef.current.srcObject = stream;
        setCameraOn(true);
      }
    } catch (err) {
      alert("Camera access denied or not available.");
      console.error(err);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <h1 className="text-2xl font-bold mb-4">Secure Camera Access</h1>
      {!cameraOn ? (
        <>
          <p className="mb-2 text-center">
            This app needs camera & mic access. Please allow when asked.
          </p>
          <button
            onClick={handleStartCamera}
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Allow Camera Access
          </button>
        </>
      ) : (
        <>
          <p className="mb-2">Camera is active (not being recorded).</p>
          <video
            ref={videoRef}
            autoPlay
            playsInline
            muted
            className="w-full max-w-md rounded shadow-lg"
          />
        </>
      )}
    </div>
  );
};

export default CameraPage;
