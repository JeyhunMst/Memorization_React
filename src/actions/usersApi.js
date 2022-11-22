// export const getUsers =(setUsers,setIsLoading)=>{
//     fetch("https://637a596610a6f23f7f923c1f.mockapi.io/people").then(
//       (response)=>response.json()).then(
//         (data)=>{setUsers(data);}
//       )
//       .catch(()=>{
//         console.log("Error");
//       })
//       .finally(()=>{
//         setIsLoading(false);
//       })
// }


export const getUsersByAge = (setUser, setIsLoading, age) => {
    fetch(`https://637a596610a6f23f7f923c1f.mockapi.io/people/${age}`)
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      })
      .catch(() => {
        console.log("error");
      })
      .finally(() => {
        setIsLoading(false);
      });
  };