import styled from "styled-components";

import Frame from "../assets/images/Frame.png";
import NB from "../assets/images/NB.png";
import Google from "../assets/images/Google.png";
import IBM from "../assets/images/IBM.png";
import Pentagram from "../assets/images/Pentagram.png";
import RGA from "../assets/images/RGA.png";
import Facebook from "../assets/images/Facebook.png";
import VideoImg from "../assets/images/VideoImg.png";
import ArrowL from "../assets/images/ArrowL.png";

export default function App() {
  return (
    <div>
      <StyledMain>
        <article className="container-layout">
          <section className="block-1">
            <h1> Make the Impossible</h1>
            <p>
              Create and edit content like never before. Your next generation
              creative toolkit — powered by machine learning.
            </p>
            <button className="btn-main">Try Runway for free</button>
          </section>

          <section className="block-2">
            <img src={Frame} alt="human" className="human-main" />
            <button className="btn-main2">Sign up</button>
          </section>
        </article>
        <article>
          <section>
            <h4>Used by creative teams at:</h4>
          </section>

          <section className="block-3">
            <img src={NB} alt="new" />
            <img src={Google} alt="icon" />
            <img src={IBM} alt="icon" />
            <img src={Pentagram} alt="icon" />
            <img src={RGA} alt="icon" />
            <img src={Facebook} alt="icon" />
          </section>
        </article>

        <article className="container-layout2">
          <section className="block-4">
            <h1 className="block-4-h1">Introducing Green Screen</h1>
            <p className="text-1">
              A professional grade tool for cutting objects out of videos with
              just one click. All from inside your browser.
            </p>
            <p className="text-2">
              Say goodbye to clumsy plug-ins and expensive software suites.
            </p>

            <button className="block-4-button">Try Green Screen</button>
          </section>

          <section>
            <img src={VideoImg} alt="img" className="video-click" />
          </section>
        </article>

        <section>
          <div className="block-5-div">
            <p>
              <img src={ArrowL} alt="arrow" />
              The first tool for professional rotoscoping on the web — and also
              the fastest.
            </p>

            <p>
              <img src={ArrowL} alt="arrow" />
              Forget downloading plugins for decades-old software.
            </p>

            <p>
              <img src={ArrowL} alt="arrow" />
              Export full resolution 4K videos for any project.
            </p>

            <p>
              <img src={ArrowL} alt="arrow" />
              Skip the tutorial and get on with your work. It’s not that
              complicated.
            </p>
          </div>
        </section>
      </StyledMain>
    </div>
  );
}

const StyledMain = styled.main`
  & .container-layout {
    display: flex;
  }

  & h1 {
    font-family: "Times New Roman", Times, serif;
    font-weight: 400;
    font-size: 124px;
    line-height: 123.84px;
    color: #000000;
    padding-left: 48px;
  }

  & p {
    font-weight: 400;
    font-size: 20px;
    line-height: 27.72px;
    font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    color: #312e2e;
    padding-left: 48px;
    padding-top: 50px;
  }
  & .btn-main {
    margin-top: 30px;
    border-radius: 3cqmin;
    font-weight: 400;
    font-size: 12px;
    font-family: "Gill Sans", "Gill Sans MT", "Trebuchet MS", sans-serif;
    background-color: #ffffff;
    color: #5d5b5b;
    margin-left: 48px;
    width: 150px;
    height: 28px;
    padding-bottom: 3px;
  }
  & .btn-main:hover {
    background-color: #96eeee;
  }
  & .btn-main2 {
    background-color: #ffffff;
    width: 100px;
    height: 30px;
    border-radius: 2cqmin;
    border-color: #312e2e;
    margin-left: 570px;
  }
  & .btn-main2:hover {
    background-color: #96eeee;
  }
  & .block-2 {
    padding-left: 210px;
    margin-top: 100px;
  }

  & h4 {
    padding-left: 48px;
    padding-top: 130px;
  }

  & .block-3 {
    display: flex;
    justify-content: space-between;
    padding-top: 50px;
    padding-bottom: 100px;
  }
  & .container-layout2 {
    background-color: #ffce00;
    display: flex;
  }

  & .block-4-h1 {
    width: 700px;
    height: 120px;
    font-weight: 400;
    line-height: 128px;
    color: #000000;
    font-size: 100px;
  }
  & .text-1 {
    width: 400px;
    height: 100;
    line-height: 28px;
    font-size: 18px;
    margin-top: 50px;
  }
  & .text-2 {
    width: 300px;
    height: 56px;
    font-size: 18px;
    line-height: 28px;
    font-weight: 400;
  }
  & .block-4-button {
    margin-top: 50px;
    margin-left: 48px;
    font-size: 16px;
    border-radius: 4cm;
    width: 200px;
    height: 30px;
  }
  & .block-4-button:hover {
    background-color: #96eeee;
  }
  & .video-click {
    margin-top: 150px;
    width: 700px;
    height: 500px;
  }

  & .block-5-div {
    display: flex;
    background-color: #ffce00;
    padding-top: 100px;
    padding-bottom: 80px;
  }
`;
