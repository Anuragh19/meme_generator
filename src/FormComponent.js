import React from 'react'

function FormComponent(props)
{
    console.log(props)
    return(
        <div>
            <form>
                <label>
                    <input type="text" name="firstname" placeholder="First Name" value={props.content.firstname} onChange={props.handleChange}/>
                </label>
                <br />
                <label>
                    <input type="text" name="lastname" placeholder="Last Name" value={props.content.lastname} onChange={props.handleChange}/>
                </label>
                <br />
                <label>
                    <input type="number" name="age" placeholder="Age" value={props.content.age} onChange={props.handleChange}/>
                </label>
                <br />
                <label>
                    <input type="radio" name="gender" value="male" checked={props.content.gender==="male"} onChange={props.handleChange}/>Male
                    <br />
                    <input type="radio" name="gender" value="female" checked={props.content.gender==="female"} onChange={props.handleChange}/>Female
                </label>
                <br />
                <label>Travel to</label>
                <select name="destination"  value={props.content.destination} onChange={props.handleChange}>
                    <option value="">Select</option>
                    <option value="China">China</option>
                    <option value="Japan">Japan</option>
                    <option value="America">America</option>
                </select>
                <br />
                <label>Choose your menu</label>
                <input name="Chicken" type="checkbox" value="Chicken" checked={props.content.Chicken} onChange={props.handleChange}/>Chicken
                <input name="Mutton" type="checkbox" value="Mutton" checked={props.content.Mutton} onChange={props.handleChange}/>Mutton
                <input name="Fish" type="checkbox" value="Fish" checked={props.content.Fish} onChange={props.handleChange}/>Fish
                <br />
                <button onClick={props.display}>Submit</button>
            </form>
            <div>
                {props.content.firstname}
                <br />
                {props.content.lastname}
                <br />
                {props.content.age}
                <br />
                {props.content.gender}
                <br />
                {props.content.destination}
                <br />
                <p>
                Chicken :{props.content.Chicken?"yes":"no"}
                <br />
                Mutton : {props.content.Mutton?"yes":"no"}
                <br />
                Fish : {props.content.Fish?"yes":"no"}
                <br />
                </p>
            </div>
        </div>
    )
}

export default FormComponent