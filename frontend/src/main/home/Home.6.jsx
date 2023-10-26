import React, { Component } from "react";

export default class Home extends Component {
  render() {
    return (
      <div className="flex flex-row h-screen justify-between items-center px-36">
        <div>
          <img
            src="https://o.remove.bg/downloads/bebd2121-0cae-4224-973a-e7c7eeadf759/image-removebg-preview.png"
            alt=""
            className="object-contain h-[60vh]"
          />
        </div>
        <div className="flex flex-col gap-10 w-3/6">
          <h1 className="text-7xl">PROJECT K5</h1>
          <div className="flex flex-col">
            <p className="text-2xl text-justify font-light">
              Project K5 is not merely a web app; it's the crescendo of hope,
              knowledge, and empowerment. Its grand purpose is to grant Filipino
              citizens a front-row seat in our nation's climate journey. With
              Project K5, you are invited to:
            </p>
            <div className="flex flex-col gap-6 py-8 justify-between">
              <div class="flex flex-col gap-2 w-1/2">
                <h3 className="text-4xl">Stay Informed</h3>
                <p>
                  Immerse yourself in real-time data showcasing our progress in
                  reducing emissions and building resilience.
                </p>
              </div>

              <div class="flex flex-col gap-2 w-1/2">
                <h3 className="text-4xl">Track Progress</h3>
                <p>
                  Navigate the intricate symphony of our climate goals and see
                  the impact of our collective actions.
                </p>
              </div>

              <div class="flex flex-col gap-2 w-1/2">
                <h3 className="text-4xl">Advocate for Change</h3>
                <p>
                  Be the conductor of transformation, using data as your baton
                  to orchestrate policies that will fortify our nation's climate
                  resilience.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
