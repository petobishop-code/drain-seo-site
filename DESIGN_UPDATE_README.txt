배관케어 80페이지 리디자인 (2026-10-15)

기존 20개 동 x 4개 서비스 = 80개 페이지, URL, 본문, 5장 사진 유지.
메인 페이지 / 80개 상세 페이지의 HTML 구조 및 공통 CSS를 리디자인했습니다.
메인 지역 카드의 광복동하수구막힘 등의 표시, 다른 3개 서비스 링크, 동 이름 검색 기능 포함.
전화번호 010-7601-1156 / tel:01076011156 유지.
기존 canonical 생성 placeholder와 configure.py는 유지했습니다.

적용 방법: UPDATE ZIP을 풀어 GitHub drain-seo-site 저장소 안에 모든 파일을 덮어쓴 다음 Commit / Push.
기존 페이지와 사진을 포함한 FULL ZIP도 제공합니다.
기존 사이트가 배포된 Vercel 프로젝트는 GitHub 변경을 자동 배포합니다.

주의: 새 도메인 적용 후 configure.py에 SITE_URL을 설정한 다음 실행해 sitemap.xml, robots.txt, canonical을 생성해야 합니다.
