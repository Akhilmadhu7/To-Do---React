// import logo from './logo.svg';
import './App.css';
import {useState} from 'react'

function App() {

  const [toDos,setToDos] = useState([])
    const [toDo,setToDo] = useState('')
    // const [value,setValue] = useState(true)
    const handleDelete=(id)=>{
        console.log('iddd',id,id.text,' ',id.status);
        // setToDos(toDos.filter(value=>{
        //     if (id!==value.id) {

                
        //     }
        // }))
        setToDos(toDos => toDos.filter((value) => value.id !== id));
        // console.log();
       
    }
    let a = ()=>{
      setToDos([...toDos,{id:Date.now() ,text:toDo,status:false}])
      setToDo('')
     } 

  return (
    <div className="app">
       <div className="todos">
      <h1 className='active'> Active Tasks <hr></hr></h1>
        {toDos.map((value)=>{
          
         return (
        <div className="todo">
          <div className="left">
           
           

            <input onChange={(e)=>{
                
                setToDos(toDos.filter(value2=>{
                  {console.log('sadfasdfas',value2);}
                  
                   if (value2.id===value.id) {
                        value2.status=e.target.checked
                        console.log(value.status, value.text,'valuessssss');
                    } return value2 
                    
                } 
                    ))
                    console.log(value.status, value.text,'valuessssss');
            }} 
             value={ value.status } type="checkbox" name="" id="" />
            <p>{value.text}</p>
          </div>

          

          

          <div className="right">
            <i onClick={()=>handleDelete(value.id)} className="fas fa-times"></i>
            {/* {console.log('askdfklas',value.text,'    ',value.id)}
            {console.log(value.status)} */}
          </div>
        </div>
        )   
        })}
      </div>
     <div>
     <div className="mainHeading">
        <h1>ToDo List</h1>
      </div>
      <div className="subHeading">
        <br />
        <h2 style={{textAlign:'center'}}>Add Something</h2>
      </div>
      <div className="input">
        <input value={toDo} onChange={(e)=>setToDo(e.target.value)} type="text" placeholder="🖊️ Add item..." />


        

        <i onClick={
           toDo ? ()=>a(): null
        }  className="fas fa-plus"></i>
      </div>
     </div>
     

       <div >
        
         <h1 className='active'> Completed Tasks <hr></hr></h1>
        {toDos.map((obj)=>{
          if(obj.status){
            return( <div>
               <div className='input'>
            <input type="text" value={obj.text} />
            <i onClick={()=>handleDelete(obj.id)} className="fas fa-times"></i>
            </div>
            </div>
            )
          } return null;
        })}
      </div> 
    </div>
  );
}

export default App;
