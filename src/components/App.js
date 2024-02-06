import "../styles/App.css";
import React, { useState } from 'react';

const App = () => {

const [selectedOption, setSelectedOption] = useState(null);

const handleCheckboxChange = (value) => {

setSelectedOption(value === selectedOption ? null : value);

};

return (

<div>

<label>

<input

type="checkbox"

value="option1"

checked={selectedOption === 'option1'}

onChange={() => handleCheckboxChange('option1')}

/>

Option 1

</label>

<label>

<input

type="checkbox"

value="option2"

checked={selectedOption === 'option2'}

onChange={() => handleCheckboxChange('option2')}

/>

Option 2

</label>

<label>

<input

type="checkbox"

value="option3"

checked={selectedOption === 'option3'}

onChange={() => handleCheckboxChange('option3')}

/>

Option 3

</label>

</div>

);

};

export default App;