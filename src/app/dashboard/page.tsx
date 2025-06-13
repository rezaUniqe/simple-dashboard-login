"use client"

import {useState} from "react"
import styles from "./dashboard.module.scss"
import {Button} from "@/components/button/button"
import {useCurrentUser} from "@/hooks/use-current-user"
import clsx from "clsx";

export default function Dashboard() {
    const user = useCurrentUser()

    return (
        <div className={styles["dashboard-container"]}>
            <nav className={styles["dashboard-nav"]}>
                <div className={styles["nav-brand"]}>
                    <h2>Dashboard</h2>
                </div>
                <Button variant="danger" size="sm">
                    Logout
                </Button>
            </nav>

            <main className={styles["dashboard-main"]}>
                <div className={clsx(styles["welcome-section"], styles.animate)}>
                    <div className={styles["welcome-card"]}>
                        <div className={styles["welcome-icon"]}>
                            <span>👋</span>
                        </div>
                        <h1>Welcome back, User {user?.name.first}</h1>
                        <p>Phone: {user?.phone}</p>
                        <div className={styles["welcome-stats"]}>
                            <div className={styles.stat}>
                                <span className={styles["stat-number"]}>24</span>
                                <span className={styles["stat-label"]}>Tasks</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles["stat-number"]}>12</span>
                                <span className={styles["stat-label"]}>Projects</span>
                            </div>
                            <div className={styles.stat}>
                                <span className={styles["stat-number"]}>5</span>
                                <span className={styles["stat-label"]}>Messages</span>
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles["dashboard-content"]}>
                    <div className={styles["content-grid"]}>
                        <div className={styles.card}>
                            <h3>Recent Activity</h3>
                            <p>Your latest updates and notifications</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Quick Actions</h3>
                            <p>Frequently used tools and shortcuts</p>
                        </div>
                        <div className={styles.card}>
                            <h3>Analytics</h3>
                            <p>Performance metrics and insights</p>
                        </div>
                    </div>
                </div>
            </main>
        </div>
    )
}
