import getEmotionImage from "../util/getEmotionImage";

export default function EmotionItem({
  emotionId,
  emotionName,
  isSelected,
  onClick,
}) {
  const emotionColors = {
    1: "bg-green-600/80 text-white",
    2: "bg-green-500/80 text-white",
    3: "bg-yellow-500/80 text-white",
    4: "bg-orange-500/80 text-white",
    5: "bg-red-500/80 text-white",
  };

  return (
    <div
      onClick={onClick}
      className={`
    flex flex-col items-center gap-3 font-pretendard 
    text-sm mb-2 cursor-pointer bg-gray-200/60
    py-3 px-3 rounded-lg ${isSelected ? emotionColors[emotionId] : ""}
    `}
    >
      <img src={getEmotionImage(emotionId)} className="w-12" />
      <div className="text-xs">{emotionName}</div>
    </div>
  );
}
