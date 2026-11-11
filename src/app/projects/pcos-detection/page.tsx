"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/pcos-detection.json";

export default function PcosClassificationPage() {
  return <SimpleProjectPage data={data} />;
}
