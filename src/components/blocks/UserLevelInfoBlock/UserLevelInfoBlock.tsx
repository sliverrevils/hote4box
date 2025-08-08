"use clent";

import Image from "next/image";
import styles from "./UserLevelInfoBlock.module.scss";

export default function UserLevelInfoBlock() {
    return (
        <div className={styles.UserLevelInfoBlockWrap}>
            <div className={styles.infoBlock}>
                <div className={styles.linePath}></div>
                <div className={styles.lineLevel}>
                    <Image
                        src={"/common/point.svg"}
                        width={24}
                        height={24}
                        alt="point"
                        className={styles.pointIco}
                    />
                    <div className={styles.infoLevel}>
                        <h4>Серебряный</h4>
                        <h5 className={styles.aboutLevel}>
                            На Серебряном уровне вы получаете скидку 5% на доставку при оформлении
                            более 5 заказов в месяц. Экономьте на покупках и наслаждайтесь удобным
                            сервисом!
                        </h5>
                    </div>
                </div>
                <div className={styles.lineLevel}>
                    <Image
                        src={"/common/point.svg"}
                        width={24}
                        height={24}
                        alt="point"
                        className={styles.pointIco}
                    />
                    <div className={styles.infoLevel}>
                        <h4>Серебряный</h4>
                        <h5 className={styles.aboutLevel}>
                            На Серебряном уровне вы получаете скидку 5% на доставку при оформлении
                            более 5 заказов в месяц. Экономьте на покупках и наслаждайтесь удобным
                            сервисом!
                        </h5>
                    </div>
                </div>
                <div className={styles.lineLevel}>
                    <Image
                        src={"/common/point.svg"}
                        width={24}
                        height={24}
                        alt="point"
                        className={styles.pointIco}
                    />
                    <div className={styles.infoLevel}>
                        <h4>Серебряный</h4>
                        <h5 className={styles.aboutLevel}>
                            На Серебряном уровне вы получаете скидку 5% на доставку при оформлении
                            более 5 заказов в месяц. Экономьте на покупках и наслаждайтесь удобным
                            сервисом!
                        </h5>
                    </div>
                </div>
            </div>
            <Image src={"/temp/userLevels.png"} width={645} height={759} alt="userLevels" />
        </div>
    );
}
