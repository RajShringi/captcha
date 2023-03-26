import { useEffect, useState } from "react";

function Form({ setFormSubmit }) {
  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    captcha: "",
  });

  const [captcha, setCaptcha] = useState("");

  const handleInputs = (e) => {
    const { name, value } = e.target;
    setUser({ ...user, [name]: value });
  };

  function generateCaptcha() {
    const chars =
      "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let captcha = "";
    for (let i = 0; i < 6; i++) {
      captcha += chars[Math.floor(Math.random() * chars.length)];
    }
    return captcha;
  }

  useEffect(() => {
    setCaptcha(generateCaptcha());
  }, []);

  function handleSubmit(e) {
    e.preventDefault();
    if (captcha === user.captcha) {
      alert("you are a human");
      setFormSubmit(true);
      return;
    }
    alert("Enter the right captcha");
    setUser({ ...user, captcha: "" });
    setCaptcha(generateCaptcha());
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="container mx-auto max-w-lg bg-gray-50 dark:bg-zinc-800 mt-10 p-4 rounded-md shadow-md"
    >
      <h1 className="text-center text-2xl">Sign Up</h1>

      <div className="my-2">
        <label htmlFor="username">username</label>
        <input
          type="text"
          name="username"
          id="username"
          autoComplete="off"
          value={user.username}
          onChange={handleInputs}
          className="block border w-full p-2 shadow-inner rounded-md dark:bg-zinc-600 dark:border-zinc-600"
        />
      </div>

      <div className="my-2">
        <label htmlFor="email">email</label>
        <input
          type="email"
          name="email"
          id="email"
          autoComplete="off"
          value={user.email}
          onChange={handleInputs}
          className="block border w-full p-2 shadow-inner rounded-md dark:bg-zinc-600 dark:border-zinc-600"
        />
      </div>

      <div className="my-2">
        <label htmlFor="password">password</label>
        <input
          type="password"
          name="password"
          id="password"
          value={user.password}
          onChange={handleInputs}
          autoComplete="off"
          className="block border w-full p-2 shadow-inner rounded-md dark:bg-zinc-600 dark:border-zinc-600"
        />
      </div>

      <div className="my-2 flex justify-between items-center">
        <div>
          <label htmlFor="captcha">captcha</label>
          <input
            type="text"
            name="captcha"
            id="captcha"
            value={user.captcha}
            onChange={handleInputs}
            autoComplete="off"
            className="block border w-full p-2 shadow-inner rounded-md dark:bg-zinc-600 dark:border-zinc-600"
          />
        </div>

        <div>
          <label htmlFor="captcha">captcha code</label>
          <div className="block w-full p-2 bg-sky-200 dark:bg-sky-300 rounded-md tracking-wider">
            {captcha}
          </div>
        </div>
      </div>

      <input
        className="bg-sky-400 text-white p-2 rounded-md block mt-4 mb-2 mx-auto"
        type="submit"
        value="singup"
      />
    </form>
  );
}

export default Form;
