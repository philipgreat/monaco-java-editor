import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import Editor from '@monaco-editor/react';

export default function JavaEditor() {
  const monacoRef = useRef(null);

  function handleEditorWillMount(monaco) {
    // here is the monaco instance
    // do something before editor is mounted
    monaco.languages.typescript.javascriptDefaults.setEagerModelSync(true);
  }

  function handleEditorDidMount(editor, monaco) {
    // here is another way to get monaco instance
    // you can also store it in `useRef` for further usage
    monacoRef.current = monaco;
  }

  return (
    <Editor
      height="90vh"
      defaultLanguage="java"
      defaultValue="// some comment"
      beforeMount={handleEditorWillMount}
      onMount={handleEditorDidMount}
    />
  );
}
