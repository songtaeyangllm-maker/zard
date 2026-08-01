# ZARD FanClub in KOREA

> *"負けないで もう少し 最後まで走り抜けて"*  
> *지지 말아요, 조금만 더, 끝까지 달려 나가요.*  
> — ZARD, 1993

## 소개

**ZARD FanClub in KOREA**는 일본 가수 **사카이 이즈미(坂井泉水, 1967–2007)**의 아름다운 목소리와 음악을 영원히 기억하는 한국 팬클럽의 비영리 헌정 웹사이트입니다.

## 주요 기능

- **About** — 사카이 이즈미와 ZARD의 이야기
- **Music** — 대표 명곡 공식 YouTube 영상 (개인정보 보호 모드)
- **Discography** — 1991년부터 25주년 베스트까지 음반 연대기
- **Gallery** — 아카이브 사진 라이트박스 (이전/다음 탐색, 키보드 지원)
- **Fan Board** — 팬 메시지 방명록
  - **JSONBlob 공개 저장소** — 토큰·로그인 없이 글을 남기면 **전 세계 모든 방문자와 즉시 공유**
  - **삭제 기능** — 각 메시지 🗑 버튼 → 관리자 비밀번호 확인 후 삭제 (`index.html`의 `ADMIN_PW` 상수)
  - 저장소 접속 실패 시 브라우저 localStorage로 폴백 (오프라인 대비)

## 디자인 특징

- 다크 퍼플 글래스모피즘 디자인
- 부유하는 보랏빛 파티클 배경 (Canvas)
- 히어로 명곡 로테이터 (負けないで · 揺れる想い · マイ フレンド · 永遠 · 運命のルーレット廻して)
- IntersectionObserver 기반 스크롤 리빌 애니메이션
- 완전 반응형 — 모바일 햄버거 메뉴 / 태블릿 / 데스크톱
- `prefers-reduced-motion` 대응 (모션 줄이기 설정 시 애니메이션 최소화)

## 기술 스택

| 항목 | 기술 |
|------|------|
| 구조 | HTML5 Semantic (단일 `index.html` 자체 포함) |
| 스타일 | Vanilla CSS3 + Glassmorphism |
| JavaScript | Vanilla ES6+ (외부 의존성 없음) |
| 폰트 | Playfair Display, Noto Sans KR (Google Fonts) |
| 방명록 | GitHub Contents API + localStorage 폴백 |

## 라이선스

이 웹사이트는 **비영리 팬 헌정 목적**으로 제작되었습니다.  
ZARD 관련 모든 음악·가사·이미지 저작권은 **Being Inc.** 에 있습니다.

---

<div align="center">

**"그 미소를 잊지 말아줘"**

*2026 ZARD FanClub in KOREA*

</div>
