import Image from "next/image";
import client1 from "@/app/assets/client1.png";
import client2 from "@/app/assets/client2.png";
import * as motion from "motion/react-client";

const ClientChatBanner = () => {
  return (
    <div className="bg-[#009dff] py-10 md:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="container mx-auto px-4 py-8"
      >
        <Image
          src={client1}
          alt="client chat banner"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-auto "
          placeholder="blur"
        />
        <h1 className="text-xl text-[#1c1e21] py-8 md:text-5xl md:min-w-1/3 mx-auto text-center">
          With private messaging and calling, you can be yourself, speak freely
          and feel close to the most important people in your life no matter
          where they are.
        </h1>

        <Image
          src={client2}
          alt="client chat banner"
          width={1000}
          height={1000}
          loading="lazy"
          className="w-full h-auto "
          placeholder="blur"
        />
      </motion.div>
    </div>
  );
};

export default ClientChatBanner;
