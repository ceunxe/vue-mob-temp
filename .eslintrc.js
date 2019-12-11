module.exports = {
  root: true,
  parserOptions: {
    parser: 'babel-eslint',
    sourceType: 'module'
  },
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  extends: ['plugin:vue/recommended', 'eslint:recommended'],

  // add your custom rules here
  //it is base on https://github.com/vuejs/eslint-config-vue
  rules: {
    "vue/html-self-closing": ["error",{
      "html": {
        "void": "never",
        "normal": "any",
        "component": "any"
      },
      "svg": "always",
      "math": "always"
    }],
    "vue/max-attributes-per-line": [2, {
      "singleline": 10,
      "multiline": {
        "max": 1,
        "allowFirstLine": false
      }
    }],
    "vue/singleline-html-element-content-newline": "off",
    "vue/multiline-html-element-content-newline": "off",
    // 强制组件名为大驼峰写法
    "vue/name-property-casing": ["error", "PascalCase"],
    // 是否禁用v-html标签
    "vue/no-v-html": "off",
    // 这个规则强制执行一个样式，它需要为每个定义了 setter 的属性设置一个 getter。
    'accessor-pairs': 2,
    // 规则在箭头函数的箭头（=>）之前/之后标准化间距样式。
    'arrow-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 规则在打开的块令牌内和同一行上的下一个令牌内强制执行一致的间距。此规则还会在同一行中的关闭块标记和以前的标记内强制实施一致的间距。
    // 需要一个或多个空格
    'block-spacing': [2, 'always'],
    // 规则为块执行一致的括号样式。强制执行一个真正的大括号风格
    'brace-style': [2, '1tbs', {
      'allowSingleLine': true
    }],
    'camelcase': [0, {
      'properties': 'always'
    }],
    // 此规则强制在对象和数组文字中一致地使用尾随逗号。
    // 不允许尾随逗号
    'comma-dangle': [2, 'never'],
    // 规则在变量声明，数组文字，对象文字，函数参数和序列中的逗号前后加上一致的间距。
    // 在逗号前不允许有空格
    // 在逗号后需要一个或多个空格
    'comma-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 在数组元素，对象属性或变量声明的同一行之后需要逗号
    'comma-style': [2, 'last'],
    'constructor-super': 2,
    // 此规则旨在通过确保将块语句包装在花括号中来防止错误并提高代码清晰度。当它遇到忽略大括号的块时它会发出警告。
    'curly': [2, 'multi-line'],
    // 该"property"选项要求点与属性位于同一行。
    'dot-location': [2, 'property'],
    // 该规则在非空文件的末尾至少执行一个换行符（或不存在）。
    'eol-last': 2,
    // 该规则旨在消除类型不安全的等式操作符。
    // 强制使用===和!==在任何情况下
    'eqeqeq': ["error", "always", {
      "null": "ignore"
    }],
    // 该规则旨在强化*发生器功能的间距。
    'generator-star-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 这个规则期望当你在 Node.js 中使用回调模式时，你会处理这个错误。
    'handle-callback-err': [2, '^(err|error)$'],
    // 此规则强制执行一致的缩进样式。
    // 强制缩进级别case的条款switch声明
    'indent': [2, 2, {
      'SwitchCase': 1
    }],
    // 此规则强制在 JSX 属性中一致使用双引号或单引号。
    // 对所有不包含双引号的JSX属性值强制使用双引号。
    'jsx-quotes': [2, 'prefer-double'],
    // 此规则强制在对象字面量属性中的键和值之间保持一致的间距。在长行的情况下，允许在允许空格的地方添加新行。
    // 不允许在对象文字中的键和冒号之间使用空格。
    // 需要在冒号和对象文字中的值之间至少有一个空格。
    'key-spacing': [2, {
      'beforeColon': false,
      'afterColon': true
    }],
    // 此规则强制执行围绕关键字和关键字标记的一致空格
    // 在关键字之前至少需要一个空格
    // 在关键字后至少需要一个空格
    'keyword-spacing': [2, {
      'before': true,
      'after': true
    }],
    // 要求new使用大写启动函数调用所有操作符。
    // 允许在没有new操作符的情况下调用大写启动的函数。
    'new-cap': [2, {
      'newIsCap': true,
      'capIsNew': false
    }],
    // 此规则在使用new关键字调用不带参数的构造函数时需要括号，以便提高代码清晰度。
    'new-parens': 2,
    // 此规则不允许使用Array构造函数。
    'no-array-constructor': 2,
    // 此规则旨在阻止使用已弃用和次优代码，但不允许使用arguments.caller和arguments.callee。因此，它会发出警告时arguments.caller和arguments.callee被使用。
    'no-caller': 2,
    // 此规则禁止调用console对象的方法。
    'no-console': 'off',
    // 该规则旨在标记修改类声明的变量。
    'no-class-assign': 2,
    // 这条规则不允许在试验条件不明确赋值运算符if，for，while，和do...while语句。
    'no-cond-assign': 2,
    // 此规则不允许修改const变量
    'no-const-assign': 2,
    // 此规则不允许正则表达式中的控制字符。
    'no-control-regex': 0,
    // 此规则不允许在变量上使用delete操作符。
    'no-delete-var': 2,
    // 此规则不允许在函数声明或表达式中使用重复的参数名称。它不适用于箭头函数或类方法，因为解析器报告错误。
    'no-dupe-args': 2,
    // 此规则旨在标记在级别成员中使用重复名称。
    'no-dupe-class-members': 2,
    // 此规则不允许在对象中使用重复键。
    'no-dupe-keys': 2,
    // 此规则不允许在switch语句的case子句中使用重复的测试表达式。
    'no-duplicate-case': 2,
    // 此规则不允许在正则表达式中使用空字符类。var foo = /^abc[]/;
    'no-empty-character-class': 2,
    // 此规则旨在标记解构结构对象和数组中的任何空模式，因此，只要遇到问题就会报告问题。var {} = foo;
    'no-empty-pattern': 2,
    // 该规则旨在通过禁止使用eval()函数来防止潜在的危险，不必要的和慢速的代码。因此，无论何时使用该eval()功能，它都会发出警告。
    'no-eval': 2,
    // 此规则不允许在catch子句中重新分配回调。
    'no-ex-assign': 2,
    // 不允许直接修改内建对象的原型。
    'no-extend-native': 2,
    // 此规则旨在避免不必要的使用，bind()因此只要立即调用的函数表达式（ IIFE ）正在使用bind()并且没有适当的this值，就会发出警告。此规则不会标记bind()包含函数参数绑定的用法。
    'no-extra-bind': 2,
    // 该规则禁止不必要的布尔转换。
    'no-extra-boolean-cast': 2,
    // 此规则仅在必要时限制使用括号。仅在函数表达式附近禁止不必要的括号
    'no-extra-parens': [2, 'functions'],
    // 这条规则的目的是消除switch的case无意中掉到另一个case。因此，它会标记没有标注评论的任何延期情况。
    'no-fallthrough': 2,
    // 此规则旨在消除浮点小数点0，并在数值有小数点但在其之前或之后缺少数字时发出警告。var num = .5;
    'no-floating-decimal': 2,
    // 此规则不允许重新分配function声明。
    'no-func-assign': 2,
    // 此规则旨在消除隐含eval()通过使用setTimeout()，setInterval()或execScript()。因此，它会在任何一个函数与字符串一起用作第一个参数时发出警告。
    'no-implied-eval': 2,
    // 不允许function嵌套块中的声明
    'no-inner-declarations': [2, 'functions'],
    // 此规则不允许RegExp构造函数中的无效正则表达式字符串。
    'no-invalid-regexp': 2,
    // 此规则旨在捕获不是普通制表符和空格的无效空格。其中一些字符可能会在现代浏览器中引起问题，而其他字符则会成为调试问题。
    'no-irregular-whitespace': 2,
    // 此规则旨在防止使用该__iterator__属性时可能出现的错误，该错误在多个浏览器中未实现。因此，它会在遇到__iterator__财产时发出警告。
    'no-iterator': 2,
    // 此规则旨在通过禁止创建与范围内的变量共享名称的标签的不良做法来创建更清晰的代码。
    'no-label-var': 2,
    // 该规则旨在消除 JavaScript 中使用带标签的语句。只要遇到带标签的语句以及每次break或continue使用标签时，它都会发出警告。
    'no-labels': [2, {
      'allowLoop': false,
      'allowSwitch': false
    }],
    // 此规则旨在消除脚本顶层或其他块中不必要的和可能混淆的块。消除不必要的块级引用
    'no-lone-blocks': 2,
    // 此规则不允许使用混合空格和制表符进行缩进。
    'no-mixed-spaces-and-tabs': 2,
    // 规则旨在禁止在逻辑表达式，条件表达式，声明，数组元素，对象属性，序列和函数参数周围使用多个空格。
    'no-multi-spaces': 2,
    // 规则旨在防止使用多行字符串。不允许在换行符前面使用斜线转义
    'no-multi-str': 2,
    // 规则旨在减少阅读代码时所需的滚动。它会在超过最大空行数量时发出警告。
    'no-multiple-empty-lines': [2, {
      'max': 1
    }],
    // 规则不允许修改只读全局变量。
    'no-native-reassign': 2,
    // 规则不允许否定in表达式中的左操作数。if(!key in object)
    'no-negated-in-lhs': 2,
    // 这个规则不允许使用Object构造函数。
    'no-new-object': 2,
    // 这个规则旨在消除new require表达的使用
    'no-new-require': 2,
    // 这个规则旨在防止Symbol与new操作员的意外呼叫。
    'no-new-symbol': 2,
    // 这个规则的目的是杜绝使用String，Number以及Boolean与new操作。因此发出，它当检索到new String，new Number或new Boolean警告。
    'no-new-wrappers': 2,
    // 这个规则不允许调用Math，JSON和Reflect对象作为功能。
    'no-obj-calls': 2,
    // 这个规则不允许使用八进制文字。
    'no-octal': 2,
    // 这个规则不允许字符串文字中的八进制转义序列。
    'no-octal-escape': 2,
    // 这个规则旨在防止 Node.js 中的目录路径字符串连接
    'no-path-concat': 2,
    // 需正确使用原型属性或方法
    'no-proto': 2,
    // 不允许声明相同变量名
    'no-redeclare': 2,
    // 这个规则在正则表达式文字中不允许有多个空格。
    'no-regex-spaces': 2,
    // 不允许return一个变量声明 no-return-assign
    'no-return-assign': [2, 'except-parens'],
    // 不允许自我赋值 foo = foo;
    'no-self-assign': 2,
    // 不允许直接比较变量
    'no-self-compare': 2,
    // 此规则禁止使用逗号运算符，
    'no-sequences': 2,
    // 不允许声明一个保留字符的变量
    'no-shadow-restricted-names': 2,
    // 虽然可能在函数名称和执行它的括号之间留有空格，但这种模式看起来更像错误。
    'no-spaced-func': 2,
    // 数组中不允许出现不是字符串空的内容，例var items = [,]; var colors = [ "red",, "blue" ];
    'no-sparse-arrays': 2,
    // 此规则检查this/ super关键字在构造函数，然后报告那些之前super()。
    'no-this-before-super': 2,
    // 此规则限制可以作为例外抛出的内容。当它刚刚创建时，它只会阻止文字被引发（因此也就是名称），但现在它已经扩展为只允许有可能成为Error对象的表达式。
    'no-throw-literal': 2,
    // 此规则不允许在行尾添加尾随空白（空格，制表符和其他Unicode空白字符）。
    'no-trailing-spaces': 2,
    // 此规则可以帮助您查找由变量和参数名称拼写错误或意外隐式全局变量（例如，var在for循环初始值设定项中遗忘关键字）导致的潜在ReferenceErrors 。
    'no-undef': 2,
    // 不能声明一个变量为undefined
    'no-undef-init': 2,
    // 这条规则不允许混淆多行表达式，换行符看起来像是结束语句，但不是。
    'no-unexpected-multiline': 2,
    // 该规则查找循环条件内的引用，然后检查这些引用的变量是否在循环中被修改。
    'no-unmodified-loop-condition': 2,
    // 允许条件表达式作为默认分配模式
    'no-unneeded-ternary': [2, {
      'defaultAssignment': false
    }],
    // 不允许在return后面写代码
    'no-unreachable': 2,
    'no-unsafe-finally': 2,
    // 不能出现未使用变量
    'no-unused-vars': [2, {
      'vars': 'all',
      'args': 'none'
    }],
    'no-useless-call': 2,
    // 没有必要使用带文字的计算属性，例如：var foo = {["a"]: "b"};
    'no-useless-computed-key': 2,
    // 没有必要提供一个空构造函数或一个简单地委托给它的父类的构造函数
    'no-useless-constructor': 2,
    // 转义字符串，模板文字和正则表达式中的非特殊字符不会产生任何影响
    'no-useless-escape': 0,
    // 不允许出现无意义的空格，如 foo. bar .baz . quz
    'no-whitespace-before-property': 2,
    // 不允许使用with
    'no-with': 2,
    // 变量声明合并在一起
    'one-var': [2, {
      'initialized': 'never'
    }],
    // 拼接字符串的加号要放在后面
    'operator-linebreak': [2, 'after', {
      'overrides': {
        '?': 'before',
        ':': 'before'
      }
    }],
    // 在块语句和类的开头和结尾处不允许空行
    'padded-blocks': [2, 'never'],
    // 规定使用双引号
    'quotes': [2, 'double', {
      'avoidEscape': true,
      'allowTemplateLiterals': true
    }],
    // 分号的处理，always为结尾需加分号，never为结尾不需要加分号
    'semi': [2, 'always'],
    // 分号前面禁止使用空格
    'semi-spacing': [2, {
      'before': false,
      'after': true
    }],
    // 判断括号左右需要加空格
    'space-before-blocks': [2, 'always'],
    // 函数名和括号之间不允许出现空格 function foo()
    'space-before-function-paren': [2, 'never'],
    // 在圆括号内强制使用零空格 var x = (1 + 2) * 3;
    'space-in-parens': [2, 'never'],
    // 运算符之间加空格 var sum = 1 + 2;
    'space-infix-ops': 2,
    // 一元运算符之间不允许出现空格 i++
    'space-unary-ops': [2, {
      'words': true,
      'nonwords': false
    }],
    // 注释后面需要加一个空格// spaced-comment
    'spaced-comment': [2, 'always', {
      'markers': ['global', 'globals', 'eslint', 'eslint-disable', '*package', '!', ',']
    }],
    // ${name}，变量里面不允许出现空格
    'template-curly-spacing': [2, 'never'],
    // 不允许用NaN比较
    'use-isnan': 2,
    // 此规则强制将typeof表达式与有效的字符串文字进行比较。
    'valid-typeof': 2,
    // 该规则要求所有立即调用的函数表达式都包含在圆括号中。var x = (function () { return { y: 1 };}()); /
    'wrap-iife': [2, 'any'],
    // yield规范
    'yield-star-spacing': [2, 'both'],
    'yoda': [2, 'never'],
    // 如果一个变量从不重新分配，使用const声明更好。
    'prefer-const': 2,
    // 生产模式里不允许出现debugger
    'no-debugger': process.env.NODE_ENV === 'production' ? 2 : 0,
    // 大括号内需要加空格，如{ "foo": { "baz": 1, "bar": 2 }};
    'object-curly-spacing': [2, 'always', {
      objectsInObjects: false
    }],
    // 数组内不允许出现不符合规范的空格 如：['dsfs', 'never']
    'array-bracket-spacing': [2, 'never']
  }
}
