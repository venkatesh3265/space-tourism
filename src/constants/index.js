import europa from '../assets/destination/image-europa.png'
import moon from '../assets/destination/image-moon.png';
import mars from '../assets/destination/image-mars.png';
import titan from '../assets/destination/image-titan.png';
import douglas from "../assets/crew/image-douglas-hurley.png";
import mark from "../assets/crew/image-mark-shuttleworth.png";
import victor from "../assets/crew/image-victor-glover.png";
import anousheh from "../assets/crew/image-anousheh-ansari.png";
import rocket from "../assets/technology/image-launch-vehicle-portrait.jpg";
import stage from "../assets/technology/image-spaceport-portrait.jpg";
import capsule from "../assets/technology/image-space-capsule-portrait.jpg";

export const navLinks = [
    { path: "/", label: "Home" },
    { path: "destination", label: "DESTINATION" },
    { path: "/crew", label: "CREW" },
    { path: "/technology", label: "TECHNOLOGY" },
];

export const getBackgroundClass = (pathname) => {
    switch (pathname) {
        case '/destination':
            return 'md:bg-destination-tablet bg-destination-mobile xl:bg-destination-desktop';
        case '/crew':
            return 'md:bg-crew-tablet bg-crew-mobile xl:bg-crew-desktop';
        case '/technology':
            return 'md:bg-technology-tablet bg-technology-mobile xl:bg-technology-desktop';
        default:
            return 'md:bg-home-tablet bg-home-mobile xl:bg-home-desktop';
    }
}

export const destinationmenu = [
    {
        id: 1,
        text: "MOON",
        img: moon,
        content: 'See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.',
        distance: "384,400 km",
        travel: "3 days"
    },
    {
        id: 2,
        text: "MARS",
        img: mars,
        content: 'Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!',
        distance: "225 MIL. km",
        travel: "9 months"
    },
    {
        id: 3,
        text: "EUROPA",
        img: europa,
        content: 'The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.',
        distance: "628 MIL. km",
        travel: "3 years"

    },
    {
        id: 4,
        text: "TITAN",
        img: titan,
        content: 'The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.',
        distance: "1.6 BIL. km",
        travel: "7 years"

    }

]

export const crewMember = [

    {
        id: 1,
        name: "Douglas Hurley",
        position: "Commander",
        content: 'Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.',
        img :douglas,


    },
    {
        id: 2,
        name: "Mark Shuttleworth",
        position: "Mission Specialist",
        content: "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
        img:mark
    },{
        id: 3,
        name: "Victor Glover",
        position: "Pilot",
        content: "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer. ",
        img: victor
    },{
        id: 4,
        name: "Anousheh Ansari",
        position: "Flight Engineer",
        content: "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space. ",
        img: anousheh

    }

] 

export const technology = [
    {
        id: 1,
        text: "LAUNCH VEHICLE",
        img: rocket,
        content: `A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!`,
    },
    {
        id: 2,
        text: "SPACEPORT",
        img: stage,
        content: 'A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.',
    },
    {
        id: 3,
        text: "SPACE CAPSULE",
        img: capsule,
        content: `A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.`
    }

]