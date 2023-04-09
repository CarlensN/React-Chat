import { ChangeEvent, FormEvent, useState } from 'react';

function ChatBox() {
  const [messages, setMessages] = useState<string[]>([]);
  const [inputValue, setInputValue] = useState<string>('');

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const onSubmitHandler = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setMessages([...messages, inputValue]);
    setInputValue('');
  };

  return (
    <div>
      {messages.map((message) => (
        <div>{message}</div>
      ))}
      <form onSubmit={onSubmitHandler}>
        <input
          type="text"
          placeholder="Enter your message here"
          onChange={onChangeMessage}
          value={inputValue}
        />
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default ChatBox;
