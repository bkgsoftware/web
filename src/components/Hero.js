import Button from "./Button";
import CTAButton from "./CtaButton";
import OutlinedButton from "./OutlinedButton";

const Hero = () => {
  return (
    <div className="flex items-center justify-center min-h-[calc(100vh-6rem)] ml-auto mr-auto px-[25px] sm:px-[50px] md:px-[100px] lg:px-[150px]">
      {/* <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56"> */}
      <div className="text-center max-w-2xl">
        <h1
          className="text-balance text-6xl font-bold tracking-tight  text-gray-900 sm:text-6xl"
          style={{ fontSize: "clamp(2.5rem, 6vw, 3.75rem)" }}
        >
          We build software to{" "}
          <span className="text-orange italic">elevate</span> businesses
        </h1>
        <p className="mt-6 text-lg leading-8 text-gray-600">
          Adaptable solutions that fit your needs today and grow with you
          tomorrow.
        </p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* <CTAButton
                        to="contact"
                        text="Let's solve your problem"
                        />
                    <OutlinedButton
                        to="services"
                        text="Learn more about us"
                    /> */}
          <Button
            to="/contact"
            text="Let's solve your problem"
            type="green-fill"
          />
          <Button
            to="/services"
            text="Learn more about us"
            type="green-outline"
          />
        </div>
      </div>
      {/* </div> */}
    </div>
  );
};

export default Hero;
