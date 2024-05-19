import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utils/localstorage";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  useEffect(() => {
    const storedJobId = getStoredJobApplication();
    if (jobs.length) {
      // const JobsApplied = jobs.filter(job => storedJobId.includes(job.id))
      const JobsApplied = [];
      for (const id of storedJobId) {
        const job = jobs.find((job) => job.id === id);
        if (job) {
          JobsApplied.push(job);
        }
      }
      setAppliedJobs(JobsApplied)
    }
  }, []);
  return (
    <div>
      <h2>Jobs I applied: {appliedJobs.length}</h2>
    </div>
  );
};

export default AppliedJobs;
