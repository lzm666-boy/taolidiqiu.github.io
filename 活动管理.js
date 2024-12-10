function saveActivities(activities) {
    localStorage.setItem("activities", JSON.stringify(activities));
}

function loadSavedActivities() {
    const saved = localStorage.getItem("activities");
    return saved ? JSON.parse(saved) : [];
}

// 在 addActivity 中保存新活动
function addActivity() {
    const title = prompt("请输入活动名称:");
    const description = prompt("请输入活动简介:");
    const date = prompt("请输入活动日期 (格式: YYYY-MM-DD):");

    if (title && description && date) {
        const activities = loadSavedActivities();
        activities.push({ title, description, date });
        saveActivities(activities);

        alert("活动已发布！");
        location.reload(); // 重新加载页面，刷新活动列表
    }
}
