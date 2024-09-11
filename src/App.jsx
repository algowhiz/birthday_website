import React, { useState, useEffect } from 'react';
import { gsap } from 'gsap';
import 'tailwindcss/tailwind.css';

const funCodes = {
  FRIEND1: {
    heading: "🎉 Thank You, John! 🎉",
    message: "Hey buddy! Thanks for the awesome birthday wishes! Can't wait to celebrate with you!",
    videoUrl: "https://www.example.com/video1.mp4",
    extraHeading: "See You Soon, John!",
    extraMessage1: "Looking forward to having an amazing time together!",
    extraMessage2: "Party details will be shared soon! Stay tuned!"
  },
  FRIEND2: {
    heading: "🎈 Thank You, Sarah! 🎈",
    message: "Thank you so much for the sweet birthday wishes! Looking forward to partying soon!",
    videoUrl: "https://www.example.com/video2.mp4",
    extraHeading: "Can't Wait to Celebrate, Sarah!",
    extraMessage1: "You're such a great friend, Sarah!",
    extraMessage2: "See you at the celebration!"
  }
};

const App = () => {
  const [enteredCode, setEnteredCode] = useState("");
  const [matchedData, setMatchedData] = useState(null);

  useEffect(() => {
    gsap.fromTo('.container', { opacity: 0, y: 100 }, { opacity: 1, y: 0, duration: 2 });

    if (matchedData) {
      gsap.fromTo(
        ".heading",
        { opacity: 0, y: -50 },
        { opacity: 1, y: 0, duration: 1.2, ease: "bounce.out" }
      );
    }
  }, [matchedData]);

  //submit click eventhandler
  const handleCodeSubmit = () => {
    const matched = funCodes[enteredCode.toUpperCase()];
    if (matched) {
      setMatchedData(matched);
    } else {
      alert("Code not found, please try again!");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center" style={{ backgroundColor: 'var(--primary-bg)', color: 'var(--primary-text)' }}>
      <div className="container p-10 rounded-xl w-full max-w-5xl text-center md:text-left" style={{ backgroundColor: 'var(--container-bg)' }}>
        <div className="flex flex-col md:flex-row items-start gap-8">

          <div className="w-full md:w-1/2">
            <video controls className="w-full h-auto rounded-lg shadow-lg" style={{ backgroundColor: 'var(--video-bg)' }}>
              <source src={matchedData?.videoUrl || "https://www.example.com/video-placeholder.mp4"} type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>

          <div className="w-full md:w-1/2">
            {matchedData ? (
              <>
                <h2 className="heading text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary-text)' }}>{matchedData.heading}</h2>
                <p className="message text-lg mb-4" style={{ color: 'var(--secondary-text)' }}>{matchedData.message}</p>
              </>
            ) : (
              <>
                <h1 className="text-3xl md:text-4xl font-bold" style={{ color: 'var(--primary-text)' }}>Enter Your Fun Code</h1>
                <p className="text-md mt-2 mb-4" style={{ color: 'var(--secondary-text)' }}>
                  Please enter the code you received to reveal a special thank you message!
                </p>
                <div className="flex items-center space-x-4">
                  <input
                    type="text"
                    className="p-3 outline-none w-full max-w-xs rounded-lg border-2"
                    style={{ borderColor: 'var(--input-border)' }}
                    placeholder="Enter your code"
                    value={enteredCode}
                    onChange={(e) => setEnteredCode(e.target.value)}
                  />
                  <button
                    onClick={handleCodeSubmit}
                    className="px-6 py-3 rounded-lg hover:bg-green-700 transition duration-300"
                    style={{ backgroundColor: 'var(--btn-bg)', color: 'white' }}
                  >
                    Submit
                  </button>
                </div>
              </>
            )}
          </div>
        </div>

        {matchedData && (
          <div className="mt-8">

            <h2 className="text-3xl md:text-4xl font-bold mb-4" style={{ color: 'var(--primary-text)' }}>{matchedData.extraHeading}</h2>


            <div className="w-full  mb-4">
              <img
                src="spidy.jpg" // Replace
                alt="Celebration"
                className="w-full h-auto rounded-lg shadow-lg"
              />
            </div>
            <div className='bg-white p-4 rounded-lg mb-4 flex justify-center items-center'>
              <p className="text-lg  font-bold " style={{ color: 'var(--secondary-text)' }}>{matchedData.extraMessage1}</p>
            </div>
            <div className='bg-white p-4 rounded-lg flex justify-center items-center'>
              <p className="text-lg font-bold" style={{ color: 'var(--secondary-text)' }}>{matchedData.extraMessage2}</p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default App;
