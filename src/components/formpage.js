import React from "react";
import './Style.css'
let Form=()=>{
     
    return (
        <>
        <div className="page">
            <div className="card card1">
                <h1>Assignment Task</h1>
                <hr/>
                <p>
                The name and photo associated with your Google Account will be recorded when you upload files and submit this form. Your email address is not part of your response.
                </p>
           <p id="indi">*Indicates required question</p>
           </div>
           <div className="card">
           <h3>MCQ<label className="star">*</label></h3>
                <form>
                    <input type="radio" id="html" name="fav_language" value="HTML"/>
                    <label for="html">Option 1</label><br/>
                    <input type="radio" id="css" name="fav_language" value="CSS"/>
                    <label for="css">Option 2</label><br/>
                    <input type="radio" id="javascript" name="fav_language" value="JavaScript"/>
                    <label for="javascript">Option 3</label>
                </form>
           </div>
           <div className="card">
           <h3>Checkbox<label className="star">*</label></h3>
                    <form>
                    <input className="BOX" type="checkbox" id="vehicle1" name="vehicle1" value="Bike"/>
                    <label >Option 1</label><br/>
                    <input className="BOX" type="checkbox" id="vehicle2" name="vehicle2" value="Car"/>
                    <label >Option 2</label><br/>
                    <input className="BOX" type="checkbox" id="vehicle3" name="vehicle3" value="Boat"/>
                    <label >Option 3</label>
                </form>
           </div>
           <div className="card">
            <h3>Short Answer<label className="star">*</label></h3>
                <form>
                     <input className="inp" type='text'></input>
                </form>
           </div>
           <div className="card">
            <h3>ParaGraph<label className="star">*</label></h3>
                <form>
                     <textarea className="inp" type='text'></textarea>
                </form>
           </div>
           <div className="card">
            <h3>Drop down<label className="star">*</label></h3>
                <form>
                    <select id="cars" name="cars">
                    <option id="choose">Choose</option>
                    <hr/>
                    <option value="1">Option 1</option>
                    <option value="2">Option 2</option>
                    <option value="3">Option 3</option>
                    </select>
                </form>
           </div>
           <div className="card">
            <h3>File Upload<label className="star">*</label></h3>
                <form>
                    <input type="file" name="file" id="file" class="inputfile" />
                    <label for="file" className="addf">Add file</label>
                 </form>
           </div>
           <div className="card">
           <h3>Linear Scale <label className="star">*</label></h3>
                <form>
                    <pre>      1  2  3  4  5</pre>
                   
                    <pre>Worst<input type="radio" id="html" name="fav_language" value="HTML"/> <input type="radio" id="css" name="fav_language" value="CSS"/> <input type="radio" id="javascript" name="fav_language" value="JavaScript"/><input type="radio" id="css" name="fav_language" value="CSS"/><input type="radio" id="javascript" name="fav_language" value="JavaScript"/> Best</pre>
                </form>
           </div>
           <div className="card">
           <h3>Multi choice Grid <label className="star">*</label></h3>
                <pre>           Column 1	Column 2	Column 3</pre>
                <form><pre className="row">Row1          <input type="radio" id="html" name="fav_language" value="HTML"/>     <input type="radio" id="css" name="fav_language" value="CSS"/>      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
                <form><pre className="row">Row1          <input type="radio" id="html" name="fav_language" value="HTML"/>     <input type="radio" id="css" name="fav_language" value="CSS"/>      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
                <form><pre className="row">Row1          <input type="radio" id="html" name="fav_language" value="HTML"/>     <input type="radio" id="css" name="fav_language" value="CSS"/>      <input type="radio" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
           </div>
           <div className="card">
           <h3>Tick box Grid <label className="star">*</label></h3>
                <pre>           Column 1	Column 2	Column 3</pre>
                <form><pre className="row">Row 1          <input className="BOX" type="checkbox" id="html" name="fav_language" value="HTML"/>     <input className="BOX" type="checkbox" id="css" name="fav_language" value="CSS"/>      <input className="BOX" type="checkbox" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
                <form><pre className="row">Row 1          <input className="BOX" type="checkbox" id="html" name="fav_language" value="HTML"/>     <input className="BOX" type="checkbox" id="css" name="fav_language" value="CSS"/>      <input className="BOX" type="checkbox" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
                <form><pre className="row">Row 1          <input className="BOX" type="checkbox" id="html" name="fav_language" value="HTML"/>     <input className="BOX" type="checkbox" id="css" name="fav_language" value="CSS"/>      <input className="BOX" type="checkbox" id="javascript" name="fav_language" value="JavaScript"/></pre></form>
           </div>
           <form>
           <button type="submit">Submit</button>
           <button className="clear" type="submit">Clear</button>
           </form>
         </div>
        </>

    )};
export default Form;