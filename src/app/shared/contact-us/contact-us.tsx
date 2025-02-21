// "use client";

// import Image from "next/image";
// import { useForm } from "react-hook-form";
// import contactUsImage from "@/app/assets/contact-image.jpg";

// const ContactUs = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm();

//   const onSubmit = (data) => {
//     console.log(data); // Handle form submission
//   };

//   return (
//     <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
//       <div className="container md:px-[8rem] min-h-screen flex flex-col lg:flex-row justify-evenly gap-8">
//         {/* left site content */}
//         <div className="w-full">
//           <h1 className="text-3xl md:text-5xl font-bold mb-4">
//             Hello there 👋
//           </h1>
//           <p className="mb-1 text-xl">
//             Interested in working together? Fill in the form below to get
//             started.
//           </p>
//           <Image
//             src={contactUsImage}
//             width={1000}
//             height={1000}
//             alt="contact us"
//             loading="lazy"
//           />
//         </div>

//         {/* right site content */}
//         <div className="w-full">
//           <form onSubmit={handleSubmit(onSubmit)}>
//             <div className="mb-6 w-full">
//               <input
//                 {...register("email", { required: true })}
//                 className={`shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block ${
//                   errors.email ? "border-red-500" : ""
//                 }`}
//                 placeholder="Email"
//               />
//               {errors.email && (
//                 <p className="text-red-500 text-xs italic mt-1">
//                   Email is required
//                 </p>
//               )}
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ContactUs;
"use client";
import Image from "next/image";
import { useForm, SubmitHandler } from "react-hook-form";
import contactUsImage from "@/app/assets/contact-image.jpg";

// Define the type for the form data
type FormData = {
  name: string;
  email: string;
  message: string;
};

const ContactUs = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>(); // Pass the FormData type to useForm

  // Define the onSubmit function with type safety
  const onSubmit: SubmitHandler<FormData> = (data) => {
    console.log(data); // Handle form submission
  };

  return (
    <div className="bg-white py-16 px-4 sm:px-6 lg:px-8 lg:py-24">
      <div className="container md:px-[8rem] min-h-screen flex flex-col lg:flex-row justify-evenly gap-8">
        {/* Left side content */}
        <div className="w-full">
          <h1 className="text-3xl md:text-5xl font-bold mb-4">
            Hello there 👋
          </h1>
          <p className="mb-1 text-xl font-thin">
            Interested in working together? Fill in the form below to get
            started.
          </p>
          <Image
            src={contactUsImage}
            width={1000}
            height={1000}
            alt="contact us"
            loading="lazy"
            className="hidden md:block"
          />
        </div>

        {/* Right side content */}
        <div className="w-full">
          <form onSubmit={handleSubmit(onSubmit)}>
            {/* Name Field */}
            <div className="mb-6 w-full">
              <label
                htmlFor="name"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Name
              </label>
              <input
                {...register("name", {
                  required: "Name is required",
                  minLength: {
                    value: 3,
                    message: "Name must be at least 3 characters",
                  },
                })}
                id="name"
                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block ${
                  errors.name ? "border-red-500" : ""
                }`}
                placeholder="Enter your name"
              />
              {errors.name && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Email Field */}
            <div className="mb-6 w-full">
              <label
                htmlFor="email"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email
              </label>
              <input
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message: "Invalid email address",
                  },
                })}
                id="email"
                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block ${
                  errors.email ? "border-red-500" : ""
                }`}
                placeholder="Enter your email"
              />
              {errors.email && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>

            {/* Message Field */}
            <div className="mb-6 w-full">
              <label
                htmlFor="message"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Message
              </label>
              <textarea
                {...register("message", {
                  required: "Message is required",
                  minLength: {
                    value: 10,
                    message: "Message must be at least 10 characters",
                  },
                })}
                id="message"
                className={`shadow appearance-none border rounded w-full py-3 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline block ${
                  errors.message ? "border-red-500" : ""
                }`}
                placeholder="Enter your message"
                rows={4}
              />
              {errors.message && (
                <p className="text-red-500 text-xs italic mt-1">
                  {errors.message.message}
                </p>
              )}
            </div>

            {/* Submit Button */}
            <div className="flex items-center justify-between">
              <button
                type="submit"
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
