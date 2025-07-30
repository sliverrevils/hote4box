import styles from "../formAuth.module.scss";

export default function RecoveryPage() {
    return (
        <form className={styles.formAuth}>
            <div>Восстановить пароль</div>
            <input type="email" placeholder="E-mail" />
            <button>Восстановить</button>
        </form>
    );
}
