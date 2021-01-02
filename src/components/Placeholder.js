import React from 'react';

export default function Placeholder (props) {
    let title = "Placeholder"
    return (
        <div className={props.classes+" bg-gray-300 border border-gray-2020 dark:border-teal-2020 text-center flex justify-center items-center"}>
          <p>{ title }</p>
        </div>
    )
}
