import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import React from "react";

const ID_2 = "id2";

function Visiting({ checked2, setChecked2, setChecked3 }) {
  const handleChange = () => {
    setChecked2((check) => !check);
    setChecked3(false);
    return checked2;
  };
  return (
    <SectionBody>
      <ContentBodyTitle children="방문 수령"></ContentBodyTitle>
      <SectionBodyContent>
        <OnOffButton id={ID_2} onChange={handleChange} checked={checked2} />
      </SectionBodyContent>
    </SectionBody>
  );
}

export default Visiting;
