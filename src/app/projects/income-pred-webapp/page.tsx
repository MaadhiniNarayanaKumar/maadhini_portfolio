"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/income-pred-webapp.json";

export default function IncomePredictionPage() {
  return <SimpleProjectPage data={data} />;
}
