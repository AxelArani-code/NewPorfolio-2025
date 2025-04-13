import sidefolioAceternity from "public/images/appDevTree.png";
import sidefolioAceternity2 from "public/images/appDevTree.png";
import sidefolioAlgochurn from "public/images/appRepart.png";
import sidefolioAlgochurn2 from "public/images/appRepart2.png";
import sidefolioMoonbeam from "public/images/pinteres.png";
import sidefolioMoonbeam2 from "public/images/pinteres.png";
import sidefolioAppRestaurant from "public/images/appRestourant.png";
import sidefolioMayah from "public/images/mayah.png";
import sidefolioMayah2 from "public/images/mayah2.png";



export const products = [
  {
    href: "https://appdevtree.netlify.app/",
    title: "AppDevtree",
    description:
      "All your Social Networks in your link",
    thumbnail: sidefolioAceternity,
    images: [sidefolioAceternity, sidefolioAceternity2],
    stack: ["Nextjs", "Tailwindcss", "Express", "TypeScript"],
    slug: "aceternity",
    content: (
      <div>
        <p>
        Discover DevTree! DevTree is your new way to organize and share all your social media in one place. With our app, you just need to sign up and add your profiles from different platforms so you can easily share them with friends, colleagues, and contacts.
          </p>

      </div>
    ),
  },
  {
    href: "https://reaprtoapp.netlify.app/",
    title: "AppRepart",
    description:
      "AppRepart is the perfect solution for water delivery drivers..",
    thumbnail: sidefolioAlgochurn,
    images: [sidefolioAlgochurn, sidefolioAlgochurn2],
    stack: ["React.Js", "Tailwindcss", "C#"],
    slug: "algochurn",
    content: (
      <div>
        <p>
        Meet AppRepart!

AppRepart is the perfect solution for water delivery drivers, designed to simplify and optimize your daily work. With an intuitive interface, this app allows you to efficiently manage your routes and orders, offering:
        </p>
        <p>
        <strong>Delivery Schedule: </strong>Easily organize and view your delivery days to plan your day.
        </p>{" "}
        <p>
        <strong>  Customer History: </strong> Access each customer&apos;s detailed history, including their respective orders, for personalized follow-up.
     
        </p>{" "}
        <p>
        <strong>Service Optimization:</strong> Maintain precise control of your deliveries, facilitating fast and efficient service.
     
        </p>{" "}

      </div>
    ),
  },
  {
    href: "https://github.com/AxelArani-code/Proyect-Pinteres-Java",
    title: "CopyPinterest",
    description:
      "I made a Pinterest Copy to learn the android flow and its structure.",
    thumbnail: sidefolioMoonbeam,
    images: [sidefolioMoonbeam, sidefolioMoonbeam2],
    stack: ["java", "FireBase", "Android"],
    slug: "moonbeam",
    content: (
      <div>
        <p>
        When I first learned the basics of app development, I had no idea. So I decided to create a Pinterest replica to see how I could use my knowledge to learn more about Java and Android architecture.
        </p>
      
      </div>
    ),
  },
  {
    href: "https://github.com/AxelArani-code/El-Patio-Bar",
    title: "App Restaurant Bar",
    description:
      "I made a App Restaurant Bar.",
    thumbnail: sidefolioAppRestaurant,
    images: [sidefolioAppRestaurant, sidefolioAppRestaurant],
    stack: ["java", "FireBase", "Android", "Kotlin"],
    slug: "rastaurent",
    content: (
      <div>
        <p>
        I generated an app for a restaurant bar where it was basically a menu where the prices of all the products and the daily specials appeared. It also had an interaction with the owner who could evaluate how many customers used the app.
        </p>
      
      </div>
    ),
  },
  {
    href: "https://mayah.com.ar/",
    title: "Mayah",
    description:
      "Hassle-free ordering. Real-time pricing. Smart and easy management..",
    thumbnail: sidefolioMayah,
    images: [sidefolioMayah, sidefolioMayah2],
    stack: ["java", "API", "Retrofit"],
    slug: "mayah",
    content: (
      <div>
        <p>
       
        The platform that helps you buy better, sell more, and manage orders without wasting time. Complete transparency, market intelligence, and direct connections to trusted wholesalers and retailers.
        </p>
      
      </div>
    ),
  },

];
