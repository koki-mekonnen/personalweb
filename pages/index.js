import Image from 'next/image';
import profile from '../public/mypro.png';
import Head from 'next/head';
import Typed from 'react-typed';
import { Inter } from 'next/font/google'
import { BsFillMoonStarsFill, BsGithub, BsLinkedin, BsFillMortarboardFill, BsPhone, BsTelegram } from 'react-icons/bs';
import { BiMailSend } from 'react-icons/bi';
import { GrShare } from "react-icons/gr";
import htmlicon from "../public/html5icon.jpg";
import backend from "../public/backend.png";
import other from "../public/othertools.png";
import web6 from "../public/fais.png";
import web5 from "../public/musicui.png";
import web4 from "../public/wetherui.png";
import web3 from "../public/furniture.png";
import web2 from "../public/manage.png";
import web1 from "../public/sweetcatering.png";
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {

  const [darkMode, setDarkMode] = useState(false);

  const onButtonClick = () => {

    // using Java Script method to get PDF file

    fetch('selamawit-mekonnen cv.pdf').then(response => {
      response.blob().then(blob => {

        const fileURL = window.URL.createObjectURL(blob);

        let alink = document.createElement('a');
        alink.href = fileURL;
        alink.download = 'mycv.pdf';
        alink.click();
      })
    })
  }

  return (
    <div className={darkMode ? "dark" : " "}>
      <Head>
        <title>Selamawit's  Portfolio</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className='bg-white   dark:bg-gray-900'>

        <section id='header' className='md:bg-nature-light  bg-center bg-cover dark:bg-nature-dark  min-h-screen px-1 md:px-2 lg:px-2'>

          <nav className='py-8 px-3 lg:px-10 flex  justify-between text-center'>

            <h1 className='text-3xl font-bold  text-red-500 animate-spin font-burtons'><BsFillMortarboardFill /></h1>

            <ul className='flex items-center '>

              <li><BsFillMoonStarsFill onClick={() => setDarkMode(!darkMode)} className='dark:text-white cursor-pointer text-2xl mx-6 hover:scale-125 duration-300  text-blue-300' /></li>

              <li><button className='bg-red-500 hover:scale-125 duration-300
               text-white  rounded-lg  lg:px-6 lg:py-3 px-3 ml-3 py-2 hover:bg-black ' onClick={onButtonClick}>Resume</button></li>

            </ul>

          </nav>


          <div id='hero' className='container flex flex-col-reverse items-center lg:px-10  mt-10  md:space-y-0 md:flex-row  justify-between'>

            <div>
              <div className=' text-black lg:text-white  dark:text-white '>

                <h3 className='lg:pl-5 md:py-20  font-bold  text-1xl lg:w-1/2
                 hover:text-red-500 py-10  dark:text-white  text-black lg:text-white ml-6'> Hey There I'm Selamawit Mekonnen</h3>

                <Typed
                  className=' hover:text-red-500  pt-16 leading-8 lg:text-white text-dark 
                   dark:text-white 
                   lg:py-20  lg:text-7xl font-bold  text-4xl pl-3 lg:pl-20'
                  strings={[
                    "I'm a Freelancer",
                    "I'm a Web Designer",
                    "Web Developer ",
                    "And",
                    "UI/UX Designer"
                  ]}
                  typeSpeed={50}
                  backSpeed={10}
                  loop
                />
                <div>
                  <p className='lg:w-3/4 lg:text-gray-400 text-black hover:text-white dark:text-gray-400  pt-16 lg:pt-24 lg:text-2xl'>I love web Development and Design and Have been working
                    on My portfolio since 2021.I can give Your business a new Creative Start right away!
                  </p>
                </div>

              </div>

              <div className='lg:text-5xl text-3xl flex pl-8 gap-16 py-10 text-red-500'>
                <a className='bg-black  hover:bg-white hover:border-r-8    rounded-full w-15 h-15 p-4 mt-1 overflow-hidden' href='https://github.com/koki-mekonnen?tab=repositories'><BsGithub /></a>
                <a className='bg-black hover:bg-white hover:border-r-8  rounded-full w-15 h-15 p-4 mt-1 overflow-hidden' href='https://www.linkedin.com/in/selamawit-mekonnen-40186b236'><BsLinkedin /></a>
                <a className='bg-black hover:bg-white hover:border-r-8   rounded-full w-15 h-15 p-4 mt-1 overflow-hidden' href="mailto: ezanawittadele@gmail.com"><BiMailSend /></a>
              </div>

            </div>
            <Image src={profile} className=' w-40 lg:w-64 lg:h-96  lg:mr-72  rounded-lg  h-80 overflow-hidden ' />

          </div>


        </section>



        <section id='skills ' className='px-10  md:px-20 lg:px-40'>
          <div className='mt-10'>
            <h3 className='text-3xl py-1 font-bold animate-pulse'>What I do for you?</h3>
          </div>

          <div className="lg:flex gap-10">

            <div className="text-center shadow-lg p-10 rounded-xl my-10  dark:bg-white flex-1">
              <Image src={htmlicon} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2  ">
                Beautiful Designs
              </h3>
              <p className="py-2">
                Creating elegant designs suited for your needs following core
                design theory.
              </p>
              <h4 className="py-4 text-teal-600">Frontend Tools I Use</h4>
              <p className="text-gray-800 py-1">HTML5</p>
              <p className="text-gray-800 py-1">React Js</p>
              <p className="text-gray-800 py-1">Next Js</p>
              <p className="text-gray-800 py-1">Flutter</p>
              <p className="text-gray-800 py-1">Bootstrap5</p>
              <p className="text-gray-800 py-1">Tailwind</p>
            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={backend} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">
                Code your dream project
              </h3>
              <p className="py-2">
                Do you have an idea for your next great website? Let's make it a
                reality.
              </p>
              <h4 className="py-4 text-teal-600">Backend Tools I Use</h4>
              <p className="text-gray-800 py-1">.Net core</p>
              <p className="text-gray-800 py-1">Laravel</p>
              <p className="text-gray-800 py-1">Node Js</p>
              <p className="text-gray-800 py-1">Golang</p>
              <p className="text-gray-800 py-1">Selenium</p>
              <p className="text-gray-800 py-1">Mongo DB</p>
              <p className="text-gray-800 py-1">MY SQL</p>

            </div>


            <div className="text-center shadow-lg p-10 rounded-xl my-10 dark:bg-white flex-1">
              <Image src={other} width={100} height={100} />
              <h3 className="text-lg font-medium pt-8 pb-2 ">Other</h3>
              <p className="py-2">
                Turning your ideas into real life products.
              </p>
              <h4 className="py-4 text-teal-600">Other Tools I Use</h4>
              <p className="text-gray-800 py-1">GitHub</p>
              <p className="text-gray-800 py-1">Figma</p>
              <p className="text-gray-800 py-1">Netlify</p>
              <p className="text-gray-800 py-1">Wix</p>
              <p className="text-gray-800 py-1">Postman</p>
              <p className="text-gray-800 py-1">Swagger</p>
              <p className="text-gray-800 py-1">Visual Studio</p>
              <p className="text-gray-800 py-1">Visual Studio Code</p>
              <p className="text-gray-800 py-1">Android Studio</p>
            </div>


          </div>

        </section>







        <section id='portfolio' className="py-10  px-10  md:px-20 lg:px-10">

          <div>
            <h3 className="text-3xl py-1 dark:text-white font-bold animate-pulse">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200  ">
              Since the beginning of my journey as a freelance designer and
              developer, I've done remote work for
              <span className="text-teal-500"> startups </span>

              and collaborated with talented people to create digital products
              for both business and consumer use. The following are just some of my sample works
              in order to get more check and follow me on my GitHub account <span className="text-teal-500">the link is provided above</span>.

            </p>

            <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
              I offer from a wide range of services, including brand ui/ux design,
              programming and app development.
            </p>
          </div>



          <div className="flex flex-col gap-10 lg:py-24 lg:flex-row lg:flex-wrap">

            <div className='lg:flex gap-6'>
              <div className='lg:flex py-2 '>
                <Image
                  className="rounded-lg object-contain   w-80 h-96"
                  src={web1}
                />
                <div className='lg:px-16   '>
                  <h2 className=' lg:px-1 text-2xl font-bold'>Catering Service Website</h2>
                  <p className="text-md pr-10 py-2 leading-8 text-gray-800 dark:text-gray-200">
                    it is a full stack website for catering service providers in order to be able to accept orders from their customers.
                    currently it runs only in localhost.</p>
                  <div className='flex lg:px-10 py-5 px-16 text-1xl font-bold'>
                    <h3 className='pr-8'>C# </h3>
                    <h3>Bootstrap</h3>
                  </div>

                  <div className='flex  py-5 font-bold'>
                    <p className='pr-2'>Code</p>
                    <a className='text-3xl hover:scale-125 duration-300' href="https://github.com/koki-mekonnen/.NET-FULL-STACK-WEB"> <BsGithub /></a>


                    <div className='flex  pl-24'>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://github.com/koki-mekonnen/.NET-FULL-STACK-WEB"> <GrShare /></a>
                    </div>
                  </div>




                </div>

              </div>

              <div className='lg:flex py-2 '>
                <Image
                  className="rounded-lg object-contain w-80 h-80"

                  src={web2}
                />
                <div className='lg:pl-6  pr-0 '>
                  <h2 className=' lg:px-4 text-2xl font-bold'>Manage Website</h2>
                  <p className="text-md  py-2 leading-8 text-gray-800 dark:text-gray-200">
                    manage is a website for the company to manage it's teams in digital way .
                    it is a responsive tailwind css website.
                  </p>
                  <div className='flex lg:px-10 py-5 px-16 text-1xl font-bold'>
                    <h3 className='pr-8'>HTML5</h3>
                    <h3>Tailwind</h3>
                  </div>

                  <div className='flex  py-5 font-bold'>
                    <p className='pr-2'>Code</p>
                    <a className='text-3xl hover:scale-125 duration-300' href="https://github.com/koki-mekonnen/landingpage-with-tailwind"> <BsGithub /></a>


                    <div className='flex  pl-24'>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://effulgent-cactus-aac6cc.netlify.app/"> <GrShare /></a>
                    </div>
                  </div>




                </div>

              </div>

            </div>

            <div className='lg:flex'>

              <div className='lg:flex py-2 '>
                <Image
                  className="rounded-lg object-contain   w-80 h-96"
                  src={web3}
                />
                <div className='lg:px-16   '>
                  <h2 className=' lg:px-1 text-2xl font-bold'>Interior design Website</h2>
                  <p className="text-md lg:pr-16 py-2 leading-8 text-gray-800 dark:text-gray-200">
                    it is a website for interior design company to promote the company, their teams ,their services and also
                    projects to the customer.</p>
                  <div className='flex lg:px-10 py-5 px-16 text-1xl font-bold'>
                    <h3 className='pr-8'>HTML5</h3>
                    <h3>Bootstrap</h3>
                  </div>

                  <div className='flex  py-5 font-bold'>
                    <p className='pr-2'>Code</p>
                    <a className='text-3xl hover:scale-125 duration-300' href="https://github.com/koki-mekonnen/Creativeinterior--landing--page"> <BsGithub /></a>


                    <div className='flex  pl-24'>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://bucolic-lolly-1aa535.netlify.app/"> <GrShare /></a>
                    </div>
                  </div>




                </div>

              </div>

              <div className='lg:flex py-2 '>
                <Image
                  className="rounded-lg object-contain w-80 h-80"

                  src={web4}
                />
                <div className='lg:pl-6  pr-0 '>
                  <h2 className=' lg:px-4 text-2xl font-bold'>Mobile App UI</h2>
                  <p className="text-md  py-2 leading-8 text-gray-800 dark:text-gray-200">
                    this is a ui design for weather forcasting mobile app
                    it is designed with figma and the link is provided below.
                  </p>


                  <div className='flex lg:px-10 py-5 px-10 text-1xl font-bold'>
                    <h3 className='pr-10'>Figma </h3>
                    <div className='flex  '>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://www.figma.com/file/fWLiC5GB7b8p84S2L7CGPc/weatherforcastapp?node-id=101-267&t=WqjegG1gUiZslF4F-0"> <GrShare /></a>
                    </div>

                  </div>




                </div>

              </div>

            </div>




            <div className='lg:flex'>
              <div className='lg:flex py-7 '>
                <Image
                  className="rounded-lg object-cover w-80 h-80"

                  src={web5}
                />
                <div className='lg:px-10   '>
                  <h2 className=' lg:px-4 text-2xl font-bold pt-8'>Music App UI</h2>
                  <p className="text-md py-2 leading-8 text-gray-800 dark:text-gray-200">
                    This is a ui design for music player app on our mobile device.
                    made with figma design tool.
                  </p>
                  <div className='flex lg:px-10 py-5 px-10 text-1xl font-bold'>
                    <h3 className='pr-10'>Figma </h3>
                    <div className='flex  '>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://www.figma.com/file/4reGNafpLQuwmkhJGnlBr9/musicapp?node-id=201-2&t=DQ4bO34OkfclTkSg-0"> <GrShare /></a>
                    </div>

                  </div>






                </div>

              </div>


              <div className='lg:flex py-2 '>
                <Image
                  className="rounded-lg lg:ml-56 object-contain w-80 h-80" src={web6} />
                <div className='lg:pl-6  pr-0 '>
                  <h2 className=' lg:px-4 text-2xl font-bold'>FAIS Website UI</h2>
                  <p className="text-md pr-1 py-2 leading-8 text-gray-800 dark:text-gray-200">
                    This is ui for Home page of a website which used
                    to manage all the company's transactions,
                    cashflows,income and expenses.

                  </p>


                  <div className='flex lg:px-10 py-5 px-10 text-1xl font-bold'>
                    <h3 className='pr-10'>Figma </h3>
                    <div className='flex  '>
                      <p className='pr-2'>Live Demo</p>
                      <a className='text-2xl hover:scale-125 duration-300' href="https://www.figma.com/file/fIdVNRtt1Br56cNx5gZlG2/FAIS?node-id=16-19&t=u4OtmibhMo1S2GNn-0"> <GrShare /></a>
                    </div>

                  </div>




                </div>

              </div>


            </div>


          </div>
        </section>


        <section id='footer'>

          <div className='bg-nature-dark bg-cover bg-no-repeat bg-center pt-10 h-96 w-full'>
            <h1 className='text-center text-white text-4xl underline'> Contact Me</h1>

            <p className='text-white lg:text-2xl  text-center lg:px-64 pt-8   animate-bounce duration-300'>Thanks for stopping by,I'm currently looking to join a new team of creative designers and developers. if you think
              we might be a good fit for one another, give me a call or send me an email.</p>

            <div className='text-white text-1xl px-10 lg:px-32 py-10'>
              <div className='py-3 flex ' >
                <p ><BsPhone /> </p>
                <p className='pl-3'> +251909126324</p>
              </div>
              <div className='py-3 flex'>
                <p><BsTelegram /></p>
                <p className='pl-3'>Selamawit (@kokichoo) </p>
              </div>
              <div className='py-3 flex'>
                <p><BiMailSend /></p>
                <p className='pl-3' >ezanawittadele@gmail.com</p>
              </div>


            </div>
          </div>
        </section>



















      </main>
    </div >
  )
}
