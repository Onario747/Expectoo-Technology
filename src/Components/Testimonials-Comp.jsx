// import React from 'react'
import '../Stylesheets/Testimonial-Comp.css'
import profileImg_1 from '../Images/Ellipse 81.png'

const TestimonialsComp = () => {
  return (
    <div className="TestimonialsComp-container">
      <h2 className="testimonial-header">Testimonials</h2>
      <div className="testimonials-container">
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>James John</h2>
              </div>
              <div className="profile-portfolio">
                <h2>FutureLink Limited┃Manager</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>“Collaborating with Expectoo significantly transformed our company. They not only comprehended our distinctive recruitment requirements but also provided us with highly skilled professionals who precisely met our needs.”
</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>Ade Kunle</h2>
              </div>
              <div className="profile-portfolio">
                <h2>Vendor limited | Manager</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>&quot;I had a vision for my website, but I couldn&apos;t have turned it into reality without the expertise of Expectoo. They took my ideas and transformed them into a beautiful, user-friendly website that has exceeded my expectations. I&apos;m thrilled with the results!&quot;
</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>Hazard</h2>
              </div>
              <div className="profile-portfolio">
                <h2>Shoe’s Statement ┃CEO</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>&quot;I approached Expectoo for a complex web project, and they nailed it. They were able to create a highly customised website that met all our requirements and even suggested improvements we hadn&apos;t thought of. The end result is a website that&apos;s both aesthetically pleasing and highly functional.&quot;
</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>Ajoke Adekunle</h2>
              </div>
              <div className="profile-portfolio">
                <h2>UI/UX Designer Recruit</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>&quot;As a job seeker, I can&apos;t thank Expectoo enough for their support and guidance throughout the hiring process. They connected me with the perfect job opportunity, and I&apos;m now thriving in my new role. Their professionalism and dedication are unmatched.&quot;</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>Daniel Olukoya</h2>
              </div>
              <div className="profile-portfolio">
                <h2>Vendor limited | Manager</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>&quot;We partnered with Expectoo for software maintenance, and their proactive approach has been exceptional. Their attention to detail and swift responses to issues have minimised downtime significantly.&quot</p>
          </div>
        </div>
        <div className="testimonial-box">
          <div className="profile-details">
            <div className="profile-img">
              <img src={profileImg_1} alt="" />
            </div>
            <div className="profile-text">
              <div className="profile-name">
                <h2>Simisola Ade</h2>
              </div>
              <div className="profile-portfolio">
                <h2>Business Owner</h2>
              </div>
            </div>
          </div>
          <div className="testimony">
            <p>&quot;Expectoo&apos;s IT consultancy services provided invaluable insights that helped us revamp our systems, resulting in increased efficiency and cost savings.&quot;</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TestimonialsComp