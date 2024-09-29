// 할 일 목록을 추가하는 함수
document.getElementById("taskInput").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        e.preventDefault(); // 기본 동작 방지 (특정 상황에서 Enter가 두 번 입력되는 문제 해결)
        addTask();
    }
});

// 할 일을 추가하는 함수
function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.replace(/\n/g, "").trim(); // 줄바꿈과 공백 제거
    if (taskText === "") {
        alert("할 일을 입력하세요!");
        return;
    }

    const li = document.createElement("li");
    li.textContent = taskText;

    const completeBtn = document.createElement("button");
    completeBtn.textContent = "완료";
    completeBtn.addEventListener("click", function () {
        moveToDoneList(li);
    });

    li.appendChild(completeBtn);
    document.getElementById("toDoList").appendChild(li);
    taskInput.value = ""; // 입력 필드 초기화
}

// 완료된 항목을 해낸 일 목록으로 이동
function moveToDoneList(taskItem) {
    taskItem.classList.add("completed");

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "삭제";
    deleteBtn.addEventListener("click", function () {
        deleteTask(taskItem);
    });

    taskItem.appendChild(deleteBtn);
    document.getElementById("doneList").appendChild(taskItem);

    // "완료" 버튼을 제거
    taskItem.querySelector("button").remove();
}

// 할 일을 삭제하는 함수
function deleteTask(taskItem) {
    taskItem.remove();
}