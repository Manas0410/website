import ContactForm from "../components/ContactForm";
import CopyElement from "../components/CopyElement";
import SocialsIconBar from "../components/SocialsIconBar";

const Contact = () => {
  return (
    <section id="contact" className="content-placement my-24">
      <h3 className="text-center text-text-color-4 heading-fontsize mb-10">
        Contact <span className="text-text-color-2">Us</span>
      </h3>
      <p className="text-center text-text-color-3">
        If you have some assignment and want to contact us or ,You can fill the
        below form with your details.
      </p>
      <p className="text-center text-text-color-3">
        We will get back to you soon.
      </p>
      <section className="mt-10 flex flex-col custom-lg:flex-row custom-lg:gap-4 gap-14">
        <div className="w-full custom-lg:w-[30%] flex flex-col gap-4 justify-between items-center">
          <img
            src="/assets/locationlogo.webp"
            alt="Address:"
            width={120}
            height={120}
            className=""
          />
          <div className="flex  pb-2 custom-lg:gap-4 gap-2 flex-col  justify-center ">
            <div className="flex gap-4 ">
              <img src="/assets/mail.svg" alt="mail:" />
              <CopyElement text="msxdev01@gmail.com">
                <a href="mailto:msxdev01@gmail.com">msxdev01@gmail.com</a>
              </CopyElement>
            </div>

            <div className="flex gap-2">
              <img src="/assets/call.svg" alt="number:" />
              <CopyElement text="+91 7007022949">
                <a href="tel:+91 7007022949">+91 7007022949</a>
              </CopyElement>
            </div>

            <div className="flex gap-2">
              <img src="/assets/location.svg" alt="number:" />
              <address className="lg:text-sm md:text-sm font-medium text-text-color-3">
                We are workiing remotely
              </address>
            </div>
          </div>
          <SocialsIconBar />
        </div>
        <ContactForm />
      </section>
    </section>
  );
};

export default Contact;
