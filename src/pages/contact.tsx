import { NextPage } from "next";
import { GeneralFooter } from "ui/blocks/footer";
import { TextInputWithLabel } from "ui/blocks/form";
import { TextAreaWithLabel } from "ui/blocks/form/TextAreaWithLabel";
import { GeneralHeader } from "ui/blocks/headers";
import { Button } from "ui/elements/button";
import { FiSend } from "react-icons/fi";

interface IContactPageProps {}

const ContactPage: NextPage<IContactPageProps> = () => {
  return (
    <main>
      <GeneralHeader />
      <section>
        {/* Contact Section: Split */}
        <div className="relative bg-gray-50 flex items-center overflow-hidden">
          <div className="absolute top-0 right-0 bottom-0 w-full lg:w-1/2 bg-white" />
          <div className="relative container xl:max-w-7xl mx-auto px-4 py-16 lg:px-8 lg:py-32">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-0">
              {/* Heading */}
              <div className="flex items-center lg:px-14 xl:px-28 space-y-6">
                <div className="w-full">
                  <div className="text-sm uppercase font-bold tracking-wider mb-1 text-indigo-700">
                    We reply in 24hrs
                  </div>
                  <h2 className="text-3xl md:text-4xl font-extrabold mb-4">Get in touch</h2>
                  <h3 className="text-lg md:text-xl md:leading-relaxed font-medium text-gray-600">
                    If something does not make sense, feel free to contact us and we will get back to you as soon as
                    possible.
                  </h3>
                  <h4 className="uppercase text-sm font-semibold tracking-wider mt-12 mb-2">Company Inc.</h4>
                  <div className="leading-relaxed">
                    1080 Sunshine Valley, Suite 2563
                    <br />
                    San Francisco, CA 85214
                    <br />
                    <abbr title="Phone">P:</abbr> (123) 456-7890
                  </div>
                </div>
              </div>
              {/* END Heading */}
              {/* Contact Form */}
              <div className="flex items-center lg:px-14 xl:px-20">
                <form className="space-y-6 w-full" _lpchecked={1}>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <TextInputWithLabel
                      placeholder="Jayant"
                      name="fname"
                      label="First Name"
                      value=""
                      onChange={() => null}
                    />
                    <TextInputWithLabel
                      placeholder="Malik"
                      name="lname"
                      label="Last Name"
                      value=""
                      onChange={() => null}
                    />
                  </div>
                  <TextInputWithLabel
                    placeholder="shaurya@gmail.com"
                    name="email"
                    type={"email"}
                    label="Email"
                    value=""
                    onChange={() => null}
                  />

                  <TextAreaWithLabel
                    placeholder="If something does not make sense, feel free to write us here."
                    name="message"
                    label="Message"
                    rows={6}
                    value=""
                    onChange={() => null}
                  />

                  <Button type="submit">
                    <FiSend className="inline-block w-5 h-5" />
                    <span>Send Message</span>
                  </Button>
                </form>
              </div>
              {/* END Contact Form */}
            </div>
          </div>
        </div>
        {/* END Contact Section: Split */}
      </section>
      <GeneralFooter />
    </main>
  );
};

export default ContactPage;
