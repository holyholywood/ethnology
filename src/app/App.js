import { useAtom } from "jotai";
import { useEffect } from "react";
import Page from "../components/page";
import SmallScreen from "../components/page/SmallScreen";
import { isSustainON, SampleActive, Volume } from "../global/state";

function App() {
  const [SampleName] = useAtom(SampleActive);
  const [SustainStatus] = useAtom(isSustainON);
  const [SampleVolume] = useAtom(Volume);
  useEffect(() => {
    if (!localStorage.getItem("EthnologySample")) {
      localStorage.setItem("EthnologySample", SampleName);
    }
    if (!localStorage.getItem("EthnologySustain")) {
      localStorage.setItem("EthnologySustain", SustainStatus);
    }
    if (!localStorage.getItem("EthnologyVolume")) {
      localStorage.setItem("EthnologyVolume", SampleVolume);
    }
  }, []);
  return (
    <div className="w-screen h-screen 2xl:py-20 bg-black/75">
      <SmallScreen />
      <Page />
    </div>
  );
}

export default App;
