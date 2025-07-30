"use client";

import Image from "next/image";
import styles from "./OrderMainLayout.module.scss";
import { useState } from "react";
import Toggle from "@/components/common/Toggle/Toggle";

export default function OrderMainLayout() {
    const [isShowFilter, setIsShowFilter] = useState(false);
    const [selectedTab, setSelectedTab] = useState<"main" | "create-order">("main");

    const isShowFilterToggle = () => setIsShowFilter((state) => !state);

    return (
        <div className={styles.OrderMainLayoutWrap}>
            {selectedTab === "create-order" && (
                <CreateOrder backCb={() => setSelectedTab((state) => "main")} />
            )}
            {selectedTab === "main" && (
                <>
                    <div className={styles.topMenu}>
                        <div className={styles.firstBlock}>
                            <div className={styles.mainText}>Мои заказы</div>
                            <div className={styles.ordersControl}>
                                <div
                                    className={`${styles.btn} ${styles.btn_selected}`}
                                    onClick={() => setSelectedTab("create-order")}
                                >
                                    Создать заказ
                                </div>
                                <div className={styles.btn}>Объединить группы</div>
                                <div className={styles.btn}>Разделить заказ</div>
                            </div>
                        </div>
                        <div className={styles.secondBlock}>
                            <div className={styles.processTab}>
                                <div
                                    className={`${styles.processBtn} ${styles.processBtn_selected}`}
                                >
                                    В процессе (0)
                                </div>
                                <div className={styles.processBtn}>Завершенные</div>
                            </div>
                            <div className={styles.filterBlock}>
                                <input placeholder="Поиск: отслеживание, id, название" />
                                <div className={styles.filterBtn} onClick={isShowFilterToggle}>
                                    <Image
                                        src={"/common/filter.svg"}
                                        width={18}
                                        height={14.25}
                                        alt="filter btn"
                                    />
                                    {isShowFilter && <FilterMenu />}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.orderContent}>
                        <div className={styles.notFound}>
                            <Image src={"/common/box_big.svg"} width={166} height={179} alt="box" />
                            <div>У вас нет ожидаемых входящих посылок</div>
                            <div
                                className={styles.createOrderBtn}
                                onClick={() => setSelectedTab("create-order")}
                            >
                                Создать заказ
                            </div>
                        </div>
                    </div>
                </>
            )}
        </div>
    );
}

function CreateOrder({ backCb }: { backCb: Function }) {
    const [isBusiness, setIsBusiness] = useState(false);
    return (
        <div className={styles.createOrderWrap}>
            <div className={styles.topMenu}>
                <div onClick={() => backCb()} className={styles.backBtn}>
                    <Image
                        src={"/common/back-arrow.svg"}
                        width={16.5}
                        height={14.09}
                        alt="back btn"
                    />
                    <div> Вернуться к заказам</div>
                </div>
                <div className={styles.mainText}>Шаг 1. Декларация</div>
            </div>
            <div className={styles.orderContent}>
                <div className={styles.busBlock}>
                    <div>Для бизнеса</div>
                    <Toggle status={isBusiness} setStatus={setIsBusiness} />
                </div>
                <div className={styles.orderFieldsBlock}>
                    <div className={styles.fieldItem}>
                        <div className={styles.helpBlock}>
                            <div>
                                Предпочтительная валюта<span>*</span>
                            </div>

                            <Image src={"/common/question.svg"} width={24} height={24} alt="?" />
                        </div>
                        <input />
                    </div>
                    <div className={styles.fieldItem}>
                        <div className={styles.helpBlock}>
                            <div>
                                Описание<span>*</span>
                            </div>

                            <Image src={"/common/question.svg"} width={24} height={24} alt="?" />
                        </div>
                        <input />
                    </div>
                    <div className={styles.delBoxBlock}>
                        <div className={styles.checkBlock}>
                            <input type="checkbox" />
                            <div>Удалить внешнюю коробку и упаковать в полиэтиленовый пакет.</div>
                        </div>
                        <div className={styles.help}>
                            *Применяется только к отправлениям во Франкфурте
                        </div>
                    </div>

                    <div className={styles.paramsBlock}>
                        <div className={styles.leftBlock}>
                            <div className={styles.fieldItem}>
                                <div className={styles.helpBlock}>
                                    <div>
                                        Номер отслеживания<span>*</span>
                                    </div>

                                    <Image
                                        src={"/common/question.svg"}
                                        width={24}
                                        height={24}
                                        alt="?"
                                    />
                                </div>
                                <input />
                            </div>
                            {isBusiness && (
                                <>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Имя экспортера<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Телефон экспортера<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </>
                            )}
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.fieldItem}>
                                <div className={styles.helpBlock}>
                                    <div>
                                        Сайт, с которого заказываете<span>*</span>
                                    </div>

                                    <Image
                                        src={"/common/question.svg"}
                                        width={24}
                                        height={24}
                                        alt="?"
                                    />
                                </div>
                                <input />
                            </div>
                            {isBusiness && (
                                <>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Адрес экспортера<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                ИНН экспортера<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    <div className={styles.line}></div>
                    <div className={styles.paramsBlock}>
                        <div className={styles.leftBlock}>
                            <div className={styles.paramsBlock}>
                                <div className={styles.leftBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Название<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                                <div className={styles.rightBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Бренд<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.fieldItem}>
                                <div className={styles.helpBlock}>
                                    <div>
                                        Категория<span>*</span>
                                    </div>

                                    <Image
                                        src={"/common/question.svg"}
                                        width={24}
                                        height={24}
                                        alt="?"
                                    />
                                </div>
                                <input />
                            </div>
                            <div className={styles.paramsBlock}>
                                <div className={styles.leftBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Размер<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                                <div className={styles.rightBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Цвет<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={styles.rightBlock}>
                            <div className={styles.paramsBlock}>
                                <div className={styles.leftBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Цена<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                                <div className={styles.rightBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Количество<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                            <div className={styles.paramsBlock}>
                                <div className={styles.leftBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Высота<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                                <div className={styles.rightBlock}>
                                    <div className={styles.fieldItem}>
                                        <div className={styles.helpBlock}>
                                            <div>
                                                Ширина<span>*</span>
                                            </div>

                                            <Image
                                                src={"/common/question.svg"}
                                                width={24}
                                                height={24}
                                                alt="?"
                                            />
                                        </div>
                                        <input />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={styles.line}></div>
                </div>
                <div className={styles.addOrderBtn}>
                    <Image src={"/common/plus_blue.svg"} width={18} height={18} alt="add" />
                    <div className={styles.text}>Добавить посылку</div>
                </div>
                <div className={styles.nextStepBtn}>Следующий шаг</div>
            </div>
        </div>
    );
}

function FilterMenu() {
    return (
        <div className={styles.filterMenuWrap}>
            <div className={styles.itemBox}>
                <div className={styles.help}>
                    <div className={styles.title}>Название товара</div>
                </div>
                <input />
            </div>
            <div className={styles.itemBox}>
                <div className={styles.help}>
                    <div className={styles.title}>Статус</div>
                    <Image src={"/common/question.svg"} width={24} height={24} alt="?" />
                </div>
                <input />
            </div>
            <div className={styles.itemBox}>
                <div className={styles.help}>
                    <div className={styles.title}>Номер отслеживания</div>
                </div>
                <input />
            </div>
            <div className={styles.itemBox}>
                <div className={styles.help}>
                    <div className={styles.title}>Тип отправителя</div>
                </div>
                <input />
            </div>
            <div className={styles.itemBox}>
                <div className={styles.help}>
                    <div className={styles.title}>Отделение Hotel4box</div>
                </div>
                <input />
            </div>
            <div className={styles.buttonsBox}>
                <div>Применить</div>
                <div>Сбросить</div>
            </div>
        </div>
    );
}
