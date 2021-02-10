import React from "react";

const JobDetails = ({ jobDetails }) => {
  const parseSkills = (skills) => {
    return skills
      ? skills.map((skill) => {
          return (
            <div
              key={skill}
              className="ui blue basic label"
              style={{ marginBottom: "3.5px", marginTop: "3.5px" }}
            >
              {skill}
            </div>
          );
        })
      : null;
  };

  const customDateFormatter = (date) => {
    return new Date(Date.parse(date)).toDateString();
  };

  return (
    <div className="ui segment">
      <div className="ui header">{jobDetails.title}</div>
      <div className="ui divider"></div>
      <div className="ui left basic black label">
        Posted:
        {customDateFormatter(jobDetails.posted)}
      </div>
      <div className="ui left basic black label">
        Updated:{customDateFormatter(jobDetails.updated)}
      </div>
      <div className="ui basic violet label">{jobDetails.country}</div>
      <div className="ui orange label">{jobDetails.category}</div>
      <div className="ui">{parseSkills(jobDetails.skills)}</div>
      {jobDetails && jobDetails.hourly ? (
        <div className="ui buttons">
          <div className="ui green button">
            <i className="usd icon"></i>
            {jobDetails.hourly.gte}
          </div>
          <div className="or" data-text="-"></div>

          <div className="ui green button">
            <i className="usd icon"></i>
            {jobDetails.hourly.lte}
          </div>
        </div>
      ) : null}
      {jobDetails && jobDetails.budget ? (
        <div className="ui green button">
          <i className="usd icon"></i>
          {jobDetails.budget}
        </div>
      ) : null}
      <div className="ui segment description">
        <span dangerouslySetInnerHTML={{ __html: jobDetails.content }}></span>
      </div>
      <div className="ui">{parseSkills(jobDetails.skills)}</div>
    </div>
  );
};

export default JobDetails;
