import styles from './Section.module.css'

export default function Section({title, tagText, tagColor, children}) {

  const colors = {
      'red': styles.red,
      'green': styles.green
  }

  return (
    <section className={styles.section}>
        <h2>{title}</h2>
        <p className={colors[tagColor]}>{tagText}</p>
        <div>
            {children}
        </div>
    </section>
  )
}
