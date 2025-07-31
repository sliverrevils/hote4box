import Image from "next/image";
import styles from "./page.module.scss";
import Box from "@/components/common/Box/Box";
import Link from "next/link";

export default function Home() {
    return (
        <main className={styles.main}>
            <div className={styles.topContetnt}>
                <Box background="var(--f_gray-50)" borderRadius="var(--radius_box_big-48x32x24x16)">
                    <div className={styles.topBlock}>
                        <div className={styles.firstLine}>
                            <div className={styles.infoBlock}>
                                <div className={styles.firstTextBlock}>
                                    <h1>Лучший способ получить</h1>
                                    <div>
                                        <h1>международную</h1>
                                        <Image
                                            src={"/main/svg/web.svg"}
                                            width={50}
                                            height={50}
                                            alt="web"
                                        />
                                    </div>
                                    <div>
                                        <h1>посылку</h1>
                                        <Image
                                            src={"/temp/people.png"}
                                            width={104}
                                            height={56}
                                            alt="subs"
                                        />
                                    </div>
                                </div>

                                <div className={styles.secondTextBlock}>
                                    Покупайте в интернет-магазинах США — мы
                                    <br /> доставим ваши заказы
                                </div>
                            </div>
                            <Image
                                src={"/main/box.png"}
                                width={672}
                                height={452}
                                alt="box"
                                priority
                            />
                        </div>
                        <div className={styles.secondLine}>
                            <Box className={styles.box1}>
                                <div>Рассчитать стоимость доставки</div>
                                <div>
                                    <input placeholder="Из Россия" />
                                    <input placeholder="В Монголия" />
                                </div>
                                <div>Получить расчёт</div>
                            </Box>
                            <Box>
                                <div>Отследить посылку</div>
                            </Box>
                        </div>
                    </div>
                </Box>
            </div>

            <div className={styles.otherContent}>
                <div className={styles.howWorkBlock}>
                    <div className={styles.firstBlock}>
                        <h2>Как это работает?</h2>
                        <div>
                            Получив ваш заказ, мы убедимся в его целостности и<br /> пришлем вам
                            счет за доставку.
                        </div>
                    </div>
                    <div className={styles.stepsListBlock}>
                        <div className={styles.stepItem}>
                            <div>
                                <Image src={"/temp/cur.png"} width={90} height={90} alt="step1" />
                            </div>
                            <div>
                                <div>Шаг 1</div>
                                <h4>Выбор товаров</h4>
                                <div>
                                    Товары в любом интернет- магазине и отправьте их в одно из наших
                                    отделений.
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div>
                                <Image src={"/temp/step2.png"} width={90} height={90} alt="step1" />
                            </div>
                            <div>
                                <div>Шаг 2</div>
                                <h4>Поступление товара</h4>
                                <div>
                                    После получения товара мы проверим его содержимое и вышлем вам
                                    счет на доставку.
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div>
                                <Image src={"/temp/step3.png"} width={90} height={90} alt="step1" />
                            </div>
                            <div>
                                <div>Шаг 3</div>
                                <h4>Оплата доставки</h4>
                                <div>
                                    Оплатите счет за доставку в вашем личном кабинете Hotel4box, и
                                    мы отправим посылку
                                </div>
                            </div>
                        </div>
                        <div className={styles.stepItem}>
                            <div>
                                <Image src={"/temp/step4.png"} width={90} height={90} alt="step1" />
                            </div>
                            <div>
                                <div>Шаг 4</div>
                                <h4>Получение посылки</h4>
                                <div>
                                    Мы доставим посылку до двери клиента или в наш пункт выдачи.
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.otherContent}>
                <div className={styles.advantagesBlock}>
                    <div className={styles.title}>Наши преимущества</div>
                    <div className={styles.cardsBlock1}>
                        <div className={styles.leftBlock}>
                            <div className={`${styles.cardItem} ${styles.first}`}>
                                <div>
                                    <div>Надежность</div>
                                    <div>
                                        Более 130 тыс. посылок успешно доставлены нашим клиентам.
                                    </div>
                                </div>
                                <Image src={"/temp/130k.png"} width={354} height={354} alt="130k" />
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={`${styles.cardItem} ${styles.first}`}>
                                <div>
                                    <Image
                                        src={"/temp/profs.png"}
                                        width={224}
                                        height={80}
                                        alt="profs"
                                    />
                                    <div>10 000+</div>
                                </div>
                                <div>
                                    <div>Профессионализм</div>
                                    <div>
                                        Hotel4Box работает уже более 6 лет
                                        <br /> и имеет более 10 тыс. постоянных клиентов.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.cardsBlock2}>
                        <div className={styles.leftBlock}>
                            <div className={`${styles.cardItem} ${styles.first}`}>
                                <div>
                                    <div>Комбинация заказов</div>
                                    <div>
                                        Вы можете легко объединить несколько заказов в один и
                                        сэкономить
                                        <br /> на доставке. Вы также можете разделить заказ на
                                        несколько посылок.
                                    </div>
                                </div>
                                <Image
                                    src={"/temp/boxhands.png"}
                                    width={852}
                                    height={644}
                                    alt="130k"
                                />
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={`${styles.cardItem} ${styles.first}`}>
                                <div>
                                    <div>Скорость</div>
                                    <div>
                                        Доставка в Монголию со склада
                                        <br /> в США составляет 5 рабочих дней.
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={"/temp/path.png"}
                                        width={756}
                                        height={132}
                                        alt="profs"
                                    />
                                </div>
                            </div>
                            <div className={`${styles.cardItem} ${styles.second}`}>
                                <div>
                                    <div>Комфорт</div>
                                    <div>
                                        Мы позаботимся об упаковке,
                                        <br /> таможенном оформлении и доставке.
                                    </div>
                                </div>
                                <div>
                                    <Image
                                        src={"/temp/fotos.png"}
                                        width={589}
                                        height={366}
                                        alt="profs"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className={styles.otherContent}>
                <div className={styles.howWorkBlock}>
                    <div className={styles.firstBlock}>
                        <h1>Самые популярные магазины</h1>
                        <div>
                            Покупайте в этих и любых других магазинах США – мы <br /> позаботимся о
                            доставке
                        </div>
                    </div>

                    <div className={styles.categoriesBlock}>
                        <div>
                            <Image
                                src={"/common/electron_blue.svg"}
                                width={32}
                                height={32}
                                alt="el"
                            />
                            <h5>Электроника </h5>
                        </div>
                        <div>
                            <Image src={"/common/high-heel.png"} width={32} height={32} alt="el" />
                            <h5>Одежда и обувь </h5>
                        </div>
                        <div>
                            <Image
                                src={"/common/baby-carriage.svg"}
                                width={32}
                                height={32}
                                alt="el"
                            />
                            <h5>Детские товары </h5>
                        </div>
                        <div>
                            <Image src={"/common/soccerball.svg"} width={32} height={32} alt="el" />
                            <h5>Спорт и активный отдых </h5>
                        </div>
                        <div>
                            <Image src={"/common/pentagra.svg"} width={32} height={32} alt="el" />
                            <h5>И многое другое </h5>
                        </div>
                    </div>
                    <div className={styles.shopsBlock}>
                        <div>
                            <Image
                                src={"/shops/amazon.png"}
                                width={354}
                                height={173}
                                alt="amazon"
                            />
                        </div>
                        <div>
                            <Image src={"/shops/apple.png"} width={354} height={173} alt="apple" />
                        </div>
                        <div>
                            <Image src={"/shops/bb.png"} width={354} height={173} alt="bb" />
                        </div>
                        <div>
                            <Image src={"/shops/mc.png"} width={354} height={173} alt="mc" />
                        </div>
                        <div>
                            <Image src={"/shops/eb.png"} width={354} height={173} alt="apple" />
                        </div>
                        <div>
                            <Image src={"/shops/cw.png"} width={354} height={173} alt="cw" />
                        </div>
                        <div>
                            <Image
                                src={"/shops/target.png"}
                                width={354}
                                height={173}
                                alt="target"
                            />
                        </div>
                        <div>
                            <Image src={"/shops/sams.png"} width={354} height={173} alt="sams" />
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.otherContent}>
                <div className={styles.commsPock}>
                    <h2 className={styles.title}>Отзывы</h2>
                    <div className={styles.commsList}>
                        <div className={styles.commItem}>
                            <div className={styles.comtopBlock}>
                                <div className={styles.starsBlock}>
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                </div>
                                <Image
                                    src={"/temp/comm1.png"}
                                    width={280}
                                    height={136}
                                    alt="comm"
                                />
                            </div>
                            <div className={styles.combottomBlock}>
                                <h4>Отзыв</h4>
                                <div>
                                    Какое удовольствие получать эти коробки! И конечно же вы знаете,
                                    что внутри, но вы все равно открываете их как рождественский
                                    подарок. Доставили быстро. И хорошо упаковано. Спасибо,
                                    hotel4box!
                                </div>
                            </div>
                        </div>
                        <div className={styles.commItem}>
                            <div className={styles.comtopBlock}>
                                <div className={styles.starsBlock}>
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                </div>
                                <Image
                                    src={"/temp/comm1.png"}
                                    width={280}
                                    height={136}
                                    alt="comm"
                                />
                            </div>
                            <div className={styles.combottomBlock}>
                                <h4>Отзыв</h4>
                                <div>
                                    Какое удовольствие получать эти коробки! И конечно же вы знаете,
                                    что внутри, но вы все равно открываете их как рождественский
                                    подарок. Доставили быстро. И хорошо упаковано. Спасибо,
                                    hotel4box!
                                </div>
                            </div>
                        </div>
                        <div className={styles.commItem}>
                            <div className={styles.comtopBlock}>
                                <div className={styles.starsBlock}>
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                </div>
                                <Image
                                    src={"/temp/comm1.png"}
                                    width={280}
                                    height={136}
                                    alt="comm"
                                />
                            </div>
                            <div className={styles.combottomBlock}>
                                <h4>Отзыв</h4>
                                <div>
                                    Какое удовольствие получать эти коробки! И конечно же вы знаете,
                                    что внутри, но вы все равно открываете их как рождественский
                                    подарок. Доставили быстро. И хорошо упаковано. Спасибо,
                                    hotel4box!
                                </div>
                            </div>
                        </div>
                        <div className={styles.commItem}>
                            <div className={styles.comtopBlock}>
                                <div className={styles.starsBlock}>
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                    <Image
                                        src={"/common/star_blue.svg"}
                                        width={24}
                                        height={24}
                                        alt="star"
                                    />
                                </div>
                                <Image
                                    src={"/temp/comm1.png"}
                                    width={280}
                                    height={136}
                                    alt="comm"
                                />
                            </div>
                            <div className={styles.combottomBlock}>
                                <h4>Отзыв</h4>
                                <div>
                                    Какое удовольствие получать эти коробки! И конечно же вы знаете,
                                    что внутри, но вы все равно открываете их как рождественский
                                    подарок. Доставили быстро. И хорошо упаковано. Спасибо,
                                    hotel4box!
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.otherContent}>
                <div className={styles.lastBlock}>
                    <div>
                        <div>
                            <h2>
                                Регистрируйтесь, получите персональный адрес в США и начинайте
                                шопинг!
                            </h2>
                            <div>
                                Мы доставляем товары из-за границы
                                <br /> прямо к вам домой
                            </div>
                            <Link href={"/login"}>Получить торговый адрес</Link>
                        </div>
                    </div>
                    <Image src={"/temp/boxes.png"} width={852} height={586} alt="boxes" />
                </div>
            </div>
        </main>
    );
}
