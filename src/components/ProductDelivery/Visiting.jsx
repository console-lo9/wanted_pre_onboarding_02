import OnOffButton from "layout/OnOffButton";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";
import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import React, { useEffect } from "react";
import styles from "./Visiting.module.css";

const ID_2 = "id2";

function Visiting({ checked2, setChecked2, setChecked3 }) {
  const handleClick = () => {
    setChecked2((check) => !check);
    setChecked3(false);
    return checked2;
  };
  return (
    <SectionBody>
      <ContentBodyTitle children="방문 수령"></ContentBodyTitle>
      <SectionBodyContent>
        <OnOffButton id={ID_2} onClick={handleClick} checked={checked2} />
      </SectionBodyContent>
    </SectionBody>
  );
}

export default Visiting;
