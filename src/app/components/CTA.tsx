import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button } from "../../core/components/button";
import { style } from "../styles";

import emailjs from "@emailjs/browser";
import { toast } from "react-toastify";

type ContactData = {
  name: string;
  email: string;
  message: string;
};

export function CTA() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactData>();

  const [isSubmitting, setisSubmitting] = useState(false);

  const handleForm = (data: ContactData) => {
    setisSubmitting(true);
    emailjs
      .send(
        "service_v3ozoi7",
        "template_ncu6i7k",
        {
          form_name: data.name,
          to_name: "Sameer",
          from_email: data.email,
          to_email: "sameerpokharel29@gmail.com",
          message: data.message,
        },
        "eVJqeztpsxfapNPt9"
      )
      .then(
        () => {
          toast.success(`Thank you for your message.`);
          reset();
          setisSubmitting(false);
        },
        (error) => {
          toast.error(error);
          setisSubmitting(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className={`${style.container} ${style.paddingX} pb-6 pt-10`}
    >
      <div className={`${style.flexCol} items-center  justify-center`}>
        <h4 className={`${style.h4}`}>Let's Work Together</h4>
        <p className={`${style.paragraph} max-w-xl pt-2`}>
          Feel Free to send message...
        </p>
        <form autoComplete="off" onSubmit={handleSubmit(handleForm)}>
          <div className="p-10 w-[80vw]  md:w-[40vw] shadow-lg flex flex-col  gap-4 justify-start font-poppins">
            <>
              <input
                type="text"
                placeholder="Name"
                {...register("name", { required: true })}
              />
              <span
                className={`font-bold ${
                  errors?.name ? "visible" : "invisible"
                } font-poppins -mt-2 text-xs text-red-600`}
              >
                Required Field
              </span>
            </>
            <input
              type="text"
              {...register("email", {
                required: true,
                pattern: {
                  value:
                    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                  message: "Please enter a valid email",
                },
              })}
              placeholder="Enter Email Address"
            />
            <span
              className={`font-bold ${
                errors?.email ? "visible" : "invisible"
              } font-poppins -mt-2 text-xs text-red-600`}
            >
              {errors.email?.message || "Required Field"}
            </span>
            <textarea
              placeholder="Enter Message"
              {...register("message", { required: true })}
            />
            <span
              className={`font-bold ${
                errors?.message ? "visible" : "invisible"
              } font-poppins -mt-2 text-xs text-red-600`}
            >
              Required Field
            </span>
            <Button
              type="submit"
              className={`font-poppins w-full sm:w-max self-center disabled:cursor-not-allowed disabled:bg-secondaryDim`}
              disabled={isSubmitting}
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}
