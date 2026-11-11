"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/emotion-detection.json";

export default function EmotionDetectionPage() {
  return <SimpleProjectPage data={data} />;
}
