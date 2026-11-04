
import React from "react";
import { Target, Eye, ArrowUpRight } from "lucide-react";

const MissionVision = () => {
  return (
    <section className="mission-vision-section">
      <div className="container">
        <div className="mv-header">
          <span className="section-label">OUR PURPOSE</span>

          <h2 className="section-title">
            Driven by Purpose.
            <br />
            <span>Focused on Your Success.</span>
          </h2>

          <p className="section-description">
            At Intracia Technologies, we believe exceptional customer
            experiences are built through thoughtful strategies, dedicated
            people, and a commitment to continuous improvement.
          </p>
        </div>

        <div className="mv-layout">
          <div className="mv-image-wrapper">
            <img
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=1200&q=85"
              alt="Team collaborating in a modern office"
              className="mv-image"
            />

            <div className="mv-image-overlay">
              <span>People. Purpose. Performance.</span>
              <p>Building better customer experiences together.</p>
            </div>
          </div>

          <div className="mv-content">
            <article className="mv-card">
              <div className="mv-icon">
                <Target size={25} strokeWidth={1.8} />
              </div>

              <div className="mv-card-content">
                <span className="mv-card-label">01 / OUR MISSION</span>
                <h3>Making Every Customer Interaction Matter</h3>
                <p>
                  Our mission is to help businesses build lasting customer
                  relationships through dependable support, effective
                  communication, and service solutions designed around their
                  needs.
                </p>
              </div>
              <ArrowUpRight className="mv-arrow" size={21} />
            </article>

            <article className="mv-card">
              <div className="mv-icon">
                <Eye size={25} strokeWidth={1.8} />
              </div>

              <div className="mv-card-content">
                <span className="mv-card-label">02 / OUR VISION</span>
                <h3>Setting a Higher Standard for Customer Experience</h3>
                <p>
                  Our vision is to be a trusted partner for businesses seeking
                  meaningful customer connections, consistent service quality,
                  and long-term operational growth.
                </p>
              </div>
              <ArrowUpRight className="mv-arrow" size={21} />
            </article>

            <div className="mv-note">
              <span className="mv-note-dot"></span>
              <p>
                Every conversation is an opportunity to create a better
                experience.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MissionVision;
