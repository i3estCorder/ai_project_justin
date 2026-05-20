// 1단계: HTML 화면에서 필요한 요소를 가져옵니다.
var nameInput   = document.getElementById("nameInput");   // 이름 입력창
var startButton = document.getElementById("startButton"); // 실습 시작 버튼
var resultArea  = document.getElementById("resultArea");  // 메시지를 보여줄 영역

// 혹시 HTML에서 요소를 못 찾으면, 여기서 멈추고 알려줍니다.
if (!nameInput || !startButton || !resultArea) {
  console.error("필요한 HTML 요소를 찾지 못했습니다. id 이름을 확인하세요.");
}

// 메시지를 화면에 보여주는 함수입니다.
// text: 보여줄 글자,  type: 메시지 종류 ("success" 또는 "warning")
function showMessage(text, type) {
  resultArea.innerHTML = "";                     // 이전 메시지를 지웁니다.
  var messageBox = document.createElement("div"); // 새 메시지 박스를 만듭니다.
  messageBox.className = type;                    // 종류에 따라 색이 달라집니다.
  messageBox.textContent = text;                  // 텍스트를 안전하게 넣습니다.
  resultArea.appendChild(messageBox);             // 화면에 붙입니다.
}

// 버튼을 클릭했을 때 실행되는 함수입니다.
function handleStartClick() {
  var name = nameInput.value.trim(); // 입력한 이름 (앞뒤 공백 제거)

  if (name) {
    // 이름이 있으면 환영 메시지를 보여줍니다.
    showMessage(name + "님, 환영합니다! AI 협업 개발 실습을 시작합니다.", "success");
  } else {
    // 이름이 없으면 경고 메시지를 보여줍니다.
    showMessage("이름을 입력한 뒤 다시 시도해주세요.", "warning");
  }
}

// 버튼 클릭 이벤트를 연결합니다.
startButton.addEventListener("click", handleStartClick);
