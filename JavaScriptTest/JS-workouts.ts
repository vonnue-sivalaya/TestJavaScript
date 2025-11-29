// 2. Filters expired one

const testObject = [{ value: 'data', expiresAt: 1764385871929 }];

type TestObject = {
  value: string;
  expiresAt: number;
};

function filterData(arr: TestObject[]) {
  const today = new Date().getMilliseconds();
  const filteredArray = arr.filter((item) => item.expiresAt > today);

  return filteredArray;
}

// 4.Template parser

function templateParser(str: string, obj: { name: string; count: number }) {
  const tempStr = str
    .replace('{{name}}', obj.name)
    .replace('{{count}}', String(obj.count));

  return tempStr;
}

// 6.Compression Tool

function stringCompression(str: string, type: string) {
  const dupStr: String[] = [];
  const strArray = str.split('');
  if (type === 'encrypt') {
    let count = 0;
    strArray.map((item, index) => {
      if (!dupStr.length) {
        dupStr.push(item);
      }

      if (!dupStr.includes(item)) {
        dupStr[dupStr.length - 1] = `${dupStr[dupStr.length - 1]}${count}`;
        count = 0;
        dupStr.push(item);
      }
      count += 1;
      if (index === strArray.length - 1) {
        dupStr[dupStr.length - 1] = `${dupStr[dupStr.length - 1]}${count}`;
      }
    });
    return dupStr.join('');
  } else {
    let result = '';
    strArray.map((item) => {
      if (!Number(item)) {
        dupStr.push(item);
      }
      if (Number(item)) {
        const dupItem = dupStr[dupStr.length - 1];
        for (let i = 1; i <= Number(item); i++) {
          result = result + dupItem;
        }
      }
    });
    return result;
  }
}

// 7. Validate HTML-like string.
const htmlString = '<div><span>Hello</span></div>';

function validateHTML(str: string) {
  const strArray = str.split('');
  console.log(strArray, 'strArray');

  strArray.map((item) => {
    if (strArray[0] !== '<' || strArray[strArray.length - 1] !== '>') return;
  });
}

validateHTML(htmlString);

// For testing

// TestCase for Filtering Expired One.
const testcasesForfilter = [
  {
    input: [{ value: 'data', expiresAt: 1764385871929 }],
    outPut: [{ value: 'data', expiresAt: 1764385871929 }],
  },
];

function testCasesForFilter() {
  testcasesForfilter.forEach((testcase, index) => {
    const result = filterData(testcase.input);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.outPut);
    console.log(`Testcase Number ${index + 1}: ${passed ? 'PASS' : 'FAIL'}\n`);
    console.log('Expected Output:', testcase.outPut);
    console.log('Gotted Output:', result);
  });
}

// testCasesForFilter();

// TestCase for TemplateParser.
const testcases = [
  // {
  //   input: `Hello {{name}}, you have {{count}} new messages.`,
  //   inputObject: { name: 'John', count: 3 },
  //   outPut: 'Hello John, you have 3 new messages.',
  // },
  {
    input: 'aaabbbbcc',
    inputObject: 'encrypt',
    outPut: 'a3b4c2',
  },
  {
    input: 'a3b4c2',
    inputObject: 'decrypt',
    outPut: 'aaabbbbcc',
  },
];

function testCases() {
  testcases.forEach((testcase, index) => {
    const result = stringCompression(testcase.input, testcase.inputObject);
    const passed = JSON.stringify(result) === JSON.stringify(testcase.outPut);
    console.log(`Testcase Number ${index + 1}: ${passed ? 'PASS' : 'FAIL'}\n`);
    console.log('Expected Output:', testcase.outPut);
    console.log('Gotted Output:', result);
  });
}

// testCases();
