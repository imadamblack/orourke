import Image from 'next/image';

export default function Blockbuster({overhead, title, image}) {
  return (
    <section className="relative flex flex-col justify-end min-h-[60vh] w-screen md:mb-0 mx-auto py-12 md:py-20">
      <div className="absolute inset-0 bg-gradient-to-tr from-black to-transparent opacity-60 z-10"/>

      <div className="container mx-auto z-10">
        <div className="flex flex-col md:flex-row items-stretch justify-stretch">
          <div className="w-full md:w-2/3 p-8 md:p-14">
            <p className="overhead">{overhead}</p>
            <h2
              dangerouslySetInnerHTML={{__html: title}}
              className="my-auto text-white [text-shadow:_2px_2px_4px_rgb(10_70_50_/_80%)]"
            />
          </div>
        </div>
      </div>

      <Image src={image} layout="fill" className="object-cover"/>
    </section>
  );
}