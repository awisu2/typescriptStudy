typescript study
================

**points**

- 拡張子: ".ts"
- commands
    - help: `tsc --help`
    - create "tsconfig.json": `tsc --init`
    - compile: `tsc {ts_file}.ts -w -outDir`
        - 同じ名前のjsスクリプトが生成される
        - watch: `-w`
        - output target directory: `-outDir {dir}`
    - with **tsconfig.json**: `tsc -p . -w`
        - こちらのほうが通常の利用に近い
- types:
    - usage: `var i: number = 1`, `(): number => { return 0 }`
    - premitive: *string*, *number*, *boolean*, *symbol*, *bigint*, *null*, *undefined*
    - anything ok: *any*

setup
-----

```
npm install -g typescript
```

tsconfig.json
-------------

[tsconfig\.json · TypeScript](https://www.typescriptlang.org/docs/handbook/tsconfig-json.html)

### top properties

- compilerOptions
- files
    - ex: **["src/helloworld.ts", ...]**
- include, exclude
    - ex: __["src/**/*", ...]__


