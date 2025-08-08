"use client";

import styles from "./misBals.module.scss";
import clsx from "clsx";

export type Status = "active" | "pending" | "deleted";

export interface TableItem {
    id: string;
    amount: string;
    received: number;
    spent: number;
    status: Status;
    date: string;
}

const statusLabels: Record<Status, string> = {
    active: "Активный",
    pending: "В процессе",
    deleted: "Удален",
};

interface PointsTableProps {
    data: TableItem[];
}

export const HistoryBalsTable = ({ data }: PointsTableProps) => {
    return (
        <div className={styles.wrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>№ счета</th>
                        <th>Сумма счета</th>
                        <th>Получено баллов</th>
                        <th>Списано баллов</th>
                        <th>Статус</th>
                        <th>Дата создания</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, i) => (
                        <tr key={i}>
                            <td>{item.id}</td>
                            <td>{item.amount}</td>
                            <td>{item.received}</td>
                            <td>{item.spent}</td>
                            <td>
                                <span
                                    className={clsx(styles.status, styles[`status_${item.status}`])}
                                >
                                    {statusLabels[item.status]}
                                </span>
                            </td>
                            <td>{item.date}</td>
                        </tr>
                    ))}
                </tbody>
            </table>

            {/* Пагинация (заглушка) */}
            <div className={styles.pagination}>
                <button>{"<"}</button>
                <button className={styles.active}>1</button>
                <button>2</button>
                <button>3</button>
                <span>...</span>
                <button>10</button>
                <button>{">"}</button>
            </div>
        </div>
    );
};
