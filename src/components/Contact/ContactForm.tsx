import Button from "components/Buttons/Button";
import React from "react";

interface Props {
  id: string;
  ctaButtonText: string;
}

const ContactForm = ({ ctaButtonText, id }: Props) => {
  return (
    <form
      action="/success"
      data-netlify="true"
      id={`contact-form-${id}`}
      name={`contact-form-${id}`}
      method="POST"
      className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8 max-w-2xl mx-auto"
    >
      <div>
        <label
          htmlFor="first-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          First Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="first-name"
            id="first-name"
            autoComplete="given-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div>
        <label
          htmlFor="last-name"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Last Name
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="last-name"
            id="last-name"
            autoComplete="family-name"
            className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="subject"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Subject
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subject"
            id="subject"
            className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Email
        </label>
        <div className="mt-1">
          <input
            id="email"
            name="email"
            type="email"
            autoComplete="email"
            className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border-gray-300 rounded-md"
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-400"
        >
          Message
        </label>
        <div className="mt-1">
          <textarea
            id="message"
            name="message"
            rows={4}
            className="py-3 px-4 block w-full shadow-sm focus:ring-green-800 focus:border-green-800 border border-gray-300 rounded-md"
            defaultValue={""}
          />
        </div>
      </div>
      <div className="sm:col-span-2">
        <Button text={ctaButtonText} size="lg" isFullWidth />
      </div>
    </form>
  );
};

export default ContactForm;