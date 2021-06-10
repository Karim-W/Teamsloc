import React,{useState} from "react";
import { Welcome } from "./sample/Welcome";
import * as microsoftTeams from "@microsoft/teams-js";

export default function Tab() {
  const [details, setDetails] = useState(null);
  const [ind,setind] = useState("");
  const [res,setres] = useState("");


  function grabloc() {
    //microsoftTeams.location.getLocation()
    //let locationProps = { allowChooseLocation: true, showMap: true };
    let locationProps = { allowChooseLocation: false, showMap: false };
    microsoftTeams.initialize();
    microsoftTeams.location.getLocation(
      locationProps,
      (
        err: any,
        location: microsoftTeams.location.Location
      ) => {
        if (err) {
          console.log("i crie");
          setind("err")
          setres(String(err))
          console.log(err);
          return;
        }else{
          setind("success")
          console.log("not an error")
          setres(JSON.stringify(location).toString());
          console.log(JSON.stringify(location));
        }
      }
    );
  }
  return (
    <div>
      <p>Teams sucks</p>
      <p>im not styling this</p>
      <button onClick={() => grabloc()}>give me the lcoation</button>
      <div className="row">
        {ind}
        {res}
      </div>
    </div>
  );
}
