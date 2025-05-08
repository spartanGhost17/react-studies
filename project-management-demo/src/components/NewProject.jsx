import { useRef } from "react";
import Input from "./Input.jsx";

export default function NewProject({ onSave, onCancel }) {
  const title = useRef();
  const description = useRef();
  const date = useRef();

  return (
    <div className="w-[35rem] mt-16">
      <menu className="flex items-center justify-end gap-4 my-4">
        <li>
          <button
            onClick={onCancel}
            className="text-stone-800 hover:text-stone-950"
          >
            Cancel
          </button>
        </li>
        <li>
          <button
            onClick={() =>
              onSave(
                title.current.value,
                description.current.value,
                date.current.value
              )
            }
            className="px-6 py-2 rounded-md bg-stone-800 text-stone-50 hover:bg-stone-950"
          >
            Save
          </button>
        </li>
      </menu>
      <div>
        <Input ref={title} label="Title" type="text" required />
        <Input ref={description} label="Description" textarea required />
        <Input ref={date} label="Due Date" type="date" required />
      </div>
    </div>
  );
}
