import React, { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function DescriptionText() {
  const [value, setValue] = useState(undefined);

  return <ReactQuill theme="snow" value={value} onChange={setValue} />;
}
