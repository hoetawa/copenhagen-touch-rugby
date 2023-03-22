import Link from 'next/link';
import styles from '../styles';

function isDST(d) {
  let jan = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  let jul = new Date(d.getFullYear(), 0, 1).getTimezoneOffset();
  return Math.max(jan, jul) !== d.getTimezoneOffset();
}

const When = () => {
  const today = new Date();
  let summertime;
  if (isDST(today)) {
    summertime = (
      <div className="flex flex-col">
        <dt className="order-2 mt-2 text-lg leading-6 font-medium text-white md:text-6xl">WED</dt>
        <dd className="order-1 text-5xl font-extrabold text-white md:text-8xl">17:30</dd>
      </div>
    );
  }

  return (
    <section className={`${styles.paddings} bg-green-800`} id="when">
      <div className="md:mx-10 xl:mx-60 2xl:mx-80 pt-10 xl:pt-24">
        <h2 className="text-white uppercase text-center text-3xl pt-4 tracking-tight sm:text-4xl md:text-4xl xl:text-5xl">
          Blogs
          <br />
          <Link className="" href={'/about'}>
            <span className="hover:text-red-600 text-white opacity-90 pb-4 tracking-tight font-bold text-6xl  sm:text-8xl md:text-8xl xl:text-9xl">
              welcome
            </span>
          </Link>
        </h2>
      </div>
      <div className="max-w-7xl mx-auto pt-8 pb-16 px-4 sm:py-16 sm:px-6 lg:px-8 lg:pt-20 lg:pb-40">
        <dl className="mt-10 text-center sm:max-w-3xl sm:mx-auto sm:grid sm:grid-cols-2 sm:gap-8">
          <div className="flex flex-col mt-10 sm:mt-0 ">
            <Link className="" href={'/play'}>
              <h1 className="hover:text-red-600 text-white opacity-90 text-8xl sm:text-9xl md:text-10xl xl:text-12xl uppercase tracking-tight font-bold">
                Play
              </h1>
            </Link>
          </div>
          {summertime}
          <div className="flex flex-col mt-10 sm:mt-0">
            <dt className="order-2 mt-2 text-4xl leading-6 font-medium text-white md:text-6xl">
              SUN
            </dt>
            <dd className="order-1 text-8xl font-extrabold text-white md:text-8xl">10:30</dd>
          </div>
        </dl>
      </div>
    </section>
  );
};

export default When;
