import React from "react";
import { Link } from 'react-router-dom';
import "../css/food.css"
import '../css/Navbar.css';

function Food(){
    return(
        <>      
        <ul className="ul">
                <li><Link to="/Welcomepage">Home</Link></li>
                <li><Link to="/Signin">Signin</Link></li>
                <li><Link to="/Signup">Signup</Link></li>
                <li><Link to="/Body">Body</Link></li>
                <li><Link to="/Activity">Activity</Link></li>
                <li><Link to="/Sleep">Sleep</Link></li>
                <li><Link to="/Food">Food</Link></li>
                <li><Link to="/Shop">Shop</Link></li>
            </ul>
            <div className="foodtop">Food</div>
            
            <div className="rect">
                
        
                <h2 className="Diet">Diet Plan:</h2><br />
            
                <table className="table">
                    <tr>
                    <th>Time of the Day</th>
                    <th>Monday</th>
                    <th>Tuesday</th>
                    <th>Wednesday</th>
                    <th>Thursday</th>
                    <th>Friday</th>
                    <th>Saturday</th>
                    <th>Sunday</th>
                    </tr>
                    <tr>
                    <td><h3>Breakfast</h3></td>
                    <td>Egg white/Omelete/Spinach</td>
                    <td>Greek Yoghurt with Fruit/Chia Seeds</td>
                    <td>Oatmeal with 2 Egg Whites</td>
                    <td>Wheat Grain Toast/Egg Whites</td>
                    <td>Protein Shake/Oats</td>
                    <td>Scrambled Eggs/Protein Bars</td>
                    <td>Oats/Cereal</td>
                            
                    </tr>
                    <tr>
                    <td><h3>Lunch</h3></td>
                    <td>Sliced Turkey/Chicken with Hummus</td>
                    <td>Hard Boilded Eggs with Vegetables</td>
                    <td>Avocado Egg Salad</td>
                    <td>Spinach Wrap</td>  
                    <td>Almond Butter Sandwich</td>  
                    <td>Turkey/Tuna Club on Sliced Bread</td>
                    <td>2 Chappatis/Boiled Vegetables</td>
                    
                </tr>
                    <tr>
                    <td><h3>Evening Snacks</h3></td>
                    <td>Fruit Bowl</td>
                    <td>Green Tea</td>  
                    <td>Zucchini Noodles</td>  
                    <td>Vegetable/Kale Salad</td>  
                    <td>Poha</td>  
                    <td>Carrot Sticks</td>  
                    <td>Boiled Egg Slices</td>
                    </tr>
                    <tr>
                    <td><h3>Dinner</h3></td>
                    <td>Turkey Chilli with Gluten Free Corn Bread</td>
                    <td>Spinach Salad/Tuna/Chicken</td>  
                    <td>Grilled Fish/Vegetables</td>  
                    <td>Meatloaf/Sweet Potatoes</td>  
                    <td>Spagetti/Broccoli and Turkey Meatballs</td>  
                    <td>Lettuce Wraps with Chicken</td>  
                    <td>2 Chappatis with Vegetables/Paneer</td>
                    </tr>
                
                </table>
                <br />
                <h2 className="Diet">Daily Calories based on Age, Gender and Activity Level</h2><br />
            
                <table className="table">
                    <tr>
                    <th>Age</th>
                    <th>Gender</th>
                    <th>Sedentary</th>
                    <th>Moderately Active</th>
                    <th>Active</th>
                    
                    </tr>
                    <tr>
                    <td><h3>2-3</h3></td>
                    <td>Male/Female</td>
                    <td>1000</td>
                    <td>1000</td>
                    <td>1000</td>
                    
                            
                    </tr>
                    <tr>
                    <td><h3>4-8</h3></td>
                    <td>Male/Female</td>
                    <td>1200-1400</td>
                    <td>1400-1600</td>
                    <td>1600-2000</td>
                    
                </tr>
                    <tr>
                    <td><h3>9-13</h3></td>
                    <td>Male/Female</td>
                    <td>1600-2000</td>
                    <td>1800-2200</td>
                    <td>2000-2600</td>
                    </tr>
                    <tr>
                    <td><h3>14-18</h3></td>
                    <td>Male/Female</td>
                    <td>2000-2400</td>
                    <td>2400-2800</td>
                    <td>2800-3200</td>
                    </tr>
                    <tr>
                        <td><h3>19-30</h3></td>
                        <td>Male/Female</td>
                        <td>2400-2600</td>
                        <td>2600-2800</td>
                        <td>3000</td> 
                    </tr>
                    <tr>
                        <td><h3>31-50</h3></td>
                        <td>Male/Female</td>
                        <td>2200-2400</td>
                        <td>2400-2600</td>
                        <td>2800-3000</td>  
                    </tr>
                    <tr>
                        <td><h3>51{'>'}=</h3></td>
                        <td>Male/Female</td>
                        <td>2000-2200</td>
                        <td>2200-2400</td>
                        <td>2400-2800</td>
                    </tr>
                
                </table>
                </div>
            </>
    )
}
export default Food;