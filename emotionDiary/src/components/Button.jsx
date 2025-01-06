import "../styles/button.css"

export default function Button({ text, type, onClick }) {
  return (
    <button
      id={`button_${type}`}
      onClick={onClick}
      className="text-lg font-pretendard"
    >
      {text}
    </button>
  );
}
