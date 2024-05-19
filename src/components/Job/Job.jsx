import PropTypes from "prop-types";
import { SlLocationPin } from "react-icons/sl";
import { AiOutlineDollar } from "react-icons/ai";

const Job = ({ job }) => {
  const {
    logo,
    company_name,
    job_title,
    remote_or_onsite,
    location,
    job_type,
    salary,
  } = job;
  return (
    <div className="card card-compact bg-base-100 shadow h-80">
      <figure>
        <img src={logo} alt={`name of ${company_name}`} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{job_title}</h2>
        <p>{company_name}</p>
        <div className="space-x-3">
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] hover:bg-[#7E90FE] hover:text-white">{remote_or_onsite}</button>
            <button className="px-5 py-2 font-extrabold border rounded border-[#7E90FE] text-[#7E90FE] hover:bg-[#7E90FE] hover:text-white">{job_type}</button>
        </div>
        <div className="flex items-center gap-6">
            <div className="flex gap-2 items-center">
            <SlLocationPin className="text-2xl" />
                <p className="text-lg">{location}</p>
            </div>
            <div className="flex items-center gap-2">
            <AiOutlineDollar className="text-2xl" />
                <p className="text-lg">{salary}</p>
            </div>
        </div>
        <div className="card-actions">
          <button className="btn btn-primary">View Details</button>
        </div>
      </div>
    </div>
  );
};

Job.propTypes = {
  job: PropTypes.object,
};

export default Job;
