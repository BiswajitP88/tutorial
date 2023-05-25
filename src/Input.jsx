import React from "react";

const formInput = () =>{
    return(
        <>
            <div classNameName="form_sec">
                <div classNameName="wrapper">
                <form name="frm_support" onSubmit="return false">
					<div className="filed_cont_sec">
					<div className="filed_row"><input type="text" name="fname" onChange={inputEvent} value={fullName.fname} className="filed_input" placeholder="" /><label className="filed_label" for="fname">First Name</label>
					</div>
					</div>
					<div className="filed_cont_sec">
					<div className="filed_row"><input type="text" name="lname" onChange={inputEvent} value={fullName.lname} className="filed_input" placeholder="" /><label className="filed_label" for="lname">Last Name</label>
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
					<input type="submit" onSubmit={onSubmitClick} value="Submit Request" className="blue_btn" />
				</div>
                </form>
                </div>
            </div>
        </>
    );
}

export default formInput;