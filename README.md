<h1 align="center">
	<p align="center">Yonparklog</p>
	<a href="https://docusaurus.io">
		<img src="https://docusaurus.io/img/slash-introducing.svg" alt="Docusaurs">
	</a>
</h1>

<p align="center">
	<a href="https://github.com/prettier/prettier">
		<img src="https://img.shields.io/github/license/sourcerer-io/hall-of-fame.svg?colorB=ff0000" align="center" alt="code style: prettier"/>
	</a><br/>
	<a href="https://app.netlify.com/start/deploy?repository=https://github.com/slorber/docusaurus-starter">
		<img src="https://www.netlify.com/img/deploy/button.svg" align="center" alt="Deploy to Netlify"/>
	</a>
</p>

<p align="center">
	이 블로그는 <a href="https://docusaurus.io/">Docusaurus 2</a> 로 만들었습니다.<br/>
	React 기반이면서 블로그에 사용하기 적당해서 선택 했습니다.<br/>
	추가로 MDX랑 typescript, yarn berry 등 이것저것 적용해보려고 구현하는 방향으로 갔습니다.
</p>	

<p align="center">
	<strong>docs</strong>에는 알고리즘, 리액트, 위스키에 대한 내용을 적으려 합니다.<br/>
	<strong>blog</strong>는 개인 일기장에 가깝습니다.<br/>
	<strong>PWA</strong>를 적용 해놓아서 앱으로 사용할 수도 있습니다.
</p>

### Installation

- 설치
```
$ yarn
```

- 로컬 실행
```
$ yarn start
```

<br/>

- 빌드
```
$ yarn build
```

- 배포
	- Using SSH:
```
$ USE_SSH=true yarn deploy
```
	- Not using SSH:
```
$ GIT_USER=<Your GitHub username> yarn deploy
```