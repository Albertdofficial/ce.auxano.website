import { useRef, useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";

import "./Search.css";

export default function Search({ data }) {
  // const [membersData, error, isPending] = useFetch();
  const [members, setMembers] = useState([]);
  const inputRef = useRef();

  useEffect(() => {
    setMembers(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    inputRef.current.value = "";
  };

  // search algorithm
  const handleChange = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    members &&
      setMembers((prev) => {
        return prev.filter(
          (member) =>
            member?.firstName?.toLowerCase().includes(searchTerm) ||
            member?.middleName?.toLowerCase().includes(searchTerm) ||
            member?.lastName?.toLowerCase().includes(searchTerm)
        );
      });
  };

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="search-term"
            type="text"
            ref={inputRef}
            onChange={handleChange}
          />
          <button className="btn">Search</button>
        </div>
        <div className="members">
          {members?.map((member) => (
            <div className="member" key={member.id}>
              <p>
                {member.firstName} {member.middleName} {member.lastName}{" "}
              </p>
            </div>
          ))}
        </div>
      </form>
    </div>
  );
}
