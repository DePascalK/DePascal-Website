// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from './assets/vite.svg'
// import heroImg from './assets/hero.png'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(0)

//   return (
//     <>
//       <section id="center">
//         <div className="hero">
//           <img src={heroImg} className="base" width="170" height="179" alt="" />
//           <img src={reactLogo} className="framework" alt="React logo" />
//           <img src={viteLogo} className="vite" alt="Vite logo" />
//         </div>
//         <div>
//           <h1>Get started</h1>
//           <p>
//             Edit <code>src/App.tsx</code> and save to test <code>HMR</code>
//           </p>
//         </div>
//         <button
//           type="button"
//           className="counter"
//           onClick={() => setCount((count) => count + 1)}
//         >
//           Count is {count}
//         </button>
//       </section>

//       <div className="ticks"></div>

//       <section id="next-steps">
//         <div id="docs">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#documentation-icon"></use>
//           </svg>
//           <h2>Documentation</h2>
//           <p>Your questions, answered</p>
//           <ul>
//             <li>
//               <a href="https://vite.dev/" target="_blank">
//                 <img className="logo" src={viteLogo} alt="" />
//                 Explore Vite
//               </a>
//             </li>
//             <li>
//               <a href="https://react.dev/" target="_blank">
//                 <img className="button-icon" src={reactLogo} alt="" />
//                 Learn more
//               </a>
//             </li>
//           </ul>
//         </div>
//         <div id="social">
//           <svg className="icon" role="presentation" aria-hidden="true">
//             <use href="/icons.svg#social-icon"></use>
//           </svg>
//           <h2>Connect with us</h2>
//           <p>Join the Vite community</p>
//           <ul>
//             <li>
//               <a href="https://github.com/vitejs/vite" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#github-icon"></use>
//                 </svg>
//                 GitHub
//               </a>
//             </li>
//             <li>
//               <a href="https://chat.vite.dev/" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#discord-icon"></use>
//                 </svg>
//                 Discord
//               </a>
//             </li>
//             <li>
//               <a href="https://x.com/vite_js" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#x-icon"></use>
//                 </svg>
//                 X.com
//               </a>
//             </li>
//             <li>
//               <a href="https://bsky.app/profile/vite.dev" target="_blank">
//                 <svg
//                   className="button-icon"
//                   role="presentation"
//                   aria-hidden="true"
//                 >
//                   <use href="/icons.svg#bluesky-icon"></use>
//                 </svg>
//                 Bluesky
//               </a>
//             </li>
//           </ul>
//         </div>
//       </section>

//       <div className="ticks"></div>
//       <section id="spacer"></section>
//     </>
//   )
// }

// export default App






// ---------------------------------------------MY STUFF------------------------------------
import '../../styles/App.css'
import { useState } from 'react';
import { Button, Card} from 'flowbite-react';
import { FullNavBar } from '../../shared/ui_elements';
import { getImageUrl } from '../../shared/utils';

type person = {
    imageId: string;
    name: string;
};




export default function MyApp(){
  //Make buttons update together
  const [count, setCount] = useState(0)
  function handleClick(){
    // alert('You clicked me!');
    setCount(count+1);
  }
  
  return(
    <div>
      <FullNavBar/>
      <h1 className='ml-2'>
        Welcome to my page! Actual content coming soon ish
      </h1>
      <hr className="my-2"/>
      <div className="page-content">

          <Button onClick={() => console.log("Clicked!")} pill> Button to click </Button>
          <hr className="mt-4 mb-8"/>
          <div className="flex flex-wrap gap-4">
              <MyCard
                  title="Card One"
                  description="This goes back home, try it!"
                  href="/"
                  buttonText="Home"
              />
              <MyCard
                  title="Card Two"
                  description="This goes to the game :)"
                  href="/game_page/"
                  buttonText="Play"
              />                    
              <MyCard
                  title="Card Three"
                  description="This goes to subpage 1"
                  href="/subpage1/"
                  buttonText="Click me"
              />
              
          </div>
        <h2>Synced buttons</h2>
        <MyButton count={count} onClick={handleClick}/>
        <MyButton count={count} onClick={handleClick}/>
        <Button color="green" size="sm">Looks good → does nothing </Button>
        <MyGallery/>
      </div>
      <hr className='my-2'/>
      <div className='about-page'>
        <AboutPage/>
      </div>
    </div>
  );
}

// person1={{ name: 'Lin Lanying', imageId: '1bX5QH6' }}
// person2={{ name: 'Katsuko Saruhashi', imageId: 'YfeOqp2' }}
// person3={{ name: 'Creola Katherine Johnson', imageId: 'MK3eW3A' }}

function MyGallery(){
  return(
    <div className='flex flex-wrap my-2' >
      <MyAvatar name="Lin Lanying" imageId="1bX5QH6"/>
      <MyAvatar name="Katsuko Saruhashi" imageId="YfeOqp2"/>
      <MyAvatar name="Creola Katherine Johnson" imageId="MK3eW3A"/>
    </div>
  )
}

function MyAvatar({name, imageId}:person){
  return(
    <img
      className="avatar"
      src={getImageUrl({ name: name, imageId: imageId })}
      alt={name}
    />
  )
}

type MyButtonProps={
  count:number;
  onClick: () => void;
};

function MyButton({count, onClick}:MyButtonProps){
  return(
    <button className= "btn-default" onClick={onClick}>Clicked {count} times</button>
  )
}


type MyCardProps = {
    title: string;
    description: string;
    href: string;
    buttonText: string;
}

function MyCard({title, description, href, buttonText}: MyCardProps) {
    return (
        <Card className="max-w-sm w-60 h-100">
          <div className="flex-1">

            <h5 className="text-2x1 font-bold tracking-tight text-gray-900 dark:text-white text-3xl">
                {title}

            </h5>
            <p className="font-normal text-gray-700 dark:text-gray-400">
                {description}
            </p>
          </div>
            <Button href={href} className="font-mono mt-auto">
                {buttonText}
                {/* This creates the arrow on the button */}
                <svg className="-mr-1 ml-2 h-4 w-4" fill="currentColor" viewBox="0 0 20 20" href="http://www.w3.org/2000/svg">
                    <path
                        fillRule="evenodd"
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                        clipRule="evenodd"
                        />
                </svg>
            </Button>
        </Card>
    )
}


function AboutPage(){
  return(
    <>
      <h1>About</h1>
      <p>
        Hello there. <br/> How are you?
      </p>
    </>
  );
}