"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/mask-detection-cnn.json";

export default function MaskDetectionPage() {
  return <SimpleProjectPage data={data} />;
}
