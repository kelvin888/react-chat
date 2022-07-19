import { useState } from "react";
import { useNavigate } from "react-router-dom";

function Welcome() {
  const navigate = useNavigate();
  const [userName, setUserName] = useState("");

  const handleChatUser = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    navigate(`/chat/${userName} `);
  };

  const handleUsername = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserName(e.target.value);
  };
  return (
    <main className="border border-t-8 border-t-purple-900 w-full lg:max-w-2xl min-w-[360px] h-screen mx-auto relative overflow-hidden">
      <form onSubmit={handleChatUser} className="flex p-4 h-screen">
        <div className="self-center justify-self-center flex flex-col gap-4 items-center w-full">
          <div className="flex flex-col gap-1 text-xs font-bold">
            <label htmlFor="userName">Username</label>
            <input
              className="rounded-2xl"
              value={userName}
              placeholder="Enter Username"
              id="userName"
              type="text"
              onChange={handleUsername}
            />
          </div>
          <button
            type="submit"
            className="rounded-2xl bg-purple-900 text-white px-8 py-2"
          >
            Continue
          </button>
        </div>
      </form>
    </main>
  );
}

export default Welcome;
