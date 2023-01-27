import { useState, useEffect, useMemo } from "react";
import { useFetch } from "../hooks/useFetch";

import "./Search.css";

export default function Search({ data }) {
  const [membersData, error, isPending] = useFetch();
  const [members, setMembers] = useState([]);
  const [query, setQuery] = useState("");

  useEffect(() => {
    setMembers(data);
  }, [data]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery("");
  };

  // search algorithm
  const filteredMembers = useMemo(() => {
    return members.filter((member) => {
      return (
        member?.firstName?.toLowerCase().includes(query?.toLowerCase()) ||
        member?.middleName?.toLowerCase().includes(query?.toLowerCase()) ||
        member?.lastName?.toLowerCase().includes(query?.toLowerCase()) ||
        member?.title?.toLowerCase().includes(query?.toLowerCase())
      );
    });
  }, [members, query]);

  return (
    <div className="search">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input
            className="search-term"
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button className="btn">New search</button>
        </div>
        <div className="members">
          {filteredMembers?.map((member) => (
            <div className="member" key={member.id}>
              <p>
                {member.firstName} {member.middleName} {member.lastName}{" "}
              </p>
            </div>
          ))}
        </div>
        {error && <p> {error} </p>}
        {isPending && <p>Loading..</p>}
      </form>
    </div>
  );
}

// const handleChange = (e) => {
//   const searchTerm = e.target.value.toLowerCase();
//   members &&
//     setMembers((prev) => {
//       return prev.filter(
//         (member) =>
//           member?.firstName?.toLowerCase().includes(searchTerm) ||
//           member?.middleName?.toLowerCase().includes(searchTerm) ||
//           member?.lastName?.toLowerCase().includes(searchTerm)
//       );
//     });
// };
