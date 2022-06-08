
const Tasks = ({tasks}) => {
    
  return (
      
    <>
   {tasks.map((task) =>(
   <h3 Key={task.id} >{task.text}</h3>) )}
    </>
  )
}

export default Tasks