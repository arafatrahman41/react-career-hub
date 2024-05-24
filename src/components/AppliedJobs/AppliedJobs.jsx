import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredJobApplication } from "../../utils/localstorage";
import { Helmet } from "react-helmet-async";

const AppliedJobs = () => {
  const jobs = useLoaderData();
  const [appliedJobs, setAppliedJobs] = useState([]);
  const [displayJobs, setDisplayJobs] = useState([]);

  const handleJobsFilter = filter => {
    if(filter === 'all'){
      setDisplayJobs(appliedJobs);
    }else if(filter === 'remote'){
      const remoteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Remote');
      setDisplayJobs(remoteJobs)
    }else if(filter === 'onsite'){
      const onsiteJobs = appliedJobs.filter(job => job.remote_or_onsite === 'Onsite');
      setDisplayJobs(onsiteJobs)
    }
  }

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
      setAppliedJobs(JobsApplied);
      setDisplayJobs(JobsApplied);
    }
  }, [jobs]);
  return (
    <div>
      <Helmet>
        <title>Career Hub | Applied Jobs</title>
      </Helmet>
      <h2>Jobs I applied: {appliedJobs.length}</h2>
      <details className="dropdown">
        <summary className="m-1 btn">open or close</summary>
        <ul className="p-2 shadow menu dropdown-content z-[1] bg-base-100 rounded-box w-52">
          <li onClick={() => handleJobsFilter('all')}>
            <a>All</a>
          </li>
          <li onClick={() => handleJobsFilter('remote')}>
            <a>Remote</a>
          </li>
          <li onClick={() => handleJobsFilter('onsite')}>
            <a>Onsite</a>
          </li>
        </ul>
      </details>
      <ul>
        {
        displayJobs.map((job) => (
          <li key={job.id}>
            <span></span>
            {job.job_title} {job.company_name}: {job.remote_or_onsite}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AppliedJobs;
