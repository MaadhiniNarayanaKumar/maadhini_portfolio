"use client";

import SimpleProjectPage from "../../../components/projects/SimpleProjectPage";
import data from "../../../data/projectsdata/web-scrapper.json";

export default function WebScrapperPage() {
  return <SimpleProjectPage data={data} />;
}
