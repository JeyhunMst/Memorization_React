import React from 'react'
import { getUsersByAge } from '../../actions/usersApi';


function Users() {
   
   const[users,setUsers]=React.useState([]);
   const[isLoading,setIsLoading]=React.useState(false);
   const [age,setAge]=React.useState();
   const[clicked,setClicked]=React.useState(false);
   const [user, setUser] = React.useState();

   const getUsers =React.useCallback((setUsers,setIsLoading)=>{
    fetch("https://637a596610a6f23f7f923c1f.mockapi.io/people").then(
      (response)=>response.json()).then(
        (data)=>{setUsers(data);}
      )
      .catch(()=>{
        console.log("Error");
      })
      .finally(()=>{
        setIsLoading(false);
      })
},[])
  

  React.useEffect(()=>{
    setIsLoading(true);
    getUsers(setUsers,setIsLoading);
  },[])
  const handleClick = React.useCallback(() => {
    setClicked(true);
  }, []);



  React.useEffect(() => {
    if (age) {
      getUsersByAge(setUser, setIsLoading, age);
    }
  }, [age]);


  const handleFilteredData = React.useMemo(() => {
    let aged = [];
    if (users) {
      aged = users;
    }
    if (clicked) {
      aged = aged.filter((item) => Number(item.age) > 40);
    }
    return aged;
  }, [users, clicked]);

  return (
    <div>
      <button onClick={handleClick}>Get data</button>
      {age && (
        <h2>
          {user?.name} - {user?.age}
        </h2>
      )}
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        handleFilteredData.map(({ name, id,age }) => (
          <h1 key={id} onClick={() => setAge(age)}>
            {id} - {name}-{age}
          </h1>
        ))
      )}
    </div>
  )
}

export default Users