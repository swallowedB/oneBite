import { useState } from "react";
import Button from "./Button";
import EmotionItem from "./EmotionItem";
import { useNavigate } from "react-router-dom";

const emotionList = [
  {
    emotionId: 1,
    emotionName: "완전 좋음",
  },
  {
    emotionId: 2,
    emotionName: "좋음",
  },
  {
    emotionId: 3,
    emotionName: "보통",
  },
  {
    emotionId: 4,
    emotionName: "나쁨",
  },
  {
    emotionId: 5,
    emotionName: "완전 나쁨",
  },
];

const getStringedDate = (targetDate) => {
  let year = targetDate.getFullYear();
  let month = targetDate.getMonth() + 1;
  let date = targetDate.getDate();

  if (month < 10) {
    month = `0${month}`;
  }
  if (date < 10) {
    date = `0${date}`;
  }
  return `${year}-${month}-${date}`;
};

export default function Editor({ onSubmit }) {
  const nav = useNavigate();
  const [input, setInput] = useState({
    createdDate: new Date(),
    emotionId: 3,
    content: "",
  });

  const onChangeInput = (e) => {
    let name = e.target.name;
    let value = e.target.value;

    if (name === "createdDate") {
      value = new Date(value);
    }

    setInput({
      ...input,
      [name]: value,
    });
  };

  const onClickSubmitButton = () => {
    onSubmit(input);
  }

  return (
    <div className="flex flex-col justify-around h-[100vh] pb-20">
      <section className="font-pretendard mt-4">
        <h4 className="font-semiBold text-xl mb-3">오늘의 날짜</h4>
        <input
          className="py-2 px-5 bg-gray-200/50 border-none rounded-md text-lg"
          type="date"
          onChange={onChangeInput}
          name="createdDate"
          value={getStringedDate(input.createdDate)}
        />
      </section>

      <section className="font-pretendard">
        <h4 className="font-semiBold text-xl">오늘의 감정</h4>
        <div className="mt-5">
          <div className="flex flex-row justify-around px-10 gap-3">
            {emotionList.map((item) => (
              <EmotionItem
                onClick={() =>
                  onChangeInput({
                    target: {
                      name: "emotionId",
                      value: item.emotionId,
                    },
                  })
                }
                key={item.emotionId}
                {...item}
                isSelected={item.emotionId === input.emotionId}
              />
            ))}
          </div>
        </div>
      </section>
      <section className="font-pretendard">
        <h4 className="font-semiBold text-xl mb-3">오늘의 일기</h4>
        <textarea
          name="content"
          value={input.content}
          onChange={onChangeInput}
          className="box-border w-[100%] min-h-48 resize-y bg-gray-100 border-none font-pretendard py-5 px-5 rounded-md"
          placeholder="오늘은 어땠나요?"
        />
      </section>

      <section className="flex flex-row items-center justify-between mb-10">
        <Button onClick={() => nav(-1)} text={"취소"} type={"DEFAULT"} />
        <Button onClick={onClickSubmitButton} text={"작성 완료"} type={"POSITIVE"} />
      </section>
    </div>
  );
}
