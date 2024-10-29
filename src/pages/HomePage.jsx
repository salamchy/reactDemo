import Yoga from '../assets/relax.svg';
import Details from '../components/Details';
import Technologies from '../components/Technologies';

const HomePage = () => {
  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-2 p-4">
        <div className="flex flex-col h-96">
          <img src={Yoga} className="w-96 h-96 animate-upDown" />
        </div>
        <div className="flex flex-col space-y-2 h-96 pt-28">
          <h1 className="text-4xl font-Quicksand font-bold">Hi, I am John</h1>
          <h5 className="text-red-500 font-Quicksand">Some Dev, Freelancer, Rounder.</h5>
          <p className="font-normal font-Quicksand">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex sapiente in commodi fugit ea fuga explicabo voluptatem, rem quaerat provident earum ut saepe aspernatur voluptate esse quasi, natus unde culpa tempora. Consequuntur non eius modi nulla accusantium assumenda, accusamus sed vitae dicta.
          </p>
        </div>
      </div>

      {/* Technologies I use */}
      <div>
        <div className="flex justify-center items-center h-14">
          <h1 className="text-4xl font-extrabold text-center font-Quicksand">Technologies I use</h1>
        </div>
        <Technologies />
      </div>

      {/* Who Am I */}
      <div>
        <div className="flex justify-center items-center h-14 mt-8">
          <h1 className="text-4xl font-extrabold text-center font-Quicksand">Who am I</h1>
        </div>
        <Details />
      </div>
    </div>
  );
};

export default HomePage;
