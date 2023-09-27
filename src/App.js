import "animate.css";
import { useState } from "react";

export default function App() {
  const navigationLink = [
    { id: "#home", name: "Home" },
    { id: "#aboutUs", name: "About Us" },
    { id: "#systemWorks", name: "System Works" },
    { id: "#features", name: "Features" },
    { id: "#faqs", name: "FAQs" },
    { id: "#pricing", name: "Pricing" },
    { id: "#signIn", name: "Sign In" },
  ];
  const [isSideBarVisible, setSideBarVisibility] = useState(false);
  const image_url = "https://cdn.mywanderlinx.com/site/images/";

  const toggleSideBar = () => {
    setSideBarVisibility(!isSideBarVisible);
  };

  return (
    <div className="overflow-hidden">
      <nav className="z-30 px-4 md:px-8 xl:px-20 2xl:px-72 fixed top-0 left-0 right-0 bg-lighter/50 shadow-none backdrop-blur-xl py-3 flex justify-between">
        <img src={`${image_url}wanderLinxLogo.png`} alt="" className="w-40" />
        <div
          className="lg:hidden flex flex-col gap-1 justify-center"
          onClick={toggleSideBar}
        >
          <div className="w-6 bg-primary/50 h-1"></div>
          <div className="w-4 bg-primary/50 h-1"></div>
          <div className="w-6 bg-primary/50 h-1"></div>
        </div>
        <div className="hidden lg:flex justify-center items-center gap-10 font-jakarta text-lg font-medium text-tertiary">
          {navigationLink.map((nav) => (
            <a href={nav.id} key={nav.id} onClick={toggleSideBar}>
              {nav.name}
            </a>
          ))}
        </div>
      </nav>

      {isSideBarVisible && (
        <>
          <nav className="lg:hidden h-screen w-64 right-0 top-0 bg-white bg-opacity-60 backdrop-blur-lg fixed z-50 rounded-lg">
            <div className="p-3 bg-white rounded-t-lg font-bold text-gray-600 flex justify-end">
              <div className="hover:cursor-pointer" onClick={toggleSideBar}>
                &#10006;
              </div>
            </div>
            <div className="p-8 flex flex-col gap-8">
              {navigationLink.map((nav) => (
                <a href={nav.id} key={nav.id} onClick={toggleSideBar}>
                  {nav.name}
                </a>
              ))}
            </div>
          </nav>

          <section
            className="lg:hidden fixed w-full h-screen bg-primary bg-opacity-60 z-40"
            onClick={toggleSideBar}
          ></section>
        </>
      )}

      <main
        id="home"
        className="p-3 md:px-6 lg:px-20 xl:px-20 2xl:px-20 pt-28 lg:pt-32 bg-gradient-to-b from-lighter to-white flex flex-col-reverse md:flex-row"
      >
        <aside className="animate__animated animate__fadeInRight w-full lg:w-1/2 flex flex-col justify-center gap-4 lg:gap-8">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
            Yow start a business with the right tools.
          </h1>
          <p className="text-base lg:text-2xl text-medium font-rubik text-primary">
            Here at WanderLinx, our main goal is to help you establish a
            presence for your business and boost profitability in the travel
            industry. We specialize in creating a brand that sets you apart from
            the competition.
          </p>
          <div className="flex gap-2 lg:gap-5 font-rubik">
            <a href="#pricing">
              <button className="hover:bg-primary transition duration-700 px-8 py-3 border-2 border-blue-400 bg-blue-400 text-white text-base lg:text-xl font-medium rounded-md">
                Get Started
              </button>
            </a>
            <a href="#systemWorks">
              <button className="px-8 py-3 border-2 border-primary text-primary text-base lg:text-xl font-medium rounded-md">
                See how it works
              </button>
            </a>
          </div>
        </aside>
        <aside className="animate__animated animate__fadeInLeft w-full lg:w-1/2 flex justify-center items-center">
          <img src={`${image_url}img_hero.png`} alt="" className="w-full" />
        </aside>
      </main>

      <section className="animate__animated animate__fadeInUp px-4 md:px-6 xl:px-20 2xl:px-72 py-12 md:py-20 flex flex-col md:flex-row flex-wrap">
        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center">
          <img
            src={`${image_url}user_friendly_icon.png`}
            alt=""
            className="w-20"
          />
          <h2 className="text-2xl font-jakarta text-primary font-bold">
            Friendly Interface
          </h2>
          <p className="text-center font-rubik text-base lg:text-xl text-gray-500">
            User-friendly platform that is accessible on all devices.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center">
          <img
            src={`${image_url}online_training_icon.png`}
            alt=""
            className="w-20"
          />
          <h2 className="text-2xl font-jakarta text-primary font-bold">
            Online Training
          </h2>
          <p className="text-center font-rubik text-base lg:text-xl text-gray-500">
            Boost your brand online with strategic marketing training.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center">
          <img
            src={`${image_url}channel_manager_icon.png`}
            alt=""
            className="w-20"
          />
          <h2 className="text-2xl font-jakarta text-primary font-bold">
            Channel Manager
          </h2>
          <p className="text-center font-rubik text-base lg:text-xl text-gray-500">
            Collect all providers and manage them within a single system.
          </p>
        </div>

        <div className="w-full md:w-1/2 lg:w-1/4 flex flex-col items-center">
          <img
            src={`${image_url}management_tools_icon.png`}
            alt=""
            className="w-20"
          />
          <h2 className="text-2xl font-jakarta text-primary font-bold">
            Management Tools
          </h2>
          <p className="text-center font-rubik text-base lg:text-xl text-gray-500">
            Easily access all transactions with just a few clicks.
          </p>
        </div>
      </section>
      <hr className="mx-4 md:mx-20 " />

      <section
        id="aboutUs"
        className="p-3 md:px-6 xl:px-20 2xl:px-72 pt-6 md:pt-32 flex flex-col md:flex-row"
      >
        <aside className="animate__animated animate__fadeInRight w-full md:w-1/2 flex justify-center items-center pr-10">
          <img
            src={`${image_url}challenge_manager.png`}
            alt=""
            className="w-4/5"
          />
        </aside>

        <aside className="animate__animated animate__fadeInLeft w-full md:w-1/2 flex flex-col justify-center gap-3 lg:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
            Consistent branding across multiple agencies.
          </h1>
          <p className="text-base font-rubik lg:text-xl text-medium text-primary">
            At WanderLinx Travel Service, we serve as a channel manager for
            online travel agencies (OTAs), equipping you with essential tools to
            effectively run your business and thrive in the competitive travel
            and tour industry.
          </p>
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-medium">
            Enhancing brand recognition.
          </h2>
          <p className="text-base lg:text-xl text-medium font-rubik text-primary">
            Our advanced platform streamlines operations for travel agents,
            handling ticket bookings across agencies while preserving and
            enhancing brand identities.
          </p>
        </aside>
      </section>

      <section className="p-3 md:px-6 xl:px-20 2xl:px-72 pt-6 md:pt-32 flex flex-col-reverse md:flex-row items-center">
        <aside className="animate__animated animate__fadeInLeft w-full md:w-1/2 flex flex-col gap-3 lg:gap-6">
          <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
            Providing a business partner for you.
          </h1>
          <p className="text-base lg:text-xl text-medium font-rubik text-primary">
            It can be quite a challenge to find an online travel agency (OTA)
            when you have numerous options available. That's why we've developed
            this system to simplify the process for you. We selected the
            suppliers with great care. Make sure they provide the most
            reasonable prices and simple transaction administration.
          </p>
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-medium">
            Our sorting criteria include:
          </h2>
          <ul className="font-rubik columns-1 md:columns-2 text-base lg:text-xl text-gray-500">
            <li className="leading-loose"> &nbsp; User-friendly website</li>
            <li className="leading-loose"> &nbsp; 24/7 customer support</li>
            <li className="leading-loose"> &nbsp; Payment Security</li>
            <li className="leading-loose"> &nbsp; All-in Pricing</li>
            <li className="leading-loose"> &nbsp; Verify Credentials</li>
            <li className="leading-loose"> &nbsp; Manage bookings easily</li>
            <li className="leading-loose">
              {" "}
              &nbsp; Package deals and discounts
            </li>
          </ul>
        </aside>
        <aside className="animate__animated animate__fadeInRight w-full md:w-1/2 flex justify-center items-center md:pl-6">
          <img
            src={`${image_url}providing_business.png`}
            alt=""
            className="w-4/5 mb-4"
          />
        </aside>
      </section>

      <section
        id="systemWorks"
        className="animate__animated animate__fadeIn px-4 md:px-6 xl:px-20 2xl:px-72 pt-12 md:pt-32"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
          How does our system work
          <br className="hidden md:block" /> for your brand?
        </h1>
        <p className="text-base lg:text-2xl text-medium font-rubik text-primary mt-3 leading-normal">
          Our system simplifies the process for your travel agency business,
          <br className="hidden md:block" />
          from booking tickets to creating your brand identity.
        </p>
      </section>

      <section className="animate__animated animate__fadeInUp px-4 md:px-6 xl:px-20 2xl:px-72 py-12 md:py-24 flex flex-col md:flex-row gap-4 lg:gap-10">
        <div className="text-center w-full md:w-1/3 bg-gradient-to-b from-slate-100 to-white px-4 py-10 rounded-xl flex flex-col gap-4 items-center">
          <img
            src={`${image_url}book_flight.png`}
            alt=""
            className="w-4/5 mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
            Book a Flight
          </h2>
          <p className="text-base lg:text-xl text-gray-500 font-rubik">
            Secure your ticket online by booking through an OTA provider to
            access the best fares.
          </p>
        </div>

        <div className="text-center w-full md:w-1/3 bg-gradient-to-b from-slate-100 to-white px-4 py-10 rounded-xl flex flex-col gap-4 items-center">
          <img
            src={`${image_url}login_form.png`}
            alt=""
            className="w-4/5 mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
            Create Your Brand
          </h2>
          <p className="text-base lg:text-xl text-gray-500 font-rubik">
            Login to your WandelLinx account and generate your personalized,
            branded itinerary.
          </p>
        </div>

        <div className="text-center w-full md:w-1/3 bg-gradient-to-b from-slate-100 to-white px-4 py-10 rounded-xl flex flex-col gap-4 items-center">
          <img
            src={`${image_url}sending_itineray.png`}
            alt=""
            className="w-4/5 mb-4"
          />
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
            Sending Itinerary
          </h2>
          <p className="text-base lg:text-xl text-gray-500 font-rubik">
            The system automatically sends a booking confirmation with your own
            brand.
          </p>
        </div>
      </section>

      <section className="md:px-6 xl:px-20 2xl:px-72">
        <main className="bg-gradient-to-b from-light to-slate-200 px-4 md:px-6 py-16 md:py-16 rounded-none md:rounded-2xl flex flex-col md:flex-row gap-10">
          <aside className="animate__animated animate__fadeInRight w-full md:w-1/2 flex justify-center items-center">
            <img src={`${image_url}advantage.png`} alt="" className="w-11/12" />
          </aside>

          <aside className="animate__animated animate__fadeInLeft w-full md:w-1/2 flex flex-col justify-center gap-3 lg:gap-6">
            <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
              The WanderLinx Advantage
            </h1>
            <p className="text-base lg:text-xl text-medium font-rubik text-primary">
              What makes us unique is our commitment to ensuring your success.
              Our state-of-the art platform has been carefully designed to
              simplify operations for travel agents.
            </p>
            <div className="flex gap-4 items-center">
              <img
                src={`${image_url}channel.png`}
                alt=""
                className="w-16 md:w-12"
              />
              <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
                Channel Management
              </h2>
            </div>

            <p className="text-base lg:text-xl text-medium font-rubik text-primary">
              Acts as a comprehensive channel manager for online travel agencies
              (OTAs), streamlining your operations and enhancing your online
              presence.
            </p>

            <div className="flex gap-4 items-center">
              <img
                src={`${image_url}brand_icon.png`}
                alt=""
                className="w-16 md:w-12"
              />
              <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
                Refine your Brand
              </h2>
            </div>
            <p className="text-base lg:text-xl text-medium font-rubik text-primary">
              One of our key features is the ability to establish your own brand
              presence across online travel agencies.
            </p>

            <div className="flex gap-4 items-center">
              <img
                src={`${image_url}business_tools_icon.png`}
                alt=""
                className="w-16 md:w-12"
              />
              <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
                Management Tools
              </h2>
            </div>
            <p className="text-base lg:text-xl text-medium font-rubik text-primary">
              Gain access to a suite of tools that empower you to efficiently
              manage your OTA business, from bookings to customer interactions.
            </p>
          </aside>
        </main>
      </section>

      <section
        id="features"
        className="animate__animated animate__fadeIn px-4 md:px-6 xl:px-20 2xl:px-72 pt-12 md:pt-24"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
          Our key feature
        </h1>
        <p className="text-base lg:text-2xl text-medium font-rubik text-gray-500 mt-3 leading-normal">
          Unlock the potential of your business, by leveraging the capabilities
          <br className="hidden md:block" />
          offered by our system.
        </p>
      </section>

      <section className="animate__animated animate__fadeInUp px-4 md:px-6 xl:px-20 2xl:px-72 pt-12 md:pt-20 flex">
        <div className="columns:1 md:columns-2">
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}ticket_generator_icons.png`}
              alt=""
              className="w-20"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                E-Ticket Generator
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                Boost your business branding with our custom airline ticket
                builder system designed to help you establish and promote your
                brand.
              </p>
            </div>
          </div>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}booking_history_icon.png`}
              alt=""
              className="w-20"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                Booking History Report
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                You can easily check your booking history to conveniently review
                all the information about your flights and effectively handle
                your reservations.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}revenue-chart.png`}
              alt=""
              className="w-20"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                Income Revenue Chart
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                Track the progression of your earnings with our revenue chart.
                Gain insights into patterns. Make informed choices to enhance
                profitability.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}sms_notification_icon.png`}
              className="w-20"
              alt=""
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                Flight details SMS/Email sending
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                Once you generate a ticket, our system will immediately send an
                email booking confirmation and a text message notification to
                your client.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}agency_details_icon.png`}
              alt=""
              className="w-20"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                Upload Logo & Agency Details
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                You have the option to upload your travel agency's information
                and logo to personalize the airline ticket confirmation.
              </p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start gap-4 mb-6 md:mb-12">
            <img
              src={`${image_url}markup_modification_icon.png`}
              alt=""
              className="w-20"
            />
            <div className="flex flex-col gap-3">
              <h2 className="text-center md:text-left text-2xl font-jakarta text-primary font-bold">
                Markup Modification
              </h2>
              <p className="text-base lg:text-xl text-primary font-rubik">
                Establish your markup income structure based on your desired
                sales per passenger you book and modify the markup whenever
                necessary.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="animate__animated animate__fadeInUp px-4 md:px-6 xl:px-20 2xl:px-72 pt-12 md:pt-20 flex flex-col md:flex-row">
        <aside className="text-center w-full md:w-1/2 bg-lighter p-8 lg:p-16 rounded-xl flex flex-col gap-4 items-center mb-8 md:mb-0 md:mr-6">
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
            Dashboard Account
          </h2>
          <p className="text-base lg:text-xl text-primary font-rubik">
            Effortlessly manage all aspects of your travel agency through a
            centralized dashboard.
          </p>
          <img
            src={`${image_url}login_form.png`}
            alt=""
            className="w-full mt-3 md:mt-6"
          />
        </aside>
        <aside className="text-center w-full md:w-1/2 bg-lighter p-8 lg:p-16 rounded-xl flex flex-col gap-4 items-center">
          <img
            src={`${image_url}video_bg.png`}
            alt=""
            className="w-full mb-6"
          />
          <h2 className="text-2xl md:text-3xl font-jakarta text-primary font-bold">
            Online Training
          </h2>
          <p className="text-center text-base lg:text-xl text-primary font-rubik">
            We offer comprehensive training to guarantee your success when
            outsourcing to online travel agencies.
          </p>
        </aside>
        <aside></aside>
      </section>

      <section
        id="faqs"
        className="px-4 md:px-6 xl:px-20 2xl:px-72 pt-12 md:pt-24 flex flex-col items-center"
      >
        <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-bold font-jakarta text-primary">
          Questions & Answers
        </h1>
        <p className="text-center text-base lg:text-2xl text-medium font-rubik text-primary mt-3 leading-normal">
          Here are the answers to some of the most common questions we hear
          <br className="hidden md:block" /> from our appreciated customers.
        </p>
      </section>

      <section className="animate__animated animate__fadeInUp px-4 md:px-6 xl:px-20 2xl:px-72 py-12 md:py-20">
        <div className="columns:1 lg:columns-2">
          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              1. Do you provide a training?
            </h2>
            <p className="text-base lg:text-xl text-primary pr-8 font-rubik">
              <strong>Yes,</strong> we provide online training and continually
              add more to ensure that all travel agents under Wanderlinx are
              well-equipped with the knowledge necessary for success in the
              travel industry.
            </p>
          </article>

          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              2. Do you have a Support?
            </h2>
            <p className="text-base lg:text-xl text-primary pr-8 font-rubik">
              <strong>Yes,</strong> we have a support system in place to assist
              users with any issues, questions, or concerns related to
              Wanderlinx or their online travel agency account.
            </p>
          </article>

          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              3. What are the minimum system requirements?
            </h2>
            <p className="text-base lg:text-xl text-primary pr-8 font-rubik">
              To start and operate your online travel agency, all you need is an
              internet connection and a device, like a smartphone, tablet,
              laptop, or desktop computer. This gives you the freedom to conduct
              business at any time and from anywhere.
            </p>
          </article>

          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              4. Is this a networking?
            </h2>
            <p className="text-base lg:text-xl text-primary font-rubik">
              <strong>No,</strong> networking is another opportunity, but
              Wanderlinx focuses on providing services to all travel agents and
              offering training for success in the travel industry.
            </p>
          </article>

          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              5. Can I add my logo and business name?
            </h2>
            <p className="text-base lg:text-xl text-primary font-rubik">
              <strong>Yes,</strong> Our platform is designed to help you
              customize your own brand by providing business settings where you
              can upload your own logo and input your travel agency's business
              name.
            </p>
          </article>

          <article className="flex flex-col gap-3 lg:gap-6 mb-6 md:mb-10">
            <h2 className="text-2xl lg:text-3xl font-jakarta text-primary font-bold">
              6. Do you have a ticket invoice?
            </h2>
            <p className="text-base lg:text-xl text-primary font-rubik">
              <strong>Yes,</strong> after you have successfully created a ticket
              through our platform, the ticket invoice will be automatically
              generated and sent to the email address you provided during the
              booking process. You can access and download your ticket invoice
              from the email.
            </p>
          </article>
        </div>
      </section>

      <section
        id="pricing"
        className="md:px-6 xl:px-20 2xl:px-72 pb-12 md:pb-20"
      >
        <main className="bg-pricing-bg bg-cover bg-no-repeat bg-fixed rounded-none md:rounded-2xl flex flex-col md:flex-row gap-4 lg:gap-10 p-4">
          <aside className="w-full md:w-3/5 md:px-8 lg:px-20 py-4 flex flex-col gap-3 lg:gap-6 justify-center">
            <h1 className="text-3xl md:text-4xl lg:text-6xl leading-tight font-medium font-jakarta text-white">
              Getting started with WanderLinx today!
            </h1>
            <p className="text-base lg:text-xl text-medium font-rubik text-white">
              If you have a desire to establish your travel agency business, now
              is the time to register an account on Wanderlinx. We are here to
              assist you in developing your brand in the travel industry.
            </p>
          </aside>

          <aside className="animate__animated animate__fadeInLeft w-full md:w-2/5 bg-white rounded-lg mb-4 md:mb-0 px-4 md:px-8 py-8 lg:p-12 flex flex-col justify-center gap-3 md:gap-6">
            <h2 className="md:text-left text-2xl md:text-3xl font-jakarta text-primary font-bold">
              Achieve success through WanderLinx
            </h2>
            <p className="lg:text-left text-base lg:text-xl text-medium font-rubik text-gray-500">
              Let's determine the time to arrange a meeting for your business
              presentation and learn more about our company.
            </p>
            <a href="https://calendly.com/wanderlinxtravelservices/zoom-meeting">
              <button className="hover:bg-primary transition duration-700 px-8 py-4 bg-blue-400 text-white font-rubik text-base lg:text-xl font-medium rounded-md">
                Business Appointment
              </button>
            </a>
          </aside>
        </main>
      </section>

      <hr className="px-20" />

      <footer className="px-4 md:px-20 2xl:px-72 py-6 md:py-16 font-rubik">
        © 2023 Wanderlinx Travel Services. All Rights Reserved
      </footer>
    </div>
  );
}
