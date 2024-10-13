export const User = () => {
    return (
        <>
        </>
    )
}


//Main Page user table 
export const UserElement = () => {
    return (
        <li>
        <div className="flex flex-row gap-10 justify-start items-center">
              <div className="w-[50px] h-[50px] border rounded-full"></div>
              <div>NickName</div>
        </div>
        </li>

    )
}


// Main page server list of users
export const ServerUsersList = () => {
    return (
        <ul className="flex flex-col gap-4">
          {/* user element */}
          
            {Array.from({length: 30}).map(el => {
                return (
                    <UserElement key={el}/>
                )
            })}
        </ul>
    )
}