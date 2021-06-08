import styles from './Home.module.css';
import Card from '../../components/card/Card';

const Home = () => {
    return (
        <div className={styles.background}>
            <div className="container col-6">
                <Card />
            </div>
        </div>
    )
}

export default Home