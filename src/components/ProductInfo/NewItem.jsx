import AddButton from "layout/Button";
import React from "react";

function NewItem({
  setNewItemTitle,
  setNewItemContent,
  newItemTitle,
  newItemContent,
  handleSubmit,
}) {
  const handleChange = (e) => {
    setNewItemTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setNewItemContent(e.target.value);
  };
  //   const handleSubmit = (e) => {
  //     e.preventDefault();
  //     console.log(newItemTitle);
  //   };
  return (
    <div>
      <form>
        <input
          placeholder="항목 제목 자유 입력"
          onChange={handleChange}
          value={newItemTitle}
          required
        />
        <input
          placeholder="내용을 입력해주세요."
          onChange={handleChange2}
          value={newItemContent}
          required
        />
        <button
          tag="add"
          children="+ 항목 추가"
          type="submit"
          onSubmit={handleSubmit}
        />
      </form>
    </div>
  );
}

export default NewItem;
