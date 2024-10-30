const Hero = () => {
    return (
        <div className="relative isolate px-6 pt-14 lg:px-8 bg-white text-black">
            <div
            aria-hidden="true"
            className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
            >
            </div>
            <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <div className="text-center">
                <h1 className="text-balance text-6xl font-bold tracking-tight text-gray-900 sm:text-6xl">
                We build software to <span className="text-orange italic">elevate</span> businesses
                </h1>
                <p className="mt-6 text-lg leading-8 text-gray-600">
                Adaptable solutions that fit your needs today and grow with you tomorrow.
                </p>
                <div className="mt-10 flex items-center justify-center gap-x-6">
                <a
                    href="/"
                    className="rounded-md bg-black px-3.5 py-2.5 text-sm font-medium text-white shadow-sm hover:bg-black-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black-600"
                >
                    Give us your money now
                </a>
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