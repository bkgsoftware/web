import CTAButton from "./CtaButton";
import OutlinedButton from "./OutlinedButton";

const Hero = () => {
    return (
        <div className="px-6 pt-14 lg:px-8 bg-white text-black">
            <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center    ">
                <h1 className="text-balance text-6xl font-bold tracking-tight  text-gray-900 sm:text-6xl">
                We build software to <span className="text-orange italic">elevate</span> businesses
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Adaptable solutions that fit your needs today and grow with you tomorrow.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                    <CTAButton
                        to="contact"
                        text="Let's solve your problem"
                        />
                    <OutlinedButton
                        to="services"
                        text="Learn more about us"
                    />
                </div>
            </div>
            </div>
            <div
            aria-hidden="true"
            className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
            >
            </div>
        </div>
    );
  };
  
  export default Hero;