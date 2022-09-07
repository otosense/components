
import React, { useEffect } from "react"
import CreatableSelect from 'react-select/creatable';


const formatString = (str: string, args: object) => {
  if (args) {
    for (var key in args) {
      str = str.replace(new RegExp("\\{" + key + "\\}", "gi"), args[key]);
    }
  }

  return str;
}


const MultiSelect = (props) => {
  const { options, item_template: itemTemplate } = props.args;

  const formatOptionLabel =
    itemTemplate ?
    (option) => (
      <div dangerouslySetInnerHTML={{__html: formatString(itemTemplate, option)}} />
    ) : null;

  return (
    <CreatableSelect
      isMulti
      options={options}
      formatOptionLabel={formatOptionLabel}
    />
  )
}

export default MultiSelect
