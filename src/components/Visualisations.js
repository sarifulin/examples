import React from "react";
import ReactWordcloud from "react-wordcloud";
import { Resizable } from "re-resizable";

const Visualisations = ({ data }) => {
  const filtPropCategory = "category";
  const filtPropSkills = "skills";

  const filterWordsForCloud = (data, filteringProp) => {
    const wordsArr = {};
    const tagWords = [];
    data.forEach(
      (row) =>
        (wordsArr[row[`${filteringProp}`][0]] =
          (wordsArr[row[`${filteringProp}`][0]] || 0) + 1)
    );
    for (filteringProp in wordsArr) {
      tagWords.push({
        text: filteringProp,
        value: wordsArr[`${filteringProp}`],
      });
    }
    return tagWords;
  };

  const filterSkillsForCloud = (data, filteringProp) => {
    const wordsArr = [];
    const tagWords = [];
    const tagObj = [];
    data.forEach((row) => {
      wordsArr.push(row.skills);
    });
    let temp1 = wordsArr.flat();
    temp1.forEach((entry) => (tagObj[entry] = (tagObj[entry] || 0) + 1));
    let temp2 = [];
    for (let item in tagObj) {
      temp2.push({
        text: item,
        value: tagObj[item],
      });
    }
    return temp2;
  };

  let categoryWords = filterWordsForCloud(data, filtPropCategory);
  let skillsWords = filterSkillsForCloud(data, filtPropSkills);

  return (
    <div>
      <Resizable
        defaultSize={{
          width: 600,
          height: 400,
        }}
        style={{ background: "#f0f0f0" }}
      >
        <p>Category Cloud</p>
        <ReactWordcloud words={categoryWords} options={{ rotations: 0 }} />
      </Resizable>
      <br />
      <Resizable
        defaultSize={{
          width: 600,
          height: 400,
        }}
        style={{ background: "#f0f0f0" }}
      >
        <p>Skills Cloud</p>

        <ReactWordcloud words={skillsWords} options={{ rotations: 0 }} />
      </Resizable>
    </div>
  );
};

export default Visualisations;
