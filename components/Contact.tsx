import type { NextPage } from "next";
import { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import { ThreeDots } from "react-loader-spinner";
import { toast } from "react-toastify";
import Outlook from "../assets/outlook.webp";
import { IFormData } from "../typings";
import Image from "next/image";
import { useTheme } from "next-themes";

export const Contact: NextPage = () => {
  // State for form data with validation
  const [formData, setFormData] = useState<IFormData>({
    name: { value: "", errorMessage: "" },
    email: { value: "", errorMessage: "" },
    message: { value: "", errorMessage: "" },
  });
  
  // Loading state for form submission
  const [loading, setLoading] = useState<boolean>(false);
  
  // Reference to the form element
  const form = useRef<HTMLFormElement>(null);
  
  // Theme context for styling
  const { theme } = useTheme();

  /**
   * Handle form input changes
   * @param e - Input change event
   */
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: { value: e.target.value, errorMessage: "" } });
  };

  /**
   * Validate form fields
   * @returns Object with error messages for each field
   */
  const validateForm = () => {
    const errors = { name: "", email: "", message: "" };
    const lettersRegex = /^[a-zA-Z ]*$/;
    const mailRegex = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,7}$/;

    // Name validation
    if (!formData.name.value) {
      errors.name = "Name is required";
    } else if (!lettersRegex.test(formData.name.value)) {
      errors.name = "Name should only contain letters and spaces";
    }

    // Email validation
    if (!formData.email.value) {
      errors.email = "Email is required";
    } else if (!mailRegex.test(formData.email.value)) {
      errors.email = "Please enter a valid email";
    }

    // Message validation
    if (!formData.message.value) {
      errors.message = "Message is required";
    } else if (formData.message.value.length < 10) {
      errors.message = "Message should be at least 10 characters";
    }

    return errors;
  };

  /**
   * Handle form submission
   * @param e - Form submit event
   */
  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    
    // Validate form fields
    const errors = validateForm();
    
    // Update form state with validation errors
    const tempFormData = {
      name: { value: formData.name.value, errorMessage: errors.name },
      email: { value: formData.email.value, errorMessage: errors.email },
      message: { value: formData.message.value, errorMessage: errors.message },
    };
    
    setFormData({ ...tempFormData });

    // Check for validation errors before sending
    if (!errors.name && !errors.email && !errors.message) {
      // Reset form fields after successful submission
      setFormData({
        name: { value: "", errorMessage: "" },
        email: { value: "", errorMessage: "" },
        message: { value: "", errorMessage: "" },
      });
      setLoading(true);

      // Prepare data to send
      const formDataToSend = {
        from_name: formData.name.value,
        from_email: formData.email.value,
        message: formData.message.value,
      };

      try {
        const response = await emailjs.send(
          process.env.NEXT_PUBLIC_SERVICE_ID!,
          process.env.NEXT_PUBLIC_TEMPLATE_ID!,
          formDataToSend,
          process.env.NEXT_PUBLIC_PUBLIC_KEY!
        );

        if (response.status === 200) {
          setLoading(false);
          toast.success("Message Sent!");
        }
      } catch (err) {
        console.error("Form submission error:", err);
        setLoading(false);
        toast.error("Form Submission Failed. Please send me an email!");
      }
    }
  };

  return (
    <>
      <h1 className="contact_heading">Contact Me</h1>
      <div className="contact_email">
        <Image src={Outlook.src} alt="Outlook" width={28} height={28} /> sanskar.dewangan14@outlook.com
      </div>
      {!loading ? (
        <form className="contact_form" autoComplete="off" ref={form}>
          <div className="contact_form_formcontrol">
            <label htmlFor="name" className="contact_form_formcontrol_label">
              Name :
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="name"
              name="name"
              type="text"
              value={formData?.name?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.name?.errorMessage && formData?.name?.errorMessage}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <label htmlFor="email" className="contact_form_formcontrol_label">
              Email :
            </label>
            <input
              className="contact_form_formcontrol_input"
              id="email"
              name="email"
              type="email"
              value={formData?.email?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.email?.errorMessage && formData?.email?.errorMessage}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <label htmlFor="message" className="contact_form_formcontrol_label">
              Message :
            </label>
            <textarea
              rows={10}
              className="contact_form_formcontrol_input"
              id="message"
              name="message"
              value={formData?.message?.value ?? ""}
              onChange={handleChange}
            />
            <p className="contact_form_formcontrol_error">
              {!!formData?.message?.errorMessage && formData?.message?.errorMessage}
            </p>
          </div>
          <div className="contact_form_formcontrol">
            <button className="contact_form_formcontrol_submit" onClick={handleSubmit}>
              Submit
            </button>
          </div>
        </form>
      ) : (
        <div className="contact_submission">
          <div className="contact_submission_head">Submitting Form Details</div>
          <ThreeDots ariaLabel="loading-indicator" color={theme === "light" ? "#343e47" : "#ffffff"} />
          <div className="contact_submission_text">Please wait...</div>
        </div>
      )}
    </>
  );
};
