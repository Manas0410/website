import { useState, FormEvent } from "react";

type FormData = {
  name: string;
  Number: string;
  email: string;
  message: string;
};

const ContactForm = ({ reference }: { reference: any }) => {
  const [data, setData] = useState<FormData>({
    name: "",
    Number: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(data);
    setData({ name: "", Number: "", email: "", message: "" });
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full custom-lg:w-[70%]"
      ref={reference}
    >
      <fieldset className="w-full grid grid-cols-1 custom-lg:grid-cols-2 gap-5">
        <input
          required
          type="text"
          name="name"
          placeholder="Enter your name"
          className="form-input"
          value={data.name}
          onChange={(e) => setData({ ...data, name: e.target.value })}
        />

        <input
          required
          type="number"
          name="Number"
          placeholder="Enter your Number"
          className="form-input"
          value={data.Number}
          onChange={(e) => setData({ ...data, Number: e.target.value })}
        />

        <input
          required
          type="email"
          name="email"
          placeholder="Enter your email"
          className="form-input custom-lg:col-span-2"
          value={data.email}
          onChange={(e) => setData({ ...data, email: e.target.value })}
        />

        <textarea
          name="message"
          placeholder="Enter your message"
          className="form-input custom-lg:col-span-2"
          value={data.message}
          rows={5}
          onChange={(e) => setData({ ...data, message: e.target.value })}
        />

        <button
          type="submit"
          className="submit-btn custom-lg:col-span-2 col-span-1"
        >
          Contact Now !
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
