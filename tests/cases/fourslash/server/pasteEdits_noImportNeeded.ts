/// <reference path="../fourslash.ts" />

// @Filename: /b.ts
////[||]

// @Filename: /a.ts
//// export interface Foo { }
////
//// [|export|] const foo: Foo = {}

// @Filename: /tsconfig.json
////{ "files": ["a.ts", "b.ts"] }

const ranges = test.ranges();
verify.pasteEdits({
    args: {
        pastedText: [`export`],
        pasteLocations: [ranges[0]],
        copiedFrom: { file: "a.ts", range: [ranges[1]] },
    },
    newFileContents: {}
});
