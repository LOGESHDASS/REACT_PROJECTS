import React,{useState} from 'react'
function Log(){
    const[email,setemail]=useState("")
    const[pass,setpass]=useState("") 
  function SubmitHandler(){
    if( email==="LOGESH@gmail.com" & pass==="123")
    {
        alert("SUCESS")

    }
    else{
        alert("FAILED")
    }
}
return(
    <form onSubmit={SubmitHandler}>
        <div>
            <label >EMAIL</label>
            <input type="text" value={email} onChange={(e)=>setemail(e.target.value)}></input>
        </div>
        <div>   <label>PASSWORD</label>
        <input type="password" value={pass} onChange={(e)=>setpass(e.target.value)}></input>
        </div>
        <div>   
        <button>SUBMIT</button>
        </div>

    </form>
)
}
export default Log