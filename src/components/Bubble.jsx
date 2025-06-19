import React from "react";

const Bubble = ({ from, text }) => {
  const isUser = from === 'user';

  return (
    <div className={`flex ${isUser ? 'justify-end' : 'justify-start'} mb-3`}>
      <div
        className={`max-w-[80%] rounded-xl px-4 py-2 text-sm md:text-base shadow-md
          ${isUser
            ? 'bg-blue-100 text-blue-900 rounded-br-none'
            : 'bg-gray-100 text-gray-800 rounded-bl-none'}
        `}
      >
        {text.split('\n').map((line, i) => (
          <React.Fragment key={i}>
            {line}
            <br />
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default Bubble;