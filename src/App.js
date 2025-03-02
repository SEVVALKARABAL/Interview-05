import { useState } from "react";

export default function TextInputList() {
  const [text, setText] = useState("");
  const [items, setItems] = useState([]);
  const [selectedText, setSelectedText] = useState(null);

  const handleAddText = () => {
    if (text.trim()) {
      setItems([...items, text]);
      setText("");
    }
  };

  return (
    <div className="flex flex-col items-center p-4">
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        className="border p-2 mb-2 w-64"
        placeholder="Metin girin"
      />
      <button
        onClick={handleAddText}
        className="bg-blue-500 text-white p-2 rounded"
      >
        Ekle
      </button>
      <ul className="mt-4 w-64">
        {items.map((item, index) => (
          <li
            key={index}
            onClick={() => setSelectedText(item)}
            className="cursor-pointer border p-2 mb-1"
          >
            {item.length >= 6 ? `${item.slice(0, 5)}...` : item}
          </li>
        ))}
      </ul>
      {selectedText && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
          onClick={() => setSelectedText(null)}
        >
          <div
            className="bg-white p-4 rounded shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            {selectedText}
          </div>
        </div>
      )}
    </div>
  );
}
