import { useParams } from "react-router-dom"

export default function Edit() {
  const params = useParams();
  return (
    <div>{params.id}</div>
  )
}
