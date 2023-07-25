import styles from '../styles/Home.module.css'
import Item from './item'


const items = [
  'USD',
  'EUR',
  'GBP',
  'BTC',
  'JPY',
  'CHF',
  'CAD',
  'AUD',
  'CNY',
  'NZD',
]
export default function Home() {
  return (
    <div className={styles.container}>
      {
        items.map(item=>{
          return <Item key={item} item={item} />
        })
      }
    </div>
  )
}
