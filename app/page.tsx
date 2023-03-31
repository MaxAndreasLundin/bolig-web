'use client';
import GetListOfAllResidence from '../components/searchBar/GetListOfAllResidence';

export default function Home() {
  return (
    <div className="flex h-[100vh] w-full max-w-[1200px] flex-1 flex-col items-center overflow-y-auto border border-red-600">
      
        <div
          className="h-[600px] w-full rounded-xl border border-green-600 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(/houseWinter.jpg)`}}
        >
          <div className="absolute inset-0 bg-white bg-opacity-20"></div>
          <div className="z-10 flex flex-col items-center justify-center pt-32 text-white">
            <h1 className="mb-4 text-7xl font-extrabold drop-shadow-2xl">
              <a href="/">Bolig</a>
            </h1>
            <p className="text-2xl drop-shadow-2xl md:text-3xl">
              A new home awaits, find it now!
            </p>

            <GetListOfAllResidence />
          </div>
          {/* <Image src={bgImg} alt="house" priority={true} /> */}
      </div>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi totam
        commodi sit eveniet soluta impedit illo officiis adipisci suscipit,
        delectus expedita ducimus enim inventore modi repellendus dolores
        perspiciatis, provident rerum autem aut. Veritatis illum ut quo officia
        repellat praesentium, cum, veniam dolorum, esse distinctio eveniet
        facilis! Aliquid, odit blanditiis quam consequatur libero hic, in
        adipisci dicta odio dolore earum nemo officia voluptatem unde eveniet
        autem eligendi? Obcaecati delectus provident velit beatae, impedit
        dolorum voluptatem maxime unde temporibus, deserunt, voluptatum illo? A
        dolorum sunt dolores odio reiciendis dicta temporibus optio quis.
        Aperiam ipsam omnis nam aliquid laborum iste sunt a nihil?
      </p>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi totam
        commodi sit eveniet soluta impedit illo officiis adipisci suscipit,
        delectus expedita ducimus enim inventore modi repellendus dolores
        perspiciatis, provident rerum autem aut. Veritatis illum ut quo officia
        repellat praesentium, cum, veniam dolorum, esse distinctio eveniet
        facilis! Aliquid, odit blanditiis quam consequatur libero hic, in
        adipisci dicta odio dolore earum nemo officia voluptatem unde eveniet
        autem eligendi? Obcaecati delectus provident velit beatae, impedit
        dolorum voluptatem maxime unde temporibus, deserunt, voluptatum illo? A
        dolorum sunt dolores odio reiciendis dicta temporibus optio quis.
        Aperiam ipsam omnis nam aliquid laborum iste sunt a nihil?
      </p>
      {/* <div className="relative flex w-full flex-1 flex-col items-center justify-between bg-white">
  
      </div> */}
    </div>
  );
}
