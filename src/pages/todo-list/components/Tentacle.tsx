import Rive, {
  Layout as RiveLayout,
  Fit,
  Alignment,
} from "@rive-app/react-canvas";

export const Tentacle = () => (
  <div style={{ width: "100%", height: 100 }}>
    <Rive
      src="https://res.cloudinary.com/dy5pujkzs/raw/upload/v1687605902/tentacle_2_kshyj0.riv"
      layout={
        new RiveLayout({ fit: Fit.Contain, alignment: Alignment.TopCenter })
      }
    />
  </div>
);
