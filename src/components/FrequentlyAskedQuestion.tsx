import React from "react";

export default function FrequentlyAskedQuestion() {
  return (
    <div>
      <h3 className="heading mb-6">Frequently Asked Questions</h3>
      <div>
        <h4 className="sub_heading_2">What is YardCode?</h4>
        <p className="sub_heading">
          YardCode is a digital addressing system that assigns unique codes to
          locations across Nigeria, simplifying navigation and logistics.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="sub_heading_2">When will it launch?</h4>
        <p className="sub_heading">
          YardCode is set to launch officially on June 8, 2025.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="sub_heading_2">How can I use YardCode?</h4>
        <p className="sub_heading">
          You can use YardCode for precise location sharing, navigation, and
          integrating with services like delivery or emergency response.
        </p>
      </div>
      <div className="mt-4">
        <h4 className="sub_heading_2">Does YardCode come with any Hardware?</h4>
        <p className="sub_heading">
          Yes. Aside your mobile phone being able to check your yardcode without
          any internet, kids will need the yardcode pendants to be able to
          report their precise locations and see the name of wherever they are.
          Taxis will also need our overhead yardcode display.
        </p>
      </div>
    </div>
  );
}
