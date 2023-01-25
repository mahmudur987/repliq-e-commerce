import React from "react";

const Banner = () => {
  return (
    <div
      className="hero h-[350px] max-h-[600px]"
      style={{
        backgroundImage: `url("https://images.unsplash.com/photo-1557821552-17105176677c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1032&q=80")`,
      }}
    >
      <div className="hero-overlay bg-opacity-60"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="max-w-md">
          <h1 className="mb-5 text-5xl font-bold"> WELCOME</h1>
          <p className="mb-5">
            You can start you Shopping and Change your Experiencee{" "}
          </p>
          <button className="btn btn-secondary">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
