function MyForm(){
    const getNameValue=(e)=>{
        console.log(e.target.value);
    }


    return(
        <div>
            <div>
                <p><label>Name</label></p>
                <p><input onChange={getNameValue} type="text" placeholder="Enter your name"/></p>
            </div>
            <div>
                <p><label>Email</label></p>
                <p><input onBlur={(e)=>{
                    getNameValue(e);
                }} type="email" placeholder="Enter your email"/></p>
            </div>
        </div>
    )
}
export default MyForm;