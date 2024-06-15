import Image from "next/image";
import Header from "./header/page";
import ContactForm from "./contactForm/page";
import ProjectCard from "./projectCard/page";
import EducationCard from "./educationCard/page";

export default function Home() {
  return (
    <main className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 min-h-screen text-gray-200">
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="container mx-auto p-4 flex-1">
          <div className="flex justify-center my-8 transform transition-transform duration-500 hover:scale-105">
            {/* <Image
              src="/vercel.svg"
              alt="Vercel Logo"
              className="dark:invert drop-shadow-lg"
              width={100}
              height={200}
              priority
            /> */}
          </div>
          <section id="about" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <p className="leading-relaxed text-lg">
              Passionate about thriving in competitive environments, Susmitha Maria thrives on challenges, contributing her utmost to propel company growth. With a keen eye for innovation and dedication to excellence, she blends technical prowess with a strategic mindset, ensuring impactful solutions that drive success in every endeavor.
            </p>
          </section>
          <section id="projects" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ProjectCard
              title="Stack Analysis Using Web Development"
              description="Analyzed and enhanced software systems for improved performance at JP Morgan."
            />
            <ProjectCard
              title="Army Soldiers Health and Wellness Observing Sensors Embedded Safeguard Helmet Using IoT"
              description="Monitored the health and safety of soldiers through sensor-equipped helmets."
            />
            <ProjectCard
              title="Travel and Tour Website"
              description="Created an interactive and user-friendly platform for travel and tour services using HTML, CSS, and JavaScript."
            />
          </section>
          <section id="education" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <EducationCard
              school="Kshatriya girl's Higher Secondary School, Virudhunagar"
              degree="SSLC"
              percentage="88%"
              year="2018-2019"
            />
            <EducationCard
              school="Kshatriya girl's Higher Secondary School, Virudhunagar"
              degree="HSC"
              percentage="90.74%"
              year="2019-2021"
            />
            <EducationCard
              school="V.S.B Engineering College, Karur"
              degree="Engineering"
              cgpa="8.15"
              year="2021-2023"
            />
          </section>
          <section id="internship" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Internship</h2>
            <p className="leading-relaxed text-lg">
              <strong>Devtown (Aug - 2023):</strong> I attended a three-month internship training at Devtown from August 2023, gaining hands-on
              experience in software development, with a focus on web technologies and industry best practices. This
              opportunity was sponsored by JP Morgan.
            </p>
            <p className="leading-relaxed text-lg mt-4">
              <strong>Ramco (July - 2023):</strong> During the internship at Ramco from July 14 to July 31, 2023, I received focused training in SQL
              (Structured Query Language), gaining practical skills in database management and querying.
            </p>
          </section>
          <section id="paper-presentation" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Paper Presentation</h2>
            <p className="leading-relaxed text-lg">
              I presented a paper on "Humanoid Robots" at Sri Ramakrishna Institute of Technology on February
              10, 2023, discussing advancements and applications in the field of humanoid robotics.
            </p>
          </section>
          <section id="technical-skills" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside">
              <li>Java</li>
              <li>SQL</li>
              <li>HTML/CSS</li>
              <li>JavaScript</li>
              <li>DSA in Java</li>
            </ul>
          </section>
          <section id="interests" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Interests</h2>
            <p className="leading-relaxed text-lg">
              Web development.
            </p>
          </section>
          <section id="certifications" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Certifications & Training</h2>
            <ul className="list-disc list-inside">
              <li>Certified for completion of Data Structure and Algorithm using Java in NPTEL.</li>
              <li>Certified for completion of Web Development Bootcamp in Udemy.</li>
              <li>Certified for completion of basics of HTML in Greatlearning.</li>
              <li>Certified for completion of Web development in Devtown.</li>
              <li>Certified for completion of DSA in Devtown.</li>
            </ul>
          </section>
          <section id="contact" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <ContactForm />
          </section>
          <section id="linkedin" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white flex items-center">
            <h2 className="text-3xl font-bold mb-4 flex-grow">Connect with me on LinkedIn ▶️▶️</h2>
            <a href="https://www.linkedin.com/in/susmithamaria/" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://media.licdn.com/dms/image/D5603AQG8xcvwiRFgmA/profile-displayphoto-shrink_800_800/0/1666681626392?e=1723680000&v=beta&t=kSqYx88q5adTOWut9WPltV3fTg36RSpXd2EAtbo4zu8"
                alt="LinkedIn Logo"
                width={200}
                height={100}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>
          </section>
        </main>
        <footer className="bg-gray-900 text-white text-center p-4 shadow-inner">
          <p>© 2024 Susmitha M. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
