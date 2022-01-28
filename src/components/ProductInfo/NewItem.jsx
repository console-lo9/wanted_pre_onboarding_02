import AddButton from "layout/Button";
import React from "react";

function NewItem({
  setNewItemTitle,
  setNewItemContent,
  newItemTitle,
  newItemContent,
  order,
}) {
  const handleChange = (e) => {
    setNewItemTitle(e.target.value);
  };
  const handleChange2 = (e) => {
    setNewItemContent(e.target.value);
  };
  return (
    <div>
      <form id={`form-${order}`}>
        <input
          type="text"
          placeholder="항목 제목 자유 입력"
          onChange={handleChange}
          value={newItemTitle}
          required
        />
        <input
          type="text"
          placeholder="내용을 입력해주세요."
          onChange={handleChange2}
          value={newItemContent}
          required
        />
        <button>삭제</button>
      </form>
    </div>
  );
}

export default NewItem;
