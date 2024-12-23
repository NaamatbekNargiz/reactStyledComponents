import styled from "styled-components";
import ArrowLL from "../assets/images/ArrowLL.png";
import Runway from "../assets/images/Runway.png";
export default function Footer() {
  return (
    <div>
      <StyledFooter>
        <article className="footer-container">
          <section className="block-footer">
            <img src={ArrowLL} alt="arrow" className="footer-arrow" />
            <h1 className="footer-h1">Get Started Now</h1>
          </section>

          <div className="block-footer2">
            <img src={Runway} alt="text" className="runway" />

            <div>
              <h1>Features</h1>
              <div>
                <li>Green Screen</li>
                <li>Generative Media</li>
                <li>Face Animation (Soon)</li>
                <li>Model Playground</li>
                <li>Training</li>
                <li>Hosted Models</li>
              </div>
            </div>
            <div>
              <h1>Features</h1>

              <div>
                <li>Green Screen</li>
                <li>Generative Media</li>
                <li>Face Animation (Soon)</li>
                <li>Model Playground</li>
                <li>Training</li>
                <li>Hosted Models</li>
              </div>
            </div>
            <div>
              <h1>Features</h1>
              <div>
                <li>Green Screen</li>
                <li>Generative Media</li>
                <li>Face Animation (Soon)</li>
                <li>Model Playground</li>
                <li>Training</li>
                <li>Hosted Models</li>
              </div>
            </div>
          </div>
        </article>
      </StyledFooter>
    </div>
  );
}

const StyledFooter = styled.footer`
  & .footer-container {
    background-color: #473ff4;
  }
  .block-footer {
    display: flex;
  }

  & .footer-arrow {
    width: 129px;
    height: 95px;
    padding-top: 150px;
    padding-left: 48px;
  }
  & .footer-h1 {
    width: 700px;
    height: 240px;
    font-weight: 400;
    font-size: 120px;
    line-height: 120px;
    color: #ffffff;
    margin-left: 80px;
  }
  & .block-footer2 {
    display: flex;
    justify-content: space-between;
    color: white;
    padding-top: 200px;
    padding: 100px;
  }

  & li {
    list-style-type: none;
  }
`;
