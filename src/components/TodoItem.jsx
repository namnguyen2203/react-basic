// import React, { Component } from 'react'
// import classNames from 'classnames'

// import './TodoItem.css'
// import { ReactComponent as Uncompleted } from '../assets/icons/uncompleted.svg'
// import { ReactComponent as Completed } from '../assets/icons/completed.svg'

// class TodoItem extends Component {
//   render() {
//     const { todo, onClickItem, deleteItem } = this.props
//     return (
//       <li
//         className={classNames('list-group-item', {
//           'TodoItem-completed': todo.isCompleted
//         })}
//         style={{ color: `red` }}
//       >
//         {todo.isCompleted ? (
//           <Completed width={25} height={25} style={{ marginRight: `10px` }} />
//         ) : (
//           <Uncompleted width={25} height={25} style={{ marginRight: `10px` }} />
//         )}
//         <span onClick={onClickItem}>{todo.task} </span>
//         {todo.isCompleted && (
//           <button type='button' className='close' aria-label='Close' onClick={deleteItem}>
//             <span aria-hidden='true'>&times;</span>
//           </button>
//         )}
//       </li>
//     )
//   }
// }
// export default TodoItem

import React from "react";
import classNames from "classnames";
import { ReactComponent as Completed } from "../assets/icons/completed.svg";
import { ReactComponent as Uncompleted } from "../assets/icons/uncompleted.svg";
function TodoItem(props) {
  const { todo, onClickItem, deleteItem } = props;
  return (
    <li
      className={classNames("list-group-item", {
        "TodoItem-completed": todo.isCompleted
      })}
      style={{ color: `red` }}
    >
      {todo.isCompleted ? (
        <Completed width={25} height={25} style={{ marginRight: `10px` }} />
      ) : (
        <Uncompleted width={25} height={25} style={{ marginRight: `10px` }} />
      )}
      <span onClick={onClickItem}>{todo.task} </span>
      {todo.isCompleted && (
        <button
          type='button'
          className='close'
          aria-label='Close'
          onClick={deleteItem}
        >
          <span aria-hidden='true'>&times;</span>
        </button>
      )}
    </li>
  );
}
export default TodoItem;
