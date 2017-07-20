const dic = require('./dic.json');
const fs = require('fs');

if(process.argv.length < 3) {
  console.error('txt 파일의 이름을 입력해주세요!');
  process.exit(1);
}

// 특수기호 처리를 위한 정규표현식을 만들기 편하기 위해 문자 단위로 끊어서 배열에 저장.
const speChar = ['+', '*', '.', '(', ')'];

// 특수기호 배열을 토대로 정규표현식 생성
const speCharRegExp = new RegExp(speChar.map(v => '\\'+v).join('|'), 'g');

let txt = fs.readFileSync('./' + process.argv[2], 'utf-8');
for(const key of Object.keys(dic)) {
  for(let word of dic[key]) { // 동일한 의미를 지난 키워드들을 반복
    if(speCharRegExp.test(word)) { // 만약 키워드에 정규표현식에 쓰이는 특수한 기호가 들어갔다면
      // 특수 기호를 위한 처리를 해주고 그걸 다시 키워드에 저장
      word = speChar.reduce((p, c) => p.replace(new RegExp(`\\${c}`, 'g'), `\\${c}`), word);
    }
    // 읽어온 텍스트에서 키워드들을 전부 제거
    txt = txt.replace(new RegExp(word, 'gmi'), '');
  }
}
fs.writeFileSync(`./${process.argv[2].replace('.txt', '-filtered.txt')}`, txt, 'utf-8');
