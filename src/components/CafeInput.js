import React from 'react';
import '../styles/cafeInput.css';

export default class CafeInput extends React.Component {
  render(){
    return (
      <div className="cafe-form">
      </div>
    )
  }
}

// <div className="cafe-form">
//   <p> This is the input component</p>
//   <form onSubmit={this.handleSubmit}>
//
//     <div>
//       <h4>Coffee Quality</h4>
//
//       <label htmlFor="decent-coffee">Decent Coffee</label><br/>
//
//       <input type="radio" name="coffee" value="Good Coffee" ref="goodCoffee" />
//       <label htmlFor="good-coffee">Good Coffee</label><br/>
//
//       <input type="radio" name="coffee" value="Exceptional Coffee" id="exceptional-coffee" />
//       <label htmlFor="exceptional-coffee">Exceptional Coffee</label><br/>
//     </div>
//
//     <div>
//       <h4>Tea Quality</h4>
//
//       <input type="radio" name="tea" value="decent-tea" id="decent-tea" />
//       <label htmlFor="decent-tea">Decent Tea</label><br/>
//
//       <input type="radio" name="tea" value="good-tea" id="good-tea" />
//       <label htmlFor="good-tea">Good Tea</label><br/>
//
//       <input type="radio" name="tea" value="exceptional-tea" id="exceptional-tea" />
//       <label htmlFor="exceptional-tea">Exceptional Tea</label><br/>
//     </div>
//
//     <div>
//       <h4>The Vibe of the place</h4>
//
//       <input type="checkbox" id="networking" />
//       <label htmlFor="networking">Networking</label>
//
//       <input type="checkbox" id="working" />
//       <label htmlFor="working">Working</label>
//
//       <input type="checkbox" id="families" />
//       <label htmlFor="families">Families</label>
//     </div>
//
//     <div>
//       <h4>Available Food</h4>
//
//       <input type="checkbox" id="pastries" />
//       <label htmlFor="pastries">Pastries</label>
//
//       <input type="checkbox" id="gluten-free" />
//       <label htmlFor="gluten-free">Gluten Free</label>
//
//       <input type="checkbox" id="vegan" />
//       <label htmlFor="vegan">Vegan</label>
//
//       <input type="checkbox" id="light-meal" />
//       <label htmlFor="light-meal">Light Meal</label>
//
//       <input type="checkbox" id="full-meal" />
//       <label htmlFor="full-meal">Full meal</label>
//     </div>
//
//     <div>
//       <h4>Amenities</h4>
//
//       <input type="checkbox" id="gender-neutral" />
//       <label htmlFor="gender-neutral">Gender Neutral Bathrooms</label>
//       <br />
//
//       <h5>Outlets</h5>
//
//       <input type="radio" name="outlets" value="few-outlets" id="few-outlets" />
//       <label htmlFor="few-outelts">Few Outlets</label><br/>
//
//       <input type="radio" name="outlets" value="some-outlets" id="some-outlets" />
//       <label htmlFor="some-outelts">Some Outlets</label><br/>
//
//       <input type="radio" name="outlets" value="many-outlets" id="many-outlets" />
//       <label htmlFor="many-outelts">Many Outlets</label><br/>
//
//     </div>
//
//     <br />
//     <input type="submit" />
//   </form>
// </div>
