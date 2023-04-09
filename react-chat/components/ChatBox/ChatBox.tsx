import { ChangeEvent, FormEvent } from 'react';
import { useState } from 'react';

const ChatBox = () => {
  const [messages, setMessages] = useState<string[]>([]);

  const [message, setMessage] = useState<string>('');

  const onChangeMessage = (event: ChangeEvent<HTMLInputElement>) => {
    setMessage(event.target.value);
  };

  const send = (event: FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setMessages([...messages, message]);
    setMessage('');
  };

  return (
    <div>
      {messages.map((message) => (
        <div>{message}</div>
      ))}
      <form onSubmit={send}>
        <input
          type="text"
          placeholder="Enter your message here"
          onChange={onChangeMessage}
          value={message}
        ></input>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default ChatBox;
