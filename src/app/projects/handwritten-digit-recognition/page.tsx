"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/handwritten-digit-recognition.json";

export default function HandwrittenDigitPage() {
  return <SimpleProjectPage data={data} />;
}
