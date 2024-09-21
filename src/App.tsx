import "./App.css";
import Whatsit from "./components/Whatsit";
import whatsitData from "./types/whatsit";

function App() {
  const myWhatsit: whatsitData = { name: "whatsit1", foo: "bar" };
  return (
    <>
      <main className='bg-blue-200 p-4 pt-0 max-w-[30rem]'>
        <h1 className='text-lg font-bold'>Hello, World!</h1>
        <p className='bg-red-400 rounded-lg p-1'>
          I'm a paragraph styled with utility classes from tailwindcss. I'm
          defined in a react component, but my parent is defined with a static
          html template that also has utility classes.
        </p>
        <p>
          this project was written in typescript and compiled with vite using
          tsc.
        </p>
        <p>
          below is a whatsit of type{" "}
          <span className='font-mono'>whatsitData</span>. The whatsitData type
          defines a name and a foo attribute both of type string. I have invoked
          the Whatsit react component and passed it a whatsitData object as a
          prop with the following format:
        </p>
        <div className='bg-slate-400 mb-1 p-1'>
          <p className='font-mono line'>{`const myWhatsit: whatsitData = {`}</p>
          <p className='font-mono'>&nbsp;&nbsp;{`name: "whatsit1",`}</p>
          <p className='font-mono'>&nbsp;&nbsp;{`foo: "bar"`}</p>
          <p className='font-mono'>{`}`}</p>
        </div>
        <Whatsit data={myWhatsit} />
        <p>
          source code for this project can be found at{" "}
          <a
            href='https://github.com/dallinmoak/430-L1'
            className='underline text-blue-800'
            target='_blank'
          >
            https://github.com/dallinmoak/430-L1
          </a>
        </p>
      </main>
    </>
  );
}

export default App;
