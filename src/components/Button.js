// export function Button() {
//   return (
//     <buton type="button">Button</buton>
//   )
// }

import styles from './button.module.css'

// Stateless component
export const Button = ({ name, component, onClick }) => {
  // console.log('props: ', props)
  return (
    <>
      <button type="button" onClick={onClick}>
        <span className={styles.text}>{name}</span>
      </button>
      <br />
      {/* This is component: {component} */}
    </>
  )
}