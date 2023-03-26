import { AiOutlineCheck } from "react-icons/ai";
function Success() {
  return (
    <div className="mx-auto max-w-sm text-center">
      <div className="bg-green-400 w-[100px] h-[100px] mx-auto my-4 rounded-full flex justify-center items-center">
        <AiOutlineCheck className="text-white text-4xl" />
      </div>
      <p className="text-lg">Thanks for submitting the form</p>
    </div>
  );
}

export default Success;
