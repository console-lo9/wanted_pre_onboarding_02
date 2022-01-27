import SectionBody from "layout/Section/SectionBody";
import SectionBodyContent from "layout/Section/SectionBodyContent";
import RadioInput from "layout/Inputs/RadioInput";
import ContentBodyTitle from "layout/Section/ContentBodyTitle";

const userSelectionMockData = [
  { id: 1, selection: "제한 없음" },
  { id: 2, selection: "미판매" },
  { id: 3, selection: "판매 기간 설정" },
];

const ProductSalsePeriod = () => {
  const userSelectionLists = userSelectionMockData.map((data) => (
    <li key={data.id}>
      <RadioInput />
      <p>{data.selection}</p>
    </li>
  ));

  return (
    <SectionBody>
      <ContentBodyTitle>상품판매 기한</ContentBodyTitle>
      <SectionBodyContent>
        <ul>{userSelectionLists}</ul>
      </SectionBodyContent>
    </SectionBody>
  );
};

export default ProductSalsePeriod;
