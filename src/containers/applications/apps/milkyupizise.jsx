import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

export const MilkyUpizise = () => { // Renamed the component
  const wnapp = useSelector((state) => state.apps.edge);
  const [url, setUrl] = useState("https://dev-milkyupizise.pantheonsite.io");
  const dispatch = useDispatch();

  useEffect(() => {
    if (wnapp.url) {
      setUrl(wnapp.url);
      dispatch({ type: "EDGELINK" });
    }
  }, [wnapp.url, dispatch]);

  return (
    <div
      className="edgeBrowser floatTab dpShad"
      data-size={wnapp.size}
      data-max={wnapp.max}
      style={{
        ...(wnapp.size === "cstm" ? wnapp.dim : null),
        zIndex: wnapp.z,
      }}
      data-hide={wnapp.hide}
      id={wnapp.icon + "App"}
    >
      <div className="windowScreen flex flex-col">
        <div className="restWindow flex-grow">
          <iframe
            src={url}
            id="isite"
            frameBorder="0"
            className="w-full h-full"
            title="site"
          ></iframe>
        </div>
      </div>
    </div>
  );
};
