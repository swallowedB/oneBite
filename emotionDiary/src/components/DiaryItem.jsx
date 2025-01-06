import { useNavigate } from "react-router-dom";
import getEmotionImage from "../util/getEmotionImage.js";
import Button from "./Button.jsx";

export default function DiaryItem({id, emotionId, createdDate, content}) {
  const nav = useNavigate();

  return (
    <div className="flex flex-row items-center justify-between gap-4 border-b-2 py-7">

      {/* 감정 이미지 */}
      <div className="w-20" onClick={() => nav(`/diary/${id}`)}>
        <img src={getEmotionImage(emotionId)} />
      </div>
      
      {/* 정보 */}
      <div className="flex-1 cursor-pointer">
        <div className="font-semiBold text-xl">
          {new Date(createdDate).toLocaleDateString()}
        </div>
        <div>
          {content}
        </div>
      </div>
      {/* 삭제 버튼 */}
      <div className="min-w-16">
        <Button onClick={() => nav(`/edit/${id}`)} text={"수정"} type={"DEFAULT"}/>
      </div>

    </div>
  )
}
