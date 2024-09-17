import styles from './Card.module.css'
import ok from './assets/ok.png'
import x from './assets/x.png'

export default function Card({title, items, price, color}) {

    const colors = {
        'red': styles.red,
        'green': styles.green
    }
    const states = {
        'enabled': styles.enabled,
        'disabled': styles.disabled
    }
    const icons = {
        'enabled': ok,
        'disabled': x
    }

  return (
    <article className={styles.card}>
        <h3>{title}</h3>
        <ul>
            {items.map(item => {
                return (
                    <li className={states[item.state]}>
                        <img src={icons[item.state]}/>
                        {item.text}
                    </li>
                )
            })}
        </ul>
        <h5>${price}</h5>
        <h6>Per month</h6>
        <button className={colors[color]}>Try now</button>
    </article>
  )
}
