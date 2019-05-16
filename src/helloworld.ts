const helloWorld = (name: string): string => {
    return 'hello ' + (name || 'world')
}
console.log(helloWorld(''))