import { Hono } from 'hono'
import { html } from 'hono/html'

const app = new Hono()

// Main page - FieldOps Platform
app.get('/', (c) => {
  return c.html(getMainHTML())
})

// API mock endpoints
app.get('/api/dashboard', (c) => {
  return c.json(getDashboardData())
})

app.get('/api/jobs', (c) => {
  return c.json(getJobsData())
})

app.get('/api/drivers', (c) => {
  return c.json(getDriversData())
})

app.get('/api/issues', (c) => {
  return c.json(getIssuesData())
})

app.get('/api/inspections', (c) => {
  return c.json(getInspectionsData())
})

app.get('/api/reports', (c) => {
  return c.json(getReportsData())
})

// Mock Data
function getDashboardData() {
  return {
    today: '2026-04-08',
    kpi: { total: 143, completed: 98, inProgress: 32, issues: 3, unassigned: 5 },
    urgentIssues: [
      { id: 'i1', priority: 'P0', type: '설치 불가', store: '강남 1호점', driver: '홍길동', time: '14:23', elapsed: 12 },
      { id: 'i2', priority: 'P0', type: '고객 부재', store: '서초 2호점', driver: '이영희', time: '13:45', elapsed: 50 },
      { id: 'i3', priority: 'P1', type: '부품 누락', store: '마포 3호점', driver: '김철수', time: '12:30', elapsed: 125 }
    ],
    recentCompleted: [
      { id: 'j1', store: '대치 1호점', type: '신규설치', driver: '박민준', time: '13:52' },
      { id: 'j2', store: '역삼 2호점', type: 'A/S 방문', driver: '최지수', time: '13:15' }
    ]
  }
}

function getJobsData() {
  return {
    jobs: [
      { id: 'j1', store: '강남 1호점', type: '신규설치', subtype: 'POS', status: 'IN_PROGRESS', driver: '홍길동', partner: 'ABC협력사', eta: '14:30', seq: '3/8', lat: 37.496, lng: 127.028 },
      { id: 'j2', store: '서초 2호점', type: 'A/S 방문', subtype: '키오스크', status: 'DRIVING_TO', driver: '이영희', partner: 'ABC협력사', eta: '11:15', seq: '5/7', lat: 37.490, lng: 127.005 },
      { id: 'j3', store: '대치 3호점', type: '신규설치', subtype: 'POS', status: 'DELAYED', driver: '김철수', partner: 'DEF협력사', eta: '15:00', seq: '1/6', lat: 37.492, lng: 127.061 },
      { id: 'j4', store: '역삼 4호점', type: 'POS 교체', subtype: 'POS', status: 'DISPATCHED', driver: '박민준', partner: 'ABC협력사', eta: '16:00', seq: '4/5', lat: 37.500, lng: 127.036 },
      { id: 'j5', store: '마포 5호점', type: '정기점검', subtype: '키오스크', status: 'COMPLETED', driver: '최지수', partner: 'GHI협력사', eta: '12:00', seq: '8/8', lat: 37.549, lng: 126.913 },
      { id: 'j6', store: '홍대 6호점', type: 'A/S 방문', subtype: 'POS', status: 'UNASSIGNED', driver: '-', partner: '-', eta: '-', seq: '0/0', lat: 37.556, lng: 126.924 },
      { id: 'j7', store: '신촌 7호점', type: '신규설치', subtype: '키오스크', status: 'ARRIVED', driver: '정수진', partner: 'DEF협력사', eta: '14:00', seq: '2/4', lat: 37.556, lng: 126.937 },
      { id: 'j8', store: '합정 8호점', type: '정기점검', subtype: 'POS', status: 'DISPATCHED', driver: '강동원', partner: 'GHI협력사', eta: '17:00', seq: '6/6', lat: 37.549, lng: 126.899 }
    ]
  }
}

function getDriversData() {
  return {
    drivers: [
      { id: 'd1', name: '홍길동', partner: 'ABC협력사', status: 'ON_DUTY', currentStore: '강남 1호점', eta: '14:30', delay: 15, completed: 3, total: 8, lat: 37.495, lng: 127.025 },
      { id: 'd2', name: '이영희', partner: 'ABC협력사', status: 'DRIVING', currentStore: '서초 2호점', eta: '11:15', delay: 0, completed: 5, total: 7, lat: 37.488, lng: 127.002 },
      { id: 'd3', name: '김철수', partner: 'DEF협력사', status: 'DELAYED', currentStore: '대치 3호점', eta: '15:00', delay: 40, completed: 1, total: 6, lat: 37.490, lng: 127.058 },
      { id: 'd4', name: '박민준', partner: 'ABC협력사', status: 'DRIVING', currentStore: '역삼 4호점', eta: '16:00', delay: 0, completed: 4, total: 5, lat: 37.499, lng: 127.032 },
      { id: 'd5', name: '최지수', partner: 'GHI협력사', status: 'AVAILABLE', currentStore: '-', eta: '-', delay: 0, completed: 8, total: 8, lat: 37.547, lng: 126.910 },
      { id: 'd6', name: '정수진', partner: 'DEF협력사', status: 'ON_DUTY', currentStore: '신촌 7호점', eta: '14:00', delay: 0, completed: 2, total: 4, lat: 37.554, lng: 126.934 }
    ]
  }
}

function getIssuesData() {
  return {
    issues: [
      { id: 'i1', priority: 'P0', type: '설치 불가', store: '강남 1호점', driver: '홍길동', desc: '전기 콘센트 위치 불일치로 설치 진행 불가', time: '14:23', elapsed: 12, status: 'PENDING_ADMIN' },
      { id: 'i2', priority: 'P0', type: '고객 부재', store: '서초 2호점', driver: '이영희', desc: '점주 연락 두절, 30분 대기 후 이탈', time: '13:45', elapsed: 50, status: 'PENDING_ADMIN' },
      { id: 'i3', priority: 'P1', type: '부품 누락', store: '마포 3호점', driver: '김철수', desc: 'POS 전원 어댑터 누락, 현장 작업 불가', time: '12:30', elapsed: 125, status: 'PROCESSING' },
      { id: 'i4', priority: 'P1', type: 'A/S 수리 불가', store: '종로 4호점', driver: '박민준', desc: '메인보드 손상, 부품 재주문 필요', time: '11:10', elapsed: 205, status: 'PROCESSING' },
      { id: 'i5', priority: 'P2', type: '기타', store: '강동 5호점', driver: '정수진', desc: '주차 공간 없어 도보 이동 중, 30분 지연 예상', time: '09:45', elapsed: 340, status: 'RESOLVED' }
    ]
  }
}

function getInspectionsData() {
  return {
    inspections: [
      { id: 'ins1', store: '대치 1호점', type: '신규설치', driver: '박민준', time: '13:52', checklist: '12/12', photos: 3, signature: true, status: 'REVIEW_PENDING' },
      { id: 'ins2', store: '역삼 2호점', type: 'A/S 방문', driver: '최지수', time: '13:15', checklist: '8/8', photos: 2, signature: true, status: 'REVIEW_PENDING' },
      { id: 'ins3', store: '홍대 3호점', type: 'POS 교체', driver: '정수진', time: '12:40', checklist: '10/12', photos: 3, signature: true, status: 'REVIEW_PENDING' },
      { id: 'ins4', store: '신촌 4호점', type: '정기점검', driver: '강동원', time: '11:55', checklist: '6/6', photos: 1, signature: false, status: 'REVIEW_PENDING' },
      { id: 'ins5', store: '합정 5호점', type: '신규설치', driver: '홍길동', time: '10:30', checklist: '12/12', photos: 4, signature: true, status: 'APPROVED' },
      { id: 'ins6', store: '마포 6호점', type: 'A/S 방문', driver: '이영희', time: '09:15', checklist: '8/8', photos: 2, signature: true, status: 'REJECTED' }
    ]
  }
}

function getReportsData() {
  return {
    summary: { total: 143, completed: 135, completionRate: 94.4, rework: 3, issues: 5 },
    daily: [
      { date: '04/02', total: 120, completed: 112, rate: 93.3, issues: 2 },
      { date: '04/03', total: 135, completed: 128, rate: 94.8, issues: 3 },
      { date: '04/04', total: 118, completed: 110, rate: 93.2, issues: 1 },
      { date: '04/05', total: 0, completed: 0, rate: 0, issues: 0 },
      { date: '04/06', total: 0, completed: 0, rate: 0, issues: 0 },
      { date: '04/07', total: 142, completed: 134, rate: 94.4, issues: 4 },
      { date: '04/08', total: 143, completed: 135, rate: 94.4, issues: 5 }
    ],
    drivers: [
      { name: '홍길동', partner: 'ABC협력사', completed: 142, avgTime: '1h 25m', rework: 1, rate: 96.5 },
      { name: '이영희', partner: 'ABC협력사', completed: 138, avgTime: '1h 15m', rework: 0, rate: 98.2 },
      { name: '김철수', partner: 'DEF협력사', completed: 125, avgTime: '1h 40m', rework: 3, rate: 92.1 },
      { name: '박민준', partner: 'ABC협력사', completed: 148, avgTime: '1h 10m', rework: 1, rate: 97.3 },
      { name: '최지수', partner: 'GHI협력사', completed: 132, avgTime: '1h 30m', rework: 2, rate: 94.6 }
    ]
  }
}

function getMainHTML(): string {
  return `<!DOCTYPE html>
<html lang="ko">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>FieldOps — 설치/A/S 스케줄 배정 운영 플랫폼</title>
<script src="https://cdn.tailwindcss.com"></script>
<link href="https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6.4.0/css/all.min.css" rel="stylesheet">
<style>
  @import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;600;700&display=swap');
  * { font-family: 'Noto Sans KR', sans-serif; box-sizing: border-box; }
  :root {
    --primary: #1A6EFF; --primary-light: #EFF5FF; --primary-dark: #1255CC;
    --success: #17A34A; --success-light: #ECFDF5;
    --warning: #F59E0B; --warning-light: #FFFBEB;
    --danger: #DC2626; --danger-light: #FEF2F2;
    --neutral-900: #111827; --neutral-700: #374151;
    --neutral-500: #6B7280; --neutral-200: #E5E7EB; --neutral-50: #F9FAFB;
    --job-install: #1A6EFF; --job-as: #F59E0B; --job-replace: #7C3AED; --job-inspect: #6B7280;
  }
  body { background: var(--neutral-50); color: var(--neutral-900); margin:0; overflow-x:hidden; }
  .sidebar { width:200px; min-height:100vh; background:#fff; border-right:1px solid var(--neutral-200); position:fixed; top:0; left:0; z-index:100; display:flex; flex-direction:column; }
  .header { height:56px; background:#fff; border-bottom:1px solid var(--neutral-200); display:flex; align-items:center; padding:0 24px; position:fixed; top:0; left:200px; right:0; z-index:99; }
  .main-content { margin-left:200px; margin-top:56px; padding:24px; min-height:calc(100vh - 56px); }
  .right-panel { width:340px; background:#fff; border-left:1px solid var(--neutral-200); position:fixed; top:56px; right:-340px; bottom:0; z-index:98; transition:right 0.3s ease; overflow-y:auto; padding:20px; }
  .right-panel.open { right:0; }
  .main-content.panel-open { margin-right:340px; }
  .kpi-card { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; padding:16px; cursor:pointer; transition:box-shadow 0.2s; }
  .kpi-card:hover { box-shadow:0 4px 12px rgba(0,0,0,0.08); }
  .kpi-number { font-size:32px; font-weight:700; line-height:1.2; font-variant-numeric:tabular-nums; }
  .job-card { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; padding:16px; display:flex; gap:12px; cursor:pointer; transition:box-shadow 0.2s; position:relative; overflow:hidden; margin-bottom:8px; }
  .job-card:hover { box-shadow:0 2px 8px rgba(0,0,0,0.08); }
  .job-card-bar { width:4px; border-radius:2px; position:absolute; left:0; top:0; bottom:0; }
  .job-card-content { padding-left:8px; flex:1; }
  .status-tag { display:inline-flex; align-items:center; gap:4px; padding:2px 8px; border-radius:999px; font-size:11px; font-weight:500; }
  .type-chip { display:inline-flex; align-items:center; gap:4px; padding:2px 8px; border-radius:4px; font-size:11px; font-weight:500; }
  .nav-item { display:flex; align-items:center; gap:10px; padding:10px 16px; cursor:pointer; border-radius:6px; margin:2px 8px; font-size:14px; color:var(--neutral-700); transition:background 0.15s; text-decoration:none; }
  .nav-item:hover { background:var(--neutral-50); }
  .nav-item.active { background:var(--primary-light); color:var(--primary); font-weight:600; }
  .nav-badge { background:var(--danger); color:#fff; border-radius:999px; font-size:10px; font-weight:700; padding:1px 6px; margin-left:auto; }
  .btn-primary { background:var(--primary); color:#fff; border:none; padding:10px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer; transition:background 0.2s; }
  .btn-primary:hover { background:var(--primary-dark); }
  .btn-secondary { background:#fff; color:var(--primary); border:1.5px solid var(--primary); padding:10px 20px; border-radius:6px; font-size:14px; font-weight:600; cursor:pointer; transition:all 0.2s; }
  .btn-secondary:hover { background:var(--primary-light); }
  .btn-danger { background:#fff; color:var(--danger); border:1.5px solid var(--danger); padding:8px 16px; border-radius:6px; font-size:13px; font-weight:600; cursor:pointer; }
  .btn-success { background:var(--success); color:#fff; border:none; padding:8px 16px; border-radius:6px; font-size:13px; font-weight:600; cursor:pointer; }
  .section-title { font-size:16px; font-weight:600; color:var(--neutral-900); margin-bottom:16px; display:flex; align-items:center; gap:8px; }
  .page-title { font-size:24px; font-weight:700; color:var(--neutral-900); letter-spacing:-0.3px; }
  .table-container { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; overflow:hidden; }
  .data-table { width:100%; border-collapse:collapse; font-size:13px; }
  .data-table th { background:var(--neutral-50); padding:12px 16px; text-align:left; font-weight:600; color:var(--neutral-700); border-bottom:1px solid var(--neutral-200); white-space:nowrap; }
  .data-table td { padding:12px 16px; border-bottom:1px solid var(--neutral-200); color:var(--neutral-700); }
  .data-table tr:last-child td { border-bottom:none; }
  .data-table tr:hover td { background:var(--neutral-50); cursor:pointer; }
  .data-table td.num { text-align:right; font-variant-numeric:tabular-nums; }
  .timeline-container { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; overflow-x:auto; }
  .timeline-grid { min-width:900px; }
  .timeline-header { display:grid; grid-template-columns:160px repeat(10,80px); border-bottom:1px solid var(--neutral-200); }
  .timeline-header-cell { padding:8px; font-size:12px; font-weight:600; color:var(--neutral-500); text-align:center; border-right:1px solid var(--neutral-200); }
  .timeline-row { display:grid; grid-template-columns:160px repeat(10,80px); border-bottom:1px solid var(--neutral-200); min-height:56px; }
  .timeline-driver-cell { padding:8px 12px; display:flex; align-items:center; gap:8px; border-right:1px solid var(--neutral-200); font-size:13px; font-weight:500; background:#fff; }
  .timeline-cell { position:relative; border-right:1px solid var(--neutral-200); background:var(--neutral-50); }
  .timeline-cell.available { background:#F0FDF4; }
  .timeline-block { position:absolute; top:4px; bottom:4px; border-radius:4px; display:flex; align-items:center; padding:0 6px; font-size:11px; font-weight:600; color:#fff; overflow:hidden; white-space:nowrap; cursor:pointer; opacity:0.85; transition:opacity 0.2s; }
  .timeline-block:hover { opacity:1; }
  .issue-card { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; padding:16px; display:flex; gap:12px; margin-bottom:8px; cursor:pointer; transition:box-shadow 0.2s; position:relative; overflow:hidden; }
  .issue-card:hover { box-shadow:0 2px 8px rgba(0,0,0,0.08); }
  .progress-bar { height:6px; background:var(--neutral-200); border-radius:3px; overflow:hidden; }
  .progress-bar-fill { height:100%; border-radius:3px; transition:width 0.3s; }
  .tab-bar { display:flex; gap:0; border-bottom:1px solid var(--neutral-200); margin-bottom:20px; }
  .tab-item { padding:10px 20px; font-size:14px; font-weight:500; color:var(--neutral-500); cursor:pointer; border-bottom:2px solid transparent; transition:all 0.2s; }
  .tab-item.active { color:var(--primary); border-bottom-color:var(--primary); font-weight:600; }
  .tab-item:hover:not(.active) { color:var(--neutral-700); background:var(--neutral-50); }
  .filter-bar { display:flex; gap:8px; align-items:center; flex-wrap:wrap; margin-bottom:16px; }
  .filter-select { padding:7px 12px; border:1px solid var(--neutral-200); border-radius:6px; font-size:13px; color:var(--neutral-700); background:#fff; cursor:pointer; }
  .alert-banner { border-radius:8px; padding:12px 16px; margin-bottom:16px; display:flex; align-items:center; gap:10px; font-size:13px; font-weight:500; }
  .alert-banner.warning { background:var(--warning-light); color:#92400E; border:1px solid #FDE68A; }
  .alert-banner.danger { background:var(--danger-light); color:#991B1B; border:1px solid #FECACA; }
  .alert-banner.success { background:var(--success-light); color:#166534; border:1px solid #A7F3D0; }
  .driver-card { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; padding:12px; cursor:pointer; transition:box-shadow 0.2s; margin-bottom:8px; }
  .driver-card:hover { box-shadow:0 2px 8px rgba(0,0,0,0.08); }
  .driver-card.delayed { border-left:3px solid var(--warning); }
  .driver-card.urgent { border-left:3px solid var(--danger); }
  .avatar { width:36px; height:36px; border-radius:50%; display:flex; align-items:center; justify-content:center; font-size:14px; font-weight:700; color:#fff; flex-shrink:0; }
  .inspection-card { background:#fff; border:1px solid var(--neutral-200); border-radius:8px; overflow:hidden; cursor:pointer; transition:box-shadow 0.2s; }
  .inspection-card:hover { box-shadow:0 4px 12px rgba(0,0,0,0.1); }
  .inspection-thumb { width:100%; height:120px; object-fit:cover; background:linear-gradient(135deg,#667eea 0%,#764ba2 100%); display:flex; align-items:center; justify-content:center; color:#fff; font-size:32px; }
  .modal-overlay { position:fixed; inset:0; background:rgba(0,0,0,0.4); z-index:200; display:flex; align-items:center; justify-content:center; }
  .modal-box { background:#fff; border-radius:12px; padding:24px; min-width:360px; max-width:480px; width:90%; box-shadow:0 20px 60px rgba(0,0,0,0.2); }
  .chart-bar { display:flex; align-items:flex-end; gap:6px; height:120px; padding-bottom:24px; }
  .chart-bar-item { flex:1; display:flex; flex-direction:column; align-items:center; gap:4px; }
  .chart-bar-fill { width:100%; border-radius:3px 3px 0 0; background:var(--primary); min-height:4px; transition:height 0.3s; }
  .chart-bar-label { font-size:11px; color:var(--neutral-500); }
  .chart-bar-value { font-size:11px; font-weight:600; color:var(--neutral-700); }
  .empty-state { text-align:center; padding:40px 20px; color:var(--neutral-500); }
  .empty-state i { font-size:32px; margin-bottom:12px; color:var(--neutral-200); display:block; }
  .skeleton { background:linear-gradient(90deg,#f0f0f0 25%,#e0e0e0 50%,#f0f0f0 75%); background-size:200% 100%; animation:shimmer 1.2s infinite; border-radius:6px; }
  @keyframes shimmer { 0%{background-position:200% 0} 100%{background-position:-200% 0} }
  .pulse { animation:pulse 2s infinite; }
  @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.6} }
  .tag-p0 { background:#FEF2F2; color:#991B1B; }
  .tag-p1 { background:#FFFBEB; color:#92400E; }
  .tag-p2 { background:#F3F4F6; color:#4B5563; }
  .tag-install { background:#EFF5FF; color:#1255CC; }
  .tag-as { background:#FFFBEB; color:#92400E; }
  .tag-replace { background:#F5F3FF; color:#5B21B6; }
  .tag-inspect { background:#F3F4F6; color:#4B5563; }
  .tag-inprogress { background:#EFF5FF; color:#1255CC; }
  .tag-driving { background:#ECFDF5; color:#166534; }
  .tag-delayed { background:#FFFBEB; color:#92400E; }
  .tag-completed { background:#F3F4F6; color:#4B5563; }
  .tag-dispatched { background:#F5F3FF; color:#5B21B6; }
  .tag-unassigned { background:#FEF2F2; color:#991B1B; }
  .tag-arrived { background:#ECFDF5; color:#166534; }
  .screen { display:none; }
  .screen.active { display:block; }

  /* Mobile App Simulator */
  .app-simulator { position:fixed; bottom:20px; right:20px; z-index:150; }
  .app-phone { width:375px; height:680px; background:#fff; border-radius:32px; box-shadow:0 24px 80px rgba(0,0,0,0.3); overflow:hidden; border:8px solid #1a1a1a; position:relative; }
  .app-phone-toggle { position:fixed; bottom:20px; right:20px; z-index:160; background:var(--primary); color:#fff; border:none; width:56px; height:56px; border-radius:50%; font-size:20px; cursor:pointer; box-shadow:0 4px 16px rgba(26,110,255,0.4); }
  .app-screen { height:100%; display:flex; flex-direction:column; }
  .app-header { background:#fff; padding:12px 16px; border-bottom:1px solid var(--neutral-200); display:flex; align-items:center; justify-content:space-between; }
  .app-content { flex:1; overflow-y:auto; padding:16px; background:var(--neutral-50); }
  .app-tabbar { height:64px; background:#fff; border-top:1px solid var(--neutral-200); display:flex; padding:0 0 8px; }
  .app-tab { flex:1; display:flex; flex-direction:column; align-items:center; justify-content:center; gap:3px; font-size:10px; font-weight:500; color:var(--neutral-500); cursor:pointer; padding-top:8px; }
  .app-tab.active { color:var(--primary); }
  .app-tab i { font-size:18px; }
  .app-job-card { background:#fff; border-radius:12px; padding:14px; margin-bottom:10px; border:1px solid var(--neutral-200); position:relative; overflow:hidden; cursor:pointer; }
  .app-job-bar { position:absolute; left:0; top:0; bottom:0; width:4px; }
  .app-job-content { padding-left:8px; }
  .app-btn-primary { background:var(--primary); color:#fff; border:none; padding:14px; border-radius:12px; font-size:16px; font-weight:600; width:100%; cursor:pointer; margin-top:12px; }
  .app-btn-secondary { background:#fff; color:var(--primary); border:1.5px solid var(--primary); padding:12px; border-radius:12px; font-size:15px; font-weight:600; width:100%; cursor:pointer; margin-top:8px; }
  .app-section-title { font-size:14px; font-weight:600; color:var(--neutral-700); margin-bottom:8px; }
  .app-progress { height:6px; background:var(--neutral-200); border-radius:3px; overflow:hidden; margin:8px 0; }
  .app-progress-fill { height:100%; background:var(--success); border-radius:3px; }
  .checklist-item { background:#fff; border-radius:8px; padding:14px; margin-bottom:6px; display:flex; align-items:center; gap:12px; border:1px solid var(--neutral-200); cursor:pointer; }
  .checklist-item.checked { border-left:3px solid var(--success); }
  .checklist-checkbox { width:22px; height:22px; border-radius:6px; border:2px solid var(--neutral-200); display:flex; align-items:center; justify-content:center; flex-shrink:0; cursor:pointer; transition:all 0.2s; }
  .checklist-checkbox.checked { background:var(--success); border-color:var(--success); }
  .photo-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:8px; margin-bottom:12px; }
  .photo-slot { aspect-ratio:1; border-radius:8px; border:2px dashed var(--neutral-200); display:flex; align-items:center; justify-content:center; font-size:24px; color:var(--neutral-200); cursor:pointer; background:var(--neutral-50); transition:all 0.2s; }
  .photo-slot.filled { border-style:solid; border-color:var(--neutral-200); background:#F0FDF4; color:var(--success); }
  .signature-pad { background:#fff; border:2px solid var(--neutral-200); border-radius:12px; height:140px; display:flex; align-items:center; justify-content:center; color:var(--neutral-200); font-size:14px; cursor:pointer; position:relative; }
  .step-indicator { display:flex; gap:4px; justify-content:center; margin-bottom:16px; }
  .step-dot { width:8px; height:8px; border-radius:50%; background:var(--neutral-200); transition:all 0.2s; }
  .step-dot.active { background:var(--primary); width:24px; border-radius:4px; }
  .step-dot.done { background:var(--success); }
  .offline-banner { background:#FFFBEB; border-bottom:1px solid #FDE68A; padding:8px 16px; display:flex; align-items:center; gap:8px; font-size:12px; color:#92400E; }
  .upload-banner { background:#EFF5FF; border-top:1px solid #BFDBFE; padding:6px 16px; display:flex; align-items:center; gap:8px; font-size:12px; color:#1255CC; }
  .issue-type-card { background:#fff; border:1px solid var(--neutral-200); border-radius:10px; padding:14px; display:flex; align-items:center; gap:12px; cursor:pointer; margin-bottom:8px; font-size:15px; font-weight:500; transition:all 0.2s; }
  .issue-type-card:hover, .issue-type-card.selected { border-color:var(--primary); background:var(--primary-light); color:var(--primary); }
  @keyframes fadeIn { from{opacity:0;transform:translateY(8px)} to{opacity:1;transform:translateY(0)} }
  .fade-in { animation:fadeIn 0.25s ease; }

  /* Scrollbar */
  ::-webkit-scrollbar { width:6px; height:6px; }
  ::-webkit-scrollbar-track { background:transparent; }
  ::-webkit-scrollbar-thumb { background:var(--neutral-200); border-radius:3px; }
  ::-webkit-scrollbar-thumb:hover { background:var(--neutral-500); }

  @media (max-width:1280px) {
    .sidebar { width:56px; }
    .sidebar .nav-label { display:none; }
    .sidebar .nav-badge { display:none; }
    .header { left:56px; }
    .main-content { margin-left:56px; }
    .sidebar-logo-text { display:none; }
  }
</style>
</head>
<body>

<!-- Sidebar Navigation -->
<nav class="sidebar">
  <div style="padding:16px;display:flex;align-items:center;gap:8px;border-bottom:1px solid var(--neutral-200);height:56px;">
    <div style="width:28px;height:28px;background:var(--primary);border-radius:6px;display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:13px;flex-shrink:0;">F</div>
    <span class="sidebar-logo-text" style="font-weight:700;font-size:15px;color:var(--neutral-900);">FieldOps</span>
  </div>
  <div style="padding:8px 0;flex:1;">
    <a class="nav-item active" onclick="showScreen('dashboard')" id="nav-dashboard">
      <i class="fas fa-th-large" style="width:16px;text-align:center;"></i>
      <span class="nav-label">대시보드</span>
    </a>
    <a class="nav-item" onclick="showScreen('schedule')" id="nav-schedule">
      <i class="fas fa-calendar-alt" style="width:16px;text-align:center;"></i>
      <span class="nav-label">스케줄 배정</span>
      <span class="nav-badge nav-label">5</span>
    </a>
    <a class="nav-item" onclick="showScreen('monitoring')" id="nav-monitoring">
      <i class="fas fa-map-marked-alt" style="width:16px;text-align:center;"></i>
      <span class="nav-label">실행 모니터링</span>
    </a>
    <a class="nav-item" onclick="showScreen('issues')" id="nav-issues">
      <i class="fas fa-exclamation-triangle" style="width:16px;text-align:center;"></i>
      <span class="nav-label">이슈 관리</span>
      <span class="nav-badge nav-label" style="background:var(--danger);">3</span>
    </a>
    <a class="nav-item" onclick="showScreen('inspection')" id="nav-inspection">
      <i class="fas fa-clipboard-check" style="width:16px;text-align:center;"></i>
      <span class="nav-label">완료 검수</span>
      <span class="nav-badge nav-label" style="background:var(--warning);color:#111;">4</span>
    </a>
    <div style="height:1px;background:var(--neutral-200);margin:8px 12px;"></div>
    <a class="nav-item" onclick="showScreen('report')" id="nav-report">
      <i class="fas fa-chart-bar" style="width:16px;text-align:center;"></i>
      <span class="nav-label">리포트</span>
    </a>
    <a class="nav-item" onclick="showScreen('master')" id="nav-master">
      <i class="fas fa-cog" style="width:16px;text-align:center;"></i>
      <span class="nav-label">기준정보</span>
    </a>
  </div>
  <!-- Driver Status -->
  <div style="padding:8px;border-top:1px solid var(--neutral-200);" id="driver-status-list">
    <div style="padding:4px 8px;font-size:11px;font-weight:600;color:var(--neutral-500);" class="nav-label">기사 현황</div>
    <div class="driver-mini-item" onclick="showDriverPanel('d1')">
      <div style="display:flex;align-items:center;gap:6px;padding:4px 8px;cursor:pointer;border-radius:4px;" class="hover:bg-gray-50">
        <div style="width:8px;height:8px;border-radius:50%;background:var(--primary);flex-shrink:0;"></div>
        <span class="nav-label" style="font-size:12px;flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">홍길동 ▲15분</span>
      </div>
    </div>
    <div onclick="showDriverPanel('d2')" style="display:flex;align-items:center;gap:6px;padding:4px 8px;cursor:pointer;border-radius:4px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--success);flex-shrink:0;"></div>
      <span class="nav-label" style="font-size:12px;">이영희</span>
    </div>
    <div onclick="showDriverPanel('d3')" style="display:flex;align-items:center;gap:6px;padding:4px 8px;cursor:pointer;border-radius:4px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--warning);flex-shrink:0;pulse;"></div>
      <span class="nav-label" style="font-size:12px;color:var(--warning);">김철수 ▲40분</span>
    </div>
    <div onclick="showDriverPanel('d4')" style="display:flex;align-items:center;gap:6px;padding:4px 8px;cursor:pointer;border-radius:4px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--success);flex-shrink:0;"></div>
      <span class="nav-label" style="font-size:12px;">박민준</span>
    </div>
    <div onclick="showDriverPanel('d5')" style="display:flex;align-items:center;gap:6px;padding:4px 8px;cursor:pointer;border-radius:4px;">
      <div style="width:8px;height:8px;border-radius:50%;background:var(--neutral-200);flex-shrink:0;"></div>
      <span class="nav-label" style="font-size:12px;color:var(--neutral-500);">최지수 완료</span>
    </div>
  </div>
</nav>

<!-- Header -->
<header class="header">
  <div style="font-size:14px;font-weight:500;color:var(--neutral-500);margin-right:auto;" id="header-breadcrumb">대시보드</div>
  <div style="display:flex;align-items:center;gap:8px;margin-right:16px;">
    <span style="font-size:13px;color:var(--neutral-500);">2026년 4월 8일 수</span>
    <button onclick="showScreen('schedule')" class="btn-primary" style="padding:7px 14px;font-size:13px;" id="header-cta">일정 확정하기</button>
  </div>
  <div style="display:flex;align-items:center;gap:12px;">
    <div onclick="showNotifications()" style="position:relative;cursor:pointer;padding:4px;">
      <i class="fas fa-bell" style="font-size:18px;color:var(--neutral-500);"></i>
      <span style="position:absolute;top:-2px;right:-2px;background:var(--danger);color:#fff;border-radius:50%;width:16px;height:16px;font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;">3</span>
    </div>
    <div style="display:flex;align-items:center;gap:8px;cursor:pointer;">
      <div class="avatar" style="background:var(--primary);width:30px;height:30px;font-size:12px;">관</div>
      <span style="font-size:13px;font-weight:500;">운영관리자</span>
      <i class="fas fa-chevron-down" style="font-size:10px;color:var(--neutral-500);"></i>
    </div>
  </div>
</header>

<!-- Right Panel -->
<div class="right-panel" id="right-panel">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
    <h3 style="font-size:16px;font-weight:600;margin:0;" id="panel-title">상세 정보</h3>
    <button onclick="closePanel()" style="background:none;border:none;font-size:18px;cursor:pointer;color:var(--neutral-500);">×</button>
  </div>
  <div id="panel-content"></div>
</div>

<!-- Main Content -->
<main class="main-content" id="main-content">

  <!-- DASHBOARD SCREEN -->
  <div class="screen active fade-in" id="screen-dashboard">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <h1 class="page-title">오늘의 운영 현황</h1>
      <div style="display:flex;gap:8px;">
        <button onclick="showScreen('schedule')" class="btn-secondary" style="font-size:13px;padding:8px 16px;">스케줄 배정 →</button>
        <button onclick="confirmDispatch()" class="btn-primary" style="font-size:13px;padding:8px 16px;"><i class="fas fa-check" style="margin-right:6px;"></i>일정 확정하기</button>
      </div>
    </div>

    <!-- Urgent Alert Banner -->
    <div class="alert-banner danger" style="margin-bottom:16px;">
      <i class="fas fa-exclamation-circle"></i>
      <strong>긴급 처리 필요:</strong>
      <span>P0 이슈 2건 — 강남 1호점 (설치 불가) · 서초 2호점 (고객 부재)</span>
      <button onclick="showScreen('issues')" style="margin-left:auto;background:var(--danger);color:#fff;border:none;padding:4px 12px;border-radius:4px;font-size:12px;cursor:pointer;">지금 처리</button>
    </div>

    <!-- KPI Cards -->
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px;">
      <div class="kpi-card" onclick="showScreen('monitoring')">
        <div style="font-size:12px;color:var(--neutral-500);margin-bottom:8px;"><i class="fas fa-tasks" style="margin-right:4px;"></i>총 작업</div>
        <div class="kpi-number">143</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">오늘 기준</div>
      </div>
      <div class="kpi-card" style="border-top:3px solid var(--success);" onclick="filterJobs('completed')">
        <div style="font-size:12px;color:var(--neutral-500);margin-bottom:8px;"><i class="fas fa-check-circle" style="margin-right:4px;color:var(--success);"></i>완료</div>
        <div class="kpi-number" style="color:var(--success);">98</div>
        <div style="font-size:12px;color:var(--success);margin-top:4px;">68.5% ▲+5</div>
      </div>
      <div class="kpi-card" style="border-top:3px solid var(--primary);" onclick="showScreen('monitoring')">
        <div style="font-size:12px;color:var(--neutral-500);margin-bottom:8px;"><i class="fas fa-spinner" style="margin-right:4px;color:var(--primary);"></i>진행중</div>
        <div class="kpi-number" style="color:var(--primary);">32</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">기사 6명 활동중</div>
      </div>
      <div class="kpi-card" style="border-top:3px solid var(--danger);background:var(--danger-light);" onclick="showScreen('issues')">
        <div style="font-size:12px;color:var(--danger);margin-bottom:8px;"><i class="fas fa-exclamation-triangle" style="margin-right:4px;"></i>긴급 이슈</div>
        <div class="kpi-number" style="color:var(--danger);">3</div>
        <div style="font-size:12px;color:var(--danger);margin-top:4px;font-weight:600;">즉시 처리 필요</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-bottom:24px;">
      <!-- Urgent Issues -->
      <div>
        <div class="section-title">
          <i class="fas fa-fire" style="color:var(--danger);"></i>
          긴급 처리 필요
          <span class="nav-badge" style="margin-left:4px;background:var(--danger);">3</span>
          <a onclick="showScreen('issues')" style="margin-left:auto;font-size:13px;font-weight:400;color:var(--primary);cursor:pointer;">전체 보기 →</a>
        </div>
        <div id="urgent-issues-list">
          <div class="issue-card" onclick="showIssuePanel('i1')">
            <div style="width:4px;background:var(--danger);border-radius:2px;flex-shrink:0;"></div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="status-tag tag-p0" style="font-size:10px;">P0 긴급</span>
                <span style="font-size:13px;font-weight:600;">설치 불가 — 강남 1호점</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">홍길동 기사 · 14:23 발생 · <span style="color:var(--danger);font-weight:600;">12분 경과</span></div>
            </div>
            <button onclick="event.stopPropagation();showIssuePanel('i1')" class="btn-danger" style="font-size:12px;padding:6px 12px;white-space:nowrap;">처리 시작</button>
          </div>
          <div class="issue-card" onclick="showIssuePanel('i2')">
            <div style="width:4px;background:var(--danger);border-radius:2px;flex-shrink:0;"></div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="status-tag tag-p0" style="font-size:10px;">P0 긴급</span>
                <span style="font-size:13px;font-weight:600;">고객 부재 — 서초 2호점</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">이영희 기사 · 13:45 발생 · <span style="color:var(--warning);font-weight:600;">50분 경과</span></div>
            </div>
            <button onclick="event.stopPropagation();showIssuePanel('i2')" class="btn-danger" style="font-size:12px;padding:6px 12px;white-space:nowrap;">처리 시작</button>
          </div>
          <div class="issue-card" onclick="showIssuePanel('i3')">
            <div style="width:4px;background:var(--warning);border-radius:2px;flex-shrink:0;"></div>
            <div style="flex:1;">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="status-tag tag-p1" style="font-size:10px;">P1</span>
                <span style="font-size:13px;font-weight:600;">부품 누락 — 마포 3호점</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">김철수 기사 · 12:30 발생 · <span style="color:var(--danger);font-weight:600;">125분 경과</span></div>
            </div>
            <button onclick="event.stopPropagation();showIssuePanel('i3')" style="background:#fff;color:var(--neutral-700);border:1px solid var(--neutral-200);font-size:12px;padding:6px 12px;border-radius:4px;cursor:pointer;white-space:nowrap;">처리중</button>
          </div>
        </div>
      </div>

      <!-- Recent Completed & Inspection Pending -->
      <div>
        <div class="section-title">
          <i class="fas fa-clipboard-check" style="color:var(--success);"></i>
          검수 대기
          <span class="nav-badge" style="margin-left:4px;background:var(--warning);color:#111;">4</span>
          <a onclick="showScreen('inspection')" style="margin-left:auto;font-size:13px;font-weight:400;color:var(--primary);cursor:pointer;">검수하기 →</a>
        </div>
        <div id="inspection-pending-list">
          <div class="job-card" onclick="showScreen('inspection')">
            <div class="job-card-bar" style="background:var(--job-install);"></div>
            <div class="job-card-content">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="type-chip tag-install">신규설치</span>
                <span style="font-size:13px;font-weight:600;">대치 1호점</span>
                <span style="font-size:12px;color:var(--neutral-500);margin-left:auto;">13:52</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">박민준 · <span style="color:var(--success);">✅ 체크리스트 12/12</span> · 📷 3장 · ✍ 서명완료</div>
            </div>
          </div>
          <div class="job-card" onclick="showScreen('inspection')">
            <div class="job-card-bar" style="background:var(--job-as);"></div>
            <div class="job-card-content">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="type-chip tag-as">A/S 방문</span>
                <span style="font-size:13px;font-weight:600;">역삼 2호점</span>
                <span style="font-size:12px;color:var(--neutral-500);margin-left:auto;">13:15</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">최지수 · <span style="color:var(--success);">✅ 체크리스트 8/8</span> · 📷 2장 · ✍ 서명완료</div>
            </div>
          </div>
          <div class="job-card" onclick="showScreen('inspection')">
            <div class="job-card-bar" style="background:var(--job-replace);"></div>
            <div class="job-card-content">
              <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
                <span class="type-chip tag-replace">POS 교체</span>
                <span style="font-size:13px;font-weight:600;">홍대 3호점</span>
                <span style="font-size:12px;color:var(--warning);">⚠ 12:40</span>
              </div>
              <div style="font-size:12px;color:var(--neutral-500);">정수진 · <span style="color:var(--warning);">⚠ 체크리스트 10/12</span> · 📷 3장 · ✍ 서명완료</div>
            </div>
          </div>
        </div>

        <!-- Mini Timeline -->
        <div class="section-title" style="margin-top:20px;">
          <i class="fas fa-clock" style="color:var(--neutral-500);"></i>
          오늘 일정 개요
          <a onclick="showScreen('schedule')" style="margin-left:auto;font-size:13px;font-weight:400;color:var(--primary);cursor:pointer;">일정 배정 →</a>
        </div>
        <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:12px;overflow-x:auto;">
          <div style="font-size:11px;color:var(--neutral-500);display:flex;gap:0;min-width:500px;margin-bottom:4px;padding-left:80px;">
            <div style="flex:1;text-align:center;">08</div><div style="flex:1;text-align:center;">09</div><div style="flex:1;text-align:center;">10</div><div style="flex:1;text-align:center;">11</div>
            <div style="flex:1;text-align:center;">12</div><div style="flex:1;text-align:center;">13</div><div style="flex:1;text-align:center;">14</div><div style="flex:1;text-align:center;">15</div>
            <div style="flex:1;text-align:center;">16</div><div style="flex:1;text-align:center;">17</div>
          </div>
          ${renderMiniTimeline()}
        </div>
      </div>
    </div>

    <!-- Unassigned Warning -->
    <div class="alert-banner warning">
      <i class="fas fa-exclamation-triangle"></i>
      <strong>미배정 작업 5건</strong>이 있습니다. 일정을 확정하기 전에 배정해주세요.
      <button onclick="showScreen('schedule')" style="margin-left:auto;background:var(--warning);color:#fff;border:none;padding:4px 12px;border-radius:4px;font-size:12px;cursor:pointer;">스케줄 배정 →</button>
    </div>
  </div>

  <!-- SCHEDULE SCREEN -->
  <div class="screen fade-in" id="screen-schedule">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <h1 class="page-title">스케줄 배정</h1>
      <div style="display:flex;gap:8px;align-items:center;">
        <button style="background:#fff;border:1px solid var(--neutral-200);padding:8px 12px;border-radius:6px;font-size:13px;cursor:pointer;"><i class="fas fa-chevron-left"></i></button>
        <span style="font-size:14px;font-weight:600;">2026년 4월 8일 수</span>
        <button style="background:#fff;border:1px solid var(--neutral-200);padding:8px 12px;border-radius:6px;font-size:13px;cursor:pointer;"><i class="fas fa-chevron-right"></i></button>
        <button onclick="runAutoSchedule()" class="btn-secondary" style="font-size:13px;padding:8px 16px;"><i class="fas fa-magic" style="margin-right:6px;"></i>자동 배정 실행</button>
        <button onclick="confirmDispatch()" class="btn-primary" style="font-size:13px;padding:8px 16px;"><i class="fas fa-check" style="margin-right:6px;"></i>일정 확정</button>
      </div>
    </div>

    <!-- Draft Banner -->
    <div class="alert-banner warning" id="draft-banner">
      <i class="fas fa-info-circle"></i>
      <strong>검토 중</strong> — 일정 확정 전입니다. 기사에게 아직 전달되지 않았습니다.
      <span style="margin-left:auto;font-size:12px;">미배정 <strong style="color:var(--danger);">5건</strong> 남음</span>
    </div>

    <div style="display:flex;gap:16px;height:calc(100vh - 220px);">
      <!-- Unassigned Queue -->
      <div style="width:240px;flex-shrink:0;background:#fff;border:1px solid var(--neutral-200);border-radius:8px;overflow:hidden;">
        <div style="padding:12px 14px;border-bottom:1px solid var(--neutral-200);display:flex;align-items:center;gap:8px;">
          <span style="font-size:14px;font-weight:600;">미배정 작업</span>
          <span style="background:var(--danger);color:#fff;border-radius:999px;font-size:11px;padding:1px 7px;font-weight:700;">5</span>
        </div>
        <div style="padding:8px;overflow-y:auto;height:calc(100% - 50px);">
          ${renderUnassignedQueue()}
        </div>
      </div>

      <!-- Timeline -->
      <div style="flex:1;background:#fff;border:1px solid var(--neutral-200);border-radius:8px;overflow:hidden;">
        <div style="padding:12px 16px;border-bottom:1px solid var(--neutral-200);display:flex;align-items:center;gap:12px;">
          <span style="font-size:14px;font-weight:600;">기사별 작업 타임라인</span>
          <span style="font-size:12px;color:var(--neutral-500);">드래그하여 작업을 배정할 수 있습니다</span>
          <div style="margin-left:auto;display:flex;gap:12px;font-size:12px;">
            <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;background:#EFF5FF;border:1px solid var(--primary);border-radius:2px;display:inline-block;"></span>신규설치</span>
            <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;background:#FFFBEB;border:1px solid var(--warning);border-radius:2px;display:inline-block;"></span>A/S</span>
            <span style="display:flex;align-items:center;gap:4px;"><span style="width:12px;height:12px;background:#F5F3FF;border:1px solid #7C3AED;border-radius:2px;display:inline-block;"></span>POS교체</span>
          </div>
        </div>
        <div style="overflow:auto;height:calc(100% - 52px);">
          ${renderTimeline()}
        </div>
      </div>
    </div>
  </div>

  <!-- MONITORING SCREEN -->
  <div class="screen fade-in" id="screen-monitoring">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <h1 class="page-title">실행 모니터링</h1>
      <div style="display:flex;gap:8px;">
        <select class="filter-select"><option>전체 협력사</option><option>ABC협력사</option><option>DEF협력사</option><option>GHI협력사</option></select>
        <select class="filter-select"><option>전체 상태</option><option>이동중</option><option>작업중</option><option>지연</option><option>완료</option></select>
      </div>
    </div>

    <!-- ETA Warning Banner -->
    <div class="alert-banner warning" id="eta-warning">
      <i class="fas fa-clock pulse"></i>
      <strong>ETA 위험:</strong>
      <span class="status-tag tag-delayed" onclick="showDriverPanel('d1')" style="cursor:pointer;">홍길동 ▲+15분</span>
      <span class="status-tag tag-delayed" onclick="showDriverPanel('d3')" style="cursor:pointer;">김철수 ▲+40분</span>
      <button onclick="this.closest('.alert-banner').style.display='none'" style="margin-left:auto;background:none;border:none;cursor:pointer;color:var(--neutral-500);">✕</button>
    </div>

    <div style="display:flex;gap:4px;margin-bottom:12px;">
      <button onclick="switchMonitorView('list')" class="btn-primary" id="view-list-btn" style="font-size:13px;padding:7px 16px;">
        <i class="fas fa-list" style="margin-right:6px;"></i>리스트
      </button>
      <button onclick="switchMonitorView('map')" style="background:#fff;border:1px solid var(--neutral-200);color:var(--neutral-700);padding:7px 16px;border-radius:6px;font-size:13px;cursor:pointer;" id="view-map-btn">
        <i class="fas fa-map" style="margin-right:6px;"></i>지도
      </button>
    </div>

    <!-- List View -->
    <div id="monitor-list-view">
      <div class="table-container">
        <table class="data-table">
          <thead>
            <tr>
              <th>기사</th><th>협력사</th><th>현재 작업 점포</th><th>작업 유형</th>
              <th>상태</th><th style="text-align:right;">ETA</th><th style="text-align:center;">당일 진행</th><th style="text-align:right;">갱신</th>
            </tr>
          </thead>
          <tbody id="monitoring-table-body">
            ${renderMonitoringTableRows()}
          </tbody>
        </table>
      </div>
    </div>

    <!-- Map View (Simple) -->
    <div id="monitor-map-view" style="display:none;">
      ${renderMapView()}
    </div>
  </div>

  <!-- ISSUES SCREEN -->
  <div class="screen fade-in" id="screen-issues">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <h1 class="page-title">이슈 관리</h1>
      <div style="font-size:13px;color:var(--neutral-500);">마지막 업데이트: 방금 전</div>
    </div>

    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <button onclick="filterIssues('all')" class="btn-primary" id="issue-filter-all" style="font-size:13px;padding:7px 14px;">전체 (5)</button>
      <button onclick="filterIssues('P0')" style="background:#FEF2F2;color:var(--danger);border:1px solid #FECACA;padding:7px 14px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;" id="issue-filter-P0">P0 긴급 (2)</button>
      <button onclick="filterIssues('P1')" style="background:#FFFBEB;color:#92400E;border:1px solid #FDE68A;padding:7px 14px;border-radius:6px;font-size:13px;font-weight:600;cursor:pointer;" id="issue-filter-P1">P1 주의 (2)</button>
      <button onclick="filterIssues('resolved')" style="background:var(--neutral-50);color:var(--neutral-500);border:1px solid var(--neutral-200);padding:7px 14px;border-radius:6px;font-size:13px;cursor:pointer;" id="issue-filter-resolved">처리완료 (1)</button>
    </div>

    <div id="issues-list">
      ${renderIssuesList()}
    </div>
  </div>

  <!-- INSPECTION SCREEN -->
  <div class="screen fade-in" id="screen-inspection">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:16px;">
      <h1 class="page-title">완료 검수</h1>
      <button onclick="bulkApprove()" class="btn-success" style="font-size:13px;padding:8px 16px;"><i class="fas fa-check-double" style="margin-right:6px;"></i>일괄 승인</button>
    </div>

    <div class="tab-bar">
      <div class="tab-item active" onclick="filterInspection('pending',this)">검수 대기 <span style="background:var(--warning);color:#111;border-radius:999px;font-size:10px;padding:1px 6px;margin-left:4px;font-weight:700;">4</span></div>
      <div class="tab-item" onclick="filterInspection('approved',this)">승인 완료 <span style="background:var(--success);color:#fff;border-radius:999px;font-size:10px;padding:1px 6px;margin-left:4px;font-weight:700;">87</span></div>
      <div class="tab-item" onclick="filterInspection('rejected',this)">반려 <span style="background:var(--danger);color:#fff;border-radius:999px;font-size:10px;padding:1px 6px;margin-left:4px;font-weight:700;">3</span></div>
    </div>

    <div id="inspection-grid" style="display:grid;grid-template-columns:repeat(auto-fill,minmax(220px,1fr));gap:16px;">
      ${renderInspectionCards()}
    </div>
  </div>

  <!-- REPORT SCREEN -->
  <div class="screen fade-in" id="screen-report">
    <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:20px;">
      <h1 class="page-title">리포트</h1>
      <div style="display:flex;gap:8px;align-items:center;">
        <input type="date" value="2026-04-01" style="padding:8px 12px;border:1px solid var(--neutral-200);border-radius:6px;font-size:13px;">
        <span style="color:var(--neutral-500);">~</span>
        <input type="date" value="2026-04-08" style="padding:8px 12px;border:1px solid var(--neutral-200);border-radius:6px;font-size:13px;">
        <button onclick="showToast('Excel 파일을 준비 중입니다...')" class="btn-secondary" style="font-size:13px;padding:8px 16px;"><i class="fas fa-download" style="margin-right:6px;"></i>Excel 내보내기</button>
      </div>
    </div>

    <!-- Summary KPI -->
    <div style="display:grid;grid-template-columns:repeat(5,1fr);gap:12px;margin-bottom:24px;">
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:var(--primary);">143</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">총 작업</div>
      </div>
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:var(--success);">135</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">완료</div>
      </div>
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:var(--neutral-700);">94.4%</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">완료율</div>
      </div>
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:var(--warning);">3</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">재작업</div>
      </div>
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:16px;text-align:center;">
        <div style="font-size:28px;font-weight:700;color:var(--danger);">5</div>
        <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">이슈 발생</div>
      </div>
    </div>

    <div style="display:grid;grid-template-columns:1fr 1fr;gap:20px;">
      <!-- Daily Chart -->
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:20px;">
        <div class="section-title">일별 완료 현황</div>
        <div class="chart-bar">
          ${renderDailyChart()}
        </div>
        <div style="font-size:12px;color:var(--neutral-500);text-align:center;margin-top:8px;">완료율(%)</div>
      </div>

      <!-- Driver Table -->
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:20px;">
        <div class="section-title">기사별 성과 (최근 7일)</div>
        <table class="data-table" style="font-size:12px;">
          <thead>
            <tr><th>기사</th><th>협력사</th><th class="num">완료</th><th>평균시간</th><th class="num">재작업</th><th class="num">완료율</th></tr>
          </thead>
          <tbody>
            ${renderDriverReportRows()}
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- MASTER DATA SCREEN -->
  <div class="screen fade-in" id="screen-master">
    <h1 class="page-title" style="margin-bottom:20px;">기준정보 관리</h1>
    <div style="display:grid;grid-template-columns:repeat(4,1fr);gap:12px;margin-bottom:24px;">
      ${['기사 관리','협력사 관리','점포 관리','체크리스트 관리'].map((name,i)=>`
      <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:20px;cursor:pointer;transition:box-shadow 0.2s;" onclick="showToast('${name} 화면으로 이동합니다')" onmouseenter="this.style.boxShadow='0 4px 12px rgba(0,0,0,0.08)'" onmouseleave="this.style.boxShadow='none'">
        <i class="fas fa-${['user-tie','handshake','store','clipboard-list'][i]}" style="font-size:24px;color:var(--primary);margin-bottom:12px;display:block;"></i>
        <div style="font-size:15px;font-weight:600;margin-bottom:4px;">${name}</div>
        <div style="font-size:12px;color:var(--neutral-500);">${['등록·수정·가용상태','협력사·권역 설정','점포·주소 관리','유형별 항목 관리'][i]}</div>
      </div>`).join('')}
    </div>
    <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:8px;padding:20px;">
      <div class="section-title">기사 목록</div>
      <div class="filter-bar">
        <input placeholder="기사명 검색..." style="padding:8px 12px;border:1px solid var(--neutral-200);border-radius:6px;font-size:13px;width:200px;">
        <select class="filter-select"><option>전체 협력사</option><option>ABC협력사</option><option>DEF협력사</option></select>
        <button class="btn-primary" style="font-size:13px;padding:8px 14px;margin-left:auto;"><i class="fas fa-plus" style="margin-right:6px;"></i>기사 등록</button>
      </div>
      <table class="data-table">
        <thead><tr><th>기사명</th><th>협력사</th><th>연락처</th><th>가용상태</th><th>오늘 완료</th><th>액션</th></tr></thead>
        <tbody>
          ${[['홍길동','ABC협력사','010-1234-5678','ON_DUTY',3],['이영희','ABC협력사','010-2345-6789','ON_DUTY',5],['김철수','DEF협력사','010-3456-7890','ON_DUTY',1],['박민준','ABC협력사','010-4567-8901','ON_DUTY',4],['최지수','GHI협력사','010-5678-9012','AVAILABLE',8]].map(([name,partner,phone,status,done])=>`
          <tr>
            <td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:var(--primary);width:28px;height:28px;font-size:11px;">${name[0]}</div>${name}</div></td>
            <td>${partner}</td><td style="font-family:monospace;">${phone}</td>
            <td><span class="status-tag ${status==='ON_DUTY'?'tag-inprogress':'tag-completed'}">${status==='ON_DUTY'?'작업중':'가용'}</span></td>
            <td class="num">${done}건</td>
            <td><button onclick="showToast('${name} 기사 정보 수정')" style="background:#fff;border:1px solid var(--neutral-200);padding:4px 10px;border-radius:4px;font-size:12px;cursor:pointer;">수정</button></td>
          </tr>`).join('')}
        </tbody>
      </table>
    </div>
  </div>

</main>

<!-- Mobile App Simulator -->
<button class="app-phone-toggle" onclick="toggleAppSimulator()" id="app-toggle-btn" title="기사 앱 시뮬레이터">
  <i class="fas fa-mobile-alt"></i>
</button>
<div id="app-simulator" style="position:fixed;bottom:88px;right:20px;z-index:150;display:none;">
  <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;padding:0 4px;">
    <span style="font-size:12px;font-weight:600;color:var(--neutral-700);background:var(--primary-light);padding:4px 10px;border-radius:4px;color:var(--primary);">📱 기사 앱 시뮬레이터</span>
    <button onclick="toggleAppSimulator()" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--neutral-500);">✕</button>
  </div>
  <div class="app-phone">
    <div class="app-screen" id="app-screen">
      <!-- App content rendered by JS -->
    </div>
  </div>
</div>

<!-- Toast -->
<div id="toast" style="position:fixed;bottom:24px;left:50%;transform:translateX(-50%);background:#1F2937;color:#fff;padding:12px 24px;border-radius:8px;font-size:14px;font-weight:500;z-index:300;opacity:0;transition:opacity 0.3s;pointer-events:none;max-width:400px;text-align:center;"></div>

<!-- Confirm Modal -->
<div id="confirm-modal" style="display:none;" class="modal-overlay" onclick="closeModal()">
  <div class="modal-box" onclick="event.stopPropagation()">
    <h3 id="modal-title" style="font-size:18px;font-weight:700;margin:0 0 12px;"></h3>
    <p id="modal-body" style="font-size:14px;color:var(--neutral-700);margin:0 0 20px;"></p>
    <div style="display:flex;gap:8px;justify-content:flex-end;">
      <button onclick="closeModal()" class="btn-secondary" style="font-size:14px;">취소</button>
      <button id="modal-confirm-btn" class="btn-primary" style="font-size:14px;">확인</button>
    </div>
  </div>
</div>

<script>
// ============================================================
// STATE
// ============================================================
let currentScreen = 'dashboard';
let panelOpen = false;
let appOpen = false;
let appCurrentTab = 'schedule';
let appCurrentStep = 0; // 0=home, 1=detail, 2=navigate, 3=arrive, 4=start, 5=checklist, 6=photo, 7=signature, 8=complete, 9=issue
let checklistState = [false,false,false,false,false,false,false,false];
let photoState = [false,false,false];
let signatureDone = false;
let monitorView = 'list';

// ============================================================
// NAVIGATION
// ============================================================
function showScreen(name) {
  document.querySelectorAll('.screen').forEach(s => s.classList.remove('active'));
  document.querySelectorAll('.nav-item').forEach(n => n.classList.remove('active'));
  const screen = document.getElementById('screen-' + name);
  if (screen) { screen.classList.add('active'); }
  const nav = document.getElementById('nav-' + name);
  if (nav) { nav.classList.add('active'); }
  currentScreen = name;
  const breadcrumbs = {
    dashboard:'대시보드', schedule:'스케줄 배정', monitoring:'실행 모니터링',
    issues:'이슈 관리', inspection:'완료 검수', report:'리포트', master:'기준정보 관리'
  };
  document.getElementById('header-breadcrumb').textContent = breadcrumbs[name] || name;
  if (panelOpen) closePanel();
  window.scrollTo(0,0);
}

// ============================================================
// RIGHT PANEL
// ============================================================
function openPanel(title, content) {
  document.getElementById('panel-title').textContent = title;
  document.getElementById('panel-content').innerHTML = content;
  document.getElementById('right-panel').classList.add('open');
  document.getElementById('main-content').classList.add('panel-open');
  panelOpen = true;
}
function closePanel() {
  document.getElementById('right-panel').classList.remove('open');
  document.getElementById('main-content').classList.remove('panel-open');
  panelOpen = false;
}

function showDriverPanel(id) {
  const drivers = {
    d1: { name:'홍길동', partner:'ABC협력사', phone:'010-1234-5678', status:'작업중', store:'강남 1호점', eta:'14:30', delay:15, completed:3, total:8 },
    d2: { name:'이영희', partner:'ABC협력사', phone:'010-2345-6789', status:'이동중', store:'서초 2호점', eta:'11:15', delay:0, completed:5, total:7 },
    d3: { name:'김철수', partner:'DEF협력사', phone:'010-3456-7890', status:'지연', store:'대치 3호점', eta:'15:00', delay:40, completed:1, total:6 },
    d4: { name:'박민준', partner:'ABC협력사', phone:'010-4567-8901', status:'이동중', store:'역삼 4호점', eta:'16:00', delay:0, completed:4, total:5 },
    d5: { name:'최지수', partner:'GHI협력사', phone:'010-5678-9012', status:'완료', store:'-', eta:'-', delay:0, completed:8, total:8 }
  };
  const d = drivers[id];
  if (!d) return;
  const delayHtml = d.delay > 0 ? '<span style="color:var(--warning);font-weight:600;">▲+' + d.delay + '분 지연</span>' : '<span style="color:var(--success);">정상</span>';
  openPanel(d.name + ' 기사 상세', \`
    <div style="display:flex;align-items:center;gap:12px;margin-bottom:16px;">
      <div class="avatar" style="background:var(--primary);width:48px;height:48px;font-size:18px;">\${d.name[0]}</div>
      <div>
        <div style="font-size:18px;font-weight:700;">\${d.name}</div>
        <div style="font-size:13px;color:var(--neutral-500);">\${d.partner}</div>
      </div>
    </div>
    <div style="background:var(--neutral-50);border-radius:8px;padding:12px;margin-bottom:16px;">
      <div style="display:grid;grid-template-columns:1fr 1fr;gap:8px;font-size:13px;">
        <div><span style="color:var(--neutral-500);">상태</span><br><strong>\${d.status}</strong></div>
        <div><span style="color:var(--neutral-500);">현재 점포</span><br><strong>\${d.store}</strong></div>
        <div><span style="color:var(--neutral-500);">ETA</span><br><strong>\${d.eta}</strong> \${delayHtml}</div>
        <div><span style="color:var(--neutral-500);">진행</span><br><strong>\${d.completed}/\${d.total}건</strong></div>
      </div>
    </div>
    <div style="margin-bottom:16px;">
      <div style="font-size:12px;font-weight:600;color:var(--neutral-500);margin-bottom:6px;">당일 진행률</div>
      <div class="progress-bar"><div class="progress-bar-fill" style="width:\${Math.round(d.completed/d.total*100)}%;background:var(--success);"></div></div>
      <div style="font-size:12px;color:var(--neutral-500);margin-top:4px;">\${d.completed}건 완료 / \${d.total}건 전체</div>
    </div>
    <div style="display:flex;gap:8px;flex-wrap:wrap;">
      <button onclick="showToast('전화 앱 실행: \${d.phone}')" class="btn-secondary" style="font-size:13px;padding:8px 14px;flex:1;"><i class="fas fa-phone" style="margin-right:6px;"></i>전화</button>
      <button onclick="showToast('문자 전송 화면')" style="background:#fff;border:1px solid var(--neutral-200);padding:8px 14px;border-radius:6px;font-size:13px;cursor:pointer;flex:1;"><i class="fas fa-comment" style="margin-right:6px;"></i>문자</button>
      <button onclick="showRescheduleModal('\${d.name}')" class="btn-primary" style="font-size:13px;padding:8px 14px;width:100%;margin-top:4px;"><i class="fas fa-sync" style="margin-right:6px;"></i>일정 재조정</button>
    </div>
  \`);
}

function showIssuePanel(id) {
  const issues = {
    i1: { priority:'P0', type:'설치 불가', store:'강남 1호점', driver:'홍길동', desc:'전기 콘센트 위치 불일치로 POS 단말기 설치 진행 불가. 공사 담당자 연락 필요.', time:'14:23', elapsed:12 },
    i2: { priority:'P0', type:'고객 부재', store:'서초 2호점', driver:'이영희', desc:'점주 연락 두절, 30분 대기 후 이탈. 재방문 일정 조율 필요.', time:'13:45', elapsed:50 },
    i3: { priority:'P1', type:'부품 누락', store:'마포 3호점', driver:'김철수', desc:'POS 전원 어댑터 누락. 현장 작업 불가. 부품 긴급 조달 요청.', time:'12:30', elapsed:125 },
    i4: { priority:'P1', type:'A/S 수리 불가', store:'종로 4호점', driver:'박민준', desc:'메인보드 손상 확인. 부품 재주문 필요. 재방문 3~5일 소요 예상.', time:'11:10', elapsed:205 }
  };
  const issue = issues[id];
  if (!issue) return;
  const elapsedColor = issue.elapsed < 30 ? 'var(--neutral-500)' : issue.elapsed < 60 ? 'var(--warning)' : 'var(--danger)';
  openPanel('이슈 처리 — ' + issue.store, \`
    <div style="background:\${issue.priority==='P0'?'var(--danger-light)':'var(--warning-light)'};border-radius:8px;padding:12px;margin-bottom:16px;">
      <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;">
        <span class="status-tag \${issue.priority==='P0'?'tag-p0':'tag-p1'}" style="font-size:12px;">\${issue.priority} \${issue.priority==='P0'?'긴급':''}</span>
        <strong style="font-size:15px;">\${issue.type}</strong>
      </div>
      <div style="font-size:13px;color:var(--neutral-700);">\${issue.desc}</div>
      <div style="font-size:12px;margin-top:8px;color:\${elapsedColor};font-weight:600;">\${issue.time} 발생 · \${issue.elapsed}분 경과</div>
    </div>
    <div style="font-size:13px;margin-bottom:16px;">
      <div style="margin-bottom:6px;"><span style="color:var(--neutral-500);">점포</span> <strong>\${issue.store}</strong></div>
      <div style="margin-bottom:6px;"><span style="color:var(--neutral-500);">기사</span> <strong>\${issue.driver}</strong></div>
    </div>
    <div style="margin-bottom:16px;">
      <div style="font-size:13px;font-weight:600;margin-bottom:8px;">처리 방법 선택</div>
      <button onclick="handleIssue('reschedule','\${id}')" class="btn-primary" style="width:100%;font-size:13px;margin-bottom:8px;"><i class="fas fa-sync" style="margin-right:6px;"></i>일정 재조정 → 다른 기사 배정</button>
      <button onclick="handleIssue('revisit','\${id}')" class="btn-secondary" style="width:100%;font-size:13px;margin-bottom:8px;"><i class="fas fa-calendar-plus" style="margin-right:6px;"></i>재방문 일정 등록</button>
      <button onclick="handleIssue('cancel','\${id}')" class="btn-danger" style="width:100%;font-size:13px;margin-bottom:8px;"><i class="fas fa-times" style="margin-right:6px;"></i>작업 취소 처리</button>
      <button onclick="handleIssue('resolve','\${id}')" class="btn-success" style="width:100%;font-size:13px;"><i class="fas fa-check" style="margin-right:6px;"></i>처리 완료 기록</button>
    </div>
  \`);
}

function handleIssue(action, id) {
  const msgs = { reschedule:'일정 재조정을 시작합니다. 스케줄 배정 화면으로 이동합니다.', revisit:'재방문 일정이 등록되었습니다.', cancel:'작업이 취소 처리되었습니다.', resolve:'이슈가 처리 완료로 기록되었습니다.' };
  showToast(msgs[action] || '처리되었습니다.');
  closePanel();
  if (action === 'reschedule') showScreen('schedule');
}

function showRescheduleModal(name) {
  showModal('일정 재조정', name + ' 기사의 현재 작업을 다른 기사에게 이관하시겠습니까? 스케줄 최적화 엔진이 최적 배정을 제안합니다.', () => { showToast('일정 재조정이 완료되었습니다. 해당 기사에게 알림을 전송했습니다.'); closePanel(); });
}

function showInspectionDetail(id) {
  openPanel('검수 상세 — 대치 1호점', \`
    <div style="background:linear-gradient(135deg,#667eea,#764ba2);height:160px;border-radius:8px;margin-bottom:16px;display:flex;align-items:center;justify-content:center;color:#fff;font-size:40px;">📷</div>
    <div style="display:flex;gap:8px;margin-bottom:16px;">
      <div style="flex:1;background:var(--neutral-50);border-radius:6px;padding:10px;text-align:center;font-size:12px;"><div style="font-size:20px;margin-bottom:4px;">✅</div>체크리스트<br><strong>12/12</strong></div>
      <div style="flex:1;background:var(--neutral-50);border-radius:6px;padding:10px;text-align:center;font-size:12px;"><div style="font-size:20px;margin-bottom:4px;">📷</div>사진<br><strong>3장</strong></div>
      <div style="flex:1;background:var(--neutral-50);border-radius:6px;padding:10px;text-align:center;font-size:12px;"><div style="font-size:20px;margin-bottom:4px;">✍️</div>서명<br><strong>완료</strong></div>
    </div>
    <div style="font-size:13px;color:var(--neutral-500);margin-bottom:16px;">박민준 기사 · 2026.04.08 13:52 완료</div>
    <div style="display:flex;gap:8px;">
      <button onclick="approveInspection()" class="btn-success" style="flex:2;font-size:14px;"><i class="fas fa-check" style="margin-right:6px;"></i>승인하기</button>
      <button onclick="showToast('추가 제출을 요청했습니다.')" class="btn-secondary" style="flex:1;font-size:13px;">추가요청</button>
      <button onclick="rejectInspection()" class="btn-danger" style="flex:1;font-size:13px;">반려</button>
    </div>
  \`);
}

function approveInspection() { showToast('✅ 검수가 승인되었습니다.'); closePanel(); }
function rejectInspection() { showToast('❌ 검수가 반려되었습니다. 재작업 작업이 생성되었습니다.'); closePanel(); }

// ============================================================
// ACTIONS
// ============================================================
function confirmDispatch() {
  showModal('일정 확정', '총 143건의 일정을 확정합니다. 기사들에게 즉시 알림이 전송됩니다.', () => {
    document.getElementById('draft-banner').innerHTML = '<i class="fas fa-check-circle" style="color:var(--success);"></i><strong>일정 확정 완료</strong> — 143건, 08:42 확정. 기사들에게 알림을 전송했습니다.';
    document.getElementById('draft-banner').className = 'alert-banner success';
    showToast('✅ 일정이 확정되었습니다. 기사들에게 알림 전송 완료!');
  });
}

function runAutoSchedule() {
  showToast('⚙️ 스케줄 최적화 엔진 실행 중...');
  setTimeout(() => showToast('✅ 자동 배정 완료! 미배정 작업 5건이 배정되었습니다.'), 1500);
}

function bulkApprove() {
  showModal('일괄 승인', '검수 대기 중인 4건을 모두 승인하시겠습니까?', () => showToast('✅ 4건이 일괄 승인되었습니다.'));
}

function filterJobs(status) { showToast(status + ' 상태 작업 필터링'); }
function filterIssues(type) { showToast(type + ' 이슈 필터링'); }
function filterInspection(status, el) {
  document.querySelectorAll('.tab-item').forEach(t => t.classList.remove('active'));
  if (el) el.classList.add('active');
  const msgs = { pending:'검수 대기 4건 표시', approved:'승인 완료 87건 표시', rejected:'반려 3건 표시' };
  showToast(msgs[status] || '');
}

function switchMonitorView(view) {
  monitorView = view;
  if (view === 'list') {
    document.getElementById('monitor-list-view').style.display = 'block';
    document.getElementById('monitor-map-view').style.display = 'none';
    document.getElementById('view-list-btn').className = 'btn-primary';
    document.getElementById('view-list-btn').style.cssText = 'font-size:13px;padding:7px 16px;';
    document.getElementById('view-map-btn').style.cssText = 'background:#fff;border:1px solid var(--neutral-200);color:var(--neutral-700);padding:7px 16px;border-radius:6px;font-size:13px;cursor:pointer;';
  } else {
    document.getElementById('monitor-list-view').style.display = 'none';
    document.getElementById('monitor-map-view').style.display = 'block';
    document.getElementById('view-map-btn').style.cssText = 'background:var(--primary);color:#fff;border:none;padding:7px 16px;border-radius:6px;font-size:13px;cursor:pointer;font-weight:600;';
    document.getElementById('view-list-btn').style.cssText = 'background:#fff;border:1px solid var(--neutral-200);color:var(--neutral-700);padding:7px 16px;border-radius:6px;font-size:13px;cursor:pointer;';
  }
}

// ============================================================
// MODAL / TOAST
// ============================================================
function showModal(title, body, onConfirm) {
  document.getElementById('modal-title').textContent = title;
  document.getElementById('modal-body').textContent = body;
  document.getElementById('modal-confirm-btn').onclick = () => { closeModal(); onConfirm && onConfirm(); };
  document.getElementById('confirm-modal').style.display = 'flex';
}
function closeModal() { document.getElementById('confirm-modal').style.display = 'none'; }

function showToast(msg) {
  const t = document.getElementById('toast');
  t.textContent = msg;
  t.style.opacity = '1';
  setTimeout(() => { t.style.opacity = '0'; }, 3000);
}

function showNotifications() {
  openPanel('알림', \`
    <div style="font-size:13px;">
      <div style="padding:10px 0;border-bottom:1px solid var(--neutral-200);cursor:pointer;" onclick="showIssuePanel('i1')">
        <div style="display:flex;gap:8px;align-items:flex-start;">
          <span style="font-size:18px;">🔴</span>
          <div><strong>설치 불가 이슈 발생</strong><br><span style="color:var(--neutral-500);font-size:12px;">강남 1호점 · 홍길동 · 방금 전</span></div>
        </div>
      </div>
      <div style="padding:10px 0;border-bottom:1px solid var(--neutral-200);cursor:pointer;" onclick="showIssuePanel('i2')">
        <div style="display:flex;gap:8px;align-items:flex-start;">
          <span style="font-size:18px;">🔴</span>
          <div><strong>고객 부재 이슈</strong><br><span style="color:var(--neutral-500);font-size:12px;">서초 2호점 · 이영희 · 50분 전</span></div>
        </div>
      </div>
      <div style="padding:10px 0;cursor:pointer;" onclick="showDriverPanel('d3')">
        <div style="display:flex;gap:8px;align-items:flex-start;">
          <span style="font-size:18px;">🟠</span>
          <div><strong>김철수 기사 40분 지연</strong><br><span style="color:var(--neutral-500);font-size:12px;">대치 3호점 · 1시간 전</span></div>
        </div>
      </div>
    </div>
  \`);
}

// ============================================================
// APP SIMULATOR
// ============================================================
function toggleAppSimulator() {
  appOpen = !appOpen;
  document.getElementById('app-simulator').style.display = appOpen ? 'block' : 'none';
  if (appOpen) renderAppScreen();
}

function renderAppScreen() {
  const container = document.getElementById('app-screen');
  container.innerHTML = getAppScreenHTML();
}

function getAppScreenHTML() {
  const screens = {
    home: getAppHome,
    detail: getAppDetail,
    arrive: getAppArrive,
    work: getAppWork,
    checklist: getAppChecklist,
    photo: getAppPhoto,
    signature: getAppSignature,
    complete: getAppComplete,
    issue: getAppIssue
  };
  const fn = screens[appCurrentTab] || getAppHome;
  return fn();
}

function getAppHome() {
  return \`
    <div class="app-screen">
      <div class="offline-banner" id="app-offline" style="display:none"><i class="fas fa-cloud" style="margin-right:4px;"></i>오프라인 중 — 완료 후 자동 전송</div>
      <div class="app-header">
        <div style="font-size:16px;font-weight:700;">오늘 일정</div>
        <div style="display:flex;align-items:center;gap:8px;">
          <button onclick="toggleOffline()" style="background:none;border:none;font-size:18px;cursor:pointer;" title="오프라인 토글"><i class="fas fa-wifi" style="color:var(--neutral-500);"></i></button>
          <div class="avatar" style="background:var(--primary);width:28px;height:28px;font-size:11px;">홍</div>
        </div>
      </div>
      <div class="app-content">
        <div style="font-size:14px;font-weight:600;color:var(--neutral-700);margin-bottom:4px;">2026년 4월 8일 수요일</div>
        <div style="font-size:13px;color:var(--neutral-500);margin-bottom:8px;">총 8건 · 완료 3건</div>
        <div class="app-progress"><div class="app-progress-fill" style="width:37.5%;"></div></div>
        <div style="font-size:11px;color:var(--neutral-500);text-align:right;margin-bottom:16px;">3 / 8 완료</div>

        <div style="font-size:12px;font-weight:600;color:var(--primary);margin-bottom:6px;">현재 진행중</div>
        <div class="app-job-card" onclick="appGoTo('detail')" style="background:var(--primary-light);border-color:var(--primary);">
          <div class="app-job-bar" style="background:var(--job-install);"></div>
          <div class="app-job-content">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:4px;">
              <span style="font-size:10px;font-weight:600;background:var(--primary-light);color:var(--primary);padding:2px 6px;border-radius:4px;">신규설치</span>
              <span style="font-size:15px;font-weight:700;">강남 1호점</span>
            </div>
            <div style="font-size:12px;color:var(--neutral-500);">POS 단말기 · 예상 2시간</div>
            <div style="font-size:13px;color:var(--primary);font-weight:600;margin-top:6px;"><i class="fas fa-map-marker-alt" style="margin-right:4px;"></i>작업 중 (IN_PROGRESS)</div>
          </div>
        </div>

        <div style="font-size:12px;font-weight:600;color:var(--neutral-500);margin-bottom:6px;margin-top:16px;">다음 작업</div>
        \${['서초 2호점','대치 3호점','역삼 4호점','마포 5호점'].map((name,i)=>\`
        <div class="app-job-card" onclick="appGoTo('detail')">
          <div class="app-job-bar" style="background:\${['var(--job-as)','var(--job-install)','var(--job-replace)','var(--job-inspect)'][i]};"></div>
          <div class="app-job-content">
            <div style="display:flex;align-items:center;gap:6px;margin-bottom:2px;">
              <span style="font-size:10px;font-weight:600;background:var(--neutral-50);color:var(--neutral-700);padding:2px 6px;border-radius:4px;">\${['A/S 방문','신규설치','POS 교체','정기점검'][i]}</span>
              <span style="font-size:14px;font-weight:600;">\${name}</span>
              <span style="font-size:11px;color:var(--neutral-500);margin-left:auto;">\${['11:30','14:00','16:00','17:00'][i]}</span>
            </div>
            <div style="font-size:12px;color:var(--neutral-500);">\${['키오스크 · 예상 1.5h','POS · 예상 2h','POS · 예상 1h','키오스크 · 예상 1h'][i]}</div>
          </div>
        </div>\`).join('')}
      </div>
      <div class="app-tabbar">
        <div class="app-tab active"><i class="fas fa-list"></i>오늘 일정</div>
        <div class="app-tab" onclick="appGoTo('detail')"><i class="fas fa-wrench"></i>현재 작업</div>
        <div class="app-tab"><i class="fas fa-ellipsis-h"></i>더보기</div>
      </div>
    </div>
  \`;
}

function getAppDetail() {
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('home')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left" style="margin-right:4px;"></i>일정</button>
        <div style="font-size:15px;font-weight:700;">강남 1호점</div>
        <button onclick="showToast('010-1234-5678로 전화 연결')" style="background:none;border:none;font-size:18px;cursor:pointer;color:var(--primary);"><i class="fas fa-phone"></i></button>
      </div>
      <div class="app-content">
        <div style="background:var(--primary);color:#fff;border-radius:10px;padding:14px;margin-bottom:16px;display:flex;align-items:center;gap:10px;">
          <i class="fas fa-tools" style="font-size:24px;"></i>
          <div>
            <div style="font-size:16px;font-weight:700;">신규 설치</div>
            <div style="font-size:13px;opacity:0.85;">POS 단말기</div>
          </div>
        </div>
        <div style="background:#fff;border-radius:10px;padding:14px;margin-bottom:12px;border:1px solid var(--neutral-200);">
          <div style="font-size:12px;font-weight:600;color:var(--neutral-500);margin-bottom:10px;">현장 정보</div>
          <div style="font-size:14px;display:flex;align-items:flex-start;gap:8px;margin-bottom:8px;"><i class="fas fa-map-marker-alt" style="color:var(--primary);margin-top:2px;width:16px;"></i>서울시 강남구 테헤란로 123<br>지하 1층 서비스 카운터</div>
          <div style="font-size:14px;display:flex;align-items:center;gap:8px;margin-bottom:8px;"><i class="fas fa-user" style="color:var(--neutral-500);width:16px;"></i>담당자: 김점주 · 010-1234-5678</div>
          <div style="font-size:14px;display:flex;align-items:center;gap:8px;"><i class="fas fa-clock" style="color:var(--neutral-500);width:16px;"></i>예상 작업 시간: 2시간</div>
        </div>
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:16px;">
          <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:6px;"><i class="fas fa-exclamation-triangle" style="margin-right:4px;"></i>특이사항</div>
          <div style="font-size:13px;color:#92400E;">1층 주차 불가. 근처 공영주차장 이용. 지하 진입 시 직원 카드 필요.</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="appGoTo('issue')" class="app-btn-secondary" style="flex:1;margin-top:0;font-size:14px;color:var(--danger);border-color:var(--danger);"><i class="fas fa-exclamation-circle" style="margin-right:6px;"></i>이슈 보고</button>
          <button onclick="appGoTo('arrive')" class="app-btn-primary" style="flex:2;margin-top:0;font-size:15px;"><i class="fas fa-navigation" style="margin-right:6px;"></i>길 안내</button>
        </div>
      </div>
      <div class="app-tabbar">
        <div class="app-tab" onclick="appGoTo('home')"><i class="fas fa-list"></i>오늘 일정</div>
        <div class="app-tab active"><i class="fas fa-wrench"></i>현재 작업</div>
        <div class="app-tab"><i class="fas fa-ellipsis-h"></i>더보기</div>
      </div>
    </div>
  \`;
}

function getAppArrive() {
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('detail')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">도착 확인</div>
        <div></div>
      </div>
      <div class="app-content" style="display:flex;flex-direction:column;align-items:center;padding-top:40px;">
        <div style="width:80px;height:80px;background:var(--success-light);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:36px;margin-bottom:20px;">📍</div>
        <div style="font-size:20px;font-weight:700;text-align:center;margin-bottom:8px;">강남 1호점에<br>도착하셨나요?</div>
        <div style="font-size:14px;color:var(--neutral-500);margin-bottom:8px;">현재 위치 기준 <strong style="color:var(--success);">15m</strong> 거리</div>
        <div style="font-size:13px;color:var(--neutral-500);text-align:center;margin-bottom:32px;">도착 확인 시 점주에게<br>방문 SMS가 자동 발송됩니다</div>
        <button onclick="appGoTo('work')" class="app-btn-primary" style="width:100%;font-size:17px;padding:16px;"><i class="fas fa-check" style="margin-right:8px;"></i>도착했습니다</button>
        <button onclick="appGoTo('detail')" class="app-btn-secondary">이전으로</button>
      </div>
    </div>
  \`;
}

function getAppWork() {
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('arrive')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">작업 시작</div>
        <div></div>
      </div>
      <div class="app-content">
        <div style="background:var(--primary);color:#fff;border-radius:10px;padding:14px;margin-bottom:16px;">
          <div style="font-size:15px;font-weight:700;margin-bottom:4px;">✅ 도착 확인 완료</div>
          <div style="font-size:13px;opacity:0.85;">점주에게 방문 알림을 전송했습니다</div>
        </div>
        <div style="font-size:16px;font-weight:700;margin-bottom:12px;">작업 시작 전 확인</div>
        <div style="background:#fff;border-radius:10px;border:1px solid var(--neutral-200);overflow:hidden;margin-bottom:16px;">
          \${[['📋','체크리스트','12항목 확인 필요'],['📷','사진 촬영','설치 전/후 필수'],['✍️','점주 서명','완료 확인 서명']].map(([icon,label,desc])=>\`
          <div style="display:flex;align-items:center;gap:12px;padding:14px;border-bottom:1px solid var(--neutral-200);">
            <span style="font-size:22px;">\${icon}</span>
            <div><div style="font-size:14px;font-weight:600;">\${label}</div><div style="font-size:12px;color:var(--neutral-500);">\${desc}</div></div>
          </div>\`).join('')}
        </div>
        <div style="background:#FFFBEB;border:1px solid #FDE68A;border-radius:10px;padding:12px;margin-bottom:16px;">
          <div style="font-size:12px;font-weight:600;color:#92400E;margin-bottom:4px;"><i class="fas fa-exclamation-triangle" style="margin-right:4px;"></i>특이사항</div>
          <div style="font-size:13px;color:#92400E;">결제 테스트는 반드시 점주 동석하에 진행</div>
        </div>
        <div style="display:flex;gap:8px;">
          <button onclick="appGoTo('issue')" style="background:#fff;border:1.5px solid var(--danger);color:var(--danger);padding:12px;border-radius:12px;font-size:14px;font-weight:600;flex:1;cursor:pointer;"><i class="fas fa-exclamation-circle" style="margin-right:4px;"></i>이슈 보고</button>
          <button onclick="appGoTo('checklist')" class="app-btn-primary" style="flex:2;margin-top:0;font-size:15px;"><i class="fas fa-play" style="margin-right:6px;"></i>작업 시작</button>
        </div>
      </div>
    </div>
  \`;
}

function getAppChecklist() {
  const items = ['설치 위치 확인','전원 콘센트 확인','POS 본체 고정','모니터 케이블 연결','결제 단말기 연결','전원 ON 확인','초기 설정 완료','결제 테스트'];
  const checkedCount = checklistState.filter(Boolean).length;
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('work')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">체크리스트 (1/4)</div>
        <div style="font-size:13px;color:var(--neutral-500);">\${checkedCount}/\${items.length}</div>
      </div>
      <div style="height:4px;background:var(--neutral-200);"><div style="height:100%;background:var(--primary);width:25%;transition:width 0.3s;"></div></div>
      <div class="app-content">
        <div style="font-size:14px;font-weight:600;color:var(--primary);margin-bottom:12px;display:flex;align-items:center;gap:6px;"><i class="fas fa-tools"></i>신규 설치 체크리스트</div>
        \${items.map((item,i)=>\`
        <div class="checklist-item \${checklistState[i]?'checked':''}" onclick="toggleCheck(\${i})">
          <div class="checklist-checkbox \${checklistState[i]?'checked':''}">\${checklistState[i]?'<i class="fas fa-check" style="font-size:12px;color:#fff;"></i>':''}</div>
          <div style="flex:1;">
            <div style="font-size:14px;font-weight:500;\${checklistState[i]?'text-decoration:line-through;color:var(--neutral-500);':''}">\${i+1}. \${item}</div>
          </div>
        </div>\`).join('')}
      </div>
      <div style="padding:12px 16px;background:#fff;border-top:1px solid var(--neutral-200);display:flex;align-items:center;justify-content:space-between;">
        <div style="font-size:12px;color:var(--neutral-500);"><i class="fas fa-save" style="margin-right:4px;"></i>자동 저장 중</div>
        <button onclick="\${checkedCount>=4?'appGoTo(\\'photo\\')':\`showToast('남은 항목: \${items.length-checkedCount}개')\`}" class="btn-primary" style="font-size:14px;padding:10px 20px;background:\${checkedCount>=4?'var(--primary)':'var(--neutral-200)'};color:\${checkedCount>=4?'#fff':'var(--neutral-500)'};border:none;border-radius:8px;cursor:pointer;">다음: 사진 →</button>
      </div>
    </div>
  \`;
}

function toggleCheck(i) { checklistState[i] = !checklistState[i]; renderAppScreen(); }

function getAppPhoto() {
  const photoCount = photoState.filter(Boolean).length;
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('checklist')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">사진 업로드 (2/4)</div>
        <div style="font-size:13px;color:var(--neutral-500);">\${photoCount}/3</div>
      </div>
      <div style="height:4px;background:var(--neutral-200);"><div style="height:100%;background:var(--primary);width:50%;"></div></div>
      <div class="app-content">
        <div style="font-size:15px;font-weight:600;margin-bottom:4px;">작업 사진을 찍어주세요</div>
        <div style="font-size:13px;color:var(--neutral-500);margin-bottom:16px;">최소 1장 이상 필수</div>
        <div class="photo-grid">
          \${photoState.map((filled,i)=>\`
          <div class="photo-slot \${filled?'filled':''}" onclick="togglePhoto(\${i})">
            \${filled?'<i class="fas fa-check-circle" style="font-size:28px;color:var(--success);"></i>':'<i class="fas fa-plus" style="font-size:24px;"></i>'}
          </div>\`).join('')}
        </div>
        \${photoState.some(p=>!p)?'<div style="background:var(--neutral-50);border-radius:10px;padding:12px;margin-top:8px;"><button onclick="togglePhoto(photoState.indexOf(false))" style="background:#fff;border:1.5px solid var(--primary);color:var(--primary);padding:12px;border-radius:10px;font-size:15px;font-weight:600;width:100%;cursor:pointer;margin-bottom:8px;"><i class="fas fa-camera" style="margin-right:8px;"></i>사진 촬영</button><button onclick="togglePhoto(photoState.indexOf(false))" style="background:#fff;border:1px solid var(--neutral-200);color:var(--neutral-700);padding:12px;border-radius:10px;font-size:14px;width:100%;cursor:pointer;"><i class="fas fa-images" style="margin-right:8px;"></i>갤러리에서 선택</button></div>':''}
      </div>
      <div style="padding:12px 16px;background:#fff;border-top:1px solid var(--neutral-200);display:flex;justify-content:flex-end;">
        <button onclick="\${photoCount>0?'appGoTo(\\'signature\\')':\`showToast('사진을 최소 1장 추가해주세요')\`}" class="btn-primary" style="font-size:14px;padding:10px 20px;background:\${photoCount>0?'var(--primary)':'var(--neutral-200)'};color:\${photoCount>0?'#fff':'var(--neutral-500)'};border:none;border-radius:8px;cursor:pointer;">다음: 서명 →</button>
      </div>
    </div>
  \`;
}

function togglePhoto(i) { if(i<0||i>=photoState.length) return; photoState[i] = !photoState[i]; renderAppScreen(); }

function getAppSignature() {
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('photo')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">서명 (3/4)</div>
        <div></div>
      </div>
      <div style="height:4px;background:var(--neutral-200);"><div style="height:100%;background:var(--primary);width:75%;"></div></div>
      <div class="app-content">
        <div style="font-size:15px;font-weight:600;margin-bottom:4px;">점주 서명을 받아주세요</div>
        <div style="font-size:13px;color:var(--neutral-500);margin-bottom:16px;">기기를 점주에게 전달해 서명란을 채워주세요</div>
        <div class="signature-pad" onclick="doSign()" id="sig-pad">
          \${signatureDone
            ? '<div style="font-size:32px;color:var(--success);">✅<br><div style="font-size:14px;font-weight:600;color:var(--success);margin-top:4px;">서명 완료</div></div>'
            : '<div style="text-align:center;"><i class="fas fa-signature" style="font-size:32px;margin-bottom:8px;display:block;color:var(--neutral-200);"></i><div style="font-size:14px;color:var(--neutral-500);">이곳에 서명해 주세요</div></div>'
          }
        </div>
        \${signatureDone?'<button onclick="clearSign()" style="background:none;border:none;color:var(--danger);font-size:13px;cursor:pointer;padding:8px;display:block;margin:0 auto;">다시 그리기</button>':''}
        <div style="font-size:12px;color:var(--neutral-500);text-align:center;margin-top:12px;">서명은 본 작업의 완료를 확인하는 용도입니다</div>
      </div>
      <div style="padding:12px 16px;background:#fff;border-top:1px solid var(--neutral-200);display:flex;gap:8px;">
        <button onclick="appGoTo('photo')" style="background:#fff;border:1px solid var(--neutral-200);color:var(--neutral-700);padding:12px 16px;border-radius:10px;font-size:14px;cursor:pointer;">← 이전</button>
        <button onclick="\${signatureDone?'appGoTo(\\'complete\\')':\`showToast('서명을 받아주세요')\`}" class="btn-primary" style="flex:1;padding:12px;background:\${signatureDone?'var(--primary)':'var(--neutral-200)'};color:\${signatureDone?'#fff':'var(--neutral-500)'};border:none;border-radius:10px;font-size:15px;font-weight:600;cursor:pointer;">완료 처리하기 →</button>
      </div>
    </div>
  \`;
}

function doSign() { signatureDone = true; renderAppScreen(); }
function clearSign() { signatureDone = false; renderAppScreen(); }

function getAppComplete() {
  const allDone = checklistState.filter(Boolean).length >= 4 && photoState.some(Boolean) && signatureDone;
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('signature')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">완료 확인 (4/4)</div>
        <div></div>
      </div>
      <div style="height:4px;background:var(--primary);width:100%;"></div>
      <div class="app-content" style="text-align:center;padding-top:32px;">
        <div style="font-size:48px;margin-bottom:12px;">\${allDone?'✅':'⚠️'}</div>
        <div style="font-size:18px;font-weight:700;margin-bottom:6px;">\${allDone?'작업 완료 준비 완료':'증빙을 확인해주세요'}</div>
        <div style="font-size:13px;color:var(--neutral-500);margin-bottom:24px;">\${allDone?'모든 증빙이 준비되었습니다':'누락 항목을 확인하세요'}</div>
        <div style="background:#fff;border:1px solid var(--neutral-200);border-radius:12px;padding:16px;text-align:left;margin-bottom:20px;">
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--neutral-200);font-size:14px;">
            <span style="font-size:18px;">\${checklistState.filter(Boolean).length>=4?'✅':'❌'}</span>
            <span>체크리스트 \${checklistState.filter(Boolean).length}/8 완료</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;border-bottom:1px solid var(--neutral-200);font-size:14px;">
            <span style="font-size:18px;">\${photoState.some(Boolean)?'✅':'❌'}</span>
            <span>사진 \${photoState.filter(Boolean).length}장 업로드</span>
          </div>
          <div style="display:flex;align-items:center;gap:10px;padding:8px 0;font-size:14px;">
            <span style="font-size:18px;">\${signatureDone?'✅':'❌'}</span>
            <span>서명 \${signatureDone?'완료':'필요'}</span>
          </div>
        </div>
        <div style="font-size:13px;color:var(--neutral-500);margin-bottom:20px;">강남 1호점 · POS 설치 · 홍길동</div>
        <button onclick="\${allDone?\`finishJob()\":\"showToast('증빙을 모두 완료해주세요')\"}" class="app-btn-primary" style="font-size:17px;padding:16px;background:\${allDone?'var(--primary)':'var(--neutral-200)'};color:\${allDone?'#fff':'var(--neutral-500)'};border:none;border-radius:12px;width:100%;cursor:pointer;">
          \${allDone?'<i class="fas fa-check" style="margin-right:8px;"></i>완료 처리하기':'증빙을 완료해주세요'}
        </button>
      </div>
    </div>
  \`;
}

function finishJob() {
  showToast('🎉 강남 1호점 작업이 완료되었습니다!');
  checklistState = [false,false,false,false,false,false,false,false];
  photoState = [false,false,false];
  signatureDone = false;
  setTimeout(() => appGoTo('home'), 1500);
}

function getAppIssue() {
  return \`
    <div class="app-screen">
      <div class="app-header">
        <button onclick="appGoTo('detail')" style="background:none;border:none;font-size:16px;cursor:pointer;color:var(--primary);"><i class="fas fa-chevron-left"></i></button>
        <div style="font-size:15px;font-weight:700;">이슈 보고</div>
        <div></div>
      </div>
      <div class="app-content">
        <div style="font-size:16px;font-weight:700;margin-bottom:16px;">어떤 상황인가요?</div>
        \${[['🚫','설치 불가','공사/구조물 문제 등'],['👤','고객 부재','점주 연락 안됨'],['📦','부품/장비 누락','필요 자재 없음'],['🛠','수리 불가','재주문 필요'],['📍','기타 현장 문제','직접 입력']].map(([icon,label,desc])=>\`
        <div class="issue-type-card" onclick="selectIssue('\${label}')">
          <span style="font-size:24px;">\${icon}</span>
          <div>
            <div style="font-size:15px;font-weight:600;">\${label}</div>
            <div style="font-size:12px;color:var(--neutral-500);">\${desc}</div>
          </div>
          <i class="fas fa-chevron-right" style="margin-left:auto;color:var(--neutral-200);"></i>
        </div>\`).join('')}
      </div>
    </div>
  \`;
}

function selectIssue(type) {
  showToast(\`"\${type}" 이슈를 보고합니다. 관리자에게 즉시 전달됩니다.\`);
  setTimeout(() => appGoTo('home'), 1500);
}

function appGoTo(tab) { appCurrentTab = tab; renderAppScreen(); }

function toggleOffline() {
  const banner = document.getElementById('app-offline');
  if (banner) banner.style.display = banner.style.display === 'none' ? 'flex' : 'none';
}

// ============================================================
// RENDER HELPERS (inline for Hono/Cloudflare Pages)
// ============================================================
function getJobStatusTag(status) {
  const map = {
    IN_PROGRESS: ['tag-inprogress','작업중'],
    DRIVING_TO: ['tag-driving','이동중'],
    DELAYED: ['tag-delayed','⚠ 지연'],
    COMPLETED: ['tag-completed','완료'],
    DISPATCHED: ['tag-dispatched','배정됨'],
    UNASSIGNED: ['tag-unassigned','미배정'],
    ARRIVED: ['tag-arrived','도착']
  };
  const [cls,label] = map[status] || ['tag-inspect',status];
  return \`<span class="status-tag \${cls}">\${label}</span>\`;
}

function getJobTypeColor(type) {
  if (type.includes('신규설치')) return 'var(--job-install)';
  if (type.includes('A/S')) return 'var(--job-as)';
  if (type.includes('POS 교체')) return 'var(--job-replace)';
  return 'var(--job-inspect)';
}

// Auto-refresh simulation
let tickCount = 0;
setInterval(() => {
  tickCount++;
  // Simulate real-time update indicator
  if (tickCount % 15 === 0) {
    const eta = document.getElementById('eta-warning');
    if (eta) eta.style.opacity = '0.7';
    setTimeout(() => { if(eta) eta.style.opacity='1'; }, 500);
  }
}, 1000);

// Initialize app simulator
renderAppScreen();
</script>
</body>
</html>`;
}

// Render helpers (server-side)
function renderMiniTimeline(): string {
  const drivers = [
    { name: '홍길동', blocks: [{start:1, width:2, type:'install'},{start:3, width:2.5, type:'inspect'},{start:6, width:2, type:'as'},{start:8.5, width:1.5, type:'install'}] },
    { name: '이영희', blocks: [{start:0, width:1.5, type:'as'},{start:2, width:2, type:'install'},{start:5, width:2.5, type:'replace'},{start:8, width:2, type:'inspect'}] },
    { name: '김철수', blocks: [{start:0.5, width:3, type:'inspect'},{start:4, width:2, type:'install'},{start:7, width:2.5, type:'as'}] }
  ]
  const colors: Record<string, string> = { install: '#1A6EFF', as: '#F59E0B', replace: '#7C3AED', inspect: '#6B7280' }
  return drivers.map(d => `
    <div style="display:flex;min-width:500px;align-items:center;margin-bottom:4px;">
      <div style="width:80px;font-size:11px;font-weight:500;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;">${d.name}</div>
      <div style="flex:1;position:relative;height:20px;background:var(--neutral-50);border-radius:3px;overflow:hidden;">
        ${d.blocks.map(b => `<div style="position:absolute;left:${b.start/10*100}%;width:${b.width/10*100}%;top:2px;bottom:2px;background:${colors[b.type]};border-radius:2px;opacity:0.75;"></div>`).join('')}
        <div style="position:absolute;left:65%;top:0;bottom:0;width:2px;background:var(--danger);opacity:0.7;"></div>
      </div>
    </div>`).join('')
}

function renderUnassignedQueue(): string {
  const items = [
    { store: '홍대 6호점', type: 'A/S 방문', subtype: 'POS', time: '13:00', color: '#F59E0B' },
    { store: '상암 7호점', type: '신규설치', subtype: '키오스크', time: '14:00', color: '#1A6EFF' },
    { store: '마포 8호점', type: '정기점검', subtype: 'POS', time: '15:00', color: '#6B7280' },
    { store: '영등포 9호점', type: 'POS 교체', subtype: 'POS', time: '16:00', color: '#7C3AED' },
    { store: '목동 10호점', type: 'A/S 방문', subtype: '키오스크', time: '10:00', color: '#F59E0B' }
  ]
  return items.map(item => `
    <div style="background:var(--neutral-50);border:1px solid var(--neutral-200);border-radius:6px;padding:10px;margin-bottom:6px;cursor:grab;position:relative;overflow:hidden;border-left:4px solid ${item.color};"
         ondragstart="event.dataTransfer.setData('text',JSON.stringify({store:'${item.store}',type:'${item.type}'}))"
         draggable="true"
         onclick="showToast('${item.store}을 타임라인으로 드래그하여 배정하세요')">
      <div style="font-size:12px;font-weight:600;color:var(--neutral-700);margin-bottom:2px;">${item.store}</div>
      <div style="font-size:11px;color:var(--neutral-500);">${item.type} · ${item.time}</div>
    </div>`).join('')
}

function renderTimeline(): string {
  const hours = ['08','09','10','11','12','13','14','15','16','17']
  const drivers = [
    { name: '홍길동', partner: 'ABC', jobs: [{h:1,w:1.5,type:'install',name:'강남1호'},{h:3,w:2,type:'as',name:'서초2호'},{h:6.5,w:2,type:'install',name:'대치3호'}] },
    { name: '이영희', partner: 'ABC', jobs: [{h:0,w:2,type:'inspect',name:'역삼1호'},{h:3,w:1.5,type:'install',name:'마포2호'},{h:5.5,w:2.5,type:'as',name:'홍대3호'}] },
    { name: '김철수', partner: 'DEF', jobs: [{h:1,w:3,type:'install',name:'신촌4호'},{h:6,w:2,type:'replace',name:'합정5호'}] },
    { name: '박민준', partner: 'ABC', jobs: [{h:0.5,w:1.5,type:'as',name:'강동1호'},{h:2.5,w:2,type:'inspect',name:'잠실2호'},{h:7,w:1.5,type:'install',name:'송파3호'}] },
    { name: '최지수', partner: 'GHI', jobs: [{h:1,w:2,type:'replace',name:'구로1호'},{h:4,w:1.5,type:'as',name:'금천2호'}] }
  ]
  const colors: Record<string, string> = { install:'#1A6EFF', as:'#F59E0B', replace:'#7C3AED', inspect:'#6B7280' }

  return `
    <div class="timeline-grid">
      <div class="timeline-header">
        <div class="timeline-header-cell" style="text-align:left;padding:8px 12px;background:#fff;">기사</div>
        ${hours.map(h => `<div class="timeline-header-cell">${h}시</div>`).join('')}
      </div>
      ${drivers.map(d => `
      <div class="timeline-row" ondragover="event.preventDefault()" ondrop="handleDrop(event,'${d.name}')">
        <div class="timeline-driver-cell">
          <div class="avatar" style="background:var(--primary);width:26px;height:26px;font-size:11px;">${d.name[0]}</div>
          <div>
            <div style="font-size:12px;font-weight:600;">${d.name}</div>
            <div style="font-size:10px;color:var(--neutral-500);">${d.partner}</div>
          </div>
        </div>
        ${hours.map((_, idx) => {
          const block = d.jobs.find(j => Math.floor(j.h) === idx)
          return `<div class="timeline-cell available" style="position:relative;">
            ${block ? `<div class="timeline-block" style="background:${colors[block.type]};left:${(block.h-Math.floor(block.h))*100}%;width:${block.w*80}px;" title="${block.name}">${block.name}</div>` : ''}
          </div>`
        }).join('')}
      </div>`).join('')}
    </div>`
}

function renderMonitoringTableRows(): string {
  const rows = [
    { driver:'홍길동', partner:'ABC협력사', store:'강남 1호점', type:'신규설치', status:'IN_PROGRESS', eta:'14:30', delay:15, seq:'3/8', updated:'방금' },
    { driver:'이영희', partner:'ABC협력사', store:'서초 2호점', type:'A/S 방문', status:'DRIVING_TO', eta:'11:15', delay:0, seq:'5/7', updated:'30초 전' },
    { driver:'김철수', partner:'DEF협력사', store:'대치 3호점', type:'신규설치', status:'DELAYED', eta:'15:00', delay:40, seq:'1/6', updated:'1분 전' },
    { driver:'박민준', partner:'ABC협력사', store:'역삼 4호점', type:'POS 교체', status:'DRIVING_TO', eta:'16:00', delay:0, seq:'4/5', updated:'45초 전' },
    { driver:'최지수', partner:'GHI협력사', store:'-', type:'-', status:'COMPLETED', eta:'-', delay:0, seq:'8/8', updated:'13:52' },
    { driver:'정수진', partner:'DEF협력사', store:'신촌 7호점', type:'신규설치', status:'ARRIVED', eta:'14:00', delay:0, seq:'2/4', updated:'2분 전' }
  ]
  const statusMap: Record<string, [string,string]> = {
    IN_PROGRESS: ['tag-inprogress','작업중'],
    DRIVING_TO: ['tag-driving','이동중'],
    DELAYED: ['tag-delayed','⚠ 지연'],
    COMPLETED: ['tag-completed','완료'],
    ARRIVED: ['tag-arrived','도착']
  }
  return rows.map(r => {
    const [cls, label] = statusMap[r.status] || ['tag-inspect', r.status]
    const etaHtml = r.delay > 0
      ? `<span style="font-variant-numeric:tabular-nums;">${r.eta}</span> <span style="color:var(--${r.delay>=30?'danger':'warning'});font-size:12px;font-weight:600;">▲+${r.delay}분</span>`
      : `<span style="font-variant-numeric:tabular-nums;">${r.eta}</span>`
    const progress = r.seq !== '-' ? (() => {
      const [a,b] = r.seq.split('/').map(Number)
      return `<div style="display:flex;align-items:center;gap:6px;">${r.seq}<div class="progress-bar" style="width:50px;"><div class="progress-bar-fill" style="width:${Math.round(a/b*100)}%;background:var(--${a===b?'success':'primary'});"></div></div></div>`
    })() : '-'
    return `<tr onclick="showDriverPanel('d1')">
      <td><div style="display:flex;align-items:center;gap:8px;"><div class="avatar" style="background:var(--primary);width:28px;height:28px;font-size:11px;">${r.driver[0]}</div>${r.driver}</div></td>
      <td style="color:var(--neutral-500);">${r.partner}</td>
      <td style="font-weight:500;">${r.store}</td>
      <td>${r.type !== '-' ? `<span class="type-chip ${r.type.includes('A/S')?'tag-as':r.type.includes('POS')&&r.type.includes('교체')?'tag-replace':r.type.includes('점검')?'tag-inspect':'tag-install'}" style="font-size:11px;">${r.type}</span>` : '-'}</td>
      <td><span class="status-tag ${cls}">${label}</span></td>
      <td class="num">${etaHtml}</td>
      <td style="text-align:center;">${progress}</td>
      <td class="num" style="color:var(--neutral-500);font-size:12px;">${r.updated}</td>
    </tr>`
  }).join('')
}

function renderMapView(): string {
  return `
    <div style="background:#E8F4F8;border-radius:8px;height:400px;display:flex;align-items:center;justify-content:center;position:relative;overflow:hidden;border:1px solid var(--neutral-200);">
      <div style="position:absolute;inset:0;background:linear-gradient(135deg,#e0f2fe 0%,#bae6fd 50%,#7dd3fc 100%);opacity:0.3;"></div>
      <div style="position:relative;width:100%;height:100%;padding:20px;">
        <!-- Simulated map markers -->
        ${[
          {left:'45%',top:'40%',color:'#1A6EFF',name:'홍길동',delay:15,status:'작업중'},
          {left:'35%',top:'55%',color:'#17A34A',name:'이영희',delay:0,status:'이동중'},
          {left:'60%',top:'45%',color:'#F59E0B',name:'김철수',delay:40,status:'지연'},
          {left:'50%',top:'35%',color:'#17A34A',name:'박민준',delay:0,status:'이동중'},
          {left:'25%',top:'30%',color:'#6B7280',name:'최지수',delay:0,status:'완료'},
          {left:'40%',top:'25%',color:'#17A34A',name:'정수진',delay:0,status:'도착'}
        ].map(m => `
          <div style="position:absolute;left:${m.left};top:${m.top};transform:translate(-50%,-50%);cursor:pointer;" onclick="showDriverPanel('d1')" title="${m.name}">
            <div style="width:40px;height:40px;border-radius:50%;background:white;border:3px solid ${m.color};display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:700;box-shadow:0 2px 8px rgba(0,0,0,0.2);${m.delay>0?'animation:pulse 1.5s infinite;':''}">
              ${m.name[0]}
            </div>
            <div style="position:absolute;top:-22px;left:50%;transform:translateX(-50%);white-space:nowrap;font-size:11px;font-weight:600;background:rgba(0,0,0,0.75);color:#fff;padding:2px 6px;border-radius:3px;">
              ${m.name}${m.delay>0?` ▲+${m.delay}분`:''}
            </div>
          </div>
        `).join('')}
        <div style="position:absolute;bottom:16px;left:16px;background:white;border:1px solid var(--neutral-200);border-radius:8px;padding:10px;font-size:12px;">
          <div style="font-weight:600;margin-bottom:6px;">범례</div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><div style="width:10px;height:10px;border-radius:50%;background:#1A6EFF;"></div>작업중</div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><div style="width:10px;height:10px;border-radius:50%;background:#17A34A;"></div>이동중</div>
          <div style="display:flex;align-items:center;gap:6px;margin-bottom:3px;"><div style="width:10px;height:10px;border-radius:50%;background:#F59E0B;"></div>지연</div>
          <div style="display:flex;align-items:center;gap:6px;"><div style="width:10px;height:10px;border-radius:50%;background:#6B7280;"></div>완료</div>
        </div>
        <div style="position:absolute;top:16px;right:16px;background:white;border:1px solid var(--neutral-200);border-radius:8px;padding:8px;font-size:12px;color:var(--neutral-500);">실제 배포 시 Kakao Maps SDK 연동</div>
      </div>
    </div>`
}

function renderIssuesList(): string {
  const issues = [
    { id:'i1', priority:'P0', type:'설치 불가', store:'강남 1호점', driver:'홍길동', desc:'전기 콘센트 위치 불일치로 POS 단말기 설치 진행 불가', time:'14:23', elapsed:12, status:'PENDING_ADMIN' },
    { id:'i2', priority:'P0', type:'고객 부재', store:'서초 2호점', driver:'이영희', desc:'점주 연락 두절, 30분 대기 후 이탈', time:'13:45', elapsed:50, status:'PENDING_ADMIN' },
    { id:'i3', priority:'P1', type:'부품 누락', store:'마포 3호점', driver:'김철수', desc:'POS 전원 어댑터 누락. 현장 작업 불가', time:'12:30', elapsed:125, status:'PROCESSING' },
    { id:'i4', priority:'P1', type:'A/S 수리 불가', store:'종로 4호점', driver:'박민준', desc:'메인보드 손상 확인. 부품 재주문 필요', time:'11:10', elapsed:205, status:'PROCESSING' },
    { id:'i5', priority:'P2', type:'기타', store:'강동 5호점', driver:'정수진', desc:'주차 공간 없어 도보 이동 중, 30분 지연 예상', time:'09:45', elapsed:340, status:'RESOLVED' }
  ]
  return issues.map(issue => {
    const borderColor = issue.priority === 'P0' ? 'var(--danger)' : issue.priority === 'P1' ? 'var(--warning)' : 'var(--neutral-200)'
    const bgColor = issue.priority === 'P0' ? 'var(--danger-light)' : issue.priority === 'P1' ? 'var(--warning-light)' : '#fff'
    const elapsedColor = issue.elapsed < 30 ? 'var(--neutral-500)' : issue.elapsed < 60 ? 'var(--warning)' : 'var(--danger)'
    const tagCls = issue.priority === 'P0' ? 'tag-p0' : issue.priority === 'P1' ? 'tag-p1' : 'tag-p2'
    return `
    <div class="issue-card" onclick="showIssuePanel('${issue.id}')" style="border-left:4px solid ${borderColor};background:${bgColor};">
      <div style="flex:1;">
        <div style="display:flex;align-items:center;gap:8px;margin-bottom:6px;flex-wrap:wrap;">
          <span class="status-tag ${tagCls}">${issue.priority}${issue.priority==='P0'?' 긴급':''}</span>
          <span style="font-size:14px;font-weight:600;">${issue.type}</span>
          <span style="font-size:13px;">— ${issue.store}</span>
          <span style="font-size:12px;color:var(--neutral-500);margin-left:auto;">${issue.time}</span>
        </div>
        <div style="font-size:13px;color:var(--neutral-700);margin-bottom:6px;">${issue.desc}</div>
        <div style="font-size:12px;display:flex;align-items:center;gap:12px;flex-wrap:wrap;">
          <span><i class="fas fa-user" style="margin-right:4px;color:var(--neutral-500);"></i>${issue.driver} 기사</span>
          <span style="color:${elapsedColor};font-weight:${issue.elapsed>=60?'600':'400'};">${issue.elapsed}분 경과</span>
          <span class="status-tag ${issue.status==='PENDING_ADMIN'?'tag-unassigned':issue.status==='PROCESSING'?'tag-inprogress':'tag-completed'}" style="font-size:10px;">
            ${issue.status==='PENDING_ADMIN'?'처리 대기':issue.status==='PROCESSING'?'처리중':'처리완료'}
          </span>
        </div>
      </div>
      <button onclick="event.stopPropagation();showIssuePanel('${issue.id}')" class="${issue.status==='RESOLVED'?'btn-secondary':'btn-primary'}" style="font-size:12px;padding:8px 14px;white-space:nowrap;align-self:center;">${issue.status==='RESOLVED'?'이력 보기':'처리하기'}</button>
    </div>`
  }).join('')
}

function renderInspectionCards(): string {
  const cards = [
    { id:'ins1', store:'대치 1호점', type:'신규설치', driver:'박민준', time:'13:52', checklist:'12/12', photos:3, sig:true, status:'REVIEW_PENDING', emoji:'🔧' },
    { id:'ins2', store:'역삼 2호점', type:'A/S 방문', driver:'최지수', time:'13:15', checklist:'8/8', photos:2, sig:true, status:'REVIEW_PENDING', emoji:'🛠' },
    { id:'ins3', store:'홍대 3호점', type:'POS 교체', driver:'정수진', time:'12:40', checklist:'10/12', photos:3, sig:true, status:'REVIEW_PENDING', emoji:'🔄' },
    { id:'ins4', store:'신촌 4호점', type:'정기점검', driver:'강동원', time:'11:55', checklist:'6/6', photos:1, sig:false, status:'REVIEW_PENDING', emoji:'📋' },
    { id:'ins5', store:'합정 5호점', type:'신규설치', driver:'홍길동', time:'10:30', checklist:'12/12', photos:4, sig:true, status:'APPROVED', emoji:'🔧' },
    { id:'ins6', store:'마포 6호점', type:'A/S 방문', driver:'이영희', time:'09:15', checklist:'8/8', photos:2, sig:true, status:'REJECTED', emoji:'🛠' }
  ]
  const typeColors: Record<string, string> = { '신규설치':'var(--job-install)', 'A/S 방문':'var(--job-as)', 'POS 교체':'var(--job-replace)', '정기점검':'var(--job-inspect)' }
  const [ck, ko] = cards.reduce(([a,b], c) => c.checklist.split('/')[0]===c.checklist.split('/')[1] ? [a+1,b] : [a,b+1], [0,0])

  return cards.map(c => {
    const clOk = c.checklist.split('/')[0] === c.checklist.split('/')[1]
    const statusBadge = c.status === 'APPROVED'
      ? '<span style="background:var(--success-light);color:var(--success);padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;">✅ 승인</span>'
      : c.status === 'REJECTED'
      ? '<span style="background:var(--danger-light);color:var(--danger);padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;">❌ 반려</span>'
      : '<span style="background:var(--warning-light);color:#92400E;padding:2px 8px;border-radius:4px;font-size:11px;font-weight:600;">⏳ 검수 대기</span>'
    return `
    <div class="inspection-card" onclick="showInspectionDetail('${c.id}')">
      <div class="inspection-thumb" style="background:linear-gradient(135deg,${typeColors[c.type]}33,${typeColors[c.type]}66);">
        <div style="text-align:center;"><div style="font-size:40px;margin-bottom:4px;">${c.emoji}</div><div style="font-size:12px;font-weight:600;color:${typeColors[c.type]};">${c.type}</div></div>
      </div>
      <div style="padding:12px;">
        <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:4px;">
          <div style="font-size:14px;font-weight:600;">${c.store}</div>
          ${statusBadge}
        </div>
        <div style="font-size:12px;color:var(--neutral-500);margin-bottom:8px;">${c.driver} · ${c.time}</div>
        <div style="font-size:12px;display:flex;gap:8px;flex-wrap:wrap;margin-bottom:12px;">
          <span style="color:${clOk?'var(--success)':'var(--warning)'};">${clOk?'✅':'⚠'} 체크 ${c.checklist}</span>
          <span>📷 ${c.photos}장</span>
          <span style="color:${c.sig?'var(--success)':'var(--danger)'};">${c.sig?'✍ 서명':'❌ 서명없음'}</span>
        </div>
        ${c.status === 'REVIEW_PENDING' ? `
        <div style="display:flex;gap:6px;">
          <button onclick="event.stopPropagation();approveInspection()" class="btn-success" style="flex:2;font-size:12px;padding:7px;">승인하기</button>
          <button onclick="event.stopPropagation();showToast('추가 제출 요청 완료')" style="flex:1;font-size:12px;padding:7px;background:#fff;border:1px solid var(--neutral-200);border-radius:4px;cursor:pointer;">추가요청</button>
          <button onclick="event.stopPropagation();rejectInspection()" class="btn-danger" style="flex:1;font-size:12px;padding:7px;border-radius:4px;">반려</button>
        </div>` : ''}
      </div>
    </div>`
  }).join('')
}

function renderDailyChart(): string {
  const data = [
    {d:'04/02', r:93.3}, {d:'04/03', r:94.8}, {d:'04/04', r:93.2},
    {d:'04/05', r:0}, {d:'04/06', r:0}, {d:'04/07', r:94.4}, {d:'04/08', r:94.4}
  ]
  return data.map(item => `
    <div class="chart-bar-item">
      <div class="chart-bar-value">${item.r > 0 ? item.r + '%' : '-'}</div>
      <div class="chart-bar-fill" style="height:${item.r > 0 ? Math.max(4, item.r * 1.1) : 0}px;background:${item.d==='04/08'?'var(--primary)':'var(--neutral-200)'};"></div>
      <div class="chart-bar-label">${item.d}</div>
    </div>`).join('')
}

function renderDriverReportRows(): string {
  const data = [
    ['홍길동','ABC협력사',142,'1h 25m',1,'96.5%'],
    ['이영희','ABC협력사',138,'1h 15m',0,'98.2%'],
    ['김철수','DEF협력사',125,'1h 40m',3,'92.1%'],
    ['박민준','ABC협력사',148,'1h 10m',1,'97.3%'],
    ['최지수','GHI협력사',132,'1h 30m',2,'94.6%']
  ]
  return data.map(([name,partner,completed,avg,rework,rate]) => `
    <tr onclick="showDriverPanel('d1')">
      <td><div style="display:flex;align-items:center;gap:6px;"><div class="avatar" style="background:var(--primary);width:24px;height:24px;font-size:10px;">${(name as string)[0]}</div>${name}</div></td>
      <td style="color:var(--neutral-500);">${partner}</td>
      <td class="num">${completed}</td>
      <td>${avg}</td>
      <td class="num" style="color:${(rework as number)>1?'var(--warning)':'var(--success)'};">${rework}</td>
      <td class="num" style="font-weight:600;color:${parseFloat(rate as string)>=95?'var(--success)':parseFloat(rate as string)>=90?'var(--neutral-700)':'var(--warning)'};">${rate}</td>
    </tr>`).join('')
}

export default app
