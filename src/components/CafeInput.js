import React from 'react';
import '../styles/cafeInput.css';

export default class CafeInput extends React.Component {
  render(){
    return (
      <div>
        <p> This is the input component</p>
        <form>
          <h4>The Vibe of the place</h4>
          <label htmlFor="networking">Networking</label><input type="checkbox" id="networking" />
          <label htmlFor="working">Working</label><input type="checkbox" id="working" />
          <label htmlFor="families">Families</label><input type="checkbox" id="families" />

          <h4>Food availability</h4>
          <label htmlFor="pastries">Pastries</label><input type="checkbox" id="pastries" />
          <label htmlFor="gluten-free">Gluten Free</label><input type="checkbox" id="gluten-free" />
          <label htmlFor="vegan">Vegan</label><input type="checkbox" id="vegan" />
          <label htmlFor="light-meal">Light Meal</label><input type="checkbox" id="light-meal" />
          <label htmlFor="full-meal">Full meal</label><input type="checkbox" id="full-meal" />

          <h4>Amenities</h4>
          <label htmlFor="families">Gender Neutral Bathrooms</label><input type="checkbox" id="families" />
          <br />
          <label>Outlet situation</label>
          <select>
          <option></option>
          <option value="few_outlets">Few Outlets</option>
          <option value="some_outlets">Some Outlets</option>
          <option value="many_outlets">Many Outlets</option>
          </select>


          <h4>Coffee Quality</h4>
          <select>
            <option></option>
            <option value="decent">Decent</option>
            <option value="good">Good</option>
            <option value="exceptional">Exceptional</option>
          </select>

          <h4>Tea Quality</h4>
          <select>
            <option></option>
            <option value="good">Good</option>
            <option value="exceptional">Exceptional</option>
          </select>
          <br />
          <input type="submit" />
        </form>
      </div>
    )
  }
}
