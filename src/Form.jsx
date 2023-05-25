import React, {useState} from "react";

const FormP = () => {
    const [fullName, setFname] = useState({
        fname : "",
        lname : "",
        email : "",
        phone : "",
        message :"",
    });

    const inputEvent = (event) =>{
        console.log(event.target.value);
        console.log(event.target.name);

        const {name, value} = event.target;

        setFname ((preVal) =>{
            console.log(preVal);

            return {
                ...preVal,
                [name] : value,
            };
        });
    };
 
    const onSubmitClick = (event) => {
        event.preventDefault();
        alert("form submitted");
    };

    return(
        <>
            <div classNameName="form_sec">
                <div classNameName="wrapper">
                <form onSubmit={onSubmitClick}>
                    <h1>Hello {fullName.fname} {fullName.lname}</h1>
                    <p>{fullName.phone}</p>
                    <p>{fullName.email}</p>
                    <p>{fullName.message}</p>
					<div className="filed_cont_sec">
					<div className="filed_row"><input type="text" name="fname" onChange={inputEvent} value={fullName.fname} className="filed_input" placeholder="" /><label className="filed_label" for="fname">First Name</label>
					</div>
					</div>
					<div className="filed_cont_sec">
					<div className="filed_row"><input type="text" name="lname" onChange={inputEvent} value={fullName.lname} className="filed_input" placeholder="" /><label className="filed_label" for="lname">Last Name</label>
					</div>
					</div>
                    <div className="filed_cont_sec">
					<div className="filed_row"><input type="number" name="phone" onChange={inputEvent} value={fullName.phone} className="filed_input" placeholder="" maxlength="10" /><label className="filed_label" for="phone">Phone</label>
					</div>
					</div>
                    <div className="filed_cont_sec">
					<div className="filed_row"><input type="email" name="email" onChange={inputEvent} value={fullName.email} className="filed_input" placeholder="" maxlength="20" /><label className="filed_label" for="email">Email</label>
					</div>
					</div>
				<div className="filed_cont_sec">
					<div className="filed_row"><input type="text" name="message" onChange={inputEvent} value={fullName.message} className="filed_input" placeholder="" maxlength="100" /><label className="filed_label" for="message">Message</label>
					</div>
					</div>
				
				<div className="filed_btn_row">
					<input type="submit" value="Submit Request" className="blue_btn" />
				</div>
                </form>
                </div>
            </div>
        </>
    );

}

export default FormP;