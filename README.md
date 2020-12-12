## TODO
- sal.js 를 react-reveal 로 교체
- mobile react-reveal 에서 skeleton image 작동
- 애니메이션 thanks to
- SSR

## Technical Stack

### `CRA`
### `Craco`
### `ESLint`
### `Storybook`
### `Hygen`
### `Firebase-hosting`
### `Google Analytics`
### `git flow`
### `mobX`

## Css Stack

### `styled-components`
### `styled-media-query`
### `react-reveal`
### `react-slick`

## Sites

- github repository: https://github.com/jyp930/SNU_FESTIVAL
- Firebase Console: https://console.firebase.google.com/u/1/project/snu-festival/overview
- Google Analytics: https://analytics.google.com/analytics/web/?authuser=1#/report-home/a174141117w241680622p225333700

## Available Scripts

### `yarn start`

로컬 서버: [http://localhost:3000](http://localhost:3000)

### `yarn build`

build 폴더 생성

### `yarn analyze`

local build 시 source-map-explorer 를 통해 bundle size 분석 가능

한편 staging, production 배포시에는 GENERATE_SOURCEMAP=false 로 설정해
source map 을 삭제함

### `firebase deploy`

수동 배포가 필요할 때 명령어 입력

github action 에 설정을 해두어서 [develop, master] branch 에 push 하면 자동 배포됨.

- develop branch: [https://snu-festival-staging.web.app](https://snu-festival-staging.web.app)
- master branch: [https://snu-festival.web.app](https://snu-festival.web.app)

### `yarn storybook`

storybook 실행: [http://localhost:9009](http://localhost:9009)

### `hygen components container/foundation/page [componentName]`

hygen 을 이용하여 skeleton code 자동 생성

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration
