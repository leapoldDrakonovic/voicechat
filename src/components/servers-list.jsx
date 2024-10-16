const ServersList = () => {

    return (
      <>
      <ul className="flex flex-row gap-5 h-full w-full flex-wrap justify-around">
        {Array.from({ length: 20 }).map((el) => {
          return (
            <li className="flex flex-col justify-center items-center">
              <div className="w-[50px] h-[50px] rounded-full border-2 bg-slate-500"></div>
              <span className="">Server Name</span>
            </li>
          );
        })}
      </ul>
      </>
    );
  };

export default ServersList