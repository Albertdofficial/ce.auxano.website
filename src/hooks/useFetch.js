import { useEffect, useState } from "react";
import { projectFirestore } from "../firebase/config";

export function useFetch() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  let membersData = [];

  // get data from firebase
  useEffect(() => {
    const unsub = projectFirestore.collection("member").onSnapshot(
      (snapshot) => {
        setIsPending(true);
        if (snapshot.empty) {
          console.log("No recipes to load");
        } else {
          let results = [];
          snapshot.docs.forEach((doc) => {
            results.push({ id: doc.id, ...doc.data() });
          });
          setData(results);
          setIsPending(false);
          setError(null);
        }
      },
      (err) => {
        setError(err.message);
        setIsPending(false);
      }
    );

    return () => unsub();
  }, []);

  // removing dubplicates
  if (data) {
    const key = "firstName";
    membersData = [
      ...new Map(data.map((member) => [member[key], member])).values(),
    ];

    // sroting the data
    if (membersData) {
      membersData.sort((obj1, obj2) => {
        if (obj1.firstName > obj2.firstName) {
          return 1;
        } else if (obj2.firstName > obj1.firstName) {
          return -1;
        } else {
          return 0;
        }
      });
    }
  }

  return { membersData, error, isPending };
}
