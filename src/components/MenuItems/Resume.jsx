import React from "react";
import "../MenuItems/MenuItemsStyles/ResumeStyles.css";

export const Resume = () => {
  return (
    <div className="resume_bg">
      <div className="resume_container">
        <section className="resume_content">
          <div className="new_res">
            <div className="res_container_image"></div>
            <div className="res_skills">
              <div className="ui huge list">
                <div className="date_of_birth">
                  <h2 className="item header">Date/Place of Birth</h2>
                  02/12/1999, Mohilev
                </div>
                <div className="date_of_birth_skills">
                  <h2 className="header">Hard Skills</h2>
                  <div className="skills_edit">JavaScript </div>
                  <div className="skills_edit">React & Redux</div>
                  <div className="skills_edit">Html & CSS </div>
                  <div className="skills_edit">CSS preprocessors</div>
                  <h2 className="header">Soft Skills</h2>
                  <div className="skills_edit">Clear Communication</div>
                  <div className="skills_edit">Higtly organized</div>
                  <h2 className="header">Languages</h2>
                  <div className="skills_edit">English, Russian</div>
                </div>
              </div>
            </div>
          </div>
          <div className="res_new_two">
            <div className="resume_bio_about">
              <div className="ui big list">
                <div className="item">
                  <h1 className="res_name">Arseni Shaikov</h1>
                </div>
                <div className="item">
                  <h3 className="res_prof">Front-end Developer</h3>
                </div>
              </div>
              <div className="ui big list">
                <div className="item">
                  <i className="marker big icon"></i>
                  <div className="content">
                    Mohilev 21202712 / Republic Of Belarus
                  </div>
                </div>
                <div className="item">
                  <i className="envelope big icon"></i>
                  <div className="content">
                    +375(33)692-09-84 / <span className="">sagees@mail.ru</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="res_profile">
              <div className="res_segment">
                <h1 className="ui header" style={{ color: "black" }}>
                  Profile
                </h1>
                <p className="res_aboutMe">
                  A novice frontend developer who has completed courses on
                  frontend development from the "STEP" Academy in 2021 and
                  self-study in the future. Had a one year of experience.
                  Looking for excellent skills in frontend SPA development.
                </p>
              </div>
              <div className="res_segment">
                <h1 className="ui header" style={{ color: "black" }}>
                  Profile
                </h1>
                <p className="res_aboutMe">
                  A novice frontend developer who has completed courses on
                  frontend development from the "STEP" Academy in 2021 and
                  self-study in the future. Had a one year of experience.
                  Looking for excellent skills in frontend SPA development.
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};
