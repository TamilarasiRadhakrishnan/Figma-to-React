import React from "react";
import Card from "./Card";
import "./MainContent.css";

const MainContent = () => {
  return (
    <main className="main-content">
      <h2>Welcome to My Website</h2>
      <div className="card-container">
        <Card title="Card 1" description="This is the first card." />
        <Card title="Card 2" description="This is the second card." />
        <Card title="Card 3" description="This is the third card." />
      </div>
    </main>
  );
};

export default MainContent;
