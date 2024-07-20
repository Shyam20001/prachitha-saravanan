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
              Dedicated and genuine employee with an ability to fulfill the
              customer satisfaction. Secure a responsible career opportunity to
              fully utilize the training and skills, while making a significant
              contribution to develop the company.
            </p>
          </section>
          <section id="projects" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Projects</h2>
            <ProjectCard
              title="Detection and Classification of OPMD and Oral Health Monitoring"
              description="Detecting oral lesions for early detection of oral cancer."
            />
            <ProjectCard
              title="Driver Drowsiness Detector and Alert System"
              description="Alerts the driver when they are in a drowsy state while driving."
            />
          </section>
          <section id="education" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Education</h2>
            <EducationCard
              school="Vellalar College Of Engineering & Technology"
              degree="B.E Biomedical Engineering"
              cgpa="7.71"
              year="2020-2024"
            />
            <EducationCard
              school="Vellalar Matric Higher Secondary School"
              degree="HSC"
              percentage="57%"
              year="2020"
            />
            <EducationCard
              school="Vellalar Matric Higher Secondary School"
              degree="SSLC"
              percentage="75%"
              year="2018"
            />
          </section>
          <section id="internship" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Internships and Training</h2>
            <p className="leading-relaxed text-lg">
              <strong>Hospital Training:</strong> Decontamination and Sterilization of Medical Devices at FREEDOM INSTITUTE OF MEDICAL SCIENCES, Coimbatore (7 Days).
            </p>
            <p className="leading-relaxed text-lg mt-4">
              <strong>Hospital Training:</strong> Medical Equipment Electrical Safety Testing at LOTUS HOSPITAL, Erode (10 Days).
            </p>
            <p className="leading-relaxed text-lg mt-4">
              <strong>Hospital Training:</strong> Medical Equipment Electrical Safety Testing at CYRIX HEALTHCARE PVT LTD, Cochin (1 Day).
            </p>
          </section>
          <section id="technical-skills" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Technical Skills</h2>
            <ul className="list-disc list-inside">
              <li>Medical Device ISO 13485</li>
              <li>Microsoft</li>
              <li>Work Instructions</li>
              <li>Time Management</li>
              <li>MDR</li>
              <li>SAP (Systems, Applications & Products in Data Processing)</li>
            </ul>
          </section>
          <section id="certifications" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Certifications & Training</h2>
            <ul className="list-disc list-inside">
              <li>Principles of Management - NPTEL | IIT KHARAGPUR (54%, July-Oct 2022)</li>
              <li>Certification of achievement in Decontamination and Sterilization of Medical Device (77.6%, June 12, 2024)</li>
              <li>Certificate of Participation in Medical Equipment Electrical Safety Testing (June 12, 2024)</li>
            </ul>
          </section>
          <section id="experience" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Experience</h2>
            <p className="leading-relaxed text-lg">
              Currently working as REGULATORY AFFAIRS EXECUTIVE at Nice Neotech Medical Systems Private Limited, Chennai.
            </p>
          </section>
          <section id="co-curricular" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Co-Curricular Activities</h2>
            <ul className="list-disc list-inside">
              <li>Member of IEEE</li>
              <li>Member of Rotract Club</li>
            </ul>
          </section>
          <section id="personal-details" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Personal Details</h2>
            <p className="leading-relaxed text-lg">
              <strong>Father's Name:</strong> Saravanan V
            </p>
            <p className="leading-relaxed text-lg">
              <strong>Date of Birth:</strong> 18/05/2003
            </p>
            <p className="leading-relaxed text-lg">
              <strong>Nationality:</strong> Indian
            </p>
            <p className="leading-relaxed text-lg">
              <strong>Gender:</strong> Female
            </p>
          </section>
          <section id="languages" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Languages</h2>
            <ul className="list-disc list-inside">
              <li>Tamil</li>
              <li>English</li>
            </ul>
          </section>
          <section id="linkedin" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white flex items-center">
            <h2 className="text-3xl font-bold mb-4 flex-grow">Connect with me on LinkedIn ▶️▶️</h2>
            <a href="https://www.linkedin.com/in/prachitha-saravanan-488590269" target="_blank" rel="noopener noreferrer">
              <Image
                src="https://media.licdn.com/dms/image/D5603AQF6naDloLCFEA/profile-displayphoto-shrink_800_800/0/1720767612892?e=1726704000&v=beta&t=f_Aix8swptreKv8Xpfx7vikxLfKL6Cb7tDJBnYV5MSk"
                alt="LinkedIn Logo"
                width={200}
                height={100}
                className="rounded-full hover:scale-110 transition-transform duration-300"
              />
            </a>
          </section>
          <section id="hire-me" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white flex items-center">
            <h2 className="text-3xl font-bold mb-4 flex-grow">Hire Me Instantly</h2>
            <a href="tel:+919025446934" className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded flex items-center">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10l6-6m0 0l6 6m-6-6v18m9-9h-3m6 0h-3m0 0h-3m0 0h-3m0 0H6" />
              </svg>
              CLICK here..!!
            </a>
          </section>
          <section id="contact" className="my-8 p-6 bg-gray-800 bg-opacity-50 backdrop-blur-md rounded-lg shadow-lg transform transition-transform duration-500 hover:scale-105 text-white">
            <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
            <ContactForm />
          </section>
        </main>
        <footer className="bg-gray-900 text-white text-center p-4 shadow-inner">
          <p>© 2024 Prachitha S. All rights reserved.</p>
        </footer>
      </div>
    </main>
  );
}
