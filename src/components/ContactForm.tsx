import { useState, FormEvent } from "react";
import useAlert from "../Hooks/useAlert";
import Alert from "./Alert";

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
  const [loading, setLoading] = useState(false);

  const { alert, showAlert, hideAlert } = useAlert();

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      const mailData = {
        tomail: "manasshrivastava0410@gmail.com",
        bcc: "sanskratiagrawal306@gmail.com, msxdev01@gmail.com",
        subject: "Contact info from MSxDEv",
        message: "Below is the information of person that wanted to contact us",
        information: {
          ...data,
        },
      };

      await fetch("https://my-emailservice.vercel.app/mail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(mailData),
      })
        .then((response) => {
          console.log(response);
          if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
          }
        })
        .then(() => {
          showAlert({
            text: "Thank you for your message 😃",
            type: "success",
          });

          setTimeout(() => {
            hideAlert();
            setData({
              name: "",
              email: "",
              message: "",
              Number: "",
            });
          }, 3000);
        });
    } catch (error) {
      setLoading(false);
      console.error(error);

      showAlert({
        text: "Not received ur message , Please directly mail us !",
        type: "danger",
      });
      setTimeout(() => {
        hideAlert();
      }, 3000);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full custom-lg:w-[70%]"
      ref={reference}
    >
      {alert.show && <Alert {...alert} />}
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
          disabled={loading}
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </fieldset>
    </form>
  );
};

export default ContactForm;
