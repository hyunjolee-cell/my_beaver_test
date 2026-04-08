# FieldOps — 설치/A/S 스케줄 배정 운영 플랫폼 v1.0

## 📋 프로젝트 개요

**FieldOps**는 키오스크·POS 설치 및 A/S 현장 작업을 효율적으로 관리하는 스케줄 배정 운영 플랫폼입니다.

- **서비스 목적**: 협력사 기사들의 현장 작업(신규설치, A/S 방문, POS 교체, 정기점검)을 실시간으로 배정·모니터링·검수
- **대상 사용자**: 운영관리자, 파트너 관리자, 현장 기사
- **핵심 가치**: 빠른 현황 파악 → 즉각적인 이슈 처리 → 완료 검수

---

## 🌐 URL

| 환경 | URL |
|------|-----|
| **샌드박스 미리보기** | https://3000-i4n1qcen124662qk4amdm-c81df28e.sandbox.novita.ai |
| **Cloudflare Pages** | `npm run deploy` 후 제공 |

---

## ✅ 현재 완료된 기능

### 관리자 웹 (Admin Web)
| 화면 | 기능 |
|------|------|
| **대시보드** | KPI 카드 (총작업/완료/진행중/긴급이슈), 긴급 이슈 목록, 검수 대기 목록, 미니 타임라인 |
| **스케줄 배정** | 미배정 대기열, 기사별 타임라인 그리드, 드래그&드롭 배정, 자동 배정 실행, 일정 확정 |
| **실행 모니터링** | 기사 상태 테이블 (리스트뷰), 지도뷰 (핀 시뮬레이션), ETA 위험 배너, 기사 상세 패널 |
| **이슈 관리** | 이슈 목록 (P0/P1/P2 필터), 이슈 처리 패널 (일정재조정/재방문/취소/완료) |
| **완료 검수** | 카드형 검수 목록, 승인/추가요청/반려, 일괄 승인 |
| **리포트** | KPI 요약, 일별 완료율 차트, 기사별 성과 테이블, Excel 내보내기 |
| **기준정보** | 기사 목록, 협력사/점포/체크리스트 관리 |

### 기사 앱 시뮬레이터 (Driver App)
| 화면 | 기능 |
|------|------|
| **오늘 일정 홈** | 진행 상태 바, 현재 작업 강조, 다음 작업 목록, 오프라인 배너 |
| **점포 상세** | 주소/담당자/예상시간/특이사항, 길안내 버튼, 이슈보고 버튼 |
| **도착 확인** | GPS 거리 표시, 도착 확인 (SMS 자동 발송 시뮬레이션) |
| **작업 시작** | 체크리스트/사진/서명 안내, 특이사항 강조 |
| **체크리스트** | 8개 항목, 진행 바, 자동저장, 완료 항목 취소선 |
| **사진 업로드** | 3장 슬롯, 촬영/갤러리 선택, 업로드 상태 피드백 |
| **서명** | 서명 패드 UI, 다시 그리기, 서명 완료 확인 |
| **완료 처리** | 증빙 완료 체크리스트, 조건부 버튼 활성화 |
| **이슈 보고** | 5가지 이슈 유형 선택 (설치불가/고객부재/부품누락/수리불가/기타) |

---

## 🗂 데이터 구조

### 핵심 엔티티
```
Job (작업)
├── id, store, type, subtype
├── status: UNASSIGNED → DISPATCHED → DRIVING_TO → ARRIVED → IN_PROGRESS → COMPLETED → APPROVED/REJECTED
├── driver_id, partner_id, eta, delay

Issue (이슈)
├── id, priority (P0/P1/P2), type
├── status: PENDING_ADMIN → PROCESSING → RESOLVED

Inspection (검수)
├── id, job_id, checklist, photos, signature
├── status: REVIEW_PENDING → APPROVED/REJECTED

Driver (기사)
├── id, name, partner, status (ON_DUTY/DRIVING/DELAYED/AVAILABLE/COMPLETED)
├── currentStore, eta, delay, completed, total
```

### 작업 유형별 색상 코드
| 유형 | 색상 | Hex |
|------|------|-----|
| 신규설치 | 파란색 | `#1A6EFF` |
| A/S 방문 | 주황색 | `#F59E0B` |
| POS 교체 | 보라색 | `#7C3AED` |
| 정기점검 | 회색 | `#6B7280` |

---

## 🏗 기술 스택

| 레이어 | 기술 |
|--------|------|
| **Runtime** | Cloudflare Workers (Edge) |
| **Framework** | Hono 4.x |
| **Build** | Vite 6 + @hono/vite-build |
| **Styling** | Tailwind CSS (CDN) + CSS 변수 |
| **Icons** | Font Awesome 6.4 |
| **Font** | Noto Sans KR (Google Fonts) |
| **Deploy** | Cloudflare Pages |

---

## 📐 디자인 시스템

### 색상 팔레트
```css
--primary: #1A6EFF        /* 주요 액션, 링크 */
--success: #17A34A        /* 완료, 승인 */
--warning: #F59E0B        /* 지연, 주의 */
--danger: #DC2626         /* 긴급, 반려, 오류 */
--neutral-900: #111827    /* 본문 텍스트 */
--neutral-500: #6B7280    /* 보조 텍스트 */
--neutral-200: #E5E7EB    /* 테두리, 구분선 */
--neutral-50: #F9FAFB     /* 배경 */
```

### 타이포그래피 계층
| 레벨 | 크기 | 굵기 | 용도 |
|------|------|------|------|
| L1 (페이지 제목) | 24px | 700 | 화면 주 제목 |
| L2 (섹션 제목) | 16px | 600 | 섹션 헤더 |
| L3 (카드 제목) | 14-15px | 600 | 카드 주요 텍스트 |
| L4 (KPI 숫자) | 32px | 700 | 대시보드 수치 |
| L5 (본문) | 13-14px | 400 | 일반 설명 |
| L6 (보조) | 12px | 400 | 메타 정보 |
| L7 (태그) | 11px | 500 | 상태 태그, 유형 칩 |

### 간격 시스템 (8px 그리드)
- 외곽 패딩: 24px (웹), 16px (앱)
- 카드 내부: 16px
- 섹션 간격: 24px
- 행 높이: 56px (기본), 48px (테이블)

---

## 🚀 실행 방법

### 개발 환경
```bash
# 의존성 설치
npm install

# 빌드
npm run build

# PM2로 서버 시작 (권장)
pm2 start ecosystem.config.cjs

# 직접 실행
npx wrangler pages dev dist --ip 0.0.0.0 --port 3000
```

### Cloudflare Pages 배포
```bash
# 1. Cloudflare API 키 설정 (Deploy 탭)
# 2. 프로젝트 생성
npx wrangler pages project create fieldops-platform --production-branch main

# 3. 배포
npm run build
npx wrangler pages deploy dist --project-name fieldops-platform
```

---

## 📱 기사 앱 시뮬레이터 사용법

1. 화면 우측 하단의 📱 버튼 클릭
2. 시뮬레이터 창이 열리면 작업 카드 클릭 → 점포 상세
3. **길 안내** → **도착 확인** → **작업 시작** 순서로 진행
4. 체크리스트 항목 탭으로 체크/해제
5. 사진 슬롯 탭으로 사진 추가
6. 서명 패드 탭으로 서명
7. 완료 처리하기 버튼으로 작업 완료

---

## 🔄 핵심 비즈니스 로직

### 작업 상태 전이
```
UNASSIGNED → DISPATCHED → DRIVING_TO → ARRIVED → IN_PROGRESS → COMPLETED → APPROVED
                                                                           ↘ REJECTED → REWORK
```

### 이슈 우선순위
| 등급 | 설명 | 알림 채널 |
|------|------|----------|
| P0 (긴급) | 설치 불가, 고객 부재 | WebSocket + FCM Push + SMS |
| P1 (주의) | 부품 누락, 수리 불가 | WebSocket + FCM Push |
| P2 (일반) | 기타 현장 문제 | WebSocket |

### 완료 조건 (3요소 필수)
1. ✅ 체크리스트 전 항목 완료
2. 📷 사진 최소 1장 이상
3. ✍ 점주 서명 (서명 필요 설정 시)

### ETA 위험 임계치
- **정상**: ETA 오차 < 10%
- **주의 (주황)**: ETA 오차 130% (▲+15분 기준)
- **위험 (빨강)**: ETA 오차 160% (▲+30분 이상)
- **긴급 알림**: ETA 오차 200% 이상

### 잠금 레벨 (Lock Level)
| 레벨 | 상태 | 재배정 가능 여부 |
|------|------|----------------|
| L0 | APPROVED / REJECTED | 불가 |
| L1 | IN_PROGRESS + MANUAL_LOCK | 관리자만 가능 |
| L2 | IN_PROGRESS | 제한적 가능 |
| L3 | DISPATCHED | 자유 재배정 |

---

## 📊 API 엔드포인트

| Method | Path | 설명 |
|--------|------|------|
| GET | `/api/dashboard` | 대시보드 데이터 |
| GET | `/api/jobs` | 작업 목록 |
| GET | `/api/drivers` | 기사 목록 |
| GET | `/api/issues` | 이슈 목록 |
| GET | `/api/inspections` | 검수 목록 |
| GET | `/api/reports` | 리포트 데이터 |
| GET | `/` | 메인 HTML (SPA) |

---

## 🗓 개발 로드맵

### MVP (현재 완료)
- [x] 관리자 대시보드
- [x] 스케줄 배정 타임라인 UI
- [x] 실행 모니터링 (리스트 + 지도)
- [x] 이슈 관리 및 처리
- [x] 완료 검수 (승인/반려)
- [x] 리포트 및 기준정보
- [x] 기사 앱 시뮬레이터 (전체 흐름)

### Phase 2 (다음 단계)
- [ ] 실제 DB 연동 (Cloudflare D1)
- [ ] WebSocket 실시간 알림
- [ ] Kakao Maps SDK 지도 연동
- [ ] FCM Push 알림
- [ ] SMS/Kakao 알림톡 연동

### Phase 3 (향후)
- [ ] 실제 기사 모바일 앱 (React Native)
- [ ] 스케줄 최적화 엔진 (Google Fleet Routing)
- [ ] 고급 리포트 및 데이터 분석
- [ ] 감사 로그 및 규정 준수

---

## 📂 프로젝트 구조

```
webapp/
├── src/
│   ├── index.tsx          # 메인 Hono 앱 (모든 화면 포함)
│   └── renderer.tsx       # Hono 렌더러 설정
├── public/
│   └── static/
│       └── style.css      # 추가 스타일 (미사용)
├── dist/                  # 빌드 결과물 (자동생성)
├── .gitignore
├── ecosystem.config.cjs   # PM2 설정
├── package.json
├── tsconfig.json
├── vite.config.ts         # Vite + Hono 빌드 설정
└── wrangler.jsonc         # Cloudflare Workers 설정
```

---

## 🔒 보안 주의사항

- API 토큰은 반드시 `.dev.vars` 파일에 저장 (절대 커밋 금지)
- Cloudflare Secrets로 프로덕션 환경변수 관리
- CORS는 `/api/*` 경로에만 적용

---

## 📞 지원

- **플랫폼**: Cloudflare Pages
- **상태**: ✅ 샌드박스 활성
- **기술 스택**: Hono + TypeScript + Tailwind CSS + Cloudflare Workers
- **최종 업데이트**: 2026-04-08
