import { useNavigate } from "react-router-dom";
import Button from "./Button";
import DiaryItem from "./DiaryItem";
import { useState } from "react";

export default function DiaryList({data}) {
  const nav= useNavigate();
  const [sortType, setSortType] = useState("latest");

  const onChangeSortType = (e) => {
    setSortType(e.target.value);
  }

  const getSortedDate = () => {
    return data.toSorted((a,b) => {
      if(sortType === 'oldest'){
        return Number(a.createdDate) - Number(b.createdDate);
      } else {
        return Number(b.createdDate) - Number(a.createdDate);
      }
    })
  }

  const sortedData = getSortedDate();

  return (
    <div className="font-pretendard font-medium text-[#213555]">
      <div className="flex flex-row gap-4 items-center  my-10">
        <select onChange={onChangeSortType} className="bg-slate-100 border-none rounded-md px-3 py-3 cursor-pointer">
          <option value={"latest"}>최신순</option>
          <option value={"oldest"}>오래된 순</option>
        </select>
        <Button onClick={() => nav('/new')} text={"새 일기 쓰기"} type={"CREATE"} />
      </div>
      {/* 다이어리 아이템 */}
      <div>
        {sortedData.map((item) => (
          <DiaryItem key={item.id} {...item} />
        ))}
      </div>
    </div>
  );
}
