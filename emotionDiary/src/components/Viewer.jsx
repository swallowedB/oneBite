import getEmotionImage from "../util/getEmotionImage";
import { emotionList } from "../util/constants";

export default function Viewer({emotionId, content}) {
  const emotionColors = {
    1: "bg-green-600/80 text-white",
    2: "bg-green-500/80 text-white",
    3: "bg-yellow-500/80 text-white",
    4: "bg-orange-500/80 text-white",
    5: "bg-red-500/80 text-white",
  };

  const emotionItem = emotionList.find(
    (item) => String(item.emotionId) === String(emotionId)
  );
  return (
    <div className="flex flex-col items-center justify-center w-[100%] mb-100px">
      <section className="flex flex-col items-center w-full mt-10">
        <h4 className="font-pretendard font-semiBold text-xl">오늘의 감정</h4>
        <div
          className={`flex flex-col rounded-xl w-[250px] h-[250px] items-center mt-4 px-10 py-10 text-white font-pretendard ${emotionColors[emotionId]}`}
        >
          <img className="mb-4" src={getEmotionImage(emotionId)} />
          <div>{emotionItem.emotionName}</div>
        </div>
      </section>

      <section className="flex flex-col items-center w-full mt-10 ">
        <h4 className="font-pretendard font-semiBold mb-10 text-xl">
        오늘의 일기
        </h4>
        <textarea className="w-full bg-slate-100 rounded-lgbox-border min-h-48 resize-y border-none font-pretendard py-5 px-5 rounded-md">
        {content}
        </textarea>
      </section>
    </div>
  );
}
