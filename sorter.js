const dic = require('./dic.json');
const fs = require('fs');

const keys = Object.keys(dic).sort().reverse();
const a = {};

for(const key of keys) a[key] = dic[key];
const json = JSON.stringify(a, null, 2);

fs.writeFileSync('dic-back.json', JSON.stringify(dic, null, 2), 'utf-8');
fs.writeFileSync('dic.json', json, 'utf8');