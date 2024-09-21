import whatsitData from "../types/whatsit";

export default function Whatsit({ data }: { data: whatsitData }) {
  return (
    <div className="border border-black rounded-md before:content-['-whatsit-']">
      <p>
        Hi, I'm a whatsit! My name is{" "}
        <span className='font-mono'>{data.name}</span> and my foo is{" "}
        <span className='font-mono'>{data.foo}</span>.
      </p>
    </div>
  );
}
