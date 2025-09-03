import TwoElementLabel from "../components/TwoElementLabel";
import HeadModelCanvas from "./HeadModelCanvas";
import MobileAvatar from "./MobileAvatar";

const isMobile = /Mobi|Android/i.test(navigator.userAgent);

export default function AboutSection() {
  return (
    <section className="pt-5 pb-5" id="about">
      <div className="container">
        <div className="row align-items-center flex-row-reverse">
          <div className="col-lg-6">
            <div className="">
              <h3 className="text-primary fw-bold fs-1 mb-2">About Me</h3>
              <h6 className="text-secondary fs-4 fw-semibold">
                Aspiring programming Full-Stack student
              </h6>
              <p className="fs-5">
                I love turning ideas into reality through code. I'm currently
                exploring both front-end and back-end technologies, but my main
                interest and preference is back-end development. I'm actively
                trying towards becoming the Full-Stack Developer.
              </p>
              <div className="row">
                <div className="col-md-6">
                  <TwoElementLabel
                    containerClassName={"mb-2"}
                    firstElement={"Age"}
                    secondElement={"19 Yr"}
                  />
                  <TwoElementLabel
                    containerClassName={"mb-2"}
                    firstElement={"Residence"}
                    secondElement={"Poland"}
                  />
                  <TwoElementLabel
                    containerClassName={"mb-2"}
                    firstElement={"Address"}
                    secondElement={"Limanowa, Poland"}
                  />
                </div>
                <div className="col-md-6">
                  <TwoElementLabel
                    containerClassName={"mb-2"}
                    firstElement={"E-mail"}
                    secondElement={"damian.raczek@proton.me"}
                  />
                  <TwoElementLabel
                    containerClassName={"mb-2"}
                    firstElement={"Phone"}
                    secondElement={"+48 511 015 730"}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="col-lg-6">
            <div className="about-avatar">
              {isMobile == true ? <MobileAvatar /> : <HeadModelCanvas />}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
