import { useState, useEffect } from "react";
import { db } from "../firebase/config";
import { collection, onSnapshot, query, orderBy } from "firebase/firestore";

export default function useUserStats(userId) {
  const [loading, setLoading] = useState(true);
  const [kpis, setKpis] = useState([]);
  const [progressData, setProgressData] = useState([]);
  const [activityFeed, setActivityFeed] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!userId) return;
    setLoading(true);

    const q = query(
      collection(db, "users", userId, "tasks"),
      orderBy("date", "asc")
    );

    const unsub = onSnapshot(
      q,
      (snap) => {
        const tasks = snap.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        const now = new Date();
        const todayStr = now.toISOString().slice(0, 10);

        const activeTasks = tasks.filter((t) => !t.completed);

        const total = tasks.length;
        const completed = tasks.filter((t) => t.completed).length;
        const completionRate = total > 0 ? Math.round((completed / total) * 100) : 0;

        const newToday = tasks.filter((t) => t.date === todayStr).length;

        const completedToday = tasks.filter(
          (t) => t.completed && t.date === todayStr
        ).length;

        setKpis([
          { label: "Active Tasks", value: activeTasks.length },
          { label: "Completion Rate", value: `${completionRate}%` },
          { label: "New Tasks Today", value: newToday },
          { label: "Daily Engagement", value: `${completedToday}` },
        ]);

        const progressArr = [];
        for (let i = 6; i >= 0; i--) {
          const d = new Date(now);
          d.setDate(now.getDate() - i);
          const dStr = d.toISOString().slice(0, 10);
          progressArr.push({
            day: d.toLocaleDateString("he-IL", { weekday: "short" }),
            completed: tasks.filter(
              (t) => t.completed && t.date === dStr
            ).length,
          });
        }
        setProgressData(progressArr);

        const feed = tasks
          .map((t) => ({
            id: t.id,
            text: t.completed
              ? `סיימת משימה: "${t.title}"`
              : `הוספת משימה: "${t.title}"`,
            ts: new Date(t.date),
          }))
          .sort((a, b) => b.ts - a.ts)
          .slice(0, 5);

        setActivityFeed(feed);

        setLoading(false);
        setError(null);
      },
      (err) => {
        setError(err);
        setLoading(false);
      }
    );

    return () => unsub();
  }, [userId]);

  return { kpis, progressData, activityFeed, loading, error };
}
