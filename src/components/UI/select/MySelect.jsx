const MySelect = ({optionsList, defaultValue, value, sortPostList}) => {

  return (
    <select	
			value={value}
			onChange={e => sortPostList(e.target.value)}
			style={{marginBottom: 15}}
		>
      <option disabled value="">{defaultValue}</option>
      {optionsList.map(option =>                           
				<option key={option.value} value={option.value}>    
					{option.name}
				</option>
      )}
    </select>
  )
};

export default MySelect;