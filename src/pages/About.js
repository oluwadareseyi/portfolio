import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { fadeUp } from "../animations";
import gsap from "gsap";
import Footer from "../components/Footer";

const transition = { duration: 1, ease: "easeInOut", delay: 0.8 };

const About = () => {
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
    });
    document.title = "Seyi — About Me";
    fadeUp(".about-inner", 0.8);
    gsap.from(".about__inner", {
      duration: 0.2,
      delay: 0.8,
      opacity: 0,
      ease: "Power4.out",
    });
    gsap.to(".cursor", {
      duration: 0,
      css: { display: "none" },
    });
  }, []);
  return (
    <>
      <motion.div
        initial={{ height: "100%" }}
        // animate={{ height: "0%", transition: { ...transition, delay: 1 } }}
        className="transition"
      />
      <motion.div
        exit={{ height: "100%", transition }}
        className="transition2"
      />
      <motion.div
        initial={{ height: 0, visibility: "hidden" }}
        animate={{
          height: "100%",
          visibility: "visible",
          transition: { ...transition, duration: 2, delay: -0.2 },
        }}
        className="about"
      >
        <div className="about__inner">
          <div className="about__top">
            <div className="my-name">
              Oluwadare <br /> Oluwaseyi.
            </div>
            <div className="desc">
              <p>
                Software Developer based in Lagos, Nigeria focused on branding,
                building interactive experiences & creating emotions through
                design and technology.
              </p>
              <p>
                I have always supported the idea of a minimalistic and
                user-focused approach to design and development, which I indeed
                imbibe when building scalable and fully responsive web
                applications.
              </p>
            </div>
            <a
              href="https://drive.google.com/uc?export=download&id=1atxrM3opQtRyJkosCD0MYt_lskoT_NRv"
              download
            >
              <i className="fas fa-file-alt"></i> Download Resume
            </a>
          </div>

          <div className="about__bottom">
            <div className="experience">
              <div className="stack main-title">
                <span>Stack.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name tech">Core Tech:</div>
                  <ul className="tasks">
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>CSS</li>
                    <li>SCSS</li>
                    <li>GSAP</li>
                    <li>Framer Motion</li>
                    <li>CSS-in-JS</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MongoDB</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">Familiar:</div>
                  <ul className="tasks">
                    <li>React Native</li>
                    <li>Vue.js</li>
                    <li>MySQL</li>
                    <li>GraphQL</li>
                    <li>PWAs</li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name tech">On The Job:</div>
                  <ul className="tasks">
                    <li>Testing.</li>
                    <li>Version Control.</li>
                    <li>
                      JavaScript best practices, clean code and ES6+ knowledge.
                    </li>
                    <li>Continuous Integration/Development.</li>
                    <li>Responsive Design.</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="experience">
              <div className="main-title">
                <span>experience.</span>
              </div>

              <div className="companies">
                <div className="company">
                  <div className="name">Ijaya Comics</div>
                  <div className="year">Feb 2020 - Today</div>
                  <ul className="tasks">
                    <li>
                      Worked with other developers and founders to create the
                      best possible product for our readers.
                    </li>
                    <li>
                      Built an impregnable multi-role user authentication
                      system.
                    </li>
                    <li>
                      Worked with UI/UX designers to create clean, reusable
                      components with React.
                    </li>
                    <li>
                      Built a client-side, dynamic routing system with
                      safeguards.
                    </li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name">Pith Africa - CFO</div>
                  <div className="year">Dec 2019 - Today</div>
                  <ul className="tasks">
                    <li>
                      Built temporary product pages on the front-end and
                      automated user responses on order.
                    </li>

                    <li>
                      Heavily Involved in the planning and design of our coming
                      online store.
                    </li>

                    <li>
                      Improved the design and overall accessibility of pages.
                    </li>
                    <li>
                      Overseeing our finances and Involved in the day to day
                      running of our brand.
                    </li>
                  </ul>
                </div>

                <div className="company">
                  <div className="name">Life Pith (NGO)</div>
                  <div className="year">April 2020 - Today</div>
                  <ul className="tasks">
                    <li>
                      Carried out design planning and built up the landing page
                      from scratch.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <Footer />
        </div>
      </motion.div>
    </>
  );
};

export default About;
