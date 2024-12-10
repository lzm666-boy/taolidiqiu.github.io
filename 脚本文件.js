document.addEventListener("DOMContentLoaded", () => {
    loadActivities();
    loadMembers();
});

function editDescription() {
    const description = prompt("请输入新的社团简介:");
    if (description) {
        document.getElementById("club-description").textContent = description;
        alert("简介已更新！");
    }
}

function loadMembers() {
    const members = [
        { name: "张三", id: "20231001", contact: "123456789" },
        { name: "李四", id: "20231002", contact: "987654321" }
    ];
    const tbody = document.querySelector("#member-table tbody");
    members.forEach(member => {
        const row = `<tr>
            <td>${member.name}</td>
            <td>${member.id}</td>
            <td>${member.contact}</td>
        </tr>`;
        tbody.innerHTML += row;
    });
}

function addMember() {
    const name = prompt("请输入成员姓名:");
    const id = prompt("请输入成员学号:");
    const contact = prompt("请输入联系方式:");
    if (name && id && contact) {
        const tbody = document.querySelector("#member-table tbody");
        const row = `<tr>
            <td>${name}</td>
            <td>${id}</td>
            <td>${contact}</td>
        </tr>`;
        tbody.innerHTML += row;
        alert("成员已添加！");
    }
}

function loadActivities() {
    const activities = [
        { title: "社团年会", description: "年度总结活动", date: "2024-12-20" }
    ];
    const select = document.getElementById("activity");
    const list = document.getElementById("activity-list");
    activities.forEach(activity => {
        const option = `<option value="${activity.title}">${activity.title}</option>`;
        select.innerHTML += option;

        const card = `<div>
            <h3>${activity.title}</h3>
            <p>${activity.description}</p>
            <p>日期: ${activity.date}</p>
        </div>`;
        list.innerHTML += card;
    });
}

function addActivity() {
    const title = prompt("请输入活动名称:");
    const description = prompt("请输入活动简介:");
    const date = prompt("请输入活动日期 (格式: YYYY-MM-DD):");
    if (title && description && date) {
        const select = document.getElementById("activity");
        const option = `<option value="${title}">${title}</option>`;
        select.innerHTML += option;

        const list = document.getElementById("activity-list");
        const card = `<div>
            <h3>${title}</h3>
            <p>${description}</p>
            <p>日期: ${date}</p>
        </div>`;
        list.innerHTML += card;

        alert("活动已发布！");
    }
}
