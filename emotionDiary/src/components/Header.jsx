export default function Header({ title, leftChild, rightChild }) {
  return (
    <div className="flex flex-row items-center justify-between py-5 gap-3 border-b-2 border-gray-200 font-pretendard font-bold">
      <div className="">{leftChild}</div>
      <div className="text-[#4DA1A9] flex items-center justify-center w-[50%] text-xl font-pretendard font-semiBold">
        {title}
      </div>
      <div>{rightChild}</div>
    </div>
  );
}
