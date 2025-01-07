import Button from "../components/Button";
import Editor from "../components/Editor";
import Header from "../components/Header";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";
import usePageTitle from "../hooks/usePageTitle";

export default function New() {
  const nav = useNavigate();
  const { onCreate } = useContext(DiaryDispatchContext);

  usePageTitle("새 일기 쓰기")

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav('/', {replace:true});
  };

  return (
    <div>
      <Header
        title={"새 일기 작성"}
        leftChild={
          <Button
            text={"<"}
            type={"LEFT"}
            onClick={() => {
              nav(-1);
            }}
          />
        }
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
}
