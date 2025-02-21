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
