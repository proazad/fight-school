const Blog = () => {
  return (
    <div className="bg-success">
      <div className="grid grid-cols-4">
        <div className="flex flex-col justify-center items-center text-white p-10">
          <h4 className="text-3xl uppercase">From</h4>
          <h2 className="text-7xl font-bold uppercase">Blog</h2>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-base-100 p-5 gap-4">
          <h3 className="text-xl font-semibold">FIVE TOP STREGNTH TIPS </h3>
          <p className="text-base font-medium"> FITNESS / <span className="text-success">3 COMMENTS</span></p>
          <p className="text-sm text-gray-500">
          Fitness is the key to a healthy lifestyle. It encompasses physical activity, balanced nutrition, and mental well-being, enhancing strength, endurance, and overall vitality for a fulfilling life.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-base-100 p-5 gap-4">
          <h3 className="text-xl font-semibold">CHOOSING THE RIGHT CLASS </h3>
          <p className="text-base font-medium"> Self Defence / <span className="text-success">3 COMMENTS</span></p>
          <p className="text-sm text-gray-500">
          Self-defense empowers individuals to protect themselves from potential threats. It involves learning techniques to evade harm, build confidence, and ensure personal safety in various situations.
          </p>
        </div>
        <div className="flex flex-col justify-center items-center text-center bg-base-100 p-10 gap-4">
          <h3 className="text-xl font-semibold">BOXING FOR THE ELITE</h3>
          <p className="text-base font-medium"> Boxing / <span className="text-success">23 COMMENTS</span></p>
          <p className="text-sm text-gray-500">
          Boxing is a dynamic sport that combines physical prowess, strategic skill, and mental focus. It fosters discipline, strength, agility, and confidence, shaping individuals both physically and mentally
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
