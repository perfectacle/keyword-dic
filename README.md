# keyword-dic
[![NPM](https://nodei.co/npm/keyword-dic.png)](https://nodei.co/npm/keyword-dic/)
[![npm](https://img.shields.io/npm/dt/keyword-dic.svg)](https://www.npmjs.com/package/keyword-dic)
[![npm](https://img.shields.io/npm/v/keyword-dic.svg)](https://www.npmjs.com/package/keyword-dic)

## 만든 계기
기업에서 원하는 인재가 되기 위해 알아야 할 내용들은 무엇이 있는지,  
다수의 기업에서 원하는 기술은 무엇인지, 손 쉽게 알아보고자 만들었습니다.  

아래 링크는 채용 공고를 형태소 단위로 분석하여 빈도수를 도출한 결과인데 명사만 걸러내다 보니  
쓸 데 없는 키워드(개발, 이상, 경력 등등)가 너무 많이 검출되거나  
쓸 데 있는 키워드(웹표준이 웹과 표준 따로 분류되는 경우) 조차 쓸 데 없는 키워드로 바뀌는 경우가 존재합니다.  

* [형태소 단위로 분석한 크롤러](https://perfectacle.github.io/crawl-temp/)  
* [keyword-dic을 이용하여 키워드 단위로 분석한 크롤러](https://perfectacle.github.io/crawl-temp/v2)

~~좀 더 양질의 정보를 원하신다면 제발 참여해주세요 ㅠㅠ~~

블랙 리스트 방식으로 쓸 데 없는 키워드만 걸러내려고 했는데 끝이 없고,  
쓸 데 있는 키워드를 살릴 수 없어서 화이트 리스트 방식으로 올바른 키워드들만 필터링하는 게 낫다는 판단이 들었습니다.  
하지만 제가 모르는 분야라던지, 신기술이 나온 경우 등등 방대한 키워드를 혼자 만들기는 힘들다는 판단이 들어서 오픈소스로 전환했습니다.  

## 기여 방식
기본적으로 자신의 깃헙 저장소로 포크를 뜨신 후에 풀 리퀘스트를 날려주시면 제가 검토 후 머지를 하는 방식으로 진행하고자 합니다.  
dic.json 파일 안에 키워드에 대한 모든 정보들이 들어있습니다.  
또한 앵귤러, 앙귤라, Angular 등등과 같이 하나의 뜻으로 통하는 것은 하나의 단어로 걸러내기 위해 **아래와 같은 양식을 따라주셔야합니다.**
```json
{
  "Angular": ["Angular", "앵귤러", "앙귤라"],
  "AngularJS": [
    "AngularJS", "Angular.js",
    "Angular1", "AngularJS1", "Angular.js1",
    "Angular 1", "AngularJS 1", "Angular.js 1",
    "앵귤러1", "앙귤라1", "앵귤러JS", "앵귤러JS1", "앙귤라JS1",
    "앵귤러 1", "앙귤라 1", "앵귤러 JS", "앵귤러 JS1", "앙귤라 JS1",
    "앵귤러JS 1", "앙귤라JS 1", "앵귤러 JS 1", "앙귤라 JS 1"
  ],
  "Angular2": [
    "Angular2", "AngularJS2", "Angular.js2",
    "Angular 2", "AngularJS 2", "Angular.js 2",
    "앵귤러2", "앙귤라2", "앵귤러JS2", "앙귤라JS2",
    "앵귤러 2", "앙귤라 2", "앵귤러 JS2", "앙귤라 JS2",
    "앵귤러JS 2", "앙귤라JS 2", "앵귤러 JS 2", "앙귤라 JS 2"
  ],
  "Angular4": [
    "Angular4", "AngularJS4", "Angular.js4",
    "Angular 4", "AngularJS 4", "Angular.js 4",
    "앵귤러4", "앙귤라4", "앵귤러JS4", "앙귤라JS4",
    "앵귤러 4", "앙귤라 4", "앵귤러 JS4", "앙귤라 JS4",
    "앵귤러JS 4", "앙귤라JS 4", "앵귤러 JS 4", "앙귤라 JS 4"
  ]
}
```
우측에 있는 문자열들은 좌측에 있는 문자열로 인식을 하게 됩니다.  
따라서 JSON의 키로는 해당 단어 중에서 제일 널리 쓰이는 키워드를 넣어주는 걸 권장합니다.(영문을 권장하는 건 아닙니다.)  
대소문자는 가리지 않지만, 자주 사용되는 표기법을 따라주시면 감사하겠습니다.  
**작업하실 때는 중복된 키워드**들이 없는지 꼭 확인해주시기 바랍니다.  

IT와 관련된 키워드라면 뭐든지 환영입니다.  
프론트, 백, 앱, IoT, 머신러닝, 서버, 보안 기타 등등 가리지 않습니다.

기본적으로 사전은 가나다 역순으로 정렬을 시켰습니다.(신경 쓰지 않고 작업하시면 됩니다.)  
자바를 찾고 해당 문자들을 지우고 나면 자바스크립트 키워드를 찾을 수 없어서  
먼저 자바스크립트를 찾고 그 후에 자바를 찾게 끔 시키려고 한 것이니 크게 신경쓰지 않으셔도 됩니다.

## 설치하기
```bash
# using npm
npm i -S keyword-dic

# usiny yarn
yarn add keyword-dic
```

## 사용하기
```javascript
// ES2015 Syntax
import dic from 'keyword-dic'

// CommonJS
const dic = require('keyword-dic');
```

## 정렬하기 (가나다 역순)
```bash
node sorter
```

위 명령어를 실행하면 기존 dick.json은 dick-back.json으로 백업 파일이 만들어지며 가나다 역순으로 정렬한 dick.json이 새로 생성됩니다.

## 샘플 텍스트로부터 키워드 뽑아내기
```bash
node seracher TXT_FILE
```

TXT_FILE에는 텍스트 파일이 존재하는 상대 경로 및 확장자까지 전부 적어주셔야합니다.  
예를 들어 프로젝트 디렉토리에 sample.txt가 있다고 하면 아래와 같이 입력해주셔야합니다
```bash
node searcher sample.txt
```

위 명령어를 실행하면 sample.txt와 같은 디렉토리에 사전에 존재하는 키워드들을 모조리 지운 sample-filtered.txt가 생성됩니다.  
위 방법은 도저히 어떤 키워드들이 중복됐는지 감이 잡히지 않을 때,  
다양한 키워드들이 있는 텍스트를 긁어와서 중복되지 않는 키워드를 검출하는 데 용이합니다.