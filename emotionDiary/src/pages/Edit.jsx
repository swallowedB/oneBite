import { useNavigate, useParams } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { DiaryDispatchContext } from "../App";
import { useContext } from "react";
import useDiary from "../hooks/useDiary";
import usePageTitle from "../hooks/usePageTitle";

export default function Edit() {
  const nav = useNavigate();
  const params = useParams();
  const { onDelete, onUpdate } = useContext(DiaryDispatchContext);
  const curDiaryItem = useDiary(params.id);

  usePageTitle(`${params.id}번 일기 수정`)

  const onClickDelete = () => {
    if (window.confirm("일기를 정말 삭제하겠습니까? 다시 복구되지 않습니다."))
      onDelete(params.id);
    nav("/", { replace: true });
  };

  const onSubmit = (input) => {
    if (window.confirm("일기를 정말 수정할까요?")) {
      onUpdate(
        params.id,
        input.createdDate.getTime(),
        input.emotionId,
        input.content
      );
    }
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"일기 수정"}
        leftChild={
          <Button onClick={() => nav(-1)} text={"<"} type={"DEFAULT"} />
        }
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"NEGATIVE"} />
        }
      />
      <Editor initData={curDiaryItem} onSubmit={onSubmit} />
    </div>
  );
}
