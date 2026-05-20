import streamlit as st

# 페이지 기본 설정
st.set_page_config(page_title="AI 협업 개발 실습", page_icon="💡")

# 화면 제목
st.title("AI 협업 개발 실습")

# 설명 문구
st.write("이 페이지는 Streamlit 기초 기능을 연습하는 간단한 실습용 화면입니다.")

# 이름 입력창
name = st.text_input("이름을 입력하세요", placeholder="예: 홍길동")

# 실습 시작 버튼
if st.button("실습 시작"):
    # 이름이 입력되었을 때만 환영 메시지를 보여줍니다.
    if name.strip():
        st.success(f"{name}님, 실습을 시작합니다.")
    else:
        st.warning("이름을 먼저 입력해 주세요.")

# 구분선
st.divider()

# 안내 메시지
st.info("위 입력창에 이름을 적고 버튼을 누르면 환영 메시지가 표시됩니다.")
