import styles from './Home.module.css';
import Card from '../../components/card/Card';

const Home = () => {
    return (
        <div className={styles.background}>
            <div className="container">
                <Card />
            </div>
        </div>
    )
}

export default Home