# Developer Portfolio for GitHub Pages

GitHub Pages에서 바로 배포할 수 있는 정적 개발자 포트폴리오 사이트입니다. 빌드 도구 없이 `index.html`, `assets/styles.css`, `assets/script.js`만으로 동작합니다.

## 구성

- `index.html`: 소개, 기술 스택, 프로젝트, 경험, 연락처 섹션
- `assets/styles.css`: 반응형 레이아웃과 접근성 스타일
- `assets/script.js`: 모바일 메뉴, 현재 연도, 이메일 복사, 섹션 활성화
- `assets/profile-visual.svg`: 첫 화면의 포트폴리오 비주얼

## 내 정보로 바꾸기

1. `index.html`에서 `Sanghoon Han`, `hello@example.com`, `username`을 실제 이름과 링크로 바꿉니다.
2. 프로젝트 카드 3개의 제목, 설명, 결과, GitHub 링크를 실제 프로젝트로 바꿉니다.
3. 기술 스택과 경험 항목을 현재 이력에 맞게 조정합니다.
4. 원한다면 `assets/profile-visual.svg`를 본인 사진이나 프로젝트 스크린샷으로 교체합니다.

## 로컬에서 확인하기

파일 탐색기에서 `index.html`을 브라우저로 열면 바로 확인할 수 있습니다. 간단한 로컬 서버로 보고 싶다면 아래 명령을 사용할 수 있습니다.

```bash
python -m http.server 8000
```

그 다음 브라우저에서 `http://localhost:8000`을 엽니다.

## GitHub Pages 배포하기

### 새 저장소로 배포

1. GitHub에서 새 저장소를 만듭니다.
2. 이 폴더의 파일을 저장소 루트에 추가합니다.
3. 아래 명령으로 커밋하고 푸시합니다.

```bash
git init
git add .
git commit -m "Add developer portfolio"
git branch -M main
git remote add origin https://github.com/username/repository-name.git
git push -u origin main
```

4. GitHub 저장소의 `Settings` > `Pages`로 이동합니다.
5. `Build and deployment`에서 `Deploy from a branch`를 선택합니다.
6. Branch는 `main`, 폴더는 `/root`를 선택하고 저장합니다.

### 사용자 페이지로 배포

저장소 이름을 `username.github.io`로 만들면 사이트 주소는 아래처럼 됩니다.

```text
https://username.github.io/
```

### 프로젝트 페이지로 배포

일반 저장소에 배포하면 사이트 주소는 아래처럼 됩니다.

```text
https://username.github.io/repository-name/
```

이 사이트는 상대 경로를 사용하므로 사용자 페이지와 프로젝트 페이지 양쪽에서 동작합니다.
